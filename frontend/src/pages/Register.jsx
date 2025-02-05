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
  Heading,
  Select,
  Collapse
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    userType: 'individual',
    company: {
      name: '',
      taxId: ''
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('company.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        company: {
          ...prev.company,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5001/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error en el registro');
      }

      localStorage.setItem('token', data.token);
      
      toast({
        title: '¡Registro exitoso!',
        description: 'Bienvenido a ASPIRA',
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
            Únete a ASPIRA
          </Heading>
          <Text color="gray.600">
            Comienza tu viaje de experiencias únicas
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
              <FormLabel>Nombre completo</FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Correo electrónico</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Contraseña</FormLabel>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Tipo de cuenta</FormLabel>
              <Select
                name="userType"
                value={formData.userType}
                onChange={handleChange}
              >
                <option value="individual">Individual</option>
                <option value="business">Empresa</option>
              </Select>
            </FormControl>

            <Collapse in={formData.userType === 'business'}>
              <VStack spacing={4}>
                <FormControl isRequired={formData.userType === 'business'}>
                  <FormLabel>Nombre de la empresa</FormLabel>
                  <Input
                    name="company.name"
                    value={formData.company.name}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl isRequired={formData.userType === 'business'}>
                  <FormLabel>RFC</FormLabel>
                  <Input
                    name="company.taxId"
                    value={formData.company.taxId}
                    onChange={handleChange}
                  />
                </FormControl>
              </VStack>
            </Collapse>

            <Button
              type="submit"
              colorScheme="brand"
              width="full"
              isLoading={isLoading}
              mt={4}
            >
              Registrarse
            </Button>

            <Text fontSize="sm" color="gray.600">
              ¿Ya tienes una cuenta?{' '}
              <ChakraLink
                as={RouterLink}
                to="/login"
                color="brand.blue"
                fontWeight="medium"
              >
                Inicia sesión aquí
              </ChakraLink>
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Register;
