import React from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Services from "./pages/Services";
import NavbarOff from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import ScrollReveal from "./components/ScrollReveal";


function App() {

  return (

    <Router>

      <ScrollToTopOnMount />
      <ScrollReveal />

      <a className="skip-link" href="#main-content">Skip to main content</a>

      <NavbarOff />

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Navigate to="/services#experiences" replace />} />
        <Route path="/servicios" element={<Navigate to="/services" replace />} />
        <Route path="/sobremi" element={<Navigate to="/about" replace />} />
        <Route path="/contacto" element={<Navigate to="/contact" replace />} />
        <Route path="/popupdinner" element={<Navigate to="/services#experiences" replace />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />

    </Router>

  );

}



export default App;
