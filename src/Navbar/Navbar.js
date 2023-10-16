import React, { useState } from 'react';
import './Navbar.css';
import logo from './logo.png'; 
import icon from './icon.png'


function Bar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log('haciendo click en el icono de hamburguesa')
        setIsOpen(!isOpen);
    };

    console.log('renderizando componente Bar')
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
