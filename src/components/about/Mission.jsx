import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Quality from '../../images/icons svg/quality-svgrepo-com.svg';
import Creative from '../../images/icons svg/braindstorming-creativity-mind-svgrepo-com.svg';
import Compromise from '../../images/icons svg/handshake-medium-light-skin-tone-svgrepo-com.svg';
import Client from '../../images/icons svg/call-center-telephone-svgrepo-com.svg';
import Innovation from '../../images/icons svg/rocket-innovation-space-svgrepo-com.svg';
import Collaboration from '../../images/icons svg/collaboration-svgrepo-com.svg';
import "swiper/css";
import "swiper/css/pagination";

export default function Mission() {
  const missions = [
    {
      text:
        'Buscamos a excelência em tudo o que fazemos, desde a criação de templates e designs até a implementação de soluções tecnológicas personalizadas. Nosso compromisso com a qualidade garante a satisfação e o sucesso de nossos clientes.',
      icon: Quality,
      title: 'Qualidade',
    },
    {
      text:
        'Abraçamos a criatividade em todas as etapas do processo, desde a concepção de um design único até a resolução de desafios complexos. Nossa abordagem criativa nos permite oferecer soluções inovadoras e experiências digitais memoráveis.',
      icon: Creative,
      title: 'Criatividade',
    },
    {
      text:
        'Estamos comprometidos com o sucesso de nossos clientes. Trabalhamos em estreita colaboração com eles, entendendo suas metas e necessidades, e nos esforçamos para superar suas expectativas em todos os projetos.',
      icon: Compromise,
      title: 'Comprometimento',
    },
    {
        text:
          'Valorizamos a satisfação de nossos clientes acima de tudo. Nosso foco no atendimento ao cliente é fundamental para construir relacionamentos duradouros, baseados na confiança, na transparência e no respeito mútuo.',
        icon: Client,
        title: 'Atendimento ao Cliente',
    },
    {
        text:
          'Estamos constantemente atualizados com as últimas tendências e tecnologias digitais. Nossa paixão pela inovação nos impulsiona a explorar novas possibilidades e fornecer soluções que ajudem nossos clientes a se destacarem no mercado.',
        icon: Innovation,
        title: 'Inovação',
    },
    {
        text:
          'Acreditamos na importância da colaboração e parceria. Trabalhamos lado a lado com nossos clientes, ouvindo suas ideias, fornecendo orientação especializada e trabalhando juntos para alcançar os melhores resultados.',
        icon: Collaboration,
        title: 'Colaboração',
    },
  ];

  return (
    <>
    <div className="mission">
      <div> <h1>Nossos valores</h1></div>
      <div className="gridmission">
      {missions.map((mission, index) => (
        <div key={index} className="card_mission">
          <section className='titulo'><img src={mission.icon} /> {mission.title}</section>
          <section className="about_desc">{mission.text}</section>
        </div>
      ))}
      </div>
    </div>
    <div className="frasemission">
      <h1>Na [Nome da Empresa], nossa paixão é transformar a visão dos nossos clientes em realidade. Trabalhamos com empreendedores ambiciosos que desejam causar impacto no mercado digital. Nosso foco está em desenvolver sites personalizados, projetados para envolver e conquistar o público-alvo. Acreditamos que o sucesso do pequeno negócio é nosso sucesso, e estamos comprometidos em fornecer soluções digitais excepcionais que os ajudem a prosperar.
      </h1>
    </div>
    </>
  );
}