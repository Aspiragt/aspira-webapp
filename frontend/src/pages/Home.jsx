import { Box, Button, Container, Heading, Stack, Text, Image } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import HowItWorks from '../components/home/HowItWorks'
import FeaturedExperiences from '../components/home/FeaturedExperiences'

function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bg="gray.800"
        color="white"
        position="relative"
        h={{ base: '80vh', md: '70vh' }}
        minH="500px"
      >
        {/* Background Image */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgImage="url('/images/hero/hero-bg.jpg')"
          bgPosition="center"
          bgSize="cover"
          _after={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: 'blackAlpha.600',
          }}
        />

        {/* Content */}
        <Container
          maxW="container.xl"
          position="relative"
          zIndex={1}
          h="100%"
          display="flex"
          alignItems="center"
        >
          <Stack maxW="2xl" spacing={6}>
            <Heading
              as="h1"
              size="3xl"
              fontWeight="bold"
              lineHeight="shorter"
            >
              Regala experiencias únicas en Guatemala
            </Heading>
            <Text fontSize="xl" color="gray.100">
              Descubre experiencias inolvidables y regala momentos especiales a tus seres queridos
            </Text>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
              <Button
                as={RouterLink}
                to="/experiencias"
                size="lg"
                colorScheme="yellow"
                bg="accent.400"
                _hover={{ bg: 'accent.500' }}
              >
                Ver experiencias
              </Button>
              <Button
                as={RouterLink}
                to="/como-funciona"
                size="lg"
                variant="outline"
                color="white"
                _hover={{ bg: 'whiteAlpha.200' }}
              >
                Cómo funciona
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* How it Works Section */}
      <Box py={20} id="como-funciona">
        <HowItWorks />
      </Box>

      {/* Featured Experiences Section */}
      <Box py={20} bg="gray.50">
        <FeaturedExperiences />
      </Box>
    </Box>
  )
}

export default Home
