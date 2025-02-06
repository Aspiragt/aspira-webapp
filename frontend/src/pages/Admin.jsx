import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Input,
  Button,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  HStack,
  Image,
  Badge,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import ExperienceForm from '../components/admin/ExperienceForm';

// Esta contraseña debería estar en un .env file
const ADMIN_PASSWORD = 'aspira2025';

// Datos de ejemplo - esto debería venir de tu backend
const mockExperiences = [
  {
    id: 1,
    title: 'Volcán Acatenango',
    description: 'Ascenso al volcán con vistas espectaculares del Volcán de Fuego',
    image: '/images/experiences/acatenango.jpg',
    price: 799,
    location: 'Sacatepéquez',
    duration: '2 días'
  },
  {
    id: 2,
    title: 'Kayak en Atitlán',
    description: 'Aventura acuática en el lago más hermoso del mundo',
    image: '/images/experiences/kayak-atitlan.jpg',
    price: 299,
    location: 'Sololá',
    duration: '4 horas'
  },
  {
    id: 3,
    title: 'Taller de Chocolate',
    description: 'Aprende el arte del chocolate artesanal maya',
    image: '/images/experiences/chocolate-workshop.jpg',
    price: 199,
    location: 'Antigua Guatemala',
    duration: '3 horas'
  },
  {
    id: 4,
    title: 'Tikal al Amanecer',
    description: 'Tour guiado por la antigua ciudad maya al amanecer',
    image: '/images/experiences/tikal.jpg',
    price: 599,
    location: 'Petén',
    duration: '1 día'
  },
  {
    id: 5,
    title: 'Semuc Champey',
    description: 'Exploración de piscinas naturales y cuevas',
    image: '/images/experiences/semuc.jpg',
    price: 449,
    location: 'Alta Verapaz',
    duration: '1 día'
  },
  {
    id: 6,
    title: 'Mercado de Chichicastenango',
    description: 'Visita guiada al mercado indígena más grande de América',
    image: '/images/experiences/chichi.jpg',
    price: 249,
    location: 'Quiché',
    duration: '6 horas'
  }
];

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [experiences, setExperiences] = useState(mockExperiences);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
      toast({
        title: 'Bienvenido',
        description: 'Has iniciado sesión correctamente',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Error',
        description: 'Contraseña incorrecta',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleAddNew = () => {
    setSelectedExperience(null);
    onOpen();
  };

  const handleEdit = (experience) => {
    setSelectedExperience(experience);
    onOpen();
  };

  const handleDelete = (experienceId) => {
    // Aquí iría la lógica para eliminar la experiencia
    setExperiences(prev => prev.filter(exp => exp.id !== experienceId));
    toast({
      title: 'Experiencia eliminada',
      description: 'La experiencia se ha eliminado correctamente',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleSubmit = (formData) => {
    if (selectedExperience) {
      // Actualizar experiencia existente
      setExperiences(prev =>
        prev.map(exp =>
          exp.id === selectedExperience.id
            ? { ...exp, ...Object.fromEntries(formData) }
            : exp
        )
      );
      toast({
        title: 'Experiencia actualizada',
        description: 'La experiencia se ha actualizado correctamente',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } else {
      // Crear nueva experiencia
      const newExperience = {
        id: Date.now(), // Esto debería ser generado por el backend
        ...Object.fromEntries(formData)
      };
      setExperiences(prev => [...prev, newExperience]);
      toast({
        title: 'Experiencia creada',
        description: 'La experiencia se ha creado correctamente',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
    onClose();
  };

  if (!isAuthenticated) {
    return (
      <Box bg="brand.sand" minH="100vh">
        <Container maxW="container.xl" py={16}>
          <VStack spacing={8} align="center">
            <Heading color="brand.forest">Administración</Heading>
            <Box
              bg="white"
              p={8}
              rounded="xl"
              shadow="lg"
              w="100%"
              maxW="md"
            >
              <VStack spacing={4}>
                <Text>Ingresa la contraseña para continuar</Text>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña"
                />
                <Button
                  onClick={handleLogin}
                  bg="brand.terra"
                  color="white"
                  w="full"
                  _hover={{ bg: 'brand.forest' }}
                >
                  Ingresar
                </Button>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>
    );
  }

  return (
    <Box bg="brand.sand" minH="100vh">
      <Container maxW="container.xl" py={16}>
        <VStack spacing={8} align="stretch">
          <HStack justify="space-between" align="center">
            <Heading color="brand.forest">Panel de Administración</Heading>
            <Button
              onClick={handleAddNew}
              bg="brand.terra"
              color="white"
              size="lg"
              _hover={{ bg: 'brand.forest' }}
              leftIcon={<EditIcon />}
            >
              Nueva Experiencia
            </Button>
          </HStack>

          {/* Lista de Experiencias */}
          <Box
            bg="white"
            p={6}
            rounded="xl"
            shadow="lg"
            overflowX="auto"
          >
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Imagen</Th>
                  <Th>Título</Th>
                  <Th>Ubicación</Th>
                  <Th>Precio</Th>
                  <Th>Duración</Th>
                  <Th>Acciones</Th>
                </Tr>
              </Thead>
              <Tbody>
                {experiences.map((experience) => (
                  <Tr key={experience.id}>
                    <Td>
                      <Image
                        src={experience.image}
                        alt={experience.title}
                        boxSize="50px"
                        objectFit="cover"
                        rounded="md"
                      />
                    </Td>
                    <Td fontWeight="medium">{experience.title}</Td>
                    <Td>{experience.location}</Td>
                    <Td>Q{experience.price}</Td>
                    <Td>{experience.duration}</Td>
                    <Td>
                      <HStack spacing={2}>
                        <IconButton
                          icon={<EditIcon />}
                          colorScheme="blue"
                          onClick={() => handleEdit(experience)}
                          aria-label="Editar"
                        />
                        <IconButton
                          icon={<DeleteIcon />}
                          colorScheme="red"
                          onClick={() => handleDelete(experience.id)}
                          aria-label="Eliminar"
                        />
                      </HStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>

          {/* Modal para Agregar/Editar */}
          <Modal 
            isOpen={isOpen} 
            onClose={onClose} 
            size="4xl"
            scrollBehavior="inside"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                {selectedExperience ? 'Editar Experiencia' : 'Nueva Experiencia'}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <ExperienceForm 
                  onSubmit={handleSubmit}
                  initialData={selectedExperience}
                />
              </ModalBody>
            </ModalContent>
          </Modal>
        </VStack>
      </Container>
    </Box>
  );
};

export default Admin;
