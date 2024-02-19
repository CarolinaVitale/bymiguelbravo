import React, { useState, useEffect } from "react";
import "../styles/App.css";
import Spinner from "../components/Spinner";


function Contact() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const onLoad = () => {
            setIsLoading(false);
        };

        window.addEventListener("load", onLoad);

        // Añadimos un temporizador para asegurarnos de que el spinner se oculte después de un tiempo determinado, incluso si el evento 'load' no se dispara correctamente en Safari
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Cambia este valor según la duración que desees

        return () => {
            window.removeEventListener("load", onLoad);
            clearTimeout(timer);
        };
    }, []);

    return (

        <div className='contact-container'>
            <div className="wrapper-contact">
                <div className="typing-demo-contact">
                    ¿Tienes alguna duda?
                </div>
            </div>
            <h1></h1>
            <br />
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
            {isLoading && <Spinner />}

        </div>
    );
}


export default Contact;