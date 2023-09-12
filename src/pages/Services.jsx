import React, {useContext, useEffect} from 'react';
import {BsCheckLg, BsFillArrowRightCircleFill} from 'react-icons/bs';
import MyContext from '../context/MyContext';
import Sales from '../components/services/Sales';
import { debounce, animeScroll } from '../components/scrollUtils';
import '../css/Services.css';
import Plans from '../components/services/Plans';

function Services() {
  const {className} = useContext(MyContext);
  useEffect(() => {
    const handleScroll = debounce(() => {
      animeScroll();
    }, 50);

    animeScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return  ( 
    <div className="Services">
      <section className={className ? 'main' : 'main visible'} data-anime="top">
        <h1 className="titlee">Construa um site de sucesso que reflete a excelência da sua empresa! Escolha um dos nossos planos e destaque-se na web.
</h1>
      <Sales />
        <section className='cardmodelsplans'>
        <button> e muito mais modelos <i><BsFillArrowRightCircleFill /></i></button>
     </section>
     {/* <Plans id="plans" /> */}
     {/* <div className="barplans">
      <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="105" viewBox="0 0 1440 105" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 38.2279L120 56.2564C240 74.2849 480 110.342 720 104.332C960 98.3229 1200 50.2469 1320 26.2089L1440 2.17092V-106H1320C1200 -106 960 -106 720 -106C480 -106 240 -106 120 -106H0V38.2279Z" fill="#340D5F"/>
</svg>
      </div>
      <div className="boxinf">
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
      </div> */}
      </section>
    </div>
  );
}
 
export default Services;
