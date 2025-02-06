import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App'
import './index.css';

const theme = extendTheme({
  colors: {
    brand: {
      forest: '#2C4A3B',
      sand: '#E8E4D9',
      terra: '#C17F59',
      white: '#FFFFFF'
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
