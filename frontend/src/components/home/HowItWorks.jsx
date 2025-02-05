import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text, Icon } from '@chakra-ui/react';
import { FaSearch, FaCalendarCheck, FaHeart } from 'react-icons/fa';

const steps = [
  {
    icon: FaSearch,
    title: 'Explora',
    description: 'Descubre experiencias únicas en Guatemala'
  },
  {
    icon: FaCalendarCheck,
    title: 'Reserva',
    description: 'Elige tu fecha y asegura tu lugar'
  },
  {
    icon: FaHeart,
    title: 'Disfruta',
    description: 'Vive momentos inolvidables'
  }
];

export const HowItWorks = () => {
  return (
    <Box as="section" py={16} bg="#E8E4D9">
      <Container maxW="container.xl">
        <Box textAlign="center" mb={12}>
          <Heading as="h2" size="xl" color="#2C4A3B" mb={4}>
            ¿Cómo Funciona?
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Tres simples pasos para vivir una experiencia única
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {steps.map((step, index) => (
            <Box
              key={index}
              textAlign="center"
              p={6}
              borderRadius="lg"
              bg="white"
              boxShadow="md"
            >
              <Icon
                as={step.icon}
                w={12}
                h={12}
                color="#C17F59"
                mb={4}
              />
              <Heading as="h3" size="md" color="#2C4A3B" mb={2}>
                {step.title}
              </Heading>
              <Text color="gray.600">
                {step.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
