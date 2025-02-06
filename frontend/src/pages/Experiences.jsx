import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack } from '@chakra-ui/react';
import { ExperienceCard } from '../components/experiences/ExperienceCard';

const experiences = [
  {
    title: 'Volcán Acatenango',
    description: 'Ascenso al volcán con vistas espectaculares del Volcán de Fuego',
    image: '/images/experiences/acatenango.jpg',
    price: 799,
    location: 'Sacatepéquez',
    duration: '2 días'
  },
  {
    title: 'Kayak en Atitlán',
    description: 'Aventura acuática en el lago más hermoso del mundo',
    image: '/images/experiences/kayak-atitlan.jpg',
    price: 299,
    location: 'Sololá',
    duration: '4 horas'
  },
  {
    title: 'Taller de Chocolate',
    description: 'Aprende el arte del chocolate artesanal maya',
    image: '/images/experiences/chocolate-workshop.jpg',
    price: 199,
    location: 'Antigua Guatemala',
    duration: '3 horas'
  },
  {
    title: 'Tikal al Amanecer',
    description: 'Tour guiado por la antigua ciudad maya al amanecer',
    image: '/images/experiences/tikal.jpg',
    price: 599,
    location: 'Petén',
    duration: '1 día'
  },
  {
    title: 'Semuc Champey',
    description: 'Exploración de piscinas naturales y cuevas',
    image: '/images/experiences/semuc.jpg',
    price: 449,
    location: 'Alta Verapaz',
    duration: '1 día'
  },
  {
    title: 'Mercado de Chichicastenango',
    description: 'Visita guiada al mercado indígena más grande de América',
    image: '/images/experiences/chichi.jpg',
    price: 249,
    location: 'Quiché',
    duration: '6 horas'
  }
];

export const Experiences = () => {
  return (
    <Box as="main" py={16}>
      <Container maxW="container.xl">
        <VStack spacing={8} mb={12}>
          <Heading as="h1" size="2xl" color="brand.forest">
            Experiencias
          </Heading>
          <Text fontSize="xl" textAlign="center" maxW="3xl">
            Descubre experiencias únicas en Guatemala, desde aventuras en la naturaleza hasta inmersiones culturales profundas
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
