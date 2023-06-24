import { Link, animateScroll as scroll } from "react-scroll";
import { BiMouse } from 'react-icons/bi';
import { BsChevronDoubleDown } from 'react-icons/bs';
import ImageAbout from '../../images/About us page-cuate.svg';
import Bar from '../../images/Frame 1.svg';

export default function HeaderAbout() {
  function scrollToSection(sectionId) {
    scroll.scrollTo(document.getElementById(sectionId).offsetTop, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutCubic",
    });
  }
  return (
    <>
    <div className='header_about'>
    <img src={ Bar } alt="" />
    </div>
  <section>
  <span className='title_principal'><h1>Nossos valores fundamentais de qualidade, criatividade e comprometimento orientam todas as nossas ações. Nosso objetivo é superar as expectativas dos clientes, oferecendo soluções personalizadas e um atendimento excepcional.</h1>
  </span>
  <section className='imageabout'>
    <img src={ ImageAbout } alt="" />
  </section>
  <div className='arrowdown down2'>
  <div className="mouse">
    <BiMouse />
  </div>
  <div className="down">
  <Link onClick={() => scrollToSection("services")}
  activeClass="active"
  to="section1"
   data-section-id="services"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
  >
    <BsChevronDoubleDown />
  </Link>
  </div>
  </div>
  </section>
  </>
  );
}



