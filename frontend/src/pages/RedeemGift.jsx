import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Input,
  Button,
  useToast,
  Card,
  CardBody,
  Image,
  Badge,
  Divider,
  HStack,
} from '@chakra-ui/react';
import config from '../config';

function RedeemGift() {
  const { code } = useParams();
  const [giftCode, setGiftCode] = useState(code || '');
  const [isLoading, setIsLoading] = useState(false);
  const [giftDetails, setGiftDetails] = useState(null);
  const toast = useToast();
  const navigate = useNavigate();

  const verifyCode = async () => {
    if (!giftCode.trim()) {
      toast({
        title: 'Error',
        description: 'Por favor ingresa un código de regalo',
        status: 'error',
        duration: 3000,
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${config.apiUrl}/bookings/verify-gift/${giftCode}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al verificar el código');
      }

      setGiftDetails(data.booking);
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const redeemGift = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${config.apiUrl}/bookings/redeem-gift/${giftCode}`, {
        method: 'POST',
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al redimir el código');
      }

      toast({
        title: '¡Éxito!',
        description: 'Tu código de regalo ha sido redimido exitosamente',
        status: 'success',
        duration: 5000,
      });

      // Redirigir a la página de la experiencia
      navigate(`/experience/${data.booking.experience._id}`);
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (code) {
      verifyCode();
    }
  }, [code]);

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading textAlign="center">Redimir Regalo</Heading>
        
        {!giftDetails ? (
          <VStack spacing={4}>
            <Text textAlign="center">
              Ingresa tu código de regalo para verificar y redimir tu experiencia
            </Text>
            <HStack>
              <Input
                placeholder="Ingresa tu código"
                value={giftCode}
                onChange={(e) => setGiftCode(e.target.value.toUpperCase())}
                size="lg"
                maxLength={8}
              />
              <Button
                colorScheme="teal"
                onClick={verifyCode}
                isLoading={isLoading}
                size="lg"
              >
                Verificar
              </Button>
            </HStack>
          </VStack>
        ) : (
          <Card>
            <CardBody>
              <VStack spacing={6}>
                <Badge colorScheme="green" fontSize="lg" p={2}>
                  ¡Código válido!
                </Badge>
                
                <Image
                  src={giftDetails.experience.imageUrl}
                  alt={giftDetails.experience.title}
                  borderRadius="lg"
                  maxH="300px"
                  objectFit="cover"
                />

                <Box>
                  <Heading size="md" mb={2}>{giftDetails.experience.title}</Heading>
                  <Text>{giftDetails.experience.description}</Text>
                </Box>

                <Divider />

                <VStack align="stretch" width="100%" spacing={2}>
                  <Text>
                    <strong>Fecha:</strong>{' '}
                    {new Date(giftDetails.bookingDate).toLocaleDateString()}
                  </Text>
                  <Text>
                    <strong>Personas:</strong> {giftDetails.numberOfPeople}
                  </Text>
                </VStack>

                <Button
                  colorScheme="teal"
                  size="lg"
                  width="100%"
                  onClick={redeemGift}
                  isLoading={isLoading}
                >
                  Redimir Regalo
                </Button>
              </VStack>
            </CardBody>
          </Card>
        )}
      </VStack>
    </Container>
  );
}

export default RedeemGift;
