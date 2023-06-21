import React, {useContext, useEffect} from 'react';
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
    }, 200);

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
        <Plans />
    </div>
  );
}
 
export default Services;
