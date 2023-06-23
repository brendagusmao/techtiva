import { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from 'react-router-dom';
import ToggleMenu from './toggleMenu';
// import MyContext from '../context/MyContext';
import '../../css/Header.css';

function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const history = useNavigate();

    const home = () => {
      // history.push('/new-path'); // Atualiza a URL para a nova rota
      history('/');
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

  return  ( 
    <nav className={isScrolled ? 'container-fluid navcolor' : 'container-fluid'}>
    <div className="logo"> <div className="ilogo" />techtiva</div>
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
        <Link onClick={scrollto}
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={70}
            data-section-id="services"
            duration={500} className="scrollto">Serviços</Link>
        <Link onClick={scrollto}
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={70}
            data-section-id="projects"
            duration={500} className="scrollto">Projetos</Link>
        <Link onClick={scrollto}
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            data-section-id="contact"
            duration={500} className="scrollto">Contato</Link>
      </div>
    </nav>
  );
}

export default Nav;