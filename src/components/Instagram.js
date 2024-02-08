import React from 'react';
import instaWhite from '../images/instagram-white.png'
import whatsappWhite from '../images/whatsapp.png'

function Media () {
    return (
        <div className='media'>
            <a href='https://www.instagram.com/chefbravovera/?igsh=MW1rbWJvNW5veDgyag%3D%3D&utm_source=qr' target='_blank'>
                <img src={instaWhite} alt='insta'></img>
            </a>
            <a href='https://wa.me/message/26GNQXJCZ3VVM1' target='_blank'>
                <img src={whatsappWhite} alt='whats'></img>
            </a>
            
        </div>
    );
}

export default Media;