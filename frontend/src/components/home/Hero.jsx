import React from 'react';
import { Box, Container, Heading, Text, Button, Stack } from '@chakra-ui/react';

export const Hero = () => {
  return (
    <Box
      as="section"
      bgImage="url('/images/hero/hero-bg.jpg')"
      bgPosition="center"
      bgSize="cover"
      py={32}
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: 'rgba(44, 74, 59, 0.7)',
      }}
    >
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Stack spacing={6} maxW="2xl" color="white">
          <Heading as="h1" size="2xl">
            Descubre Guatemala a través de experiencias auténticas
          </Heading>
          <Text fontSize="xl">
            Conectamos viajeros con experiencias únicas y sostenibles que celebran la cultura y naturaleza de Guatemala
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              size="lg"
              bg="#C17F59" 
              _hover={{ bg: '#A66D4F' }}
              onClick={() => {}}
            >
              Explorar Experiencias
            </Button>
            <Button
              size="lg"
              variant="outline"
              _hover={{ bg: 'whiteAlpha.200' }}
              onClick={() => {}}
            >
              Conoce más
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
