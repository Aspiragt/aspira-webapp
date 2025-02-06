import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css';

const theme = extendTheme({
  colors: {
    brand: {
      forest: '#2C4A3B',  // Verde Bosque - Color principal
      sand: '#E8E4D9',    // Beige Arena - Color base/fondo
      terra: '#C17F59',   // Terracota - Color de acento/CTA
      white: '#FFFFFF'
    }
  },
  styles: {
    global: {
      body: {
        bg: 'brand.sand',
        color: 'brand.forest'
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
