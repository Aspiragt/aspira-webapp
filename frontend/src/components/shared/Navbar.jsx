import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Container,
  HStack,
  Link,
  Text,
  Button,
  useDisclosure,
  IconButton,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

const NavLink = ({ to, children, isActive }) => (
  <Link
    as={RouterLink}
    to={to}
    px={4}
    py={2}
    rounded="md"
    color={isActive ? "brand.terra" : "brand.forest"}
    fontWeight="500"
    position="relative"
    _hover={{
      color: "brand.terra",
      textDecoration: "none",
      _after: {
        width: "100%"
      }
    }}
    _after={{
      content: '""',
      position: "absolute",
      width: isActive ? "100%" : "0%",
      height: "2px",
      bottom: "0",
      left: "0",
      bg: "brand.terra",
      transition: "width 0.2s ease"
    }}
  >
    {children}
  </Link>
);

const RedeemButton = ({ onClick }) => (
  <Button
    bg="brand.terra"
    color="white"
    _hover={{ bg: 'brand.forest' }}
    size="md"
    as={RouterLink}
    to="/redeem"
    onClick={onClick}
  >
    Redimir
  </Button>
);

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    const shouldBeScrolled = window.scrollY > 20;
    if (isScrolled !== shouldBeScrolled) {
      setIsScrolled(shouldBeScrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    let timeoutId;
    const throttledScroll = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 100);
      }
    };

    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  const navItems = [
    { path: '/experiences', label: 'Experiencias' },
    { path: '/how-it-works', label: '¿Cómo Funciona?' },
    { path: '/about', label: 'Nosotros' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      zIndex={1000}
      bg={isScrolled ? "white" : "transparent"}
      transition="all 0.3s ease"
      boxShadow={isScrolled ? "sm" : "none"}
      backdropFilter={isScrolled ? "blur(10px)" : "none"}
    >
      <Container maxW="container.xl" py={4}>
        <HStack justify="space-between" align="center">
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="brand.forest"
              _hover={{ color: 'brand.terra' }}
              transition="color 0.2s ease"
            >
              Aspira
            </Text>
          </Link>

          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} isActive={isActive(item.path)}>
                {item.label}
              </NavLink>
            ))}
            <RedeemButton />
          </HStack>

          {/* Mobile Navigation Button */}
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            variant="ghost"
            color="brand.forest"
            icon={<HamburgerIcon boxSize={6} />}
            aria-label="Open Menu"
          />
        </HStack>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer 
        isOpen={isOpen} 
        placement="right" 
        onClose={onClose}
        zIndex={2000}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="brand.forest" />
          <DrawerHeader borderBottomWidth="1px" color="brand.forest">
            Menú
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch" mt={4}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  as={RouterLink}
                  to={item.path}
                  py={2}
                  color="brand.forest"
                  fontWeight="500"
                  onClick={onClose}
                  _hover={{ color: 'brand.terra' }}
                >
                  {item.label}
                </Link>
              ))}
              <RedeemButton onClick={onClose} />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
