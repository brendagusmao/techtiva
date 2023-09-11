import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";
import { BiMouse } from 'react-icons/bi';
import { BsChevronDoubleDown } from 'react-icons/bs';
import Nav from '../components/navegation/Nav';
import '../css/Header.css';

function Header() {

  function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      console.log(`Rolando para a seção com ID: ${sectionId}`);
      scroll.scrollTo(targetElement.offsetTop, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutCubic",
      });
    } else {
      console.error(`Elemento com ID "${sectionId}" não encontrado.`);
    }
  }
  return  ( 
    <>
    <header id="home">
    <Nav />
    <section className='sidebar'>
      <h1>A parceria que faltava para seu negocio decolar</h1>
      <section className='desc'>Nossa missão é desenvolver soluções digitais para impulsonar os resultados dos nossos clientes.
      </section>
      <article className="promotion"> Plano Basic - <span>20%</span> OFF
      <div className='sale'><h3>R$</h3> <div>79,99</div><h3>/ mês</h3></div>
      <div className='limited'>Por tempo limitado</div>
      <button>
      <a href="#plans">
    Aproveitar a oferta <i><BsArrowRight /></i>
      </a></button>
      </article>
    </section>
    <div className='imagecomponent' />
    </header>
        <section className='bar'>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 1440 160" fill="#FCFCFC">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 117L120 130C240 143 480 169 720 149.5C960 130 1200 65 1320 32.5L1440 0V273H1320C1200 273 960 273 720 273C480 273 240 273 120 273H0V117Z" fill="#FCFCFC"/>
        </svg>
        </section>
        {/* <section id="plans">
</section> */}
</>
  );
}
 
export default Header;
