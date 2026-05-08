import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './layouts/Layout';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [isSiteMounted, setIsSiteMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSiteMounted(true);
    }, 2200); // Monta o site após 2.2s (quando o traçado já terminou)
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader />
      <ScrollToTop />
      {isSiteMounted && (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </Layout>
      )}
    </Router>
  );
}

export default App;
