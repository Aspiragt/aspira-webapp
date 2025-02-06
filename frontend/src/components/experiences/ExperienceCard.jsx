import React from 'react';
import { Box, Image, Heading, Text, VStack, HStack, Badge, Icon } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const ExperienceCard = ({ id, title, description, image, price, location, duration }) => {
  return (
    <Box
      as={RouterLink}
      to={`/experiences/${id}`}
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'lg',
        textDecoration: 'none'
      }}
      height="100%"
      display="block"
    >
      <Box position="relative">
        <Image
          src={image}
          alt={title}
          objectFit="cover"
          height="250px"
          width="100%"
        />
        <Badge
          position="absolute"
          top={4}
          right={4}
          colorScheme="green"
          fontSize="md"
          py={1}
          px={2}
        >
          Q{price}
        </Badge>
      </Box>
      <VStack p={6} align="start" spacing={3}>
        <Heading as="h3" size="md" color="brand.forest">
          {title}
        </Heading>
        <Text color="gray.600" noOfLines={2}>
          {description}
        </Text>
        <HStack spacing={4} color="gray.500">
          {location && (
            <HStack spacing={1}>
              <Icon as={FaMapMarkerAlt} color="brand.terra" />
              <Text fontSize="sm">{location}</Text>
            </HStack>
          )}
          {duration && (
            <HStack spacing={1}>
              <Icon as={FaClock} color="brand.terra" />
              <Text fontSize="sm">{duration}</Text>
            </HStack>
          )}
        </HStack>
      </VStack>
    </Box>
  );
};

ExperienceCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  location: PropTypes.string,
  duration: PropTypes.string
};
