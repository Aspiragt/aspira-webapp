import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Link as ChakraLink,
  useToast,
  Container,
  Heading
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al iniciar sesión');
      }

      // Guardar el token en localStorage
      localStorage.setItem('token', data.token);
      
      toast({
        title: '¡Bienvenido!',
        status: 'success',
        duration: 3000,
      });

      navigate('/experiences');
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxW="container.sm" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading
            color="brand.green"
            fontFamily="Playfair Display"
            size="xl"
            mb={2}
          >
            Bienvenido a ASPIRA
          </Heading>
          <Text color="gray.600">
            Descubre experiencias únicas y memorables
          </Text>
        </Box>

        <Box
          as="form"
          onSubmit={handleSubmit}
          p={8}
          borderWidth={1}
          borderRadius="lg"
          boxShadow="sm"
          bg="white"
        >
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Correo electrónico</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Contraseña</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="brand"
              width="full"
              isLoading={isLoading}
            >
              Iniciar Sesión
            </Button>

            <Text fontSize="sm" color="gray.600">
              ¿No tienes una cuenta?{' '}
              <ChakraLink
                as={RouterLink}
                to="/register"
                color="brand.blue"
                fontWeight="medium"
              >
                Regístrate aquí
              </ChakraLink>
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Login;
