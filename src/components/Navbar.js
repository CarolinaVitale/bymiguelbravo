import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../images/brand/mb-white.png";
import logo2 from "../images/brand/miguel-bravo-white.png";
import "../styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";

const destinations = [
    ["Ocho Trece", "/menu"],
    ["About", "/about"],
    ["Services", "/services"],
    ["Contact", "/contact"],
];

function NavbarOff() {
    const [show, setShow] = useState(false);
    const closeNav = () => setShow(false);

    return (
        <Navbar expand="lg" className="site-navbar" sticky="top" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" onClick={closeNav} aria-label="Miguel Bravo — Home">
                    <img className="logo1" src={logo} alt="" width="50" height="50" />
                </Navbar.Brand>
                <Link className="navbar-wordmark" to="/" onClick={closeNav} aria-label="Miguel Bravo — Home">
                    <img className="logo2" src={logo2} alt="" width="175" height="60" />
                </Link>
                <Navbar.Toggle aria-controls="primary-navigation" aria-expanded={show} aria-label={show ? "Close navigation" : "Open navigation"} onClick={() => setShow(!show)} />
                <Navbar.Offcanvas show={show} onHide={closeNav} id="primary-navigation" aria-labelledby="primary-navigation-title" placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="primary-navigation-title">Explore</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="primary-nav justify-content-end flex-grow-1" aria-label="Primary navigation">
                            {destinations.map(([label, path]) => (
                                <Nav.Link
                                    key={path}
                                    as={NavLink}
                                    to={path}
                                    onClick={closeNav}
                                    className={({ isActive }) => `links${isActive ? " active" : ""}${path === "/contact" ? " nav-contact" : ""}`}
                                >
                                    {label}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default NavbarOff;
