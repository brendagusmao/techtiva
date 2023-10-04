import React, { useState } from 'react';
import '../../css/Services.css';
import Nav from '../navegation/Nav2';
import { BsArrowRight, BsCheck, BsArrowRightShort } from 'react-icons/bs';
import { Button, Modal } from 'antd';

function HeaderServices() {
    const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
    return (
        <>
    <div className='headerServices'>
      <Nav />
    <section className='headersection'>
      <h1>Business Booster: ideal<br />
para seu <span className='gradient-text'>negócio</span> </h1>
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
    <section className='bar'>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 1440 66" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L119.29 10.5926C240.71 22 479.29 44 720 49.7037C960.71 54.5926 1199.29 44 1320.71 38.2963L1440 32.5926V66H1320.71C1199.29 66 960.71 66 720 66C479.29 66 240.71 66 119.29 66H0V0Z" fill="#FCFCFC"/>
</svg>
        </section>
        <section className="cardsales">
        <div class="card">
          <h1>SEO</h1><p />
          <h2> Aumente Sua Visibilidade Online com SEO</h2><p />
          <desc>Nosso compromisso com a otimização de mecanismos de busca (SEO) coloca o seu site em destaque nos resultados de pesquisa. Melhore a visibilidade da sua marca e alcance um público mais amplo.</desc>
          <button onClick={() => setModal1Open(true)} className='saibamais'>
        Saiba mais <i><BsArrowRightShort /></i>
      </button>
        </div>
        <div class="card">
          <h1>Design Responsivo</h1><p />
          <h2> Adaptação Perfeita em Todos os Dispositivos</h2><p />
          <desc>Seu site precisa funcionar perfeitamente em qualquer dispositivo, seja desktop, tablet ou celular. Nosso design responsivo garante uma experiência consistente e atraente em todas as telas.</desc>
          <button onClick={() => setModal2Open(true)} className='saibamais'>
        Saiba mais <i><BsArrowRightShort /></i>
      </button>
        </div>
        <div class="card">
          <h1>Carregamento Rápido</h1><p />
          <h2> Velocidade Que Impressiona</h2><p />
          <desc>Ninguém gosta de esperar por um site lento. Nosso compromisso com a velocidade de carregamento rápido garante que os visitantes tenham uma experiência suave e eficiente.</desc>
          <button onClick={() => setModal3Open(true)} className='saibamais'>
        Saiba mais <i><BsArrowRightShort /></i>
      </button>
        </div>
        
        <Modal
        title="SEO (Otimização de Mecanismos de Busca)"
        centered
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <p><b>Otimização de Palavras-chave:</b> Identificamos e otimizamos palavras-chave relevantes para melhorar sua classificação nos mecanismos de busca.</p>

        <p><b>Conteúdo de Qualidade:</b> Criamos conteúdo relevante e valioso para atrair visitantes e mantê-los envolvidos.</p>

        <p><b>Melhor Experiência do Usuário:</b> Nossas práticas de SEO melhoram a experiência do usuário, tornando o seu site mais fácil de navegar.</p>

        <p><b>Monitoramento e Análise: </b>Fornecemos ferramentas de análise para rastrear o desempenho do seu site e fazer melhorias contínuas.</p>
      </Modal>
      <Modal
        title="Design Responsivo"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <p><b>Flexibilidade de Layout:</b> Nossos designs se ajustam automaticamente para se adequar ao tamanho da tela, garantindo uma apresentação visualmente atraente.</p>

        <p><b>Navegação Intuitiva:</b> Independentemente do dispositivo, os visitantes podem navegar facilmente pelo seu site e acessar todas as informações importantes.</p>

        <p><b>SEO Aprimorado: </b>O design responsivo é um fator de classificação importante para mecanismos de busca, melhorando sua visibilidade online.</p>

        <p><b>Satisfação do Usuário: </b>Sites com design responsivo oferecem uma experiência mais satisfatória, o que mantém os visitantes engajados.</p>
</Modal>
<Modal
        title="Velocidade de Carregamento Rápido"
        centered
        open={modal3Open}
        onOk={() => setModal3Open(false)}
        onCancel={() => setModal3Open(false)}
      >
        <p><b>Páginas que Carregam Instantaneamente: </b> Utilizamos técnicas avançadas de otimização para garantir que suas páginas carreguem quase que instantaneamente.</p>

        <p><b>Redução de Taxa de Rejeição:</b> Sites mais rápidos mantêm os visitantes envolvidos e reduzem a taxa de rejeição.</p>

        <p><b>Melhor Classificação nos Mecanismos de Busca:  </b>A velocidade de carregamento também é um fator de classificação importante no SEO.</p>

        <p><b>Experiência do Usuário Aprimorada: </b>A rapidez de carregamento cria uma experiência mais agradável, o que leva a conversões e satisfação do cliente.</p>
</Modal>
        </section>
        </>
    );
  }
  
  export default HeaderServices;
  