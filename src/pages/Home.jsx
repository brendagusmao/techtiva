import React from 'react';
import Header from './Header';
import Services from './Services';
import Projects from './Projects';
import Avaliation from './Avaliation';
// import About from './About';

function Home() {
  return (
      <>
        <Header />
        <Services id="services" />
        <Projects id="projetcs"/>
        <Avaliation id="avaliation" />
      </>
  );
}

export default Home;
