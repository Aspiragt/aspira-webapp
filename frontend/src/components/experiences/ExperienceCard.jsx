import React from 'react';
import { Box, Image, Heading, Text, VStack, HStack, Icon, Button } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

export const ExperienceCard = ({ title, description, image, price, location, duration }) => {
  const slug = title.toLowerCase().replace(/ /g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  return (
    <MotionBox
      as={RouterLink}
      to={`/experiences/${slug}`}
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      shadow="md"
      _hover={{ textDecoration: 'none' }}
      whileHover={{ y: -5 }}
      transition="0.2s ease"
    >
      <Box position="relative">
        <Image
          src={image}
          alt={title}
          w="100%"
          h="250px"
          objectFit="cover"
          transition="0.3s ease"
          _groupHover={{ transform: 'scale(1.05)' }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.300"
          transition="0.3s ease"
          _groupHover={{ bg: 'blackAlpha.400' }}
        />
      </Box>

      <VStack p={6} spacing={4} align="stretch">
        <VStack align="start" spacing={2}>
          <Heading size="md" color="brand.forest">
            {title}
          </Heading>
          <Text noOfLines={2} color="gray.600">
            {description}
          </Text>
        </VStack>

        <VStack spacing={2}>
          <HStack spacing={4} w="100%">
            <HStack>
              <Icon as={FaMapMarkerAlt} color="brand.terra" />
              <Text fontSize="sm" color="gray.600">
                {location}
              </Text>
            </HStack>
            <HStack>
              <Icon as={FaClock} color="brand.terra" />
              <Text fontSize="sm" color="gray.600">
                {duration}
              </Text>
            </HStack>
          </HStack>
        </VStack>

        <HStack justify="space-between" align="center">
          <Text fontWeight="bold" fontSize="xl" color="brand.terra">
            Q{price}
          </Text>
          <Button
            size="sm"
            bg="brand.terra"
            color="white"
            _hover={{ bg: 'brand.forest' }}
          >
            Ver más
          </Button>
        </HStack>
      </VStack>
    </MotionBox>
  );
};
