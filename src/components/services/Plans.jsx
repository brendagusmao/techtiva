import React, { useState} from 'react';
import FormSale from '../../components/forms/FormSale';
import { Modal } from 'antd';
import {BsCheck2Circle} from 'react-icons/bs';


function Plans() {
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);

    return  ( 
        <section className='maintwo' data-anime="top" id="services" /* className={className ? 'maintwo show' : 'maintwo'} */>
        <h1> Planos flexíveis para todas as necessidades </h1>
        <span className='sales'>
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
      <Modal
        title="Preencha o Formulário abaixo"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <FormSale />
      </Modal>
      </span>
      <span className='find'>
        <h1>Ainda não é o que procura? Clique abaixo e faça contato conosco.</h1>
        <button> contratar outros serviços</button>
      </span>
      </section>
    )
}
  
export default Plans;