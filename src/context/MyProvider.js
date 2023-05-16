import { useEffect, useState } from "react";
import context from "./MyContext";

function MyProvider({children}) {

  const getSavedState = () => {
    return JSON.parse(localStorage.getItem('portfolio'))?.lightMode;
  }

  const [lightMode, setLightMode] = useState(getSavedState() || false);
  const [className, setClassName] = useState(false);
  const values = {lightMode, setLightMode, className};

  useEffect(() => {
    lightMode ? document.body.classList.remove('dark') : document.body.classList.add('dark');
    localStorage.setItem('portfolio', JSON.stringify({lightMode}));
  }, [lightMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !className) {
        setClassName(true);
      } else if (window.scrollY <= 100 && className) {
        setClassName(false);
      }
    };
    window.addEventListener('load', handleScroll);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('load', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [className]);

  return (
    <context.Provider value={values}>
      {children}
    </context.Provider>
  )
}

export default MyProvider;
