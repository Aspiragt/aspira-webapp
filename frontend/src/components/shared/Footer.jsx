import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  Icon,
  VStack,
  HStack,
  Divider,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const SocialButton = ({ icon, label, href }) => {
  return (
    <Link
      href={href}
      isExternal
      _hover={{
        textDecoration: 'none',
        transform: 'translateY(-2px)',
      }}
      transition="all 0.3s"
    >
      <VStack spacing={2} align="center">
        <Icon
          as={icon}
          w={6}
          h={6}
          color="brand.forest"
          _hover={{ color: 'brand.terra' }}
          transition="all 0.3s"
        />
        <Text fontSize="sm" color="gray.600">
          {label}
        </Text>
      </VStack>
    </Link>
  );
};

export const Footer = () => {
  return (
    <Box
      bg="white"
      color="gray.700"
      borderTop="1px"
      borderColor="gray.200"
    >
      <Container maxW="container.xl" py={10}>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }}
          gap={8}
          textAlign="center"
        >
          <GridItem colSpan={{ base: 1, md: 4 }}>
            <VStack spacing={4} mb={8}>
              <Text
                fontSize="3xl"
                fontWeight="bold"
                color="brand.forest"
                letterSpacing="wide"
              >
                ASPIRA
              </Text>
              <Text fontSize="lg" color="gray.600" maxW="xl" mx="auto">
                Descubre experiencias únicas en Guatemala
              </Text>
            </VStack>
          </GridItem>

          <GridItem>
            <VStack spacing={4} align="center">
              <Text fontWeight="bold" color="brand.forest" fontSize="lg">
                Explorar
              </Text>
              <VStack spacing={2} align="center">
                <Link as={RouterLink} to="/experiences" color="gray.600" _hover={{ color: 'brand.terra' }}>
                  Experiencias
                </Link>
                <Link as={RouterLink} to="/how-it-works" color="gray.600" _hover={{ color: 'brand.terra' }}>
                  ¿Cómo Funciona?
                </Link>
                <Link as={RouterLink} to="/about" color="gray.600" _hover={{ color: 'brand.terra' }}>
                  Nosotros
                </Link>
              </VStack>
            </VStack>
          </GridItem>

          <GridItem>
            <VStack spacing={4} align="center">
              <Text fontWeight="bold" color="brand.forest" fontSize="lg">
                Legal
              </Text>
              <VStack spacing={2} align="center">
                <Link as={RouterLink} to="/privacy" color="gray.600" _hover={{ color: 'brand.terra' }}>
                  Privacidad
                </Link>
                <Link as={RouterLink} to="/terms" color="gray.600" _hover={{ color: 'brand.terra' }}>
                  Términos
                </Link>
                <Link as={RouterLink} to="/faq" color="gray.600" _hover={{ color: 'brand.terra' }}>
                  FAQ
                </Link>
              </VStack>
            </VStack>
          </GridItem>

          <GridItem>
            <VStack spacing={4} align="center">
              <Text fontWeight="bold" color="brand.forest" fontSize="lg">
                Contacto
              </Text>
              <VStack spacing={2} align="center">
                <Link href="tel:+50212345678" color="gray.600" _hover={{ color: 'brand.terra' }}>
                  +502 1234 5678
                </Link>
                <Link href="mailto:hola@aspira.gt" color="gray.600" _hover={{ color: 'brand.terra' }}>
                  hola@aspira.gt
                </Link>
              </VStack>
            </VStack>
          </GridItem>

          <GridItem>
            <VStack spacing={4} align="center">
              <Text fontWeight="bold" color="brand.forest" fontSize="lg">
                Síguenos
              </Text>
              <HStack spacing={6} justify="center">
                <SocialButton
                  icon={FaInstagram}
                  label="Instagram"
                  href="https://instagram.com/aspira.gt"
                />
                <SocialButton
                  icon={FaFacebook}
                  label="Facebook"
                  href="https://facebook.com/aspira.gt"
                />
                <SocialButton
                  icon={FaWhatsapp}
                  label="WhatsApp"
                  href="https://wa.me/50212345678"
                />
              </HStack>
            </VStack>
          </GridItem>
        </Grid>

        <Divider my={8} borderColor="gray.200" />

        <Text textAlign="center" color="gray.500">
          {new Date().getFullYear()} Aspira Guatemala. Todos los derechos reservados.
        </Text>
      </Container>
    </Box>
  );
};
