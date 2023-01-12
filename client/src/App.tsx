import React from 'react';

import './App.css';
import Footer from './Pages/Footer/Footer';
import Banner from './Pages/Home/Banner/Banner';

import Navbar from './Pages/Navbar/Navbar';
import Statistics from './Pages/Statistics/Statistics';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Banner></Banner>
      <Statistics/>
      <Footer/>
      
    </div>
  );
}

export default App;
