// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import PreNav from './components/Prenav';
import Navbar from './components/Navbar';
import FooterNav from './components/Footernav';
import Footer from './components/Footer';
import Headline from './components/Headline';
import FourColumnCards from './components/Fourcolumncards';

function App() {
  return (
    <Router>
      {/* Headline displaying running offer */}
      <Headline />

      {/* Pre-navigation for contact details */}
      <PreNav />

      {/* Main navigation bar */}
      <Navbar />
      <FourColumnCards/>

      {/* Routes to render different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer navigation and footer */}
      <FooterNav />
      <Footer />
    </Router>
  );
}

export default App;

