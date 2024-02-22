import React from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import NavbarOff from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Popup from "./pages/Popup";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";
import Menu from "./pages/Menu";


function App() {

  return (

    <Router>

      <ScrollToTopOnMount />

      <NavbarOff />

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/menu" element={<Menu />} exact />
        <Route path="/servicios" element={<Services />} exact />
        <Route path="/sobremi" element={<About />} exact  />
        <Route path="/contacto" element={<Contact />} exact  />
        <Route path="/popupdinner" element={<Popup />} exact />

      </Routes>

      <Footer />

    </Router>

  );

}



export default App;
