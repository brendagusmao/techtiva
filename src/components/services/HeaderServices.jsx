import React from 'react';
import '../../css/Services.css';
import Nav from '../navegation/Nav2';
import { BsArrowRight, BsCheck } from 'react-icons/bs';

function HeaderServices() {

    return (
    <div className='headerServices'>
      <Nav />
    <section className='headersection'>
      <h1>Business Booster: ideal<br />
para seu negócio </h1>
      <section className='desc'>
      <p><i><BsCheck /></i>Todas as características do plano "Início Rápido".</p>
      <p><i><BsCheck /></i>Mais 5 seções ou páginas personalizáveis.</p>
      <p><i><BsCheck /></i>Integração básica com redes sociais.</p>
      <p><i><BsCheck /></i>Alteração de até 5 imagens adicionais.</p>
      <p><i><BsCheck /></i>Suporte a configurações SEO básicas.</p>
      </section>
      <article className="promotion">
      <div className='sale'><h3>R$</h3> <div>79,99</div><h3>/ mês</h3></div>
      <div className='limited'>Por tempo limitado</div>
      <button>
      <a href="#plans">
    Aproveitar a oferta <i><BsArrowRight /></i>
      </a></button>
      </article>
    </section>
        <section className='headerimage' />
        <div className='icon-scroll' title="slow down" />
    </div>
    );
  }
  
  export default HeaderServices;
  