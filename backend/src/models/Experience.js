const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['aventura', 'gastronomia', 'bienestar', 'cultura']
  },
  location: {
    city: String,
    state: String,
    country: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  price: {
    amount: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      default: 'MXN'
    }
  },
  images: [{
    url: String,
    alt: String
  }],
  customizationOptions: [{
    name: String,
    options: [String],
    required: Boolean
  }],
  duration: {
    value: Number,
    unit: {
      type: String,
      enum: ['minutos', 'horas', 'dias']
    }
  },
  availability: {
    startDate: Date,
    endDate: Date,
    slots: Number
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Experience', experienceSchema);
