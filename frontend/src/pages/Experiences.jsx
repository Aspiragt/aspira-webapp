import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  HStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaFilter } from 'react-icons/fa';
import { ExperienceCard } from '../components/experiences/ExperienceCard';

const MotionBox = motion(Box);

const experiences = [
  {
    title: 'Volcán Acatenango',
    description: 'Vive una experiencia única ascendiendo uno de los volcanes más impresionantes de Guatemala.',
    image: '/images/experiences/acatenango.jpg',
    price: 799,
    location: 'Sacatepéquez',
    duration: '2 días',
    type: 'aventura'
  },
  {
    title: 'Kayak en Atitlán',
    description: 'Aventura acuática en el lago más hermoso del mundo',
    image: '/images/experiences/kayak-atitlan.jpg',
    price: 299,
    location: 'Sololá',
    duration: '4 horas',
    type: 'aventura'
  },
  {
    title: 'Taller de Chocolate',
    description: 'Aprende el arte del chocolate artesanal maya',
    image: '/images/experiences/chocolate-workshop.jpg',
    price: 199,
    location: 'Antigua Guatemala',
    duration: '3 horas',
    type: 'cultural'
  },
  {
    title: 'Tikal al Amanecer',
    description: 'Tour guiado por la antigua ciudad maya al amanecer',
    image: '/images/experiences/tikal.jpg',
    price: 599,
    location: 'Petén',
    duration: '1 día',
    type: 'cultural'
  },
  {
    title: 'Semuc Champey',
    description: 'Exploración de piscinas naturales y cuevas',
    image: '/images/experiences/semuc.jpg',
    price: 449,
    location: 'Alta Verapaz',
    duration: '1 día',
    type: 'aventura'
  },
  {
    title: 'Mercado de Chichicastenango',
    description: 'Visita guiada al mercado indígena más grande de América',
    image: '/images/experiences/chichi.jpg',
    price: 249,
    location: 'Quiché',
    duration: '6 horas',
    type: 'cultural'
  }
];

export const Experiences = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedType, setSelectedType] = React.useState('todos');
  const [selectedPrice, setSelectedPrice] = React.useState('todos');

  const filteredExperiences = experiences.filter(exp => {
    const typeMatch = selectedType === 'todos' || exp.type === selectedType;
    const priceMatch = selectedPrice === 'todos' || 
      (selectedPrice === 'bajo' && exp.price <= 250) ||
      (selectedPrice === 'medio' && exp.price > 250 && exp.price <= 500) ||
      (selectedPrice === 'alto' && exp.price > 500);
    return typeMatch && priceMatch;
  });

  return (
    <Box as="main" bg="brand.sand" minH="100vh" py={16}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size="2xl" color="brand.forest" mb={4}>
              Experiencias Únicas
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              Descubre Guatemala a través de experiencias auténticas y memorables
            </Text>
          </Box>

          <HStack justify="flex-end">
            <Button
              leftIcon={<Icon as={FaFilter} />}
              onClick={onOpen}
              bg="brand.terra"
              color="white"
              _hover={{ bg: 'brand.forest' }}
            >
              Filtrar
            </Button>
          </HStack>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={8}
            as={motion.div}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            animate="show"
          >
            {filteredExperiences.map((experience, index) => (
              <MotionBox
                key={experience.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <ExperienceCard {...experience} />
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filtrar Experiencias</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack spacing={4} align="stretch">
              <Box>
                <Text fontWeight="bold" mb={2}>Tipo de Experiencia</Text>
                <HStack spacing={4}>
                  {['todos', 'aventura', 'cultural'].map(type => (
                    <Button
                      key={type}
                      size="sm"
                      variant={selectedType === type ? 'solid' : 'outline'}
                      colorScheme={selectedType === type ? 'green' : 'gray'}
                      onClick={() => setSelectedType(type)}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </Button>
                  ))}
                </HStack>
              </Box>

              <Box>
                <Text fontWeight="bold" mb={2}>Rango de Precio</Text>
                <HStack spacing={4}>
                  {[
                    { id: 'todos', label: 'Todos' },
                    { id: 'bajo', label: '< Q250' },
                    { id: 'medio', label: 'Q250-500' },
                    { id: 'alto', label: '> Q500' }
                  ].map(price => (
                    <Button
                      key={price.id}
                      size="sm"
                      variant={selectedPrice === price.id ? 'solid' : 'outline'}
                      colorScheme={selectedPrice === price.id ? 'green' : 'gray'}
                      onClick={() => setSelectedPrice(price.id)}
                    >
                      {price.label}
                    </Button>
                  ))}
                </HStack>
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
