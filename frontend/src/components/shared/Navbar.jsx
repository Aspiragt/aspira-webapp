import React from 'react';
import { Box, Container, HStack, Link, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Box as="nav" bg="white" py={4} shadow="sm">
      <Container maxW="container.xl">
        <HStack justify="space-between">
          <Link as={RouterLink} to="/">
            <Image src="/images/logo.png" alt="Aspira Logo" h="40px" />
          </Link>
          <HStack spacing={8}>
            <Link
              as={RouterLink}
              to="/experiences"
              color="brand.forest"
              fontWeight="medium"
              _hover={{ color: 'brand.terra' }}
            >
              Experiencias
            </Link>
            <Link
              as={RouterLink}
              to="/about"
              color="brand.forest"
              fontWeight="medium"
              _hover={{ color: 'brand.terra' }}
            >
              Nosotros
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};
