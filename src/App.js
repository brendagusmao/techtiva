import './App.css';
import React from 'react';
import Header from './pages/Header';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Avaliation from './pages/Avaliation';
import { Spin } from 'antd';

function App() {
  return (
    <>
    <Header />
    <React.Suspense fallback={<Spin />}>
    <Services />
    <Projects />
    <Avaliation />
    </React.Suspense>
    </>
  );
}

export default App;
