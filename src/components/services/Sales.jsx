import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import {SiPagespeedinsights} from 'react-icons/si';
// import Swiper styles;
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Sales() {
    return (
    <section className="cardsales">
      <Swiper
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
      <SwiperSlide>
        <div class="card">
          <h1><SiPagespeedinsights /></h1><p />
          <h2>Subtitulo </h2><p />
          <desc>texto aqui falando o que quiser, tipo blablabla</desc>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="card">
          <h1><SiPagespeedinsights /></h1><p />
          <h2>Subtitulo 2 </h2><p />
          <desc>texto aqui falando o que quiser, tipo blablabla</desc>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="card">
          <h1><SiPagespeedinsights /></h1><p />
          <h2>Subtitulo 3</h2><p />
          <desc>texto aqui falando o que quiser, tipo blablabla</desc>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="card">
          <h1><SiPagespeedinsights /></h1><p />
          <h2>Subtitulo 4</h2><p />
          <desc>texto aqui falando o que quiser, tipo blablabla</desc>
        </div>
      </SwiperSlide>
       </Swiper> 
     </section>
    );
  }
  
  export default Sales;
  