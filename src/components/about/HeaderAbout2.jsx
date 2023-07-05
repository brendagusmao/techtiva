import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect, useRef } from 'react';
import { BiMouse } from 'react-icons/bi';
import { BsChevronDoubleDown } from 'react-icons/bs';
import ImageAbout from '../../images/About us page-cuate.svg';
import Bar from '../../images/Frame 1.svg';
import HeaderVideo from '../../images/video.mp4';
import HeaderVideo2 from '../../images/video2.webm';

export default function HeaderAbout2() {
  function scrollToSection(sectionId) {
    scroll.scrollTo(document.getElementById(sectionId).offsetTop, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutCubic",
    });
  }
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Lida com o erro de reprodução automática
        console.log('Erro de reprodução automática:', error);
      });
    }
  }, []);

  return (
    <>
<div className='header_about'>
    <img src={ Bar } alt="" />
    </div>
  <section className="about3">
  <span className='title_principal2'><h1>Nossos valores fundamentais de qualidade, criatividade e comprometimento orientam todas as nossas ações. Nosso objetivo é superar as expectativas dos clientes, oferecendo soluções personalizadas e um atendimento excepcional.</h1>
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



