import React, { useEffect } from 'react';
import {BsCheckLg, BsFillArrowRightCircleFill} from 'react-icons/bs';
import '../css/Projects.css';
import Web from '../images/image 12.png';
import Oi from '../components/Projects/oi';
import { debounce, animeScroll } from '../components/scrollUtils';
function Projects() {
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
    return (
    <div className="Projects" id="projects">
      <section className='titulos'>
        <h1> Nossos projetos</h1>
        <h2> Confira abaixo nossos modelos</h2>
      </section>
        <section data-anime="left">
        <Oi />
        <section className='cardmodelsplans'>
        <button> veja mais projetos<i><BsFillArrowRightCircleFill /></i></button>
     </section>
        </section>
        <section className='maintree'>
        <section className='feat width' data-anime="left">
        <img src={Web} alt="" width={'100%'} loading="eager"/>
        </section>
        <div className='feat'>
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
  
  export default Projects;
  