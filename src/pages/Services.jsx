import React, {useContext, useEffect} from 'react';
import FormSale from '../components/forms/FormSale';
import { Modal } from 'antd';
import { useState } from 'react';
import {BsCheck2Circle} from 'react-icons/bs';
import MyContext from '../context/MyContext';
import Sales from '../components/services/Sales';
import { debounce, animeScroll } from '../components/scrollUtils';
import '../css/Services.css';

function Services() {
  const {className} = useContext(MyContext);
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  useEffect(() => {
    const handleScroll = debounce(() => {
      animeScroll();
    }, 200);

    animeScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return  ( 
    <div className="Services" id="services">
      <section className={className ? 'main' : 'main visible'} data-anime="top">
        <h1 className="titlee">Construa um site de sucesso que reflete a excelência da sua empresa! Escolha um dos nossos planos e destaque-se na web.
</h1>
      <Sales />
      </section>
      <section className='maintree'>
        <section className='feat width' data-anime="left">
        <img src="https://o.remove.bg/downloads/05ed821e-fb6d-457d-a2b4-531995c5db39/11-Best-Web-Design-Companies-in-India-removebg-preview.png" alt="" width={'100%'} />
        </section>
        <div className='feat' data-anime="top">
        <h1>Construa uma presença online poderosa e cativante</h1>
        <desc>A primeira impressão importa, especialmente no mundo digital. Nossos templates profissionais e designs modernos irão cativar seus visitantes e transformá-los em clientes fiéis. Com foco em usabilidade e experiência do usuário, nossas páginas garantem uma navegação intuitiva e uma apresentação visualmente impressionante.
        </desc>
        <h1>A sua visão, o seu site</h1>
        <desc>Entendemos que cada negócio é único, e é por isso que oferecemos opções para a criação de sites personalizados, de acordo com as suas preferências e objetivos. Com nossa equipe de designers talentosos, traduzimos a sua visão em um site de tirar o fôlego, que transmitirá a personalidade e a proposta de valor exclusiva da sua empresa.
        </desc>
        </div>
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
        <div className='value'><span>R$</span> 23,58 <span className='mont'>/mensal</span></div>
        <button type="button" onClick={() => setModal1Open(true)}> Selecionar plano</button>
        <Modal
        title="Preencha o Formulário abaixo"
        centered
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <FormSale />
      </Modal>
      </div>
      <div className="two medium">
        <h2>Medium</h2>
        <ul>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
        </ul>
        <div className='value'><span>R$</span> 23,58 <span className='mont'>/mensal</span></div>
        <button type="button"  onClick={() => setModal2Open(true)}> Selecionar plano</button>
      </div>
      <div className="two premium">
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
      <Modal
        title="Preencha o Formulário abaixo"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <FormSale />
      </Modal>
      </section>
    </div>
  );
}
 
export default Services;
