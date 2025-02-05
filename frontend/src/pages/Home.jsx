import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Text,
  Button,
  VStack,
  Heading,
  useDisclosure,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  Stack,
  HStack
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
  const [giftCode, setGiftCode] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const toast = useToast();

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

  const handleRedeemCode = () => {
    if (!giftCode.trim()) {
      toast({
        title: 'Error',
        description: 'Por favor ingresa un código de regalo',
        status: 'error',
        duration: 3000,
      });
      return;
    }
    navigate(`/redeem/${giftCode.trim()}`);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="teal.500" color="white" py={16}>
        <Container maxW="container.xl">
          <VStack spacing={6} align="center" textAlign="center">
            <Heading size="2xl">
              Descubre Experiencias Únicas en Guatemala
            </Heading>
            <Text fontSize="xl" maxW="container.md">
              Regala momentos inolvidables con experiencias auténticas y personalizadas
            </Text>
            
            {/* Redimir código section */}
            <Box 
              bg="white" 
              p={6} 
              borderRadius="lg" 
              boxShadow="md" 
              width="100%" 
              maxW="md"
              mt={8}
            >
              <VStack spacing={4}>
                <Text color="gray.700" fontWeight="bold">
                  ¿Tienes un código de regalo?
                </Text>
                <InputGroup size="lg">
                  <Input
                    placeholder="Ingresa tu código"
                    value={giftCode}
                    onChange={(e) => setGiftCode(e.target.value.toUpperCase())}
                    color="gray.700"
                    bg="gray.50"
                    maxLength={8}
                  />
                  <InputRightElement width="4.5rem">
                    <Button 
                      h="1.75rem" 
                      size="sm" 
                      colorScheme="teal"
                      onClick={handleRedeemCode}
                    >
                      Redimir
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </VStack>
            </Box>
          </VStack>
        </Container>
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
          <Heading textAlign="center">Experiencias Disponibles</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {experiences.map((experience) => (
              <Box
                key={experience._id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                _hover={{ transform: 'scale(1.02)', transition: '0.2s' }}
                bg="white"
                boxShadow="sm"
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
                  <Text mb={4} color="gray.600">
                    {experience.description}
                  </Text>
                  <Stack spacing={4}>
                    <Text fontWeight="bold" fontSize="xl" color="teal.600">
                      Q{experience.price}
                    </Text>
                    <Button
                      colorScheme="teal"
                      width="100%"
                      onClick={() => handleBooking(experience)}
                    >
                      Reservar
                    </Button>
                  </Stack>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {selectedExperience && (
        <BookingModal
          isOpen={isOpen}
          onClose={onClose}
          experience={selectedExperience}
        />
      )}
    </Box>
  );
}

export default Home;
