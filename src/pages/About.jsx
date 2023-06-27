import React, { useState, useEffect} from 'react';
import HeaderAbout from '../components/about/HeaderAbout';
import Description from '../components/about/Description';
import Mission from '../components/about/Mission';
import Linguages from '../components/about/Linguages';
import '../css/About.css';
import Nav from '../components/navegation/Nav';
function About() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
    // Simule um tempo de carregamento de 2 segundos
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

    return  (
      <>
        <Nav />
        <HeaderAbout />
        <Description />
        <Mission />
        <Linguages />
      </>
    )
}
  
export default About;