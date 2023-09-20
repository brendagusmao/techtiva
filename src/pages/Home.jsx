import React from 'react';
import Header from '../components/home/Header';
import Services from '../components/services/Information';
import Projects from './Projects';
import Avaliation from '../components/home/Avaliation';
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
