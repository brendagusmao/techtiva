import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
// import Swiper styles;
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Icon from '../../images/web-design.png';
import Suport from '../../images/suport.png';
import Virtual from '../../images/virtual.png';
import Idea from '../../images/idea.png';

function Sales() {
    return (
      <section className="cardsales">
      <Swiper
      spaceBetween={0}
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <div class="card">
          <h1><img src={ Icon } alt="" /></h1><p />
          <h2>Designs de Alta Qualidade</h2><p />
          <desc>Nossos templates profissionais e modernos darão à sua empresa uma aparência sofisticada e profissional, destacando-se da concorrência. Surpreenda seus clientes com um design visualmente atraente e envolvente.</desc>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="card">
          <h1><img src={ Virtual } alt="" /></h1><p />
          <h2>Tecnologia Sob Medida </h2><p />
          <desc>Oferecemos soluções tecnológicas personalizadas para atender às suas necessidades específicas. Desde a construção de um banco de dados eficiente até a integração perfeita com plataformas de pagamento, nossa equipe de especialistas irá potencializar o desempenho do seu negócio online.</desc>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="card">
          <h1><img src={ Suport } alt="" /></h1><p />
          <h2>Suporte Técnico Dedicado</h2><p />
          <desc>Conte com nossa equipe de suporte técnico experiente para ajudá-lo em todas as etapas. Estamos aqui para responder às suas perguntas, oferecer orientação especializada e garantir que você obtenha o máximo de valor do seu plano. Estamos comprometidos com o seu sucesso.</desc>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="card">
          <h1><img src={ Idea } alt="" /></h1><p />
          <h2>Personalização Total</h2><p />
          <desc>Queremos que seu site seja único. Oferecemos flexibilidade e recursos de personalização para garantir que seu site reflita a identidade e os valores da sua empresa. Trabalharemos juntos para criar uma presença online exclusiva e cativante para o seu negócio.</desc>
        </div>
      </SwiperSlide>
       </Swiper> 
     </section>
    );
  }
  
  export default Sales;
  