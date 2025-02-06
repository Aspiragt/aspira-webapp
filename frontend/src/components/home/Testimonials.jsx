import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Avatar, VStack, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Ana García',
    location: 'Ciudad de Guatemala',
    image: '/images/testimonials/ana.jpg',
    text: 'Mi experiencia en el Volcán Acatenango fue increíble. Los guías fueron muy profesionales y la vista del Volcán de Fuego fue espectacular.'
  },
  {
    name: 'Carlos Mendoza',
    location: 'Antigua Guatemala',
    image: '/images/testimonials/carlos.jpg',
    text: 'El taller de chocolate fue una experiencia única. Aprendí mucho sobre la historia del cacao en Guatemala y las técnicas tradicionales.'
  },
  {
    name: 'María José',
    location: 'Quetzaltenango',
    image: '/images/testimonials/maria.jpg',
    text: 'El kayak en el Lago de Atitlán superó todas mis expectativas. El equipo fue excelente y las vistas simplemente increíbles.'
  }
];

export const Testimonials = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box as="section" py={20} bg={bgColor}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading as="h2" size="xl" color="brand.forest">
              Lo que dicen nuestros viajeros
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
              Experiencias auténticas compartidas por nuestra comunidad
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {testimonials.map((testimonial, index) => (
              <VStack
                key={index}
                spacing={6}
                p={8}
                bg="white"
                borderRadius="lg"
                boxShadow="md"
                position="relative"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: 'lg',
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                <Icon
                  as={FaQuoteLeft}
                  position="absolute"
                  top={4}
                  left={4}
                  color="brand.terra"
                  opacity={0.2}
                  boxSize={8}
                />
                <Avatar
                  size="xl"
                  name={testimonial.name}
                  src={testimonial.image}
                  mb={2}
                />
                <VStack spacing={2}>
                  <Heading as="h3" size="md" color="brand.forest">
                    {testimonial.name}
                  </Heading>
                  <Text fontSize="sm" color="gray.500">
                    {testimonial.location}
                  </Text>
                </VStack>
                <Text textAlign="center" color="gray.600" fontSize="md">
                  "{testimonial.text}"
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};
