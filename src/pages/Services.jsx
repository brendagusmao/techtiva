import React, {useContext, useEffect} from 'react';
import {BsCheckLg, BsFillArrowRightCircleFill} from 'react-icons/bs';
import MyContext from '../context/MyContext';
import Sales from '../components/services/Sales';
import { debounce, animeScroll } from '../components/scrollUtils';
import '../css/Services.css';
import Web from '../images/Design team-amico (1).svg';
import Plans from '../components/services/Plans';

function Services() {
  const {className} = useContext(MyContext);
  useEffect(() => {
    const handleScroll = debounce(() => {
      animeScroll();
    }, 100);

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
     <Plans />
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
      </div>
      </section>
        <section className='maintree'>
        <section className='feat width' data-anime="left">
        <img src={Web} alt="" width={'80%'} loading="eager"/>
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
    </div>
  );
}
 
export default Services;
