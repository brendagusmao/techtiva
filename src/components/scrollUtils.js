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
    const target = document.querySelectorAll('[data-anime]');
    const windowTop = window.pageYOffset + window.innerHeight * 0.75;
    const animationClass = 'animate';
  
    target.forEach(function (element) {
      if (windowTop > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    });
  };
  