import React, {useState} from "react";
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


function Popup () {

    const [isLoading, setIsLoading] = useState(true);
    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div>
            <div className='top-container'>
                <img className='pop-up-top' src={popup12} alt='miguel' onLoad={handleImageLoad}></img>
                {isLoading && <Spinner />}
            </div>
            
            <div className='pop-up-dinner'>
                <br />
                <h1>POP-UP DINNER</h1>
                <br />
                <p>
                    Una POP-UP DINNER es un evento culinario efímero y exclusivo que ofrece una experiencia gastronómica única.
                </p>
                <br />
                <div className='pop-up-container'>
                    <img className='pop-up-pic' src={popup2} alt='miguel' onLoad={handleImageLoad}></img>
                    {isLoading && <Spinner />}
                </div>
                <br />
                <p>
                    Imagina una cena clandestina en un lugar inesperado donde Miguel se encargó de organizar dos ediciones de esta cena, cada una compuesta por ocho exquisitos tiempos, cada uno cuidadosamente elaborado para resaltar sabores, texturas y técnicas culinarias innovadoras y estuvieron acompañados de maridajes cuidadosamente seleccionados.
                </p>
                <br />
                <div className='pop-up-container'>
                    <img className='pop-up-pic' src={popup3} alt='miguel' onLoad={handleImageLoad}></img>
                    {isLoading && <Spinner />}
                </div>
                <br />
                <p>
                    Este evento atrajo a una audiencia ávida de explorar nuevos sabores y experiencias culinarias, mientras disfrutaban de una atmósfera íntima y emocionante. Fue una ocasión especial que rompió con lo convencional, ofreciendo una propuesta disruptiva y emocionante.
                </p>
                <br />
                <div className='pop-up-container'>
                    <img className='pop-up-pic' src={popup10} alt='miguel'></img>
                </div>
                <br />
                <p>
                    Miguel se encargó de todos los aspectos del evento, desde la planificación y la preparación de los platos hasta la presentación y el servicio, garantizando una experiencia memorable y personalizada para todos los asistentes.
                </p>
                <br />
                <div className='pop-up-container'>
                    <img className='pop-up-pic' src={popup9} alt='miguel'></img>
                </div>

                <div className='pop-up-container'>
                    <img className='pop-up-pic' src={popup} alt='miguel'></img>
                </div>

                <div className='pop-up-container'>
                    <img className='pop-up-pic' src={popup8} alt='miguel'></img>
                </div>

                <div className='pop-up-container'>
                    <img className='pop-up-pic' src={popup5} alt='miguel'></img>
                </div>

                <div className='pop-up-container'>
                    <img className='pop-up-pic' src={popup6} alt='miguel'></img>
                </div>

                <div className='pop-up-container'>
                    <img className='pop-up-pic' src={popup7} alt='miguel'></img>
                </div>

                <div className='pop-up-container'>
                    <img className='pop-up-pic' src={popup11} alt='miguel'></img>
                </div>


            </div>

</div>
        

    );
}


export default Popup;