import React, {useContext} from 'react';
import {BsCheck2Circle} from 'react-icons/bs';
import MyContext from '../context/MyContext';
import Sales from '../components/services/Sales';
import '../css/Services.css';

function Services() {
  const {className} = useContext(MyContext);

  return  ( 
    <div className="Services" id="services">
      <section className={className ? 'main' : 'main visible'}>
        <h1 className="titlee"> Escolha um dos nossos planos e crie um site de dar orgulho!</h1>
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
      <div className="two medium">
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
      </section>
    </div>
  );
}
 
export default Services;
