import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaSearch, FaCalendarCheck, FaStar } from 'react-icons/fa';

const steps = [
  {
    icon: FaSearch,
    title: 'Explora',
    description: 'Descubre experiencias únicas en Guatemala, desde aventuras en la naturaleza hasta inmersiones culturales.'
  },
  {
    icon: FaCalendarCheck,
    title: 'Reserva',
    description: 'Elige tu experiencia y fecha preferida. Proceso de reserva simple y seguro.'
  },
  {
    icon: FaStar,
    title: 'Disfruta',
    description: 'Vive momentos inolvidables con guías locales expertos y servicios de calidad.'
  }
];

export const HowItWorks = () => {
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <Box as="section" py={20} bg={bgColor}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading as="h2" size="xl" color="brand.forest">
              ¿Cómo Funciona?
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
              En tres simples pasos podrás vivir experiencias únicas en Guatemala
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {steps.map((step, index) => (
              <VStack
                key={index}
                spacing={6}
                p={8}
                bg="white"
                borderRadius="lg"
                boxShadow="md"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: 'lg',
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                <Box
                  p={4}
                  bg="brand.sand"
                  borderRadius="full"
                  color="brand.forest"
                >
                  <Icon as={step.icon} boxSize={8} />
                </Box>
                <Heading as="h3" size="md" color="brand.forest">
                  {step.title}
                </Heading>
                <Text textAlign="center" color="gray.600">
                  {step.description}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};
