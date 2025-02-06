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
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaSearch, FaGift, FaCalendarCheck, FaHeart } from 'react-icons/fa';

const MotionBox = motion(Box);

const StepArrow = ({ direction = 'right' }) => (
  <Box
    position="absolute"
    top="50%"
    transform="translateY(-50%)"
    {...(direction === 'right' ? { right: '-40px' } : { left: '-40px' })}
    display={{ base: 'none', lg: 'block' }}
    zIndex={1}
    color="brand.terra"
    opacity={0.6}
    _groupHover={{ opacity: 1, transform: 'translateY(-50%) scale(1.1)' }}
    transition="all 0.3s ease"
  >
    <svg
      width="80"
      height="24"
      viewBox="0 0 80 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={direction === 'right' 
          ? "M0 12h76M65 1l12 11-12 11"
          : "M80 12H4m11-11L3 12l12 11"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Box>
);

const steps = [
  {
    icon: FaSearch,
    title: 'Explora',
    subtitle: 'Encuentra la Experiencia Perfecta',
    description: 'Navega por nuestra colección de experiencias únicas, cuidadosamente seleccionadas.',
    features: [
      'Filtros intuitivos por categoría',
      'Detalles completos de cada actividad',
      'Fotos y reseñas reales',
    ],
  },
  {
    icon: FaGift,
    title: 'Personaliza',
    subtitle: 'Crea un Regalo Especial',
    description: 'Adapta cada detalle para hacer el regalo aún más memorable.',
    features: [
      'Elige la fecha o déjala abierta',
      'Añade un mensaje personal',
      'Selecciona el empaque',
    ],
  },
  {
    icon: FaCalendarCheck,
    title: 'Entrega',
    subtitle: 'Sorprende con Estilo',
    description: 'Elige cómo y cuándo entregar esta experiencia única.',
    features: [
      'Envío digital instantáneo',
      'Empaque premium físico',
      'Código de regalo exclusivo',
    ],
  },
  {
    icon: FaHeart,
    title: 'Disfruta',
    subtitle: 'Vive el Momento',
    description: 'Acompaña cada paso de la experiencia con atención premium.',
    features: [
      'Confirmación inmediata',
      'Soporte personalizado 24/7',
      'Garantía de satisfacción',
    ],
  },
];

export const HowItWorks = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const containerWidth = useBreakpointValue({ base: '100%', md: '90%', lg: '85%', xl: '80%' });

  return (
    <Box 
      as="section" 
      py={{ base: 12, md: 16, lg: 20 }}
      bg="gray.50"
    >
      <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
        {/* Header */}
        <VStack 
          spacing={{ base: 4, md: 6 }} 
          mb={{ base: 12, md: 16 }}
          maxW={containerWidth}
          mx="auto"
          textAlign="center"
        >
          <Text
            color="brand.terra"
            fontWeight="semibold"
            fontSize={{ base: 'md', md: 'lg' }}
            letterSpacing="wide"
            textTransform="uppercase"
          >
            Proceso Simple
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
            color="brand.forest"
            lineHeight="shorter"
          >
            Regalar Momentos Extraordinarios es Fácil
          </Heading>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="gray.600"
            maxW="3xl"
            lineHeight="tall"
          >
            En cuatro simples pasos, transforma un momento especial en un recuerdo inolvidable
          </Text>
        </VStack>

        {/* Steps Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={{ base: 8, md: 12, lg: 8 }}
          maxW={containerWidth}
          mx="auto"
          position="relative"
        >
          {steps.map((step, index) => (
            <Box 
              key={index} 
              position="relative"
              role="group"
            >
              {index < steps.length - 1 && <StepArrow />}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <VStack
                  bg="white"
                  p={{ base: 6, md: 8 }}
                  borderRadius="xl"
                  shadow="sm"
                  h="full"
                  spacing={6}
                  align="stretch"
                  _hover={{
                    transform: 'translateY(-4px)',
                    shadow: 'md',
                  }}
                  transition="all 0.3s ease"
                >
                  {/* Header */}
                  <Flex direction="column" align="flex-start" spacing={4}>
                    <HStack spacing={4} mb={4}>
                      <Flex
                        bg="brand.sand"
                        color="brand.terra"
                        w={12}
                        h={12}
                        borderRadius="full"
                        align="center"
                        justify="center"
                        fontSize="xl"
                      >
                        <Icon as={step.icon} boxSize={5} />
                      </Flex>
                      <Box>
                        <Text
                          color="brand.terra"
                          fontSize="sm"
                          fontWeight="semibold"
                          mb={1}
                        >
                          Paso {index + 1}
                        </Text>
                        <Text
                          fontSize="xl"
                          fontWeight="bold"
                          color="brand.forest"
                          lineHeight="short"
                        >
                          {step.title}
                        </Text>
                      </Box>
                    </HStack>
                    <Text
                      fontSize="md"
                      fontWeight="medium"
                      color="gray.700"
                      mb={2}
                    >
                      {step.subtitle}
                    </Text>
                    <Text
                      fontSize="sm"
                      color="gray.600"
                      lineHeight="tall"
                    >
                      {step.description}
                    </Text>
                  </Flex>

                  {/* Features */}
                  <VStack align="stretch" spacing={3}>
                    {step.features.map((feature, idx) => (
                      <HStack
                        key={idx}
                        spacing={3}
                        align="center"
                      >
                        <Box
                          w="6px"
                          h="6px"
                          borderRadius="full"
                          bg="brand.terra"
                          opacity={0.6}
                        />
                        <Text
                          fontSize="sm"
                          color="gray.600"
                          fontWeight="medium"
                        >
                          {feature}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </VStack>
              </MotionBox>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
