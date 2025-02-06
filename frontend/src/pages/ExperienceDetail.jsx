import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
  VStack,
  HStack,
  Badge,
  Button,
  Icon,
  useToast,
  Divider,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaLeaf,
  FaMountain,
  FaCheck,
  FaInfoCircle,
  FaShieldAlt,
  FaHeart,
  FaThermometerHalf,
  FaCalendarAlt,
  FaMap,
  FaClock as FaTime,
  FaWhatsapp,
} from 'react-icons/fa';

const MotionBox = motion(Box);

const ReviewSection = ({ experienceId, reviews }) => {
  return (
    <VStack align="start" spacing={4} w="100%">
      <Heading as="h2" size="lg" color="brand.forest">
        Reseñas
      </Heading>
      {reviews.map((review, index) => (
        <Box key={index} p={4} bg="white" borderRadius="lg" shadow="md">
          <HStack>
            <Image
              src={review.avatar}
              alt={review.name}
              borderRadius="full"
              w="40px"
              h="40px"
            />
            <VStack align="start" spacing={1}>
              <Text fontSize="md" fontWeight="bold" color="brand.forest">
                {review.name}
              </Text>
              <Text fontSize="sm" color="gray.600">
                {review.date}
              </Text>
            </VStack>
            <Text fontSize="lg" color="brand.terra">
              {review.rating}/5
            </Text>
          </HStack>
          <Text color="gray.600" whiteSpace="pre-line" mt={4}>
            {review.comment}
          </Text>
        </Box>
      ))}
    </VStack>
  );
};

const experiences = {
  'volcan-acatenango': {
    title: 'Volcán Acatenango',
    description: 'Vive una experiencia única ascendiendo uno de los volcanes más impresionantes de Guatemala.',
    longDescription: `
      El Volcán Acatenango es una experiencia que cambiará tu vida. A 3,976 metros sobre el nivel del mar, 
      este gigante dormido ofrece una de las vistas más espectaculares de Guatemala: el activo Volcán de Fuego.
      
      Durante la noche, serás testigo de explosiones de lava y escucharás los rugidos del volcán, 
      creando una experiencia verdaderamente única e inolvidable. El amanecer desde la cima te 
      regalará una vista panorámica de todo el altiplano guatemalteco.
    `,
    image: '/images/experiences/acatenango.jpg',
    galleryImages: [
      '/images/experiences/acatenango-2.jpg',
      '/images/experiences/acatenango-3.jpg',
      '/images/experiences/acatenango-4.jpg',
    ],
    price: 799,
    location: 'Sacatepéquez',
    duration: '2 días',
    groupSize: '8-12 personas',
    difficulty: 'Moderada-Alta',
    meetingPoint: 'Antigua Guatemala, 4:00 AM',
    included: [
      'Guía profesional certificado',
      'Equipo de camping (tienda, sleeping bag, aislante)',
      'Bastones de trekking',
      'Desayuno, almuerzo, cena y snacks',
      'Transporte desde/hacia Antigua Guatemala',
      'Permiso de ingreso al parque',
      'Seguro de actividades de aventura'
    ],
    requirements: [
      'Buena condición física',
      'Ropa adecuada para frío extremo',
      'Botas de hiking',
      'Mochila pequeña para artículos personales',
      'Linterna frontal',
      'Botella de agua (mínimo 3 litros)',
      'Bloqueador solar y gorra'
    ],
    highlights: [
      'Vistas espectaculares del Volcán de Fuego en actividad',
      'Amanecer sobre las nubes',
      'Campamento en altura con cielo estrellado',
      'Flora y fauna única de altura',
      'Guías locales expertos'
    ],
    reviews: [
      {
        name: 'Ana García',
        avatar: '/images/avatars/ana.jpg',
        rating: 5,
        date: '15 de enero, 2025',
        comment: '¡Una experiencia increíble! El amanecer desde la cima fue espectacular y los guías fueron muy profesionales. Definitivamente lo recomiendo.'
      },
      {
        name: 'Carlos Mendoza',
        rating: 4,
        date: '10 de enero, 2025',
        comment: 'Excelente aventura, aunque bastante exigente físicamente. La vista del Volcán de Fuego en la noche es impresionante.'
      }
    ],
    weather: {
      temp: '-5°C a 20°C',
      season: 'Mejor de noviembre a abril',
      altitude: '3,976 metros',
      terrain: 'Montañoso, rocoso'
    },
    itinerary: [
      {
        day: 'Día 1',
        activities: [
          '4:00 AM - Encuentro en Antigua Guatemala',
          '4:30 AM - Salida hacia el volcán',
          '5:30 AM - Inicio del ascenso',
          '12:00 PM - Almuerzo durante el ascenso',
          '3:00 PM - Llegada al campamento base',
          '4:00 PM - Instalación del campamento',
          '5:00 PM - Observación del Volcán de Fuego',
          '7:00 PM - Cena caliente',
          '8:00 PM - Tiempo libre para fotografía nocturna'
        ]
      },
      {
        day: 'Día 2',
        activities: [
          '4:00 AM - Ascenso a la cumbre (opcional)',
          '5:30 AM - Amanecer desde la cumbre',
          '7:00 AM - Desayuno caliente',
          '8:00 AM - Inicio del descenso',
          '1:00 PM - Llegada a la base',
          '2:00 PM - Regreso a Antigua Guatemala'
        ]
      }
    ]
  },
  'kayak-en-atitlan': {
    title: 'Kayak en Atitlán',
    description: 'Aventura acuática en el lago más hermoso del mundo',
    longDescription: `
      Explora el majestuoso Lago Atitlán desde una perspectiva única: en kayak. 
      Rodeado por tres imponentes volcanes y doce pueblos mayas, el lago te espera 
      para una aventura inolvidable.

      Navegarás por las cristalinas aguas mientras aprendes sobre la cultura local 
      y disfrutas de vistas incomparables. Esta experiencia combina perfectamente 
      la actividad física con la belleza natural y cultural de Guatemala.
    `,
    image: '/images/experiences/kayak-atitlan.jpg',
    galleryImages: [
      '/images/experiences/kayak-atitlan-2.jpg',
      '/images/experiences/kayak-atitlan-3.jpg',
      '/images/experiences/kayak-atitlan-4.jpg',
    ],
    price: 299,
    location: 'Sololá',
    duration: '4 horas',
    groupSize: '2-8 personas',
    difficulty: 'Fácil-Moderada',
    meetingPoint: 'Panajachel, Muelle Principal, 8:00 AM',
    included: [
      'Guía experto bilingüe',
      'Equipo de kayak completo',
      'Chaleco salvavidas',
      'Snacks y agua',
      'Seguro de actividades acuáticas',
      'Clase básica de kayak',
      'Fotografías de la actividad'
    ],
    requirements: [
      'Saber nadar',
      'Ropa que se pueda mojar',
      'Protector solar',
      'Gorra o sombrero',
      'Toalla',
      'Cambio de ropa'
    ],
    highlights: [
      'Vistas panorámicas de los tres volcanes',
      'Visita a pequeñas bahías escondidas',
      'Observación de aves acuáticas',
      'Aguas cristalinas y tranquilas',
      'Experiencia personalizada en grupos pequeños'
    ],
    reviews: [
      {
        name: 'Luis Hernández',
        rating: 5,
        date: '20 de enero, 2025',
        comment: '¡Una experiencia increíble! El guía fue muy amable y la vista del lago es impresionante.'
      },
      {
        name: 'María Rodríguez',
        rating: 4,
        date: '15 de enero, 2025',
        comment: 'Muy divertido, aunque un poco exigente físicamente. La clase de kayak fue muy útil.'
      }
    ],
    weather: {
      temp: '15°C a 25°C',
      season: 'Mejor de noviembre a abril',
      altitude: '1,562 metros',
      terrain: 'Lago'
    },
    itinerary: [
      {
        day: 'Día 1',
        activities: [
          '8:00 AM - Encuentro en Panajachel',
          '8:30 AM - Salida hacia el lago',
          '9:00 AM - Inicio de la actividad',
          '12:00 PM - Almuerzo en una bahía escondida',
          '1:30 PM - Continuación de la actividad',
          '4:00 PM - Regreso a Panajachel'
        ]
      }
    ]
  },
  'taller-de-chocolate': {
    title: 'Taller de Chocolate',
    description: 'Aprende el arte del chocolate artesanal maya',
    longDescription: `
      Sumérgete en la rica historia del chocolate, desde sus orígenes mayas hasta 
      la actualidad. En este taller práctico, aprenderás todo el proceso de 
      elaboración del chocolate artesanal, desde el grano de cacao hasta la barra.

      Descubrirás los secretos ancestrales de la preparación del chocolate, su 
      importancia en la cultura maya y las técnicas modernas de chocolatería. Una 
      experiencia deliciosa que despertará todos tus sentidos.
    `,
    image: '/images/experiences/chocolate-workshop.jpg',
    galleryImages: [
      '/images/experiences/chocolate-2.jpg',
      '/images/experiences/chocolate-3.jpg',
      '/images/experiences/chocolate-4.jpg',
    ],
    price: 199,
    location: 'Antigua Guatemala',
    duration: '3 horas',
    groupSize: '4-10 personas',
    difficulty: 'Fácil',
    meetingPoint: 'Centro de Antigua Guatemala, 9:00 AM',
    included: [
      'Todos los materiales e ingredientes',
      'Delantal y equipo de trabajo',
      'Degustación de diferentes tipos de chocolate',
      'Tu propia creación de chocolate para llevar',
      'Recetario digital',
      'Certificado de participación',
      'Bebida de chocolate tradicional'
    ],
    requirements: [
      'No se requiere experiencia previa',
      'Ropa cómoda',
      'Entusiasmo por aprender',
      'Cabello recogido para la actividad'
    ],
    highlights: [
      'Aprende de maestros chocolateros',
      'Crea tu propio chocolate artesanal',
      'Descubre la historia del cacao en Guatemala',
      'Degustación de chocolates premium',
      'Ambiente colonial histórico'
    ],
    reviews: [
      {
        name: 'Sofía Gómez',
        rating: 5,
        date: '25 de enero, 2025',
        comment: '¡Una experiencia deliciosa! Aprendí mucho sobre el chocolate y me divertí mucho.'
      },
      {
        name: 'Juan Pérez',
        rating: 4,
        date: '20 de enero, 2025',
        comment: 'Muy interesante, aunque un poco corto. La degustación de chocolates fue lo mejor.'
      }
    ],
    weather: {
      temp: '15°C a 25°C',
      season: 'Mejor de noviembre a abril',
      altitude: '1,582 metros',
      terrain: 'Ciudad'
    },
    itinerary: [
      {
        day: 'Día 1',
        activities: [
          '9:00 AM - Encuentro en Antigua Guatemala',
          '9:30 AM - Inicio del taller',
          '12:00 PM - Descanso para almuerzo',
          '1:30 PM - Continuación del taller',
          '4:00 PM - Finalización del taller'
        ]
      }
    ]
  },
  'tikal-al-amanecer': {
    title: 'Tikal al Amanecer',
    description: 'Tour guiado por la antigua ciudad maya al amanecer',
    longDescription: `
      Vive una experiencia mística al presenciar el amanecer desde el Templo IV 
      de Tikal, la antigua capital del imperio maya. Los primeros rayos del sol 
      iluminando la selva tropical y las majestuosas pirámides crean un espectáculo 
      inolvidable.

      Acompañado por un guía experto, explorarás uno de los sitios arqueológicos 
      más importantes del mundo mientras escuchas el despertar de la selva y 
      aprendes sobre la fascinante historia de la civilización maya.
    `,
    image: '/images/experiences/tikal.jpg',
    galleryImages: [
      '/images/experiences/tikal-2.jpg',
      '/images/experiences/tikal-3.jpg',
      '/images/experiences/tikal-4.jpg',
    ],
    price: 599,
    location: 'Petén',
    duration: '1 día',
    groupSize: '4-15 personas',
    difficulty: 'Fácil-Moderada',
    meetingPoint: 'Flores, 3:30 AM',
    included: [
      'Transporte desde/hacia Flores',
      'Guía arqueológico certificado',
      'Entrada al parque',
      'Desayuno después del amanecer',
      'Almuerzo en restaurante local',
      'Agua y snacks',
      'Tour completo por el sitio arqueológico'
    ],
    requirements: [
      'Ropa cómoda para caminar',
      'Zapatos cerrados',
      'Repelente de insectos',
      'Protector solar',
      'Cámara (opcional)',
      'Suéter ligero para la madrugada'
    ],
    highlights: [
      'Amanecer desde el Templo IV',
      'Avistamiento de fauna local',
      'Historia maya detallada',
      'Visita a los principales templos y plazas',
      'Experiencia arqueológica completa'
    ],
    reviews: [
      {
        name: 'María López',
        rating: 5,
        date: '30 de enero, 2025',
        comment: '¡Una experiencia mágica! El amanecer en Tikal es algo que nunca olvidaré.'
      },
      {
        name: 'Pedro García',
        rating: 4,
        date: '25 de enero, 2025',
        comment: 'Muy interesante, aunque un poco cansado. La historia maya es fascinante.'
      }
    ],
    weather: {
      temp: '15°C a 30°C',
      season: 'Mejor de noviembre a abril',
      altitude: '100 metros',
      terrain: 'Selva'
    },
    itinerary: [
      {
        day: 'Día 1',
        activities: [
          '3:30 AM - Encuentro en Flores',
          '4:00 AM - Salida hacia Tikal',
          '5:00 AM - Inicio del tour',
          '7:00 AM - Amanecer desde el Templo IV',
          '8:00 AM - Desayuno',
          '9:00 AM - Continuación del tour',
          '1:00 PM - Almuerzo',
          '2:30 PM - Finalización del tour'
        ]
      }
    ]
  },
  'semuc-champey': {
    title: 'Semuc Champey',
    description: 'Exploración de piscinas naturales y cuevas',
    longDescription: `
      Descubre el paraíso natural de Semuc Champey, un monumento natural único 
      en el mundo. Sus piscinas escalonadas de agua turquesa, rodeadas de selva 
      tropical, crean uno de los paisajes más espectaculares de Guatemala.

      La aventura incluye la exploración de las cuevas de K'anba, un sistema de 
      cuevas iluminado solo por velas, y la oportunidad de nadar en las cristalinas 
      piscinas naturales mientras observas la abundante vida silvestre.
    `,
    image: '/images/experiences/semuc.jpg',
    galleryImages: [
      '/images/experiences/semuc-2.jpg',
      '/images/experiences/semuc-3.jpg',
      '/images/experiences/semuc-4.jpg',
    ],
    price: 449,
    location: 'Alta Verapaz',
    duration: '1 día',
    groupSize: '6-12 personas',
    difficulty: 'Moderada',
    meetingPoint: 'Lanquín, 8:00 AM',
    included: [
      'Transporte desde/hacia Lanquín',
      'Guía local experto',
      'Entrada al parque',
      'Equipo para exploración de cuevas',
      'Almuerzo típico',
      'Agua y snacks',
      'Seguro de aventura'
    ],
    requirements: [
      'Buena condición física',
      'Traje de baño',
      'Zapatos para agua',
      'Toalla',
      'Cambio de ropa',
      'No temer a espacios cerrados'
    ],
    highlights: [
      'Piscinas naturales de agua turquesa',
      'Exploración de cuevas con velas',
      'Mirador panorámico',
      'Tubing en el río Cahabón',
      'Biodiversidad única'
    ],
    reviews: [
      {
        name: 'Ana Morales',
        rating: 5,
        date: '28 de enero, 2025',
        comment: '¡Una experiencia increíble! Las piscinas naturales son impresionantes.'
      },
      {
        name: 'Carlos Ramírez',
        rating: 4,
        date: '22 de enero, 2025',
        comment: 'Muy divertido, aunque un poco exigente físicamente. La exploración de cuevas fue lo mejor.'
      }
    ],
    weather: {
      temp: '15°C a 25°C',
      season: 'Mejor de noviembre a abril',
      altitude: '300 metros',
      terrain: 'Selva'
    },
    itinerary: [
      {
        day: 'Día 1',
        activities: [
          '8:00 AM - Encuentro en Lanquín',
          '8:30 AM - Salida hacia Semuc Champey',
          '9:30 AM - Inicio de la exploración',
          '12:00 PM - Almuerzo',
          '1:30 PM - Continuación de la exploración',
          '4:00 PM - Finalización de la exploración'
        ]
      }
    ]
  },
  'mercado-de-chichicastenango': {
    title: 'Mercado de Chichicastenango',
    description: 'Visita guiada al mercado indígena más grande de América',
    longDescription: `
      Sumérgete en la cultura viva de Guatemala en el famoso mercado de 
      Chichicastenango, conocido localmente como "Chichi". Este mercado tradicional, 
      que data de la época precolombina, es una explosión de colores, aromas y 
      tradiciones.

      Acompañado por un guía local, descubrirás los secretos del mercado, aprenderás 
      sobre las tradiciones mayas y tendrás la oportunidad de interactuar con 
      artesanos locales mientras exploras uno de los mercados más auténticos de 
      Latinoamérica.
    `,
    image: '/images/experiences/chichi.jpg',
    galleryImages: [
      '/images/experiences/chichi-2.jpg',
      '/images/experiences/chichi-3.jpg',
      '/images/experiences/chichi-4.jpg',
    ],
    price: 249,
    location: 'Quiché',
    duration: '6 horas',
    groupSize: '2-8 personas',
    difficulty: 'Fácil',
    meetingPoint: 'Chichicastenango, Plaza Central, 7:00 AM',
    included: [
      'Guía cultural local',
      'Visita a la iglesia de Santo Tomás',
      'Demostración de rituales mayas',
      'Almuerzo tradicional',
      'Visita a talleres de artesanos',
      'Agua y snacks',
      'Mapa del mercado'
    ],
    requirements: [
      'Zapatos cómodos para caminar',
      'Respeto por las costumbres locales',
      'Cámara (opcional)',
      'Dinero en efectivo para compras',
      'Ropa respetuosa'
    ],
    highlights: [
      'Mercado tradicional maya',
      'Artesanías auténticas',
      'Rituales mayas ancestrales',
      'Gastronomía local',
      'Intercambio cultural único'
    ],
    reviews: [
      {
        name: 'María González',
        rating: 5,
        date: '26 de enero, 2025',
        comment: '¡Una experiencia increíble! El mercado es un lugar mágico.'
      },
      {
        name: 'Juan Hernández',
        rating: 4,
        date: '20 de enero, 2025',
        comment: 'Muy interesante, aunque un poco abrumador. La guía local fue muy amable.'
      }
    ],
    weather: {
      temp: '10°C a 20°C',
      season: 'Mejor de noviembre a abril',
      altitude: '1,965 metros',
      terrain: 'Ciudad'
    },
    itinerary: [
      {
        day: 'Día 1',
        activities: [
          '7:00 AM - Encuentro en Chichicastenango',
          '7:30 AM - Inicio de la visita',
          '9:00 AM - Visita a la iglesia de Santo Tomás',
          '10:00 AM - Demostración de rituales mayas',
          '11:30 AM - Almuerzo tradicional',
          '1:00 PM - Visita a talleres de artesanos',
          '3:00 PM - Finalización de la visita'
        ]
      }
    ]
  }
};

export const ExperienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  
  const experience = experiences[id];
  
  if (!experience) {
    navigate('/experiences');
    return null;
  }

  const handleReserve = () => {
    toast({
      title: 'Próximamente',
      description: 'La función de reserva estará disponible pronto',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box as="main" bg="brand.sand" minH="100vh" py={16}>
      <Container maxW="container.xl">
        <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={12}>
          <GridItem>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={experience.image}
                alt={experience.title}
                borderRadius="lg"
                w="100%"
                h="500px"
                objectFit="cover"
                mb={8}
              />

              {experience.galleryImages && (
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mb={8}>
                  {experience.galleryImages.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt={`${experience.title} - ${index + 1}`}
                      borderRadius="lg"
                      w="100%"
                      h="200px"
                      objectFit="cover"
                    />
                  ))}
                </SimpleGrid>
              )}

              <VStack align="start" spacing={8}>
                <VStack align="start" spacing={4}>
                  <Heading as="h1" size="2xl" color="brand.forest">
                    {experience.title}
                  </Heading>
                  <Text fontSize="xl" color="gray.700">
                    {experience.description}
                  </Text>
                  {experience.longDescription && (
                    <Text color="gray.600" whiteSpace="pre-line">
                      {experience.longDescription}
                    </Text>
                  )}
                </VStack>

                <Divider />

                {experience.weather && (
                  <>
                    <VStack align="start" spacing={4} w="100%">
                      <Heading as="h2" size="lg" color="brand.forest">
                        Condiciones
                      </Heading>
                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="100%">
                        <HStack>
                          <Icon as={FaThermometerHalf} color="brand.terra" />
                          <Text>Temperatura: {experience.weather.temp}</Text>
                        </HStack>
                        <HStack>
                          <Icon as={FaCalendarAlt} color="brand.terra" />
                          <Text>Temporada: {experience.weather.season}</Text>
                        </HStack>
                        <HStack>
                          <Icon as={FaMountain} color="brand.terra" />
                          <Text>Altitud: {experience.weather.altitude}</Text>
                        </HStack>
                        <HStack>
                          <Icon as={FaMap} color="brand.terra" />
                          <Text>Terreno: {experience.weather.terrain}</Text>
                        </HStack>
                      </SimpleGrid>
                    </VStack>
                    <Divider />
                  </>
                )}

                <VStack align="start" spacing={4} w="100%">
                  <Heading as="h2" size="lg" color="brand.forest">
                    Destacados
                  </Heading>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="100%">
                    {experience.highlights.map((highlight, index) => (
                      <HStack key={index}>
                        <Icon as={FaHeart} color="brand.terra" />
                        <Text>{highlight}</Text>
                      </HStack>
                    ))}
                  </SimpleGrid>
                </VStack>

                <Divider />

                {experience.itinerary && (
                  <>
                    <VStack align="start" spacing={4} w="100%">
                      <Heading as="h2" size="lg" color="brand.forest">
                        Itinerario
                      </Heading>
                      <VStack align="start" spacing={6} w="100%">
                        {experience.itinerary.map((day, index) => (
                          <Box key={index}>
                            <Text fontSize="lg" fontWeight="bold" color="brand.forest" mb={2}>
                              {day.day}
                            </Text>
                            <VStack align="start" spacing={2} pl={4}>
                              {day.activities.map((activity, actIndex) => (
                                <HStack key={actIndex}>
                                  <Icon as={FaTime} color="brand.terra" />
                                  <Text>{activity}</Text>
                                </HStack>
                              ))}
                            </VStack>
                          </Box>
                        ))}
                      </VStack>
                    </VStack>
                    <Divider />
                  </>
                )}

                <VStack align="start" spacing={4} w="100%">
                  <Heading as="h2" size="lg" color="brand.forest">
                    ¿Qué incluye?
                  </Heading>
                  <List spacing={3}>
                    {experience.included.map((item, index) => (
                      <ListItem key={index}>
                        <ListIcon as={FaCheck} color="brand.terra" />
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </VStack>

                <Divider />

                <VStack align="start" spacing={4} w="100%">
                  <Heading as="h2" size="lg" color="brand.forest">
                    Requisitos
                  </Heading>
                  <List spacing={3}>
                    {experience.requirements.map((item, index) => (
                      <ListItem key={index}>
                        <ListIcon as={FaShieldAlt} color="brand.terra" />
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </VStack>

                <Divider />

                <ReviewSection
                  experienceId={id}
                  reviews={experience.reviews || []}
                />
              </VStack>
            </MotionBox>
          </GridItem>

          <GridItem>
            <Box
              position="sticky"
              top={8}
              bg="white"
              p={8}
              borderRadius="lg"
              shadow="md"
              as={MotionBox}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <VStack spacing={6} align="stretch">
                <Heading size="xl" color="brand.terra">
                  Q{experience.price}
                </Heading>
                <VStack spacing={4} align="stretch">
                  <HStack>
                    <Icon as={FaMapMarkerAlt} color="brand.forest" />
                    <Text>{experience.location}</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaClock} color="brand.forest" />
                    <Text>{experience.duration}</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaUsers} color="brand.forest" />
                    <Text>{experience.groupSize}</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaMountain} color="brand.forest" />
                    <Text>Dificultad: {experience.difficulty}</Text>
                  </HStack>
                  {experience.meetingPoint && (
                    <HStack>
                      <Icon as={FaInfoCircle} color="brand.forest" />
                      <Text>Punto de encuentro: {experience.meetingPoint}</Text>
                    </HStack>
                  )}
                </VStack>
                <Button
                  size="lg"
                  bg="brand.terra"
                  color="white"
                  _hover={{ bg: 'brand.forest' }}
                  onClick={handleReserve}
                >
                  Reservar Ahora
                </Button>

                <VStack align="start" spacing={2}>
                  <Text fontSize="sm" color="gray.600">
                    ¿Tienes preguntas?
                  </Text>
                  <Button
                    variant="outline"
                    leftIcon={<Icon as={FaWhatsapp} />}
                    colorScheme="green"
                    w="100%"
                    onClick={() => window.open('https://wa.me/50212345678', '_blank')}
                  >
                    Contáctanos por WhatsApp
                  </Button>
                </VStack>
              </VStack>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
