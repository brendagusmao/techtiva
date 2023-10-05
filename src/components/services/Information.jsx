import React, {useContext, useEffect} from 'react';
import {BsCheckLg, BsFillArrowRightCircleFill} from 'react-icons/bs';
import MyContext from '../../context/MyContext';
import Sales from './Sales';
import { debounce, animeScroll } from '../scrollUtils';
import '../../css/Services.css';
import Plans from './Plans';

function Information() {
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
      <section className="main">
        <h1 className="titlee">Construa um site de sucesso que reflete a excelência da sua empresa! Escolha um dos nossos planos e destaque-se na web.
</h1>
      <Sales />
        <section className='cardmodelsplans' data-anime="top">
        <button> e muito mais modelos <i><BsFillArrowRightCircleFill /></i></button>
     </section>
      </section>
    </div>
  );
}
 
export default Information;
