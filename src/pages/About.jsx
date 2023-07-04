import React, { useState, useEffect} from 'react';
import HeaderAbout from '../components/about/HeaderAbout';
import Description from '../components/about/Description';
import Mission from '../components/about/Mission';
import '../css/About.css';
import Nav2 from '../components/navegation/Nav2';
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
        <Nav2 />
        <HeaderAbout />
        <Description />
        <Mission />
      </>
    )
}
  
export default About;