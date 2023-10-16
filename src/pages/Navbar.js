import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../images/logo.png';
import icon from '../images/icon.png';


function Bar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`custom-navbar ${isOpen ? 'open' : ''}`}>
            <div className="left-section">
                <a href="/">
                    <img src={logo} alt="Logo" className='logo'/>
                </a>
            </div>
            <div className="right-section">
                <div className="menu-toggle" onClick={toggleMenu}>
                   <img src={icon} className='icon' alt='icon'/>
                </div>
                <ul className="menu-items">
                    <li><a href="home">home</a></li>
                    <li><a href="about">about</a></li>
                    <li><a href="purpose">purpose</a></li>
                    <li><a href="goal">goal</a></li>
                    <li><a href="contact">contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Bar;
