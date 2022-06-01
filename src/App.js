import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import Contact from './components/Contact';
import SingleProduct from './components/SingleProduct';


function App() {
    const Routing = () => {
        return (
          <Routes>
            <Route exect path="/" element={<Home />} />
            <Route  path="/about" element={<About />} />
            <Route  path="/shop" element={<Shop />} />
            <Route  path="/contact" element={<Contact />} />
            <Route  path="/single_product" element={<SingleProduct />} />
          
          </Routes>
        );
      };
  
  return (
      <>
        <Navbar />
    <Routing />
    <Footer />
      </>
    
   
  )
}

export default App