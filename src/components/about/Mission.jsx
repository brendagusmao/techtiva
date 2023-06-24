import { IoMdListBox } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';
import Quality from '../../images/icons svg/quality-svgrepo-com.svg';
import Creative from '../../images/icons svg/braindstorming-creativity-mind-svgrepo-com.svg';
import Compromise from '../../images/icons svg/handshake-medium-light-skin-tone-svgrepo-com.svg';
import Client from '../../images/icons svg/call-center-telephone-svgrepo-com.svg';
import Innovation from '../../images/icons svg/rocket-innovation-space-svgrepo-com.svg';
import Collaboration from '../../images/icons svg/collaboration-svgrepo-com.svg';

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
    <div className="mission">
      {missions.map((mission, index) => (
        <div key={index} className="card_mission">
          <section className='titulo'><img src={mission.icon} /> {mission.title}</section>
          <section className="about_desc">{mission.text}</section>
        </div>
      ))}
    </div>
  );
}