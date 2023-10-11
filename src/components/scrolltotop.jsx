import React, { useState, useEffect } from 'react';
import {BsFillArrowUpCircleFill } from 'react-icons/bs';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Adicione um ouvinte de rolagem à janela para verificar a posição da rolagem
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Certifique-se de remover o ouvinte de rolagem quando o componente for desmontado
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Verifique a posição atual da rolagem. Você pode ajustar esse valor conforme necessário.
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adiciona animação suave de rolagem
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <BsFillArrowUpCircleFill />
    </button>
  );
}

export default ScrollToTopButton;
