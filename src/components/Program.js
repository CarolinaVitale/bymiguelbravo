import React, {useState} from "react";
import { Link } from "react-router-dom";
import miguel from "../images/miguel-bravo.jpg";
import "../styles/Program.css";
import "../styles/Buttons.css";
import popup from "../images/popupgif.gif";
import "../styles/App.css";
import Carousel from "react-bootstrap/Carousel";
import catering from "../images/catering.jpeg";
import catering2 from "../images/catering2.jpg";
import catering3 from "../images/catering3.jpeg";
import catering4 from "../images/catering4.jpeg";
import catering5 from "../images/catering5.jpeg";
import catering6 from "../images/catering6.jpeg";
import Slider from "./Slider";
import Spinner from "./Spinner";


function Program() {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className='program'>
            
            <Slider />
            <div className="bio">
                <h1 className="pop-h">MI HISTORIA</h1>
                <div className='pop-up-container'>
                    <img className='pop-up-pic' src={miguel} alt='miguel' onLoad={handleImageLoad}></img>
                    {isLoading && <Spinner />}
                </div>
                <Link to="/sobremi">
                    <button className='grey-button'>Conoce más</button>
                </Link>
            </div>

            <div className="catering">
                <h1 className="pop-h">¿QUIÉRES CONTRATAR NUESTRO SERVICIO DE CATERING?</h1>

                <div className='program-carousel'>
                    <Carousel slide={false} onLoad={handleImageLoad}>
                        <Carousel.Item>
                            <img src={catering} alt='catering'></img>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src={catering2} alt='catering'></img>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src={catering3} alt='catering'></img>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src={catering4} alt='catering'></img>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src={catering5} alt='catering'></img>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src={catering6} alt='catering'></img>
                        </Carousel.Item>
                        {isLoading && <Spinner />}
                    </Carousel>
                </div>

                <a href='https://wa.me/message/26GNQXJCZ3VVM1' target='_blank' rel="noreferrer">
                    <button href='' className='grey-button'>Contáctanos</button>
                </a>
            </div>

            <div className='popup-div'>
                <h1 className="pop-h">POP-UP DINNER</h1>
                <br />
                <div className='pop-up-container'>
                    <img className='pop-up-pic' src={popup} alt='miguel' onLoad={handleImageLoad}></img>
                    {isLoading && <Spinner />}
                </div>

                <Link to="/popupdinner">
                    <button className='grey-button'>Conoce más</button>
                </Link>

            </div>

            
        </div>
    );
}

export default Program;