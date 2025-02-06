import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { ExperienceCard } from '../experiences/ExperienceCard';

const experiences = [
  {
    title: 'Volcán Acatenango',
    description: 'Ascenso al volcán con vistas espectaculares',
    image: '/images/experiences/acatenango.jpg',
    price: 799
  },
  {
    title: 'Kayak en Atitlán',
    description: 'Aventura acuática en el lago más hermoso',
    image: '/images/experiences/kayak-atitlan.jpg',
    price: 299
  },
  {
    title: 'Taller de Chocolate',
    description: 'Aprende el arte del chocolate artesanal',
    image: '/images/experiences/chocolate-workshop.jpg',
    price: 199
  }
];

export const FeaturedExperiences = () => {
  return (
    <Box as="section" py={16} bg="brand.sand">
      <Container maxW="container.xl">
        <Box textAlign="center" mb={12}>
          <Heading as="h2" size="xl" color="brand.forest" mb={4}>
            Experiencias Destacadas
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Descubre algunas de nuestras experiencias más populares
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
