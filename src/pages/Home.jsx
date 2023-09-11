import React from 'react';
import Header from './Header';
import Services from './Services';
import Projects from './Projects';
import Avaliation from './Avaliation';
import Footer from './Footer';
import Plans from '../components/services/Plans';
// import About from './About';

function Home() {
  return (
      <>
        <Header id="home" />
        <Services id="services" />
        <Plans id="plans" />
        <Projects id="projetcs"/>
        <Avaliation id="avaliation" />
        <Footer />
      </>
  );
}

export default Home;
