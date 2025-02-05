const experiences = [
  // Aventura
  {
    id: 'adv-1',
    title: 'Volcán Acatenango',
    description: 'Ascenso y acampada con vista al volcán activo de Fuego',
    category: 'Aventura',
    price: 850,
    duration: '2 días',
    location: 'Antigua Guatemala, Sacatepéquez',
    image: 'https://placehold.co/800x600/orange/white?text=Volcan+Acatenango'
  },
  {
    id: 'adv-2',
    title: 'Kayak en Lago Atitlán',
    description: 'Aventura en kayak rodeado de volcanes y pueblos mayas',
    category: 'Aventura',
    price: 400,
    duration: '4 horas',
    location: 'Panajachel, Sololá',
    image: 'https://placehold.co/800x600/orange/white?text=Kayak+Atitlan'
  },
  {
    id: 'adv-3',
    title: 'Canopy en Tikal',
    description: 'Tirolesas sobre la selva tropical con vistas a las ruinas mayas',
    category: 'Aventura',
    price: 600,
    duration: '3 horas',
    location: 'Tikal, Petén',
    image: 'https://placehold.co/800x600/orange/white?text=Canopy+Tikal'
  },
  {
    id: 'adv-4',
    title: 'Rafting en Río Cahabón',
    description: 'Descenso en aguas bravas clase III y IV en Alta Verapaz',
    category: 'Aventura',
    price: 750,
    duration: '6 horas',
    location: 'Lanquín, Alta Verapaz',
    image: 'https://placehold.co/800x600/orange/white?text=Rafting+Cahabon'
  },
  {
    id: 'adv-5',
    title: 'Escalada en El Baúl',
    description: 'Día de escalada en roca con instructor certificado',
    category: 'Aventura',
    price: 450,
    duration: '5 horas',
    location: 'Quetzaltenango, Quetzaltenango',
    image: 'https://placehold.co/800x600/orange/white?text=Escalada+Baul'
  },

  // Gastronomía
  {
    id: 'food-1',
    title: 'Clase de Cocina Maya',
    description: 'Aprende a preparar pepián, tamales y otros platillos tradicionales',
    category: 'Gastronomía',
    price: 350,
    duration: '4 horas',
    location: 'Antigua Guatemala, Sacatepéquez',
    image: 'https://placehold.co/800x600/red/white?text=Cocina+Maya'
  },
  {
    id: 'food-2',
    title: 'Tour del Café de Antigua',
    description: 'Visita a fincas de café gourmet con degustación',
    category: 'Gastronomía',
    price: 450,
    duration: '5 horas',
    location: 'Antigua Guatemala, Sacatepéquez',
    image: 'https://placehold.co/800x600/red/white?text=Cafe+Antigua'
  },
  {
    id: 'food-3',
    title: 'Cata de Ron Zacapa',
    description: 'Degustación premium de ron con maridaje',
    category: 'Gastronomía',
    price: 600,
    duration: '2 horas',
    location: 'Ciudad de Guatemala',
    image: 'https://placehold.co/800x600/red/white?text=Ron+Zacapa'
  },
  {
    id: 'food-4',
    title: 'Tour Gastronómico en Xela',
    description: 'Recorrido por los mejores sabores tradicionales de Quetzaltenango',
    category: 'Gastronomía',
    price: 300,
    duration: '4 horas',
    location: 'Quetzaltenango, Quetzaltenango',
    image: 'https://placehold.co/800x600/red/white?text=Gastronomia+Xela'
  },
  {
    id: 'food-5',
    title: 'Taller de Chocolate Maya',
    description: 'Aprende el proceso ancestral del cacao al chocolate',
    category: 'Gastronomía',
    price: 250,
    duration: '3 horas',
    location: 'San Juan La Laguna, Sololá',
    image: 'https://placehold.co/800x600/red/white?text=Chocolate+Maya'
  },

  // Bienestar
  {
    id: 'well-1',
    title: 'Retiro de Yoga en Atitlán',
    description: 'Fin de semana de yoga y meditación con vista al lago',
    category: 'Bienestar',
    price: 900,
    duration: '2 días',
    location: 'San Marcos La Laguna, Sololá',
    image: 'https://placehold.co/800x600/green/white?text=Yoga+Atitlan'
  },
  {
    id: 'well-2',
    title: 'Temazcal Ceremonial',
    description: 'Ceremonia maya de purificación y sanación',
    category: 'Bienestar',
    price: 400,
    duration: '2 horas',
    location: 'San Jorge La Laguna, Sololá',
    image: 'https://placehold.co/800x600/green/white?text=Temazcal'
  },
  {
    id: 'well-3',
    title: 'Aguas Termales Fuentes Georginas',
    description: 'Día de relajación en piscinas termales naturales',
    category: 'Bienestar',
    price: 350,
    duration: '4 horas',
    location: 'Zunil, Quetzaltenango',
    image: 'https://placehold.co/800x600/green/white?text=Aguas+Termales'
  },
  {
    id: 'well-4',
    title: 'Masaje Maya con Jade',
    description: 'Terapia tradicional con piedras de jade y hierbas locales',
    category: 'Bienestar',
    price: 500,
    duration: '2 horas',
    location: 'Panajachel, Sololá',
    image: 'https://placehold.co/800x600/green/white?text=Masaje+Maya'
  },
  {
    id: 'well-5',
    title: 'Meditación en Ruinas Mayas',
    description: 'Sesión guiada de meditación en sitio arqueológico',
    category: 'Bienestar',
    price: 300,
    duration: '3 horas',
    location: 'Iximché, Chimaltenango',
    image: 'https://placehold.co/800x600/green/white?text=Meditacion+Maya'
  },

  // Cultura
  {
    id: 'cult-1',
    title: 'Tour Privado Tikal',
    description: 'Visita guiada al amanecer en la antigua ciudad maya',
    category: 'Cultura',
    price: 800,
    duration: '6 horas',
    location: 'Tikal, Petén',
    image: 'https://placehold.co/800x600/purple/white?text=Tikal'
  },
  {
    id: 'cult-2',
    title: 'Taller de Tejido Maya',
    description: 'Aprende técnicas tradicionales de telar de cintura',
    category: 'Cultura',
    price: 250,
    duration: '4 horas',
    location: 'San Antonio Aguas Calientes, Sacatepéquez',
    image: 'https://placehold.co/800x600/purple/white?text=Tejido+Maya'
  },
  {
    id: 'cult-3',
    title: 'Ritual Maya en Chichicastenango',
    description: 'Participa en una ceremonia maya tradicional',
    category: 'Cultura',
    price: 400,
    duration: '3 horas',
    location: 'Chichicastenango, Quiché',
    image: 'https://placehold.co/800x600/purple/white?text=Ritual+Maya'
  },
  {
    id: 'cult-4',
    title: 'Tour de Arte Callejero',
    description: 'Recorrido por los murales y arte urbano de la zona 4',
    category: 'Cultura',
    price: 200,
    duration: '3 horas',
    location: 'Ciudad de Guatemala',
    image: 'https://placehold.co/800x600/purple/white?text=Arte+Urbano'
  },
  {
    id: 'cult-5',
    title: 'Clase de Marimba',
    description: 'Aprende el instrumento nacional con músicos locales',
    category: 'Cultura',
    price: 300,
    duration: '2 horas',
    location: 'Quetzaltenango, Quetzaltenango',
    image: 'https://placehold.co/800x600/purple/white?text=Marimba'
  }
];

module.exports = experiences;
