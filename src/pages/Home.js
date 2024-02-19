import React, { useState, useEffect } from "react";
import "../styles/App.css";
import logo3D from "../images/logotype-3d.png";
import ImageCarousel from "../components/ImageCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Program from "../components/Program";
import Spinner from "../components/Spinner";


function App() {
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
        <div className="App">
            <ImageCarousel className="carousel" />

            <img src={logo3D} className="logo-3d" alt="logo-3d" />

            <a

                href="https://wa.me/message/26GNQXJCZ3VVM1"

                target="_blank"

                rel="noreferrer"

            >
                <button className="contact-button">Ponte en Contacto</button>
            </a>

            <Program />
            {isLoading && <Spinner />}
        </div>
    );
}

export default App;