require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const expressStaticGzip = require('express-static-gzip');
const experienceRoutes = require('./routes/experience.routes');
const bookingRoutes = require('./routes/booking.routes');

const app = express();
const port = process.env.PORT || 5001;

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/aspira', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error conectando a MongoDB:', err));

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/experiences', experienceRoutes);
app.use('/api/bookings', bookingRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  // Serve gzipped static files
  app.use('/', expressStaticGzip(path.join(__dirname, '../../frontend/dist'), {
    enableBrotli: true,
    orderPreference: ['br', 'gz']
  }));

  // Handle client-side routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
