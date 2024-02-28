import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Header from './Comps/Header';
import Home from './Comps/Home';
import 'animate.css';
import About from './Comps/About';
import Team from './Comps/Team';
import { Portfolio } from './Comps/Portfolio';
import Contact from './Comps/Contact';
import Footer from './Comps/Footer';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Home/>
      <About/>
      <Team/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App