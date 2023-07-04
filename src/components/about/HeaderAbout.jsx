import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { BsChevronDoubleDown } from 'react-icons/bs';
import ImageAbout from '../../images/About us page-cuate.svg';
import Bar from '../../images/Frame 1.svg';
import HeaderVideo from '../../images/video.mp4';
import HeaderVideo2 from '../../images/video2.webm';

export default function HeaderAbout() {
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
    <section className="container_video">
        <span className='title_principal'><h1>Nossos valores fundamentais de qualidade, criatividade e comprometimento orientam todas as nossas ações. Nosso objetivo é superar as expectativas dos clientes, oferecendo soluções personalizadas e um atendimento excepcional.</h1>
        <button className="buttoncontact">Converse conosco <div className="icon"><FaArrowRight /></div></button>
  </span>
    <video ref={videoRef} autoPlay loop className="bg_video">
	    <source src={HeaderVideo2} type="video/webm" />
	    <source src={HeaderVideo} type="video/mp4" />
      Seu navegador não suporta o elemento de vídeo.
    </video>
    <div className="overlay" />
    </section>
  );
}



