import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#E8E4D9',
        color: '#2C4A3B'
      }
    }
  },
  colors: {
    brand: {
      forest: '#2C4A3B',
      sand: '#E8E4D9',
      terra: '#C17F59',
      white: '#FFFFFF'
    }
  }
});

export default theme;
