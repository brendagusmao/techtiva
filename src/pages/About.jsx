import React, { useState, useEffect} from 'react';
import { Spin } from 'antd';
import ImageAbout from '../images/About us page-cuate.svg';
import Bar from '../images/Frame 1.svg';
import '../css/About.css'
import Nav from '../components/navegation/Nav';
function About() {
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule um tempo de carregamento de 2 segundos
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

    return  (
      <>
      <Nav />
        <div className='header_about'>
          <img src={ Bar } alt="" />
          {/* <svg viewBox="0 0 500 100"><path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="#7C1795"></path><path d="M 0 50 C 150 150 330 -30 500 50 L 500 0 L 0 0" fill="#1E0D77" opacity="1"></path><path d="M 0 50 C 215 150 250 0 500 100 L 500 0 L 0 0" fill="#1E0D77" opacity="0.5"></path></svg> */}
        </div>
        <span className='title_principal'><h1>Nossos valores fundamentais de qualidade, criatividade e comprometimento orientam todas as nossas ações. Nosso objetivo é superar as expectativas dos clientes, oferecendo soluções personalizadas e um atendimento excepcional.</h1>
        </span>
        <section className='imageabout'>
          <img src={ ImageAbout } alt="" />
        </section>
        <div className='about'>
          <span className='description'>
            <h1>Sobre Nós</h1>
              Na [Nome da Empresa], estamos comprometidos em fornecer soluções de alta qualidade para impulsionar o sucesso online de empresas e empreendedores. Somos apaixonados por web design, desenvolvimento e criação de experiências digitais incríveis. Com uma equipe de profissionais talentosos e experientes, trabalhamos incansavelmente para atender às necessidades exclusivas de cada cliente, garantindo resultados excepcionais e satisfatórios.
          </span>
        </div>
          </>
    )
}
  
export default About;