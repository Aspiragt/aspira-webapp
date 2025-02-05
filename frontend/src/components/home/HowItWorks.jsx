import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid } from '@chakra-ui/react';

export const HowItWorks = () => {
  const steps = [
    {
      title: 'Explora',
      description: 'Descubre experiencias únicas en Guatemala'
    },
    {
      title: 'Reserva',
      description: 'Elige tu experiencia y fecha preferida'
    },
    {
      title: 'Disfruta',
      description: 'Vive momentos inolvidables con Aspira'
    }
  ];

  return (
    <Box as="section" py={16} bg="green.50">
      <Container maxW="container.xl">
        <Box textAlign="center" mb={12}>
          <Heading as="h2" size="xl" mb={4}>
            ¿Cómo funciona?
          </Heading>
          <Text fontSize="lg" color="gray.600">
            En tres simples pasos podrás vivir una experiencia única
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {steps.map((step, index) => (
            <Box key={index} textAlign="center">
              <Heading as="h3" size="lg" mb={4}>
                {step.title}
              </Heading>
              <Text color="gray.600">{step.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
