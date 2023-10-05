import { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { Button, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import Login from '../../pages/Login';
import ToggleMenu from './toggleMenu';
import ilogo from '../../images/icons svg/image 3.svg';
// import MyContext from '../context/MyContext';
import '../../css/Header.css';

function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
    const history = useNavigate();

    const home = () => {
      // history.push('/new-path'); // Atualiza a URL para a nova rota
      history('/');
    };
    const contact = () => {
      // history.push('/new-path'); // Atualiza a URL para a nova rota
      history('#contact');
    };
    const about = () => {
      // history.push('/new-path'); // Atualiza a URL para a nova rota
      history('/sobre');
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
            to="home"
            spy={true}
            smooth={true}
            offset={70}
            data-section-id="home"
            duration={300} className="scrollto">
                Home
        </Link>
        <Link onClick={about} className="scrollto">Sobre Nós</Link>
        <Link onClick={scrollto}
            activeClass="active"
            to="plans"
            spy={true}
            smooth={true}
            offset={70}
            data-section-id="plans"
            duration={500} className="scrollto">Serviços</Link>
        <Link onClick={scrollto}
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={70}
            data-section-id="projects"
            duration={500} className="scrollto">Projetos</Link>
        <Link onClick={contact}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            data-section-id="contact"
            duration={500} className="scrollto">Contato</Link>
      </div>
      <div className="boxlogin">
        <button className='cadastre'> Cadastre-se</button>
      <button className='login' onClick={showModal}> Login </button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Login />
      </Modal>
      </div>
    </nav>
  );
}

export default Nav;