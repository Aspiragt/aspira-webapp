require('dotenv').config();
const mongoose = require('mongoose');
const Experience = require('./models/Experience');

const experiences = [
  {
    title: "Vuelo en Globo Aerostático sobre Valle de Bravo",
    description: "Disfruta de un amanecer mágico sobrevolando el hermoso Valle de Bravo. Una experiencia única que incluye vuelo en globo, desayuno champagne y certificado de vuelo.",
    category: "aventura",
    location: {
      city: "Valle de Bravo",
      state: "Estado de México",
      country: "México",
      coordinates: {
        lat: 19.1951,
        lng: -100.1333
      }
    },
    price: {
      amount: 3500,
      currency: "MXN"
    },
    images: [{
      url: "https://images.unsplash.com/photo-1507608443039-bfde4fbcd142",
      alt: "Globo aerostático al amanecer"
    }],
    duration: {
      value: 3,
      unit: "horas"
    },
    availability: {
      startDate: new Date(),
      endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      slots: 20
    }
  },
  {
    title: "Cena Gourmet en las Alturas",
    description: "Una experiencia culinaria única en la terraza más alta de la ciudad. Menú de 6 tiempos maridado con vinos premium y vista panorámica.",
    category: "gastronomia",
    location: {
      city: "Ciudad de México",
      state: "CDMX",
      country: "México",
      coordinates: {
        lat: 19.4326,
        lng: -99.1332
      }
    },
    price: {
      amount: 2800,
      currency: "MXN"
    },
    images: [{
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
      alt: "Cena gourmet"
    }],
    duration: {
      value: 3,
      unit: "horas"
    },
    availability: {
      startDate: new Date(),
      endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      slots: 30
    }
  },
  {
    title: "Retiro de Yoga y Meditación en Tepoztlán",
    description: "Escapa de la rutina con un fin de semana de reconexión. Incluye clases de yoga, meditación guiada, alimentación consciente y hospedaje.",
    category: "bienestar",
    location: {
      city: "Tepoztlán",
      state: "Morelos",
      country: "México",
      coordinates: {
        lat: 18.9848,
        lng: -99.0931
      }
    },
    price: {
      amount: 4500,
      currency: "MXN"
    },
    images: [{
      url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      alt: "Sesión de yoga"
    }],
    duration: {
      value: 2,
      unit: "dias"
    },
    availability: {
      startDate: new Date(),
      endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      slots: 15
    }
  },
  {
    title: "Tour Histórico por Guanajuato",
    description: "Recorre las callejuelas y túneles de Guanajuato mientras descubres su rica historia minera y sus leyendas. Incluye visita a museos y minas.",
    category: "cultura",
    location: {
      city: "Guanajuato",
      state: "Guanajuato",
      country: "México",
      coordinates: {
        lat: 21.0190,
        lng: -101.2574
      }
    },
    price: {
      amount: 1200,
      currency: "MXN"
    },
    images: [{
      url: "https://images.unsplash.com/photo-1585975985662-449adf2e7f8f",
      alt: "Calles de Guanajuato"
    }],
    duration: {
      value: 4,
      unit: "horas"
    },
    availability: {
      startDate: new Date(),
      endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      slots: 25
    }
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado a MongoDB');

    // Limpiar la colección existente
    await Experience.deleteMany({});
    console.log('Colección de experiencias limpiada');

    // Insertar nuevas experiencias
    await Experience.insertMany(experiences);
    console.log('Datos de ejemplo insertados correctamente');

    mongoose.connection.close();
  } catch (error) {
    console.error('Error al sembrar la base de datos:', error);
    process.exit(1);
  }
};

seedDatabase();
