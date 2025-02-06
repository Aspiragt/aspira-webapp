import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  HStack,
  Icon,
  useToast,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { ReviewCard } from './ReviewCard';

export const ReviewSection = ({ experienceId, reviews: initialReviews }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);
  const toast = useToast();
  const [reviews, setReviews] = React.useState(initialReviews);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newReview = {
      name: formData.get('name'),
      comment: formData.get('comment'),
      rating,
      date: new Date().toLocaleDateString('es-GT', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };

    setReviews([newReview, ...reviews]);
    onClose();
    toast({
      title: '¡Gracias por tu reseña!',
      description: 'Tu opinión nos ayuda a mejorar.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box py={8}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h2" size="xl" color="brand.forest" mb={2}>
            Reseñas
          </Heading>
          <Text color="gray.600">
            Conoce las experiencias de otros viajeros
          </Text>
        </Box>

        <Button
          onClick={onOpen}
          bg="brand.terra"
          color="white"
          _hover={{ bg: 'brand.forest' }}
          alignSelf="flex-start"
        >
          Escribir una reseña
        </Button>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </SimpleGrid>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Escribe tu reseña</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>Tu nombre</FormLabel>
                    <Input name="name" placeholder="Nombre" />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Calificación</FormLabel>
                    <HStack spacing={2}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon
                          key={star}
                          as={FaStar}
                          boxSize={6}
                          color={
                            star <= (hover || rating)
                              ? 'brand.terra'
                              : 'gray.300'
                          }
                          cursor="pointer"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHover(star)}
                          onMouseLeave={() => setHover(0)}
                        />
                      ))}
                    </HStack>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Tu experiencia</FormLabel>
                    <Textarea
                      name="comment"
                      placeholder="Cuéntanos sobre tu experiencia..."
                      rows={4}
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    bg="brand.terra"
                    color="white"
                    _hover={{ bg: 'brand.forest' }}
                    w="100%"
                  >
                    Enviar reseña
                  </Button>
                </VStack>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </VStack>
    </Box>
  );
};
