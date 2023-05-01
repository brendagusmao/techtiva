import { FaArrowRight } from 'react-icons/fa';
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
          <h1> Transforme seu negócio</h1>
          <section className="description">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </section>
          <button type='button'>
            saiba mais <i><FaArrowRight  /></i>
          </button>
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
