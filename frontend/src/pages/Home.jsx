import React, { useState } from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Text,
  Button,
  VStack,
  Heading,
  useDisclosure
} from '@chakra-ui/react';
import BookingModal from '../components/BookingModal';
import config from '../config';

const categories = [
  {
    id: 'adventure',
    title: 'Aventura',
    image: 'https://placehold.co/800x600/orange/white?text=Aventura',
    description: 'Desde volcanes hasta rafting, vive la adrenalina'
  },
  {
    id: 'food',
    title: 'Gastronomía',
    image: 'https://placehold.co/800x600/red/white?text=Gastronomía',
    description: 'Descubre los sabores auténticos de Guatemala'
  },
  {
    id: 'wellness',
    title: 'Bienestar',
    image: 'https://placehold.co/800x600/green/white?text=Bienestar',
    description: 'Reconéctate con la naturaleza y contigo mismo'
  },
  {
    id: 'culture',
    title: 'Cultura',
    image: 'https://placehold.co/800x600/purple/white?text=Cultura',
    description: 'Explora la rica herencia maya y colonial'
  }
]

function CategoryCard({ category }) {
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      boxShadow="lg"
      _hover={{ transform: 'translateY(-5px)', transition: '0.3s' }}
    >
      <Image
        src={category.image}
        alt={category.title}
        height="200px"
        width="100%"
        objectFit="cover"
      />
      <Box p={5}>
        <Heading size="md" mb={2}>
          {category.title}
        </Heading>
        <Text color="gray.600" mb={4}>
          {category.description}
        </Text>
        <Button
          as={RouterLink}
          to={`/experiences?category=${category.id}`}
          colorScheme="teal"
          size="sm"
        >
          Explorar
        </Button>
      </Box>
    </Box>
  )
}

function Home() {
  const [experiences, setExperiences] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const response = await fetch(`${config.apiUrl}/experiences`);
      const data = await response.json();
      setExperiences(data);
    } catch (error) {
      console.error('Error fetching experiences:', error);
    }
  };

  const handleBooking = (experience) => {
    setSelectedExperience(experience);
    onOpen();
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgImage="url('https://placehold.co/2000x800/teal/white?text=Descubre+Guatemala')"
        bgPosition="center"
        bgSize="cover"
        h="70vh"
        position="relative"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.5)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VStack spacing={6} textAlign="center" color="white">
            <Heading size="2xl">
              Descubre Guatemala
            </Heading>
            <Text fontSize="xl" maxW="2xl">
              Experiencias únicas que transforman tu manera de viajar
            </Text>
            <Button
              as={RouterLink}
              to="/experiences"
              size="lg"
              colorScheme="teal"
            >
              Explorar Experiencias
            </Button>
          </VStack>
        </Box>
      </Box>

      {/* Categories Section */}
      <Container maxW="container.xl" py={16}>
        <VStack spacing={12}>
          <Box textAlign="center">
            <Heading mb={4}>Categorías de Experiencias</Heading>
            <Text fontSize="lg" color="gray.600">
              Encuentra la aventura perfecta para ti
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          <Heading textAlign="center">Experiencias Únicas en Guatemala</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {experiences.map((experience) => (
              <Box
                key={experience._id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                _hover={{ transform: 'scale(1.02)', transition: '0.2s' }}
              >
                <Image
                  src={experience.imageUrl}
                  alt={experience.title}
                  height="200px"
                  width="100%"
                  objectFit="cover"
                />
                <Box p={6}>
                  <Heading size="md" mb={2}>
                    {experience.title}
                  </Heading>
                  <Text mb={4}>{experience.description}</Text>
                  <Text fontWeight="bold" mb={4}>
                    Q{experience.price}
                  </Text>
                  <Button
                    colorScheme="teal"
                    width="100%"
                    onClick={() => handleBooking(experience)}
                  >
                    Reservar
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        {selectedExperience && (
          <BookingModal
            isOpen={isOpen}
            onClose={onClose}
            experience={selectedExperience}
          />
        )}
      </Container>
    </Box>
  )
}

export default Home;
