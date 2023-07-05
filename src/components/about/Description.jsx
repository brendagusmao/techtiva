import { IoMdListBox } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';

export default function Description() {

    return (
        <div className='about'>
          <span className='description'>
            <h1><FaUserAlt className='iconsabout' />Sobre Nós</h1>
              Na [Nome da Empresa], estamos comprometidos em fornecer soluções de alta qualidade para impulsionar o sucesso online de empresas e empreendedores. Somos apaixonados por web design, desenvolvimento e criação de experiências digitais incríveis. Com uma equipe de profissionais talentosos e experientes, trabalhamos incansavelmente para atender às necessidades exclusivas de cada cliente, garantindo resultados excepcionais e satisfatórios.
              <p style={{marginTop:'10px'}}/>
              Nossa dedicação em fornecer páginas e templates excepcionais, soluções tecnológicas personalizadas e suporte de qualidade reflete nossa paixão por ajudar nossos clientes a alcançarem o sucesso online. Junte-se a nós e deixe-nos ser o seu parceiro de confiança para todas as suas necessidades digitais.
          </span>
          <span className="description">
          <h1><IoMdListBox className='iconsabout' />Missão</h1>
          Nossa dedicação em fornecer páginas e templates excepcionais, soluções tecnológicas personalizadas e suporte de qualidade reflete nossa paixão por ajudar nossos clientes a alcançarem o sucesso online. Junte-se a nós e deixe-nos ser o seu parceiro de confiança para todas as suas necessidades digitais.
          </span>
        </div>
    );
}