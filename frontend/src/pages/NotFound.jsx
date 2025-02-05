import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

function NotFound() {
  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={8} textAlign="center">
        <Heading size="2xl">404 - Página no encontrada</Heading>
        <Text fontSize="xl" color="gray.600">
          Lo sentimos, la página que buscas no existe.
        </Text>
        <Button
          as={RouterLink}
          to="/"
          size="lg"
          colorScheme="yellow"
          bg="accent.400"
          _hover={{ bg: 'accent.500' }}
        >
          Volver al inicio
        </Button>
      </VStack>
    </Container>
  )
}

export default NotFound
