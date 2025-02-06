import React from 'react';
import { useParams } from 'react-router-dom';
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
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaClock, FaUsers, FaLeaf } from 'react-icons/fa';

const experiences = {
  'volcan-acatenango': {
    title: 'Volcán Acatenango',
    description: 'Vive una experiencia única ascendiendo uno de los volcanes más impresionantes de Guatemala. Durante este viaje de dos días, acamparás en la ladera del volcán y tendrás vistas espectaculares del activo Volcán de Fuego.',
    image: '/images/experiences/acatenango.jpg',
    price: 799,
    location: 'Sacatepéquez',
    duration: '2 días',
    groupSize: '8-12 personas',
    difficulty: 'Moderada-Alta',
    included: [
      'Guía profesional certificado',
      'Equipo de camping',
      'Comidas durante la excursión',
      'Transporte desde Antigua Guatemala'
    ],
    requirements: [
      'Buena condición física',
      'Ropa adecuada para frío extremo',
      'Botas de hiking',
      'Mochila pequeña para artículos personales'
    ]
  }
};

export const ExperienceDetail = () => {
  const { id } = useParams();
  const experience = experiences[id] || experiences['volcan-acatenango']; // Fallback para demo

  return (
    <Box as="main" py={16}>
      <Container maxW="container.xl">
        <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={12}>
          <GridItem>
            <Image
              src={experience.image}
              alt={experience.title}
              borderRadius="lg"
              w="100%"
              h="500px"
              objectFit="cover"
              mb={8}
            />
            <VStack align="start" spacing={8}>
              <VStack align="start" spacing={4}>
                <Heading as="h1" size="2xl" color="brand.forest">
                  {experience.title}
                </Heading>
                <Text fontSize="xl">{experience.description}</Text>
              </VStack>

              <VStack align="start" spacing={4} w="100%">
                <Heading as="h2" size="lg" color="brand.forest">
                  Incluye
                </Heading>
                <VStack align="start" spacing={2}>
                  {experience.included.map((item, index) => (
                    <HStack key={index}>
                      <Icon as={FaLeaf} color="brand.terra" />
                      <Text>{item}</Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>

              <VStack align="start" spacing={4} w="100%">
                <Heading as="h2" size="lg" color="brand.forest">
                  Requisitos
                </Heading>
                <VStack align="start" spacing={2}>
                  {experience.requirements.map((item, index) => (
                    <HStack key={index}>
                      <Icon as={FaLeaf} color="brand.terra" />
                      <Text>{item}</Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </VStack>
          </GridItem>

          <GridItem>
            <Box
              position="sticky"
              top={8}
              bg="white"
              p={8}
              borderRadius="lg"
              shadow="md"
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
                </VStack>
                <Badge colorScheme="green" p={2} textAlign="center">
                  Dificultad: {experience.difficulty}
                </Badge>
                <Button
                  size="lg"
                  bg="brand.terra"
                  color="white"
                  _hover={{ bg: 'brand.forest' }}
                >
                  Reservar Ahora
                </Button>
              </VStack>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
