import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const App = () => {
  return (
    <Box p={8} maxW="container.xl" mx="auto">
      <Heading color="#2C4A3B" mb={4}>Aspira Guatemala</Heading>
      <Text fontSize="xl" color="#C17F59">
        Experiencias únicas en Guatemala
      </Text>
    </Box>
  );
};

export default App;
