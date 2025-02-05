import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Experiences from './pages/Experiences';
import RedeemGift from './pages/RedeemGift';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/redeem" element={<RedeemGift />} />
          <Route path="/redeem/:code" element={<RedeemGift />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
