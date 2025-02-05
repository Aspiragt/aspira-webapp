import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Image,
  Button,
  VStack,
  HStack,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import config from '../config'

const categories = ['Aventura', 'Gastronomía', 'Bienestar', 'Cultura']

function ExperienceCard({ experience }) {
  const { title, description, price, duration, location, image } = experience

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="lg"
    >
      <Image
        src={image}
        alt={title}
        height="200px"
        width="100%"
        objectFit="cover"
      />

      <Box p="6">
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {title}
        </Box>

        <Text mt={2} color={useColorModeValue('gray.600', 'gray.400')}>
          {description}
        </Text>

        <HStack mt={4} spacing={4}>
          <Text color={useColorModeValue('gray.600', 'gray.400')}>
            ${price} USD
          </Text>
          <Text color={useColorModeValue('gray.600', 'gray.400')}>
            {duration}
          </Text>
        </HStack>

        <Text mt={2} color={useColorModeValue('gray.500', 'gray.300')}>
          {location}
        </Text>

        <Button
          mt={4}
          colorScheme="teal"
          width="full"
        >
          Reservar
        </Button>
      </Box>
    </Box>
  )
}

function Experiences() {
  const [experiences, setExperiences] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const url = selectedCategory
          ? `${config.apiUrl}/experiences/category/${selectedCategory}`
          : `${config.apiUrl}/experiences`
        
        const response = await fetch(url)
        const data = await response.json()
        setExperiences(data)
      } catch (error) {
        console.error('Error fetching experiences:', error)
      }
    }

    fetchExperiences()
  }, [selectedCategory])

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading mb={4}>Nuestras Experiencias</Heading>
          <HStack spacing={4} overflowX="auto" py={4}>
            <Button
              colorScheme={!selectedCategory ? 'teal' : 'gray'}
              onClick={() => setSelectedCategory(null)}
            >
              Todas
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                colorScheme={selectedCategory === category ? 'teal' : 'gray'}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </HStack>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

export default Experiences
