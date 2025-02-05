import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
  Switch,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
  Divider,
  Text,
  Box,
} from '@chakra-ui/react';
import config from '../config';

function BookingModal({ isOpen, onClose, experience }) {
  const toast = useToast();
  const [isGift, setIsGift] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    customer: {
      name: '',
      email: '',
      phone: ''
    },
    recipient: {
      name: '',
      email: '',
      phone: '',
      isGift: false
    },
    bookingDate: '',
    numberOfPeople: 1,
    notificationPreferences: {
      email: true,
      whatsapp: false
    },
    specialRequests: ''
  });

  const handleInputChange = (e, section = 'customer') => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${config.apiUrl}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          experienceId: experience.id,
          ...formData,
          recipient: isGift ? formData.recipient : null
        }),
      });

      if (!response.ok) {
        throw new Error('Error al crear la reserva');
      }

      const data = await response.json();

      toast({
        title: 'Reserva creada',
        description: isGift 
          ? `Código de regalo: ${data.giftCode.code}` 
          : 'Tu reserva ha sido confirmada',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });

      onClose();
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Reservar {experience?.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} as="form" onSubmit={handleSubmit}>
            <Text fontWeight="bold">Tus datos</Text>
            <FormControl isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input
                name="name"
                value={formData.customer.name}
                onChange={(e) => handleInputChange(e, 'customer')}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.customer.email}
                onChange={(e) => handleInputChange(e, 'customer')}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Teléfono</FormLabel>
              <Input
                type="tel"
                name="phone"
                value={formData.customer.phone}
                onChange={(e) => handleInputChange(e, 'customer')}
              />
            </FormControl>

            <Divider />

            <HStack width="100%" justify="space-between">
              <Text fontWeight="bold">¿Es un regalo?</Text>
              <Switch
                isChecked={isGift}
                onChange={(e) => {
                  setIsGift(e.target.checked);
                  setFormData(prev => ({
                    ...prev,
                    recipient: {
                      ...prev.recipient,
                      isGift: e.target.checked
                    }
                  }));
                }}
              />
            </HStack>

            {isGift && (
              <>
                <Text fontWeight="bold">Datos del destinatario</Text>
                <FormControl isRequired>
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    name="name"
                    value={formData.recipient.name}
                    onChange={(e) => handleInputChange(e, 'recipient')}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.recipient.email}
                    onChange={(e) => handleInputChange(e, 'recipient')}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Teléfono</FormLabel>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.recipient.phone}
                    onChange={(e) => handleInputChange(e, 'recipient')}
                  />
                </FormControl>
              </>
            )}

            <Divider />

            <FormControl isRequired>
              <FormLabel>Fecha de la experiencia</FormLabel>
              <Input
                type="date"
                value={formData.bookingDate}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  bookingDate: e.target.value
                }))}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Número de personas</FormLabel>
              <NumberInput
                min={1}
                value={formData.numberOfPeople}
                onChange={(value) => setFormData(prev => ({
                  ...prev,
                  numberOfPeople: parseInt(value)
                }))}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl>
              <FormLabel>Solicitudes especiales</FormLabel>
              <Textarea
                value={formData.specialRequests}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  specialRequests: e.target.value
                }))}
              />
            </FormControl>

            <Box width="100%">
              <Text fontWeight="bold" mb={2}>Notificaciones</Text>
              <HStack spacing={4}>
                <FormControl display="flex" alignItems="center">
                  <FormLabel mb="0">Email</FormLabel>
                  <Switch
                    isChecked={formData.notificationPreferences.email}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      notificationPreferences: {
                        ...prev.notificationPreferences,
                        email: e.target.checked
                      }
                    }))}
                  />
                </FormControl>

                <FormControl display="flex" alignItems="center">
                  <FormLabel mb="0">WhatsApp</FormLabel>
                  <Switch
                    isChecked={formData.notificationPreferences.whatsapp}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      notificationPreferences: {
                        ...prev.notificationPreferences,
                        whatsapp: e.target.checked
                      }
                    }))}
                  />
                </FormControl>
              </HStack>
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button
            colorScheme="teal"
            isLoading={isLoading}
            onClick={handleSubmit}
          >
            Reservar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default BookingModal;
