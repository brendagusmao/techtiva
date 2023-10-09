import React from 'react';
import Description from '../components/about/Description';
import Mission from '../components/about/Mission';
import '../css/About.css';
import Nav2 from '../components/navegation/Nav2';
import HeaderAbout from '../components/about/HeaderAbout';
import Footer from './Footer';

function About() {


    return  (
      <>
        <Nav2 />
        <Description id="about" />
        <Mission />
        <HeaderAbout />
        <Footer />
      </>
    )
}
  
export default About;