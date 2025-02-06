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
  Image,
  Button,
  Divider,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaHeart,
  FaHandshake,
  FaGem,
  FaGlobeAmericas,
  FaGift,
  FaStar,
} from 'react-icons/fa';

const MotionBox = motion(Box);

const values = [
  {
    icon: FaGem,
    title: 'Excelencia en Cada Detalle',
    description: 'Curamos meticulosamente cada experiencia para garantizar momentos extraordinarios. Solo lo mejor llega a nuestra plataforma.',
  },
  {
    icon: FaHandshake,
    title: 'Alianzas de Calidad',
    description: 'Colaboramos con anfitriones expertos y proveedores de élite que comparten nuestra pasión por la excelencia.',
  },
  {
    icon: FaHeart,
    title: 'Momentos que Perduran',
    description: 'Creemos en el poder de las experiencias para crear recuerdos inolvidables que duran toda la vida.',
  },
  {
    icon: FaGift,
    title: 'El Arte de Regalar',
    description: 'Facilitamos el regalo perfecto: experiencias únicas que crean historias memorables para contar.',
  },
  {
    icon: FaGlobeAmericas,
    title: 'Impacto Positivo',
    description: 'Promovemos experiencias que respetan y celebran nuestras comunidades y entornos naturales.',
  },
  {
    icon: FaStar,
    title: 'Servicio Excepcional',
    description: 'Nos dedicamos a hacer que cada interacción, desde la reserva hasta el último momento, sea extraordinaria.',
  },
];

const stats = [
  { number: '1,000+', label: 'Experiencias Regaladas' },
  { number: '50+', label: 'Anfitriones Expertos' },
  { number: '4.9/5', label: 'Calificación Promedio' },
  { number: '98%', label: 'Clientes Satisfechos' },
];

export const About = () => {
  return (
    <Box as="main">
      {/* Hero Section */}
      <Box
        bg="brand.forest"
        color="white"
        py={{ base: 20, md: 32 }}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage="url('/images/about-hero.jpg')"
          bgSize="cover"
          bgPosition="center"
          opacity={0.3}
        />
        <Container maxW="container.xl" position="relative">
          <VStack spacing={8} align="center" textAlign="center" maxW="3xl" mx="auto">
            <Heading
              as="h1"
              size="2xl"
              lineHeight="shorter"
              fontWeight="bold"
            >
              Creamos Momentos Extraordinarios
            </Heading>
            <Text fontSize="xl" maxW="2xl">
              En Aspira, nos dedicamos a curar las experiencias más especiales y transformadoras. 
              Creemos que los mejores regalos no vienen en cajas, sino en forma de momentos inolvidables.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Our Story */}
      <Box py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16} alignItems="center">
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <VStack align="start" spacing={6}>
                <Heading as="h2" size="xl" color="brand.forest">
                  Nuestra Historia
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  Nacimos de una simple pero poderosa idea: hacer que regalar momentos extraordinarios sea tan fácil como memorable.
                </Text>
                <Text fontSize="lg" color="gray.600">
                  Nos dimos cuenta que las mejores historias de nuestra vida no vienen de las cosas que compramos, 
                  sino de las experiencias que vivimos y las personas con quienes las compartimos.
                </Text>
                <Text fontSize="lg" color="gray.600">
                  Hoy, nos enorgullece ser la plataforma líder en experiencias curadas, 
                  conectando a personas extraordinarias con momentos inolvidables.
                </Text>
              </VStack>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/our-story.jpg"
                alt="Nuestra Historia"
                borderRadius="xl"
                objectFit="cover"
                w="100%"
                h="500px"
              />
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Values */}
      <Box bg="brand.sand" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={16}>
            <VStack spacing={4} textAlign="center">
              <Heading as="h2" size="xl" color="brand.forest">
                Nuestros Valores
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="2xl">
                Estos principios guían cada decisión que tomamos y cada experiencia que curamos
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
              {values.map((value, index) => (
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
                    align="start"
                    height="100%"
                    shadow="md"
                  >
                    <Icon as={value.icon} boxSize={8} color="brand.terra" />
                    <Heading as="h3" size="md" color="brand.forest">
                      {value.title}
                    </Heading>
                    <Text color="gray.600">{value.description}</Text>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Stats */}
      <Box py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {stats.map((stat, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <VStack
                  spacing={2}
                  p={8}
                  borderRadius="lg"
                  bg="white"
                  shadow="md"
                  textAlign="center"
                >
                  <Text
                    fontSize="4xl"
                    fontWeight="bold"
                    color="brand.terra"
                  >
                    {stat.number}
                  </Text>
                  <Text color="gray.600">{stat.label}</Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA */}
      <Box py={20} bg="brand.forest" color="white">
        <Container maxW="container.xl">
          <VStack spacing={8} textAlign="center">
            <Heading as="h2" size="xl">
              Sé Parte de Nuestra Historia
            </Heading>
            <Text fontSize="lg" maxW="2xl">
              Únete a nuestra comunidad de personas que eligen regalar momentos extraordinarios. 
              Cada experiencia es una oportunidad para crear recuerdos inolvidables.
            </Text>
            <Button
              size="lg"
              bg="brand.terra"
              color="white"
              _hover={{ bg: 'brand.forest', transform: 'translateY(-2px)' }}
              transition="all 0.3s"
            >
              Explorar Experiencias
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};
