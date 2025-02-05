import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RedeemGift from './pages/RedeemGift';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redeem" element={<RedeemGift />} />
        <Route path="/redeem/:code" element={<RedeemGift />} />
      </Routes>
    </Router>
  );
}

export default App;
