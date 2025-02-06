import React from 'react';
import {
  Box,
  Flex,
  Text,
  Avatar,
  HStack,
  Icon,
  VStack,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export const ReviewCard = ({ review }) => {
  const { name, avatar, rating, date, comment } = review;

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      bg="white"
      p={6}
      borderRadius="lg"
      shadow="md"
      _hover={{ shadow: 'lg' }}
    >
      <VStack align="stretch" spacing={4}>
        <Flex justify="space-between" align="center">
          <HStack spacing={3}>
            <Avatar size="md" name={name} src={avatar} />
            <Box>
              <Text fontWeight="bold" color="brand.forest">
                {name}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {date}
              </Text>
            </Box>
          </HStack>
          <HStack spacing={1}>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <Icon
                  key={i}
                  as={FaStar}
                  color={i < rating ? 'brand.terra' : 'gray.300'}
                />
              ))}
          </HStack>
        </Flex>
        <Text color="gray.600">{comment}</Text>
      </VStack>
    </MotionBox>
  );
};
