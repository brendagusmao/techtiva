import { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
// import MyContext from '../context/MyContext';
import '../../css/Header.css';

function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);

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
    <div className="logo"> <div className="ilogo" />echtiva</div>
      <div className='navegation'> 
        <Link onClick={scrollto}
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={70}
            data-section-id="home"
            duration={300} className="scrollto">
                Home
        </Link>
        <Link onClick={scrollto}
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            data-section-id="about"
            duration={500} className="scrollto">Sobre Nós</Link>
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
            offset={-70}
            data-section-id="contact"
            duration={500} className="scrollto">Contato</Link>
      </div>
    </nav>
  );
}
 
export default Nav;
