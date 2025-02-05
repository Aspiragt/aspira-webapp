import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

function Checkout() {
  const { id } = useParams()

  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <Heading mb={4}>Checkout para Experiencia {id}</Heading>
        <Text>Contenido próximamente...</Text>
      </Container>
    </Box>
  )
}

export default Checkout
