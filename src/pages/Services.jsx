import React, { useState, useEffect} from 'react';
import {BsCheck2Circle} from 'react-icons/bs';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from "swiper";
// import {FaReact} from 'react-icons/fa';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import MyContext from '../context/MyContext';
import Sales from '../components/services/Sales';
import '../css/Services.css';

function Services() {
  const [className, setClassName] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !className) {
        setClassName(true);
      } else if (window.scrollY <= 100 && className) {
        setClassName(false);
      }
    };
    window.addEventListener('load', handleScroll);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('load', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [className]);

  return  ( 
    <div className="Services" id="services">
      <section className={className ? 'main' : 'main visible'}>
      <Sales />
      </section>
      <section className={className ? 'maintwo show' : 'maintwo'}>
      <div className="two">
        <h2>Basic</h2>
        <ul>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
        </ul>
        <div className='value'><span>R$</span> 23,58</div>
        <button type="button"> Selecionar plano</button>
      </div>
      <div className="two">
        <h2>Medium</h2>
        <ul>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
        </ul>
        <div className='value'><span>R$</span> 23,58</div>
        <button type="button"> Selecionar plano</button>
      </div>
      <div className="two">
        <h2>Premium <div className="crown" /></h2>
        <ul>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
        </ul>
        <button type="button"> Fazer Orçamento</button>
      </div>
      </section>
    </div>
  );
}
 
export default Services;
