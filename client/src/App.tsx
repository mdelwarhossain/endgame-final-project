import React from 'react';

import './App.css';
import Login from './Login/Login';
import Footer from './Pages/Footer/Footer';
import About from './Pages/Home/AboutUs/About';
import Banner from './Pages/Home/Banner/Banner';
import Members from './Pages/Home/Community/Members';

import Navbar from './Pages/Navbar/Navbar';
import Statistics from './Pages/Statistics/Statistics';
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes';
import OurTeam from './Pages/Home/OurTeam/OurTeam';

function App() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <OurTeam></OurTeam>
      <About />
      <Members></Members>
      <Statistics />
      <Footer />
      <Login></Login>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
