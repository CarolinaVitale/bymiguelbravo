import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../images/logo.png";
import logo2 from "../images/horizontal-logotype.png";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";


function NavbarOff() {

    const [show, setShow] = useState(false);
    const navigate = useNavigate();


    const closeNav = () => {
        setShow(false);
    };


    return (
        <>
            {["sm"].map((expand) => (
                <Navbar key={expand} expand={expand} className="navbar bg-body-tertiary mb-3">
                    <Container fluid>
                        <Navbar.Brand as={Link} to='/' onClick={closeNav}>
                            <img className='logo1' src={logo} alt='logo'></img>
                        </Navbar.Brand>

                        <Nav.Link as={Link} to="/" onClick={() => { closeNav(); navigate("/"); }}>
                            <img className='logo2' src={logo2} style={{ maxWidth: "150px" }} alt='logo'></img>
                        </Nav.Link>

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={() => setShow(!show)} />
                        <Navbar.Offcanvas
                            show={show}
                            onHide={() => setShow(false)}
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >

                            <Offcanvas.Header closeButton>

                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>

                                    <Nav.Link className='links' as={Link} to="/" onClick={() => { closeNav(); navigate("/"); }}>
                                        <img src={logo2} style={{ maxWidth: "150px" }} alt='logo'></img>
                                    </Nav.Link>

                                </Offcanvas.Title>

                            </Offcanvas.Header>

                            <Offcanvas.Body>

                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    
                                    <Nav.Link className='links' as={Link} to="/sobremi" onClick={() => { closeNav(); navigate("/sobremi"); }}>Sobre mi</Nav.Link>
                                    <Nav.Link className='links' as={Link} to="/servicios" onClick={() => { closeNav(); navigate("/servicios"); }}>Servicios</Nav.Link>
                                    <Nav.Link className='links' as={Link} to="/contacto" onClick={() => { closeNav(); navigate("/contacto"); }}>Contáctanos</Nav.Link>

                                </Nav>

                            </Offcanvas.Body>

                        </Navbar.Offcanvas>

                    </Container>

                </Navbar>

            ))}

        </>

    );

}



export default NavbarOff;