import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import NavbarOff from './components/Navbar';
import Footer from './components/Footer';
import Media from './components/Instagram';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {

  return (

    <Router>
      <NavbarOff />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/sobremi" element={<About />} />  
            <Route path="/contacto" element={<Contact />} /> 
            {/* Agrega más rutas según sea necesario */}
          </Routes>
          
        <Media />
      <Footer />
    </Router>

  );

}



export default App;
