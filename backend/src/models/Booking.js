const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  experience: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Experience',
    required: true
  },
  customer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String }
  },
  recipient: {
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    isGift: { type: Boolean, default: false }
  },
  bookingDate: {
    type: Date,
    required: true
  },
  numberOfPeople: {
    type: Number,
    required: true,
    min: 1
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'processing', 'completed', 'failed'],
    default: 'pending'
  },
  paymentInfo: {
    transactionId: String,
    amount: Number,
    currency: { type: String, default: 'GTQ' },
    paymentMethod: String,
    paymentDate: Date
  },
  giftCode: {
    code: { type: String },
    redeemed: { type: Boolean, default: false },
    redeemedDate: Date
  },
  notificationPreferences: {
    email: { type: Boolean, default: true },
    whatsapp: { type: Boolean, default: false }
  },
  specialRequests: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Actualizar updatedAt antes de cada save
bookingSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Generar código de regalo único
bookingSchema.methods.generateGiftCode = async function() {
  const crypto = require('crypto');
  let code;
  let isUnique = false;

  while (!isUnique) {
    // Generar código de 8 caracteres
    code = crypto.randomBytes(4).toString('hex').toUpperCase();
    
    // Verificar si el código ya existe
    const existingBooking = await this.constructor.findOne({
      'giftCode.code': code
    });

    if (!existingBooking) {
      isUnique = true;
    }
  }

  this.giftCode.code = code;
  return code;
};

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
