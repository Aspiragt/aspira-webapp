import { Box, Flex, Button, Text, Container, Stack, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box bg={useColorModeValue('white', 'gray.800')} borderBottom={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.900')}>
      <Container maxW={'container.xl'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <RouterLink to="/">
            <Text fontSize="2xl" fontFamily="heading" fontWeight="bold" color="brand.500">
              ASPIRA
            </Text>
          </RouterLink>

          <Stack direction={'row'} spacing={4}>
            <Button as={RouterLink} to="/experiences" variant="ghost" color="gray.600">
              Experiencias
            </Button>
            <Button as={RouterLink} to="/login" variant="outline">
              Iniciar Sesión
            </Button>
            <Button as={RouterLink} to="/register" variant="solid">
              Registrarse
            </Button>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
