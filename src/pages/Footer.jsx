import React, {useContext} from 'react';
import '../css/Footer.css';
import MyContext from '../context/MyContext';
import ilogo from '../images/icons svg/image 3.svg';

function Footer() {
  return (
    <footer>
    <div className='sidebar2'>
    <title>
        <img src={ilogo} alt="Techtiva Logo" />techtiva</title>
        <section className='desc2'>Nossa dedicação em fornecer páginas e templates excepcionais, soluções tecnológicas personalizadas e suporte de qualidade reflete nossa paixão por ajudar nossos clientes a alcançarem o sucesso online. Junte-se a nós e deixe-nos ser o seu parceiro de confiança para todas as suas necessidades digitais.</section>
    </div>
    <div className='navfooter'> 
        <section><h1>Produtos </h1>
            <p>
                <a href="" target='_blank'> Web Design</a>
                <a href="" target='_blank'> Soluções Tecnológicas</a>
                <a href="" target='_blank'> WordPress</a>
                <a href="" target='_blank'> Design Gráfico</a>
            </p>
        </section>
        <section><h1>Empresa </h1>
            <p>
                <a href="" target='_blank'> F.A.Q</a>
                <a href="" target='_blank'> Sobre Nós</a>
                <a href="" target='_blank'> Politica de Privacidade</a>
                <a href="" target='_blank'> Ouvidoria</a>
            </p>
        </section>
    </div>
    </footer>
  )
}

export default Footer;