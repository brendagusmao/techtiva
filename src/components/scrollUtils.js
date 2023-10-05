export const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  export const animeScroll = () => {
    const targets = document.querySelectorAll('[data-anime]');
    const windowTop = window.scrollY + window.innerHeight * 0.55;
    const animationClass = 'animate';
  
    targets.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
  
      if (windowTop > elementTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    });
  };
  
  // Adicione um listener para chamar a função quando a página rolar
  window.addEventListener('scroll', animeScroll);

  