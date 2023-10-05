import React, { useState} from 'react';
import FormSale from '../../components/forms/FormSale';
import { Modal } from 'antd';
import {BsCheck2Circle} from 'react-icons/bs';
import {BsCheckLg } from 'react-icons/bs';

function Plans() {
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);

    return  ( 
      <>
        <section className='maintwo' id="plans" /* className={className ? 'maintwo show' : 'maintwo'} */>
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
        <div className='value'><span>R$</span>23,58<span className='mont'>/ mensais</span></div>
        <button type="button" onClick={() => setModal1Open(true)} className='colorbutton'> Adicionar ao carrinho</button>
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
        <div className='popular'>Mais pupular
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="26" viewBox="0 0 42 26" fill="none">
            <path d="M21 26L0.215393 0.5L41.7846 0.5L21 26Z" fill="#C4FCFF"/>
          </svg>
        </span>
      </div>
        <h2>Medium</h2>
        <ul>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
          <li><span><BsCheck2Circle /></span>10 dispositivos</li>
        </ul>
        <div className='value'>
          <p>De R$ <s>89,90</s> por</p>
          <span>R$</span>23,58<span className='mont'>/ mensais</span></div>
        <button type="button"  onClick={() => setModal2Open(true)} className='mediumbutton'> Adicionar ao carrinho</button>
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
        <div className='value'><span>R$</span>23,58<span className='mont'>/ mensais</span></div>
        <button type="button" onClick={() => setModal1Open(true)} className='colorbutton'> Adicionar ao carrinho</button>
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
        <h1>Ainda não é o que procura?</h1>
        <button> contratar outros serviços</button>
      </span>
      </section>
           <div className="barplans">
           <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 1440 105" fill="none">
     <path fill-rule="evenodd" clip-rule="evenodd" d="M0 38.2279L120 56.2564C240 74.2849 480 110.342 720 104.332C960 98.3229 1200 50.2469 1320 26.2089L1440 2.17092V-106H1320C1200 -106 960 -106 720 -106C480 -106 240 -106 120 -106H0V38.2279Z" fill="#340D5F"/>
     </svg>
           </div>
           <div className="boxinf"  data-anime="top">
             <section><img src="https://xceptive.com/wp-content/uploads/2022/10/Frame.svg" alt="image" /></section>
             <section className='infdesc'><h1>Um site que conte sua história de maneira cativante.</h1>
             <p>Um site eficaz é fundamental para atrair novos visitantes e convertê-los em defensores da sua marca. Quando as pessoas acessam sua página, é essencial que tenham uma experiência de usuário agradável e encontrem chamadas à ação claras.</p>
             <p>A principal vantagem da nossa abordagem é a nossa versatilidade. Criamos landing pages personalizadas para uma variedade de setores, utilizando diversas linguagens de programação, como React, WordPress e muito mais. Além disso, atendemos a e-commerces, oferecendo um ambiente ideal para vendas online.</p>
     
             <p>Com a Techtiva, você pode criar landing pages para diversas finalidades, incluindo:</p>
     <ul>
     <li><i><BsCheckLg /></i>Cupons ou downloads de e-books,</li>
     <li><i><BsCheckLg /></i>Vendas de produtos ou serviços,</li>
     <li><i><BsCheckLg /></i>Webinars, boletins informativos e inscrições em eventos,</li>
     <li><i><BsCheckLg /></i>Campanhas promocionais futuras,</li>
     <li><i><BsCheckLg /></i>Processos de recrutamento,</li>
     <li><i><BsCheckLg /></i>Apresentações corporativas.</li>
     </ul>
     <p>E o melhor de tudo, nossa abordagem é eficaz e acessível. Comece hoje mesmo a desenvolver sua estratégia e observe um aumento notável nas métricas de conversão e vendas!"
     </p>
     </section>
           </div>
           </>
    )
}
  
export default Plans;