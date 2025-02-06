import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Image,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import {
  FaMapMarkedAlt,
  FaHeart,
  FaGift,
  FaCompass,
  FaMountain,
  FaStar,
  FaQuoteLeft,
} from 'react-icons/fa';
import { HowItWorks } from '../components/home/HowItWorks';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const categories = [
  {
    icon: FaMountain,
    title: 'Aventura',
    description: 'Experiencias llenas de adrenalina y emoción',
    image: '/images/categories/aventura.jpg',
  },
  {
    icon: FaHeart,
    title: 'Bienestar',
    description: 'Momentos de relajación y cuidado personal',
    image: '/images/categories/bienestar.jpg',
  },
  {
    icon: FaCompass,
    title: 'Escapadas',
    description: 'Descubre destinos únicos y mágicos',
    image: '/images/categories/escapadas.jpg',
  },
  {
    icon: FaGift,
    title: 'Especiales',
    description: 'Para ocasiones que merecen algo extraordinario',
    image: '/images/categories/especiales.jpg',
  },
];

const testimonials = [
  {
    name: 'Ana García',
    role: 'Aventurera Entusiasta',
    image: '/images/testimonials/ana.jpg',
    quote: 'La experiencia superó todas mis expectativas. Cada detalle fue perfecto.',
  },
  {
    name: 'Carlos Ruiz',
    role: 'Amante de los Viajes',
    image: '/images/testimonials/carlos.jpg',
    quote: 'Regalar una experiencia Aspira fue la mejor decisión. El servicio es excepcional.',
  },
  {
    name: 'María Torres',
    role: 'Buscadora de Aventuras',
    image: '/images/testimonials/maria.jpg',
    quote: 'Momentos inolvidables que quedaran grabados para siempre.',
  },
];

export const Home = () => {
  const containerWidth = useBreakpointValue({ base: '100%', md: '90%', lg: '85%', xl: '80%' });
  const isDesktop = useBreakpointValue({ base: false, lg: true });

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
        {/* Background Pattern */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage="url('/images/pattern.svg')"
          bgSize="cover"
          opacity={0.1}
          transform="rotate(180deg)"
        />

        {/* Content */}
        <Container 
          maxW="container.xl" 
          position="relative"
          px={{ base: 4, md: 6, lg: 8 }}
        >
          <VStack
            spacing={{ base: 6, md: 8 }}
            align="center"
            textAlign="center"
            maxW="3xl"
            mx="auto"
          >
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heading
                as="h1"
                fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                fontWeight="bold"
                lineHeight="shorter"
                letterSpacing="tight"
                mb={{ base: 4, md: 6 }}
              >
                Regala Experiencias que{' '}
                <Text 
                  as="span" 
                  color="brand.terra"
                  position="relative"
                  _after={{
                    content: '""',
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    bg: 'brand.terra',
                    opacity: 0.6,
                  }}
                >
                  Inspiran
                </Text>
              </Heading>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Text
                fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                maxW="2xl"
                lineHeight="tall"
                mb={{ base: 6, md: 8 }}
              >
                Descubre una colección única de experiencias memorables, 
                cuidadosamente seleccionadas para crear momentos extraordinarios
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <HStack 
                spacing={{ base: 4, md: 6 }}
                flexDir={{ base: 'column', sm: 'row' }}
              >
                <Button
                  as={RouterLink}
                  to="/experiences"
                  size="lg"
                  height={{ base: 12, md: 14 }}
                  px={{ base: 8, md: 10 }}
                  fontSize={{ base: 'md', md: 'lg' }}
                  bg="brand.terra"
                  color="white"
                  _hover={{
                    bg: 'brand.forest',
                    transform: 'translateY(-2px)',
                    shadow: 'lg',
                  }}
                  transition="all 0.3s"
                >
                  Explorar Experiencias
                </Button>
                <Button
                  as={RouterLink}
                  to="/gift"
                  size="lg"
                  height={{ base: 12, md: 14 }}
                  px={{ base: 8, md: 10 }}
                  fontSize={{ base: 'md', md: 'lg' }}
                  variant="outline"
                  color="white"
                  borderWidth={2}
                  _hover={{
                    bg: 'whiteAlpha.200',
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.3s"
                >
                  Regalar Experiencia
                </Button>
              </HStack>
            </MotionBox>
          </VStack>
        </Container>
      </Box>

      {/* Categories Section */}
      <Box py={{ base: 16, md: 24 }} bg="white">
        <Container 
          maxW="container.xl"
          px={{ base: 4, md: 6, lg: 8 }}
        >
          <VStack spacing={{ base: 12, md: 16 }}>
            <VStack 
              spacing={{ base: 3, md: 4 }}
              textAlign="center"
              maxW="3xl"
              mx="auto"
            >
              <Text
                color="brand.terra"
                fontWeight="semibold"
                fontSize={{ base: 'md', md: 'lg' }}
                letterSpacing="wide"
                textTransform="uppercase"
              >
                Descubre
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                color="brand.forest"
                lineHeight="shorter"
                fontWeight="bold"
              >
                Experiencias que Crean Historias
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="gray.600"
                lineHeight="tall"
                maxW="2xl"
              >
                Cada experiencia está diseñada para convertirse en un recuerdo inolvidable.
                El regalo perfecto para cualquier ocasión especial
              </Text>
            </VStack>

            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 4 }}
              spacing={{ base: 8, md: 10 }}
              w="full"
            >
              {categories.map((category, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <VStack
                    as={RouterLink}
                    to={`/experiences?category=${category.title.toLowerCase()}`}
                    spacing={4}
                    bg="white"
                    p={6}
                    borderRadius="xl"
                    shadow="sm"
                    position="relative"
                    overflow="hidden"
                    h="full"
                    _hover={{
                      transform: 'translateY(-4px)',
                      shadow: 'md',
                    }}
                    transition="all 0.3s"
                  >
                    <Box
                      w="full"
                      h="200px"
                      borderRadius="lg"
                      overflow="hidden"
                      mb={4}
                    >
                      <Image
                        src={category.image}
                        alt={category.title}
                        w="full"
                        h="full"
                        objectFit="cover"
                        transition="transform 0.3s"
                        _groupHover={{ transform: 'scale(1.05)' }}
                      />
                    </Box>
                    <Icon
                      as={category.icon}
                      boxSize={8}
                      color="brand.terra"
                    />
                    <Heading
                      as="h3"
                      fontSize="xl"
                      color="brand.forest"
                      fontWeight="bold"
                    >
                      {category.title}
                    </Heading>
                    <Text
                      color="gray.600"
                      fontSize="md"
                      textAlign="center"
                    >
                      {category.description}
                    </Text>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <Box 
        py={{ base: 16, md: 24 }} 
        bg="gray.50"
      >
        <Container 
          maxW="container.xl"
          px={{ base: 4, md: 6, lg: 8 }}
        >
          <VStack spacing={{ base: 12, md: 16 }}>
            <VStack 
              spacing={{ base: 3, md: 4 }}
              textAlign="center"
              maxW="3xl"
              mx="auto"
            >
              <Text
                color="brand.terra"
                fontWeight="semibold"
                fontSize={{ base: 'md', md: 'lg' }}
                letterSpacing="wide"
                textTransform="uppercase"
              >
                Testimonios
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                color="brand.forest"
                lineHeight="shorter"
                fontWeight="bold"
              >
                Lo que Dicen Nuestros Aventureros
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="gray.600"
                lineHeight="tall"
                maxW="2xl"
              >
                Historias reales de personas que han vivido momentos extraordinarios con Aspira
              </Text>
            </VStack>

            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              spacing={{ base: 8, md: 10 }}
              w="full"
            >
              {testimonials.map((testimonial, index) => (
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
                    borderRadius="xl"
                    shadow="sm"
                    spacing={6}
                    h="full"
                    position="relative"
                    _hover={{ transform: 'translateY(-4px)', shadow: 'md' }}
                    transition="all 0.3s"
                  >
                    <Icon
                      as={FaQuoteLeft}
                      boxSize={8}
                      color="brand.terra"
                      opacity={0.3}
                    />
                    <Text
                      fontSize="lg"
                      color="gray.600"
                      lineHeight="tall"
                      fontStyle="italic"
                    >
                      "{testimonial.quote}"
                    </Text>
                    <HStack spacing={4} w="full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        boxSize="48px"
                        borderRadius="full"
                        objectFit="cover"
                      />
                      <Box>
                        <Text
                          fontWeight="bold"
                          color="brand.forest"
                        >
                          {testimonial.name}
                        </Text>
                        <Text
                          fontSize="sm"
                          color="gray.500"
                        >
                          {testimonial.role}
                        </Text>
                      </Box>
                    </HStack>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box 
        py={{ base: 16, md: 24 }}
        bg="brand.forest"
        color="white"
        position="relative"
        overflow="hidden"
      >
        {/* Background Pattern */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage="url('/images/pattern.svg')"
          bgSize="cover"
          opacity={0.1}
        />

        <Container 
          maxW="container.xl"
          position="relative"
          px={{ base: 4, md: 6, lg: 8 }}
        >
          <VStack
            spacing={{ base: 6, md: 8 }}
            textAlign="center"
            maxW="3xl"
            mx="auto"
          >
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="bold"
              lineHeight="shorter"
            >
              Comienza tu Historia Hoy
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              lineHeight="tall"
              maxW="2xl"
            >
              Únete a nuestra comunidad de personas que eligen regalar momentos extraordinarios.
              Cada experiencia es una oportunidad para crear recuerdos que duran toda la vida.
            </Text>
            <Button
              as={RouterLink}
              to="/experiences"
              size="lg"
              height={{ base: 12, md: 14 }}
              px={{ base: 8, md: 10 }}
              fontSize={{ base: 'md', md: 'lg' }}
              bg="brand.terra"
              color="white"
              _hover={{
                transform: 'translateY(-2px)',
                shadow: 'lg',
              }}
              transition="all 0.3s"
            >
              Descubrir Experiencias
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};
