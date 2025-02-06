import React, { useState } from 'react';
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Input,
  Button,
  useToast,
  FormControl,
  FormLabel,
  Icon,
} from '@chakra-ui/react';
import { FaTicketAlt } from 'react-icons/fa';

const Redeem = () => {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code.trim()) {
      toast({
        title: 'Código requerido',
        description: 'Por favor ingresa el código de tu experiencia',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      toast({
        title: 'Código inválido',
        description: 'El código ingresado no es válido o ya ha sido utilizado',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Box as="main" bg="brand.sand" minH="100vh" w="100%">
      <Box py={{ base: 12, md: 20 }}>
        <Container maxW="container.xl">
          <Box as="form" onSubmit={handleSubmit} maxW="md" mx="auto">
            <VStack spacing={8}>
              <VStack spacing={4}>
                <Heading color="brand.forest" size="2xl">Redimir Experiencia</Heading>
                <Text color="gray.600" fontSize="xl">Ingresa el código de tu experiencia</Text>
              </VStack>
              
              <Box bg="white" p={8} rounded="xl" shadow="lg" w="full">
                <VStack spacing={6}>
                  <FormControl>
                    <FormLabel color="brand.forest">
                      <Icon as={FaTicketAlt} mr={2} />
                      Código
                    </FormLabel>
                    <Input
                      value={code}
                      onChange={(e) => setCode(e.target.value.toUpperCase())}
                      placeholder="Ingresa tu código"
                      size="lg"
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    bg="brand.terra"
                    color="white"
                    size="lg"
                    w="full"
                    isLoading={isLoading}
                    _hover={{ bg: 'brand.forest' }}
                  >
                    Redimir
                  </Button>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Redeem;
