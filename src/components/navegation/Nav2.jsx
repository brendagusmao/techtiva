import { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { Button, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import Login from '../../pages/Login';
import ToggleMenu from './toggleMenu';
import ilogo from '../../images/icons svg/image 3.svg';
// import MyContext from '../context/MyContext';
import '../../css/Header.css';

function Nav2() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
    const history = useNavigate();

    const home = () => {
      // history.push('/new-path'); // Atualiza a URL para a nova rota
      history('/');
    };
    const about = () => {
      // history.push('/new-path'); // Atualiza a URL para a nova rota
      history('/sobre');
    };
    const services = () => {
        // history.push('/new-path'); // Atualiza a URL para a nova rota
        history('/services');
      };
      const projects = () => {
        // history.push('/new-path'); // Atualiza a URL para a nova rota
        history('/projects');
      };
      const contact = () => {
        // history.push('/new-path'); // Atualiza a URL para a nova rota
        history('/contact');
      };
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100 && !isScrolled) {
          setIsScrolled(true);
        } else if (window.scrollY <= 100 && isScrolled) {
          setIsScrolled(false);
        }
      };
      window.addEventListener('load', handleScroll);
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.addEventListener('load', handleScroll);
        window.removeEventListener('scroll', handleScroll);
      };
    }, [isScrolled]);

    function scrollToSection(sectionId) {
        scroll.scrollTo(document.getElementById(sectionId).offsetTop, {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutCubic",
        });
      }
    
    function scrollto({target}) {
        const links = Array.from(document.getElementsByClassName('scrollto'));
        links.forEach((link) => link.classList.remove('Selected'));
        target.classList.add('Selected');
        scrollToSection(target.dataset.sectionId);
    }
      const [showElement, setShowElement] = useState(false);
    
      const handleClick = () => {
        setShowElement(!showElement);
      };
  return  ( 
    <nav className={isScrolled ? 'container-fluid navcolor' : 'container-fluid'}>
    <div className="logo">
    <img src={ilogo} alt="Techtiva Logo" />
      techtiva</div>
      <ToggleMenu />
      <div className='navegation'> 
        <Link onClick={home}
            activeClass="active"
            to="/"
            spy={true}
            smooth={true}
            offset={70}
            data-section-id="home"
            duration={300} className="scrollto">
                Home
        </Link>
        <Link onClick={about} className="scrollto">Sobre Nós</Link>
        <Link onClick={services} className="scrollto">Serviços</Link>
        <Link onClick={projects} className="scrollto">Projetos</Link>
        <Link onClick={contact} className="scrollto">Contato</Link>
      </div>
      <div className="boxlogin">
        <button className='cadastre'> Cadastre-se</button>
      <button className='login' onClick={handleModalOpen}> Login </button>
      </div>
      {isModalOpen && (
        <Login onClose={handleModalClose} />
      )}
    </nav>
    
  );
}

export default Nav2;