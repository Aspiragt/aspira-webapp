import React from 'react';
import { Box, Container, Stack, Text, Link, Icon, HStack } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Box as="footer" bg="brand.forest" color="white" py={12}>
      <Container maxW="container.xl">
        <Stack spacing={8} direction={{ base: 'column', md: 'row' }} justify="space-between">
          <Stack spacing={4} maxW="sm">
            <Text fontSize="lg" fontWeight="bold">
              Aspira Guatemala
            </Text>
            <Text opacity={0.8}>
              Conectando viajeros con experiencias únicas y sostenibles que celebran la cultura y naturaleza de Guatemala.
            </Text>
          </Stack>
          <Stack spacing={4}>
            <Text fontSize="lg" fontWeight="bold">
              Síguenos
            </Text>
            <HStack spacing={4}>
              <Link href="https://facebook.com" isExternal>
                <Icon as={FaFacebook} boxSize={6} />
              </Link>
              <Link href="https://instagram.com" isExternal>
                <Icon as={FaInstagram} boxSize={6} />
              </Link>
              <Link href="https://wa.me/123456789" isExternal>
                <Icon as={FaWhatsapp} boxSize={6} />
              </Link>
            </HStack>
          </Stack>
        </Stack>
        <Text mt={12} textAlign="center" fontSize="sm" opacity={0.8}>
          © {new Date().getFullYear()} Aspira Guatemala. Todos los derechos reservados.
        </Text>
      </Container>
    </Box>
  );
};
