const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

// @route   POST /api/bookings
// @desc    Create a new booking
// @access  Private
router.post('/',
  auth,
  [
    body('experienceId').notEmpty().withMessage('ID de experiencia requerido'),
    body('date').isDate().withMessage('Fecha inválida'),
    body('participants').isInt({ min: 1, max: 8 }).withMessage('Número de participantes inválido'),
    body('isGift').isBoolean().withMessage('isGift debe ser booleano'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { experienceId, date, participants, isGift } = req.body;
      
      // TODO: Validar disponibilidad de la fecha
      // TODO: Calcular precio total
      // TODO: Crear registro en base de datos
      
      const booking = {
        userId: req.user.id,
        experienceId,
        date,
        participants,
        isGift,
        status: 'pending',
        createdAt: new Date()
      };

      // Por ahora solo retornamos la reserva
      res.json(booking);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Error del servidor');
    }
});

// @route   GET /api/bookings
// @desc    Get user's bookings
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    // TODO: Obtener reservas del usuario desde la base de datos
    const bookings = [];
    res.json(bookings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
});

module.exports = router;
