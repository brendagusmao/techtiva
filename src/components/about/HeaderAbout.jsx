import { IoMdListBox } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';
import Image from '../../images/image2.jpg';
import { BsArrowRight } from 'react-icons/bs';
export default function HeaderAbout() {

    return (
        <header className='fixheader'>
            <section className="fiximage"><img src={Image} alt="" /></section>
            <section className='fixtitle'>
Nossos valores fundamentais de qualidade, criatividade e comprometimento orientam todas as nossas ações. Nosso objetivo é superar as expectativas dos clientes, oferecendo soluções personalizadas e um atendimento excepcional.
<button>
      <a href="#about">
    Saiba mais  <i><BsArrowRight /></i>
      </a></button>
</section>
        </header>
    );
}