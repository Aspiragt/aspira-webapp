import {
  Box,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Input,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,
  HStack
} from '@chakra-ui/react';

const FilterSidebar = ({ filters, onFilterChange }) => {
  return (
    <Box
      w="300px"
      bg="white"
      p={6}
      borderRadius="lg"
      borderWidth="1px"
      h="fit-content"
    >
      <VStack spacing={6} align="stretch">
        <Heading size="md" color="brand.green">
          Filtros
        </Heading>

        <FormControl>
          <FormLabel>Categoría</FormLabel>
          <Select
            value={filters.category}
            onChange={(e) => onFilterChange('category', e.target.value)}
            placeholder="Todas las categorías"
          >
            <option value="aventura">Aventura</option>
            <option value="gastronomia">Gastronomía</option>
            <option value="bienestar">Bienestar</option>
            <option value="cultura">Cultura</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Ubicación</FormLabel>
          <Input
            placeholder="Ciudad"
            value={filters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Rango de Precio</FormLabel>
          <HStack spacing={4}>
            <Input
              placeholder="Min"
              type="number"
              value={filters.minPrice}
              onChange={(e) => onFilterChange('minPrice', e.target.value)}
            />
            <Input
              placeholder="Max"
              type="number"
              value={filters.maxPrice}
              onChange={(e) => onFilterChange('maxPrice', e.target.value)}
            />
          </HStack>
        </FormControl>
      </VStack>
    </Box>
  );
};

export default FilterSidebar;
