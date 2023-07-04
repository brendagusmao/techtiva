import { IoMdListBox } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';
import ImageAbout from '../../images/imageabout.svg';

export default function Description() {

    return (
        <div className='about'>
          <span className='description'>
            Na [Nome da Empresa], somos uma equipe apaixonada por web design, desenvolvimento e soluções digitais. Acreditamos no poder da presença online para impulsionar o sucesso dos negócios, especialmente para pequenas empresas e empreendedores. Nossa missão é fornecer serviços de alta qualidade, personalizados e acessíveis, que permitam que nossos clientes se destaquem no mercado digital.
            <p style={{marginTop:'10px'}}/>
            Nossa equipe é composta por profissionais talentosos e experientes, especializados em diferentes áreas, como web design, desenvolvimento de sites, programação, marketing digital e muito mais. Estamos sempre atualizados com as últimas tendências e tecnologias do mercado, permitindo-nos oferecer soluções inovadoras e eficazes para os desafios digitais que nossos clientes enfrentam.
            <p style={{marginTop:'10px'}}/>
            Valorizamos a parceria com nossos clientes e acreditamos em construir relacionamentos sólidos, baseados na confiança, colaboração e transparência. Ouvimos atentamente as necessidades e objetivos de cada cliente, e trabalhamos em estreita colaboração para transformar suas ideias em realidade. Nossa abordagem personalizada nos permite criar soluções digitais únicas, adaptadas às necessidades específicas de cada negócio.
            <p style={{marginTop:'10px'}}/>
            Seja você um pequeno negócio, uma startup ou uma empresa estabelecida, estamos prontos para colaborar com você no seu caminho para o sucesso digital. Junte-se a nós na [Nome da Empresa] e descubra como podemos transformar sua presença online e impulsionar seus resultados. Estamos aqui para ajudá-lo a criar um site de dar orgulho e alcançar o sucesso que você merece.
            </span>
            <section className='imageabout'>
              <img src={ImageAbout} alt="imagem planejamento" />
            </section>
        </div>
    );
}