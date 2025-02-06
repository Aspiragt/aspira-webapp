import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text, Button, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ExperienceCard } from '../experiences/ExperienceCard';

const experiences = [
  {
    id: 'volcan-acatenango',
    title: 'Volcán Acatenango',
    description: 'Ascenso al volcán con vistas espectaculares del Volcán de Fuego. Una experiencia única de camping y aventura.',
    image: '/images/experiences/acatenango.jpg',
    price: 799,
    location: 'Sacatepéquez',
    duration: '2 días'
  },
  {
    id: 'kayak-atitlan',
    title: 'Kayak en Atitlán',
    description: 'Aventura acuática en el lago más hermoso del mundo. Explora las orillas y disfruta de vistas impresionantes.',
    image: '/images/experiences/kayak-atitlan.jpg',
    price: 299,
    location: 'Sololá',
    duration: '4 horas'
  },
  {
    id: 'taller-chocolate',
    title: 'Taller de Chocolate',
    description: 'Aprende el arte del chocolate artesanal maya. Una experiencia deliciosa y educativa en el corazón de Antigua.',
    image: '/images/experiences/chocolate-workshop.jpg',
    price: 199,
    location: 'Antigua Guatemala',
    duration: '3 horas'
  }
];

export const FeaturedExperiences = () => {
  return (
    <Box as="section" py={16} bg="brand.sand">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading as="h2" size="xl" color="brand.forest">
              Experiencias Destacadas
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
              Descubre algunas de nuestras experiencias más populares
            </Text>
          </VStack>
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} {...experience} />
            ))}
          </SimpleGrid>

          <Button
            as={RouterLink}
            to="/experiences"
            size="lg"
            bg="brand.terra"
            color="white"
            _hover={{ bg: 'brand.forest' }}
          >
            Ver todas las experiencias
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};
