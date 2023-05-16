import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { Link, animateScroll as scroll } from "react-scroll";
import { BiMouse } from 'react-icons/bi';
import { BsChevronDoubleDown } from 'react-icons/bs';
import Nav from '../components/navegation/Nav';
import '../css/Header.css';

function Header() {

  function scrollToSection(sectionId) {
    scroll.scrollTo(document.getElementById(sectionId).offsetTop, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutCubic",
    });
  }
  return  ( 
    <>
    <Nav />
      <header id="home">
        <div className="sidesc desc">
          <h1>  A parceria que faltava para seu negócio decolar</h1>
          <section className="description">
          Nossa missão é desenvolver soluções digitais para impulsor os resultados dos nossos clientes.<p/>
        </section>
          <section className="buttoncard">
          <button type='button'>
            saiba mais <i><FaArrowRight  /></i>
          </button>
          <button type='button' style={{background: 'green', color:'white'}}>
            Contate <i><FaWhatsapp  /></i>
          </button>
          </section>
        </div>
        <div className="image" />
        <div className='arrowdown'>
        <div className="mouse">
          <BiMouse />
        </div>
        <div className="down">
        <Link onClick={() => scrollToSection("about")}
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >
          <BsChevronDoubleDown />
        </Link>
        </div>
        </div>
      </header>
      </>
  );
}
 
export default Header;
