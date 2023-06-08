import React, { useEffect } from 'react';
import '../css/Projects.css';
import Oi from './oi';
import { debounce, animeScroll } from '../components/scrollUtils';
function Projects() {
    useEffect(() => {
        const handleScroll = debounce(() => {
          animeScroll();
        }, 200);
    
        animeScroll();
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
    <div className="Projects" id="projects">
        <h1 data-anime="top"> Nossos Projetos</h1>
        <h2 data-anime="top"> Confira abaixo nossos modelos</h2>
        <section>
        <Oi />
        </section>
    </div>
    );
  }
  
  export default Projects;
  