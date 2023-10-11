import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/home/Header';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Spin } from 'antd';
import SeeProjects from './pages/SeProjects';
import ProjectDetails from './pages/ProjectsDetails';
import ScrollToTopButton from './components/scrolltotop';

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
    }, 1000);
  }, []);

  return (
    <Router>
      <>
        {loading ? (
          <div className='loading'>
          <Spin size="large" className='hello'/>
          </div>
        ) : (
          <>
            <ScrollToTopButton /> {/* Adicione o componente ScrollToTop aqui */}
            <ScrollToTop />
            <Routes>
              <Route path="/sobre" element={<About />} />
              <Route exact path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<SeeProjects /> }/>
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects/details/:projectId" element={<ProjectDetails />} />
            </Routes>
          </>
        )}
      </>
    </Router>
  );
}

export default App;
