import React, { useState } from 'react';
import { FiPlus, FiMinus} from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiRightArrowAlt } from 'react-icons/bi';

export default function Mission() {
  const [frases, setFrases] = useState([
    { frase: ' O que a sua empresa oferece?', texto: 'Oferecemos uma ampla gama de serviços de desenvolvimento web e design, incluindo a criação de sites personalizados em diversas linguagens, como React, WordPress, PHP e muito mais. Além disso, fornecemos soluções tecnológicas adicionais, como hospedagem, manutenção, otimização de desempenho e muito mais.', expandir: false },
    { frase: 'Frase 2', texto: 'Texto da Frase 2', expandir: false },
    { frase: 'Frase 3', texto: 'Texto da Frase 3', expandir: false },
    { frase: 'Frase 4', texto: 'Texto da Frase 4', expandir: false },
    { frase: 'Frase 5', texto: 'Texto da Frase 5', expandir: false },
    { frase: 'Frase 6', texto: 'Texto da Frase 6', expandir: false },
  ]);

  const toggleExpansao = (index) => {
    const novasFrases = [...frases];
    novasFrases[index].expandir = !novasFrases[index].expandir;
    setFrases(novasFrases);
  };

  return (
    <>
      <div className='faq'>
        <span className="frasetitle">Perguntas frequentes sobre os nossos serviços</span>
        <div className="boxfaq">
        <section>
          {frases.slice(0, 3).map((frase, index) => (
            <span key={index} onClick={() => toggleExpansao(index)}>
              <h1>{frase.expandir ? <i><FiMinus /></i> : <i> <FiPlus /> </i>} {frase.frase} {/* {index + 1} */}</h1>
              {frase.expandir && <div className="descfaq">{frase.texto}</div>}
            </span>
          ))}
        </section>
        <section>
          {frases.slice(3, 6).map((frase, index) => (
            <span key={index + 3} onClick={() => toggleExpansao(index + 3)}>
              <h1>{frase.expandir ? <i><FiMinus /></i> : <i> <FiPlus /> </i>} Frase {index + 4}</h1>
              {frase.expandir && <div className="descfaq">{frase.texto}</div>}
            </span>
          ))}
        </section>
        </div>
      </div>
      <div className='usheader'>
        <h1>
        Na [Nome da Empresa], nossa paixão é transformar a visão dos nossos clientes em realidade. Trabalhamos com empreendedores ambiciosos que desejam causar impacto no mercado digital. Nosso foco está em desenvolver sites personalizados, projetados para envolver e conquistar o público-alvo. Acreditamos que o sucesso do pequeno negócio é nosso sucesso, e estamos comprometidos em fornecer soluções digitais excepcionais que os ajudem a prosperar.
        </h1>
      </div>
      <div className="usnavegation">
        <section> <h1> Não sabe como funciona? </h1> <button> <i><AiOutlineInfoCircle /></i> <span>veja mais sobre <i><BiRightArrowAlt /></i></span></button></section>
        <section> <h1> Serviço personalizado? </h1> <button> <i><AiOutlineInfoCircle /></i> <span>entre em contato <i><BiRightArrowAlt /></i></span></button></section>
        <section> <h1> Ainda ficou com dúvidas? </h1> <button> <i><AiOutlineInfoCircle /></i> <span>entre em contato <i><BiRightArrowAlt /></i></span></button></section>
      </div>
    </>
  );
}
