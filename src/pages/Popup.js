import React, { useState, useEffect } from "react";
import "../styles/Popupdinner.css";
import popup from "../images/catering4.jpeg";
import popup2 from "../images/carousel1.jpg";
import popup3 from "../images/carousel2.jpeg";
import popup5 from "../images/catering.jpeg";
import popup6 from "../images/catering2.jpg";
import popup7 from "../images/catering3.jpeg";
import popup8 from "../images/popupgif.gif";
import popup9 from "../images/popupdinner.jpg";
import popup10 from "../images/popupdinner2.jpg";
import popup11 from "../images/popupdinner3.jpg";
import popup12 from "../images/popupdinner4.jpg";
import Spinner from "../components/Spinner";
import "../styles/App.css";


function Popup() {
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
        <div className='pop-up-dinner'>
            <img className='pop-up-top' src={popup12} alt='pop-up-dinner' ></img>

            <br />
            <div className="wrapper-pop">
                <div className="typing-demo-pop">
                    POP UP DINNER.
                </div>
            </div>
            <br />
            <p>
                Una POP-UP DINNER es un evento culinario efímero y exclusivo que ofrece una experiencia gastronómica única.
            </p>
            <br />

            <img className='pop-up-pic' src={popup2} alt='pop-up-dinner'></img>

            <br />
            <p>
                Imagina una cena clandestina en un lugar inesperado donde Miguel se encargó de organizar dos ediciones de esta cena, cada una compuesta por ocho exquisitos tiempos, cada uno cuidadosamente elaborado para resaltar sabores, texturas y técnicas culinarias innovadoras y estuvieron acompañados de maridajes cuidadosamente seleccionados.
            </p>
            <br />

            <img className='pop-up-pic' src={popup3} alt='pop-up-dinner'></img>

            <br />
            <p>
                Este evento atrajo a una audiencia ávida de explorar nuevos sabores y experiencias culinarias, mientras disfrutaban de una atmósfera íntima y emocionante. Fue una ocasión especial que rompió con lo convencional, ofreciendo una propuesta disruptiva y emocionante.
            </p>
            <br />

            <img className='pop-up-pic' src={popup10} alt='pop-up-dinner'></img>

            <br />
            <p>
                Miguel se encargó de todos los aspectos del evento, desde la planificación y la preparación de los platos hasta la presentación y el servicio, garantizando una experiencia memorable y personalizada para todos los asistentes.
            </p>
            <br />

            <img className='pop-up-pic' src={popup9} alt='pop-up-dinner' ></img>

            <img className='pop-up-pic' src={popup} alt='pop-up-dinner' ></img>

            <img className='pop-up-pic' src={popup8} alt='pop-up-dinner' ></img>

            <img className='pop-up-pic' src={popup5} alt='pop-up-dinner' ></img>

            <img className='pop-up-pic' src={popup6} alt='pop-up-dinner' ></img>

            <img className='pop-up-pic' src={popup7} alt='pop-up-dinner' ></img>

            <img className='pop-up-pic' src={popup11} alt='pop-up-dinner' ></img>
            {isLoading && <Spinner />}
        </div>
    );
}


export default Popup;