import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Menu from './Components/Menu/Menu';
import Footer from './Components/Footer/Footer';


function App() {
    return (
        // <>
        //     <Router>
        //         <Navbar />
        //         <Routes>
        //             <Route path="/" element={<Home />} />
        //             <Route path="/about-us" element={<About />} />
        //             <Route path="/menu" element={<Menu />} />
        //             <Route path="/contact" element={<Contact/>} />
        //         </Routes>
        //         <Footer />
        //     </Router>
        // </>
        <div>
            <Navbar />
            <div id="home">
                <Home />
            </div>
            <div className="container">
                <div id="about-us" className='row featurette'>
                    <About />
                </div>
                <div id="menu" className='row featurette'>
                    <Menu />
                </div>
                <div id="contact" className='row featurette'>
                    <Contact />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
