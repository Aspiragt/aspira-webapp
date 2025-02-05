import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ExperienceCatalog } from './pages/experiences/ExperienceCatalog';
import { ExperienceDetail } from './pages/experiences/ExperienceDetail';
import { HowItWorks } from './pages/HowItWorks';
import { useScrollToTop } from './hooks/useScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ScrollToTop() {
  useScrollToTop();
  return null;
}

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="app">
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experiences" element={<ExperienceCatalog />} />
              <Route path="/experiences/:id" element={<ExperienceDetail />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
            </Routes>
          </main>
          <Footer />
          <ToastContainer 
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
