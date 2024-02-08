import React from 'react';
import pin from '../images/pin.png'
import '../styles/App.css';

function Footer () {
    return (
        <div className='footer'>
            <div className='location'>
                <img src={pin} alt='pin'></img>
                <p>Venezuela</p>
            </div>
            <div>
                <p>Copyright © 2024 by Miguel Bravo - All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;