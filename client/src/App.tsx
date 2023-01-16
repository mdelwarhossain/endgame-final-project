import React from 'react';
import { RouterProvider } from 'react-router-dom';

import './App.css';
import Footer from './Pages/Footer/Footer';
import About from './Pages/Home/AboutUs/About';
import Banner from './Pages/Home/Banner/Banner';

import Navbar from './Pages/Navbar/Navbar';
import { router } from './Pages/routes/routes';
import Statistics from './Pages/Statistics/Statistics';

function App() {
  return (
    <div className="">
     
      
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
