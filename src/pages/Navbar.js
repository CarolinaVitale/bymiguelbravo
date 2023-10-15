import React from 'react';
import '../styles/Navbar.css'
import navlogo from '../images/navlogo.png'

function Bar() {
    return (
        <nav>
            <div>
                <img src={navlogo} alt='navlogo' className='navlogo'></img>
            </div>
            <div>
                <a href='about'>about</a>
                <a href='purpose'>purpose</a>
                <a href='goal'>goal</a>
            </div>
        </nav>
    );
}

export default Bar;