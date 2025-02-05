import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Inter', sans-serif",
  },
  colors: {
    brand: {
      50: '#E6F6F5',
      100: '#CCE9E7',
      200: '#99D4CF',
      300: '#66BEB7',
      400: '#33A89F',
      500: '#009287',
      600: '#00756C',
      700: '#005851',
      800: '#003B36',
      900: '#001E1B',
    },
    accent: {
      50: '#FFF4E6',
      100: '#FFE8CC',
      200: '#FFD199',
      300: '#FFBA66',
      400: '#FFA333',
      500: '#FF8C00',
      600: '#CC7000',
      700: '#995400',
      800: '#663800',
      900: '#331C00',
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
          },
        },
      },
    },
  },
});

export default theme;
