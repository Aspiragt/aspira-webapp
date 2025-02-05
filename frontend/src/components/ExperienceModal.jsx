import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  Text,
  VStack,
  HStack,
  Badge,
  Button,
  Divider,
  SimpleGrid,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import { FiMapPin, FiClock, FiCalendar, FiUsers } from 'react-icons/fi';

const ExperienceModal = ({ experience, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    date: '',
    participants: 1,
    message: ''
  });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar la reserva
    toast({
      title: '¡Reserva exitosa!',
      description: 'Te contactaremos pronto con los detalles.',
      status: 'success',
      duration: 5000,
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        
        <Image
          src={experience.images[0]?.url}
          alt={experience.title}
          h="300px"
          w="full"
          objectFit="cover"
        />

        <ModalHeader pt={6}>
          <VStack align="flex-start" spacing={2}>
            <Badge colorScheme="green" textTransform="capitalize">
              {experience.category}
            </Badge>
            <Text fontSize="2xl" fontWeight="bold">
              {experience.title}
            </Text>
          </VStack>
        </ModalHeader>

        <ModalBody>
          <VStack spacing={6} align="stretch">
            <Text color="gray.600">
              {experience.description}
            </Text>

            <SimpleGrid columns={2} spacing={4}>
              <HStack>
                <FiMapPin />
                <Text>{experience.location.city}</Text>
              </HStack>
              <HStack>
                <FiClock />
                <Text>{experience.duration.value} {experience.duration.unit}</Text>
              </HStack>
              <HStack>
                <FiCalendar />
                <Text>Disponibilidad: {experience.availability.slots} lugares</Text>
              </HStack>
              <HStack>
                <FiUsers />
                <Text>Mínimo: 1 persona</Text>
              </HStack>
            </SimpleGrid>

            <Box bg="gray.50" p={4} borderRadius="md">
              <Text fontSize="xl" fontWeight="bold" color="brand.green">
                ${experience.price.amount.toLocaleString()} {experience.price.currency}
              </Text>
              <Text fontSize="sm" color="gray.600">
                por persona
              </Text>
            </Box>

            <Divider />

            <VStack as="form" onSubmit={handleSubmit} spacing={4}>
              <FormControl isRequired>
                <FormLabel>Fecha deseada</FormLabel>
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Número de participantes</FormLabel>
                <Input
                  type="number"
                  min="1"
                  name="participants"
                  value={formData.participants}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Mensaje especial</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="¿Alguna solicitud especial?"
                />
              </FormControl>

              <Button
                type="submit"
                colorScheme="brand"
                size="lg"
                w="full"
              >
                Reservar Experiencia
              </Button>
            </VStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ExperienceModal;
