import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Navbar } from './components/shared/Navbar';
import { Footer } from './components/shared/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { ScrollToTopButton } from './components/common/ScrollToTopButton';
import { Home } from './pages/Home';
import { Experiences } from './pages/Experiences';
import { ExperienceDetail } from './pages/ExperienceDetail';
import { About } from './pages/About';
import { HowItWorks } from './pages/HowItWorks';
import Redeem from './pages/Redeem';
import { Admin } from './pages/Admin';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <ScrollToTop />
      <Navbar />
      <Box as="main" flex="1" mt={{ base: '60px', md: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/experiences/:id" element={<ExperienceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/redeem" element={<Redeem />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
      <ScrollToTopButton />
    </Box>
  );
};

export default App;
