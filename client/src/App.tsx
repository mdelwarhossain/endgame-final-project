import React from 'react';

import './App.css';
import Footer from './Pages/Footer/Footer';
import About from './Pages/Home/AboutUs/About';
import Banner from './Pages/Home/Banner/Banner';
import Members from './Pages/Home/Community/Members';

import Navbar from './Pages/Navbar/Navbar';
import Statistics from './Pages/Statistics/Statistics';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Banner/>
      <About/>
      <Members></Members>
      <Statistics/>
      <Footer/>
    </div>
  );
}

export default App;
