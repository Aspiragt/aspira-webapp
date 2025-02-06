import React from 'react';
import { Box, Image, Heading, Text, VStack, HStack, Badge } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const ExperienceCard = ({ title, description, image, price }) => {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'lg'
      }}
      height="100%"
    >
      <Image
        src={image}
        alt={title}
        objectFit="cover"
        height="200px"
        width="100%"
      />
      <VStack p={6} align="start" spacing={3}>
        <Heading as="h3" size="md" color="brand.forest">
          {title}
        </Heading>
        <Text color="gray.600">
          {description}
        </Text>
        <HStack justify="space-between" width="100%">
          <Badge colorScheme="green" fontSize="md" py={1} px={2}>
            Q{price}
          </Badge>
        </HStack>
      </VStack>
    </Box>
  );
};

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};
