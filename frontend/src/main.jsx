import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css';

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
