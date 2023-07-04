import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
// import Services from './pages/Services';
// import Projects from './pages/Projects';
// import Avaliation from './pages/Avaliation';
import About from './pages/About';
import Home from './pages/Home';
// import Nav from '../src/components/navegation/Nav';
import { Spin } from 'antd';

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
        {/* <Nav /> */}
        {loading ? (
            <Spin size="large" className='hello'/>
          ) : (
        <Routes>
          <Route path="/sobre" element={<About />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<div>Em construção</div>} />
          <Route path="/projects" element={<div>Em construção</div>} />
          <Route path="/contact" element={<div>Em construção</div>} />
        </Routes>
        )
      }
        {/* <Services />
        <Projects />
        <Avaliation /> */}
      </>
    </Router>
  );
}

export default App;
