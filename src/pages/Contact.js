import React from "react";
import "../styles/App.css";


function Contact () {
    return (

        <div className='contact-container'>
            <h1>¿Tienes alguna duda?</h1>
            <br/>
            <h5>Nuestros horarios:</h5>
            <br />
            <div className='horarios'>
                <div className='days'>
                    <p>Lunes</p>
                    <p>Martes</p>
                    <p>Miércoles</p>
                    <p>Jueves</p>
                    <p>Viernes</p>
                    <p>Sábado</p>
                    <p>Domingo</p>
                </div>
                <div>
                    <p>cerrado</p>
                    <p>cerrado</p>
                    <p>9:00am a 9:00pm</p>
                    <p>9:00am a 9:00pm</p>
                    <p>9:00am a 9:00pm</p>
                    <p>9:00am a 9:00pm</p>
                    <p>9:00am a 9:00pm</p>
                </div>
            </div>
            <div className='social'>
                <br />
                <a href='https://wa.me/message/26GNQXJCZ3VVM1' target='_blank' rel="noreferrer">
                    <button href='' className='button-social'>Whatsapp</button>
                </a>
                
                <a href='https://www.instagram.com/chefbravovera/?igsh=MW1rbWJvNW5veDgyag%3D%3D&utm_source=qr' target='_blank' rel="noreferrer">
                    <button href='' className='button-social'>Instagram</button>                
                </a>
                
                <a href='https://www.linkedin.com/in/miguelbravovera/' target='_blank' rel="noreferrer">
                    <button href='' className='button-social'>Linkedin</button>
                </a>
            </div>
        </div>
            

    );
}


export default Contact;