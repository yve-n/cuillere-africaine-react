import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Menu from './Components/Menu/Menu';
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
