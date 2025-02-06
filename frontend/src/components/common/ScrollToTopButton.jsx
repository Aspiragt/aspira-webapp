import React, { useState, useEffect } from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const MotionIconButton = motion(IconButton);

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Controla la visibilidad del botón basado en el scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Función para scroll suave hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionIconButton
          as={motion.button}
          icon={<FaArrowUp />}
          size="lg"
          colorScheme="terra"
          aria-label="Volver arriba"
          position="fixed"
          bottom="4"
          right="4"
          zIndex="tooltip"
          borderRadius="full"
          boxShadow="lg"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          _hover={{
            transform: 'translateY(-2px)',
          }}
        />
      )}
    </AnimatePresence>
  );
};
