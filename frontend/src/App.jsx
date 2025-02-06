import React from 'react';
import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Experiences } from './pages/Experiences';
import { About } from './pages/About';
import { ExperienceDetail } from './pages/ExperienceDetail';
import { Navbar } from './components/shared/Navbar';
import { Footer } from './components/shared/Footer';

const App = () => (
  <Box minH="100vh" bg="brand.sand">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/experiences/:id" element={<ExperienceDetail />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
