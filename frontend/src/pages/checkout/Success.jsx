import { Box, Container, Heading, Text } from '@chakra-ui/react'

function Success() {
  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <Heading mb={4}>¡Compra Exitosa!</Heading>
        <Text>Contenido próximamente...</Text>
      </Container>
    </Box>
  )
}

export default Success
