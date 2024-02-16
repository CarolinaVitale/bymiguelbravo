import React from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import NavbarOff from "./components/Navbar";
import Footer from "./components/Footer";
import Media from "./components/Instagram";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Popup from "./pages/Popup";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";


function App() {

  return (

    <Router>
      
      <ScrollToTopOnMount />

      <NavbarOff />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/sobremi" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/popupdinner" element={<Popup />} />

      </Routes>

      <Media />
      <Footer />
    </Router>

  );

}



export default App;
