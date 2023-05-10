import React, { useState, useEffect} from 'react';
import Image from '../images/ImageAbout.png';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from "swiper";
// import {FaReact} from 'react-icons/fa';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import MyContext from '../context/MyContext';
import Sobre from '../components/about/Sobre';
import '../css/About.css';

function About() {
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
    <div className="About" id="about">
      <section className={className ? 'main show' : 'main visible'}>
      <Sobre />
      </section>
      <section className='maintwo'>
      {/* <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide><FaReact /></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper> */}
      <img src={Image} alt='' />
      </section>
    </div>
  );
}
 
export default About;
