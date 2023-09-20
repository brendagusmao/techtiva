import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/home/Header';
import Services from './pages/Services';
import About from './pages/About';
import Home from './pages/Home';
import { Spin } from 'antd';

// Componente para redefinir a posição de rolagem
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule um carregamento assíncrono
    setTimeout(() => {
      setLoading(false); // Quando o carregamento for concluído, altere o estado para false
    }, 2000);
  }, []);

  return (
    <Router>
      <>
        {loading ? (
          <Spin size="large" className='hello'/>
        ) : (
          <>
            <ScrollToTop /> {/* Adicione o componente ScrollToTop aqui */}
            <Routes>
              <Route path="/sobre" element={<About />} />
              <Route exact path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<div>Em construção</div>} />
              <Route path="/contact" element={<div>Em construção</div>} />
            </Routes>
          </>
        )}
      </>
    </Router>
  );
}

export default App;
