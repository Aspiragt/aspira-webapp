import React, { useState, useRef } from 'react';
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
  Box,
  Image,
  Text,
  IconButton,
  HStack,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const ExperienceForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || {
    title: '',
    description: '',
    image: null,
    imagePreview: null,
    price: 0,
    location: '',
    duration: '',
    category: '',
    includes: [],
    requirements: [],
  });

  const fileInputRef = useRef(null);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePriceChange = (value) => {
    setFormData((prev) => ({ ...prev, price: Number(value) }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: 'Error',
          description: 'La imagen no debe superar los 5MB',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: file,
          imagePreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.price) {
      toast({
        title: 'Error',
        description: 'Por favor completa los campos requeridos',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    onSubmit(formData);
  };

  const removeImage = () => {
    setFormData((prev) => ({
      ...prev,
      image: null,
      imagePreview: null,
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <VStack as="form" onSubmit={handleSubmit} spacing={6} align="stretch">
      <FormControl isRequired>
        <FormLabel color="brand.forest">Título</FormLabel>
        <Input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Título de la experiencia"
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel color="brand.forest">Descripción</FormLabel>
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe la experiencia"
          rows={4}
        />
      </FormControl>

      <FormControl>
        <FormLabel color="brand.forest">Imagen</FormLabel>
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          display="none"
        />
        <Button
          onClick={() => fileInputRef.current?.click()}
          colorScheme="blue"
          variant="outline"
          mb={2}
        >
          Seleccionar Imagen
        </Button>
        {formData.imagePreview && (
          <Box position="relative" mt={2}>
            <Image
              src={formData.imagePreview}
              alt="Preview"
              maxH="200px"
              objectFit="cover"
              borderRadius="md"
            />
            <IconButton
              icon={<DeleteIcon />}
              position="absolute"
              top={2}
              right={2}
              colorScheme="red"
              onClick={removeImage}
              aria-label="Eliminar imagen"
            />
          </Box>
        )}
      </FormControl>

      <HStack spacing={4}>
        <FormControl isRequired>
          <FormLabel color="brand.forest">Precio</FormLabel>
          <NumberInput
            value={formData.price}
            onChange={handlePriceChange}
            min={0}
            precision={2}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel color="brand.forest">Duración</FormLabel>
          <Input
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="ej. 2 horas"
          />
        </FormControl>
      </HStack>

      <FormControl>
        <FormLabel color="brand.forest">Ubicación</FormLabel>
        <Input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Ubicación de la experiencia"
        />
      </FormControl>

      <FormControl>
        <FormLabel color="brand.forest">Categoría</FormLabel>
        <Input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="ej. Aventura, Gastronomía"
        />
      </FormControl>

      <Button
        type="submit"
        bg="brand.terra"
        color="white"
        size="lg"
        _hover={{ bg: 'brand.forest' }}
      >
        Guardar Experiencia
      </Button>
    </VStack>
  );
};

export default ExperienceForm;
