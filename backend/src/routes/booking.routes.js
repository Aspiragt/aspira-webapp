const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Experience = require('../models/Experience');
const emailService = require('../services/emailService');

// Crear una nueva reserva
router.post('/', async (req, res) => {
  try {
    const {
      experienceId,
      customer,
      recipient,
      bookingDate,
      numberOfPeople,
      notificationPreferences,
      specialRequests
    } = req.body;

    // Verificar que la experiencia existe
    const experience = await Experience.findById(experienceId);
    if (!experience) {
      return res.status(404).json({ message: 'Experiencia no encontrada' });
    }

    // Crear la reserva
    const booking = new Booking({
      experience: experienceId,
      customer,
      recipient,
      bookingDate,
      numberOfPeople,
      notificationPreferences,
      specialRequests
    });

    // Si es un regalo, generar código
    if (recipient && recipient.isGift) {
      await booking.generateGiftCode();
    }

    await booking.save();

    // Poblar la experiencia para los emails
    await booking.populate('experience');

    // Enviar email de confirmación al comprador
    if (notificationPreferences.email) {
      await emailService.sendBookingConfirmation(booking);
    }

    // Si es un regalo y el destinatario tiene email, enviar código
    if (recipient && recipient.isGift && recipient.email) {
      await emailService.sendGiftEmail(booking);
    }

    res.status(201).json(booking);
  } catch (error) {
    console.error('Error al crear reserva:', error);
    res.status(500).json({ message: 'Error al crear la reserva', error: error.message });
  }
});

// Obtener una reserva por ID
router.get('/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate('experience');
    
    if (!booking) {
      return res.status(404).json({ message: 'Reserva no encontrada' });
    }

    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la reserva', error: error.message });
  }
});

// Verificar código de regalo
router.get('/verify-gift/:code', async (req, res) => {
  try {
    const booking = await Booking.findOne({
      'giftCode.code': req.params.code,
      'giftCode.redeemed': false
    }).populate('experience');

    if (!booking) {
      return res.status(404).json({ message: 'Código de regalo no válido o ya canjeado' });
    }

    res.json({
      valid: true,
      booking: {
        id: booking._id,
        experience: booking.experience,
        giftCode: booking.giftCode,
        bookingDate: booking.bookingDate,
        numberOfPeople: booking.numberOfPeople
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al verificar el código', error: error.message });
  }
});

// Redimir código de regalo
router.post('/redeem-gift/:code', async (req, res) => {
  try {
    const booking = await Booking.findOne({
      'giftCode.code': req.params.code,
      'giftCode.redeemed': false
    }).populate('experience');

    if (!booking) {
      return res.status(404).json({ message: 'Código de regalo no válido o ya canjeado' });
    }

    booking.giftCode.redeemed = true;
    booking.giftCode.redeemedDate = new Date();
    await booking.save();

    // Enviar email de confirmación de redención
    if (booking.recipient && booking.recipient.email) {
      // TODO: Implementar emailService.sendRedemptionConfirmation(booking);
    }

    res.json({ message: 'Código redimido exitosamente', booking });
  } catch (error) {
    res.status(500).json({ message: 'Error al redimir el código', error: error.message });
  }
});

// Simular pago (para testing)
router.post('/:id/simulate-payment', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Reserva no encontrada' });
    }

    booking.paymentStatus = 'completed';
    booking.paymentInfo = {
      transactionId: 'sim_' + Math.random().toString(36).substr(2, 9),
      amount: req.body.amount || 100,
      currency: 'GTQ',
      paymentMethod: 'simulation',
      paymentDate: new Date()
    };
    booking.status = 'confirmed';

    await booking.save();
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Error al simular el pago', error: error.message });
  }
});

// Actualizar estado de pago
router.patch('/:id/payment', async (req, res) => {
  try {
    const { paymentStatus, paymentInfo } = req.body;
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: 'Reserva no encontrada' });
    }

    booking.paymentStatus = paymentStatus;
    booking.paymentInfo = { ...booking.paymentInfo, ...paymentInfo };
    
    if (paymentStatus === 'completed') {
      booking.status = 'confirmed';
    }

    await booking.save();

    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el pago', error: error.message });
  }
});

module.exports = router;
