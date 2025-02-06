import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Button,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { FaGift, FaCalendarAlt, FaStar, FaHeart } from 'react-icons/fa';

const MotionBox = motion(Box);

const steps = [
  {
    icon: FaGift,
    title: 'Elige la Experiencia Perfecta',
    description: 'Explora nuestra colección de experiencias únicas y cuidadosamente seleccionadas.',
    features: [
      'Filtros intuitivos por tipo de experiencia',
      'Detalles completos de cada actividad',
      'Fotos y reseñas reales',
    ],
    image: '/images/how-it-works/choose.jpg',
  },
  {
    icon: FaCalendarAlt,
    title: 'Personaliza el Regalo',
    description: 'Haz que el regalo sea aún más especial con detalles personalizados.',
    features: [
      'Elige la fecha o deja que el destinatario decida',
      'Añade un mensaje personal',
      'Selecciona el método de entrega',
    ],
    image: '/images/how-it-works/customize.jpg',
  },
  {
    icon: FaStar,
    title: 'Entrega Mágica',
    description: 'Sorprende a alguien especial con una presentación única.',
    features: [
      'Tarjeta digital instantánea',
      'Empaque físico premium opcional',
      'Código de regalo exclusivo',
    ],
    image: '/images/how-it-works/delivery.jpg',
  },
  {
    icon: FaHeart,
    title: 'Vive la Experiencia',
    description: 'Disfruta de momentos inolvidables con todo el soporte que necesitas.',
    features: [
      'Confirmación inmediata',
      'Atención personalizada 24/7',
      'Garantía de satisfacción',
    ],
    image: '/images/how-it-works/experience.jpg',
  },
];

const features = [
  {
    title: 'Flexibilidad Total',
    description: 'El destinatario tiene 12 meses para reservar y disfrutar su experiencia.',
  },
  {
    title: 'Garantía Aspira',
    description: 'Si algo no sale como esperabas, te devolvemos el 100% de tu dinero.',
  },
  {
    title: 'Experiencias Verificadas',
    description: 'Cada experiencia es probada y evaluada por nuestro equipo.',
  },
];

export const HowItWorks = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box as="main">
      {/* Hero Section */}
      <Box
        bg="brand.forest"
        color="white"
        py={{ base: 16, md: 24 }}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage="url('/images/how-it-works/hero-bg.jpg')"
          bgSize="cover"
          bgPosition="center"
          opacity={0.3}
        />
        <Container maxW="container.xl" position="relative">
          <VStack spacing={6} align="center" textAlign="center" maxW="3xl" mx="auto">
            <Heading
              as="h1"
              size="2xl"
              lineHeight="shorter"
              fontWeight="bold"
            >
              Regalar Momentos Extraordinarios Nunca Fue Tan Fácil
            </Heading>
            <Text fontSize="xl" maxW="2xl">
              En Aspira hemos simplificado el arte de regalar experiencias únicas. 
              Descubre cómo funciona nuestra plataforma y comienza a crear recuerdos inolvidables.
            </Text>
            <Button
              as={RouterLink}
              to="/experiences"
              size="lg"
              bg="brand.terra"
              color="white"
              _hover={{ bg: 'brand.forest', transform: 'translateY(-2px)' }}
              transition="all 0.3s"
              px={8}
            >
              Explorar Experiencias
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Steps Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <VStack spacing={16}>
            {steps.map((step, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <SimpleGrid
                  columns={{ base: 1, lg: 2 }}
                  spacing={10}
                  alignItems="center"
                  direction={index % 2 === 0 ? 'row' : 'row-reverse'}
                >
                  <VStack align="start" spacing={6}>
                    <HStack spacing={4}>
                      <Box
                        p={4}
                        bg="brand.sand"
                        borderRadius="full"
                        color="brand.terra"
                      >
                        <Icon as={step.icon} boxSize={6} />
                      </Box>
                      <Text
                        color="brand.terra"
                        fontWeight="bold"
                        fontSize="lg"
                      >
                        Paso {index + 1}
                      </Text>
                    </HStack>
                    <Heading as="h2" size="xl" color="brand.forest">
                      {step.title}
                    </Heading>
                    <Text fontSize="lg" color="gray.600">
                      {step.description}
                    </Text>
                    <VStack align="start" spacing={3}>
                      {step.features.map((feature, idx) => (
                        <HStack key={idx} spacing={3}>
                          <Box
                            w={2}
                            h={2}
                            borderRadius="full"
                            bg="brand.terra"
                          />
                          <Text color="gray.600">{feature}</Text>
                        </HStack>
                      ))}
                    </VStack>
                  </VStack>
                  <Box>
                    <Image
                      src={step.image}
                      alt={step.title}
                      borderRadius="xl"
                      objectFit="cover"
                      w="100%"
                      h="400px"
                      shadow="xl"
                    />
                  </Box>
                </SimpleGrid>
              </MotionBox>
            ))}
          </VStack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box bg="brand.sand" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={16}>
            <VStack spacing={4} textAlign="center">
              <Heading as="h2" size="xl" color="brand.forest">
                La Garantía Aspira
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="2xl">
                Nos aseguramos de que cada experiencia sea perfecta, desde el momento 
                de la compra hasta el último instante de la aventura
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              {features.map((feature, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <VStack
                    bg="white"
                    p={8}
                    borderRadius="lg"
                    spacing={4}
                    height="100%"
                    shadow="md"
                    _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                    transition="all 0.3s"
                  >
                    <Heading as="h3" size="md" color="brand.forest">
                      {feature.title}
                    </Heading>
                    <Text color="gray.600" textAlign="center">
                      {feature.description}
                    </Text>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <VStack spacing={8} textAlign="center">
            <Heading as="h2" size="xl" color="brand.forest">
              ¿Listo para Regalar Algo Extraordinario?
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
              Únete a miles de personas que ya han regalado momentos inolvidables con Aspira
            </Text>
            <Button
              as={RouterLink}
              to="/experiences"
              size="lg"
              bg="brand.terra"
              color="white"
              _hover={{ bg: 'brand.forest', transform: 'translateY(-2px)' }}
              transition="all 0.3s"
              px={8}
            >
              Comenzar Ahora
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};
