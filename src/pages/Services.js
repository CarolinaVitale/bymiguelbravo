import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/App.css";
import pic from "../images/ch-1.jpeg";
import pic2 from "../images/ch2.jpeg";
import pic3 from "../images/ch3.jpeg";
import pic4 from "../images/ch-4.jpeg";
import pic5 from "../images/ch-5.jpeg";
import pic6 from "../images/ch-6.jpeg";
import pic7 from "../images/ch-7.jpeg";
import pic8 from "../images/ch-8.jpeg";
import pic9 from "../images/ch-9.jpeg";
import pic10 from  "../images/pollo-garlic.jpg";
import pic11 from "../images/costillas.jpeg";

import ceviche from "../images/ceviche.jpeg";
import ceviche2 from "../images/ceviche2.jpeg";

import italia from "../images/italian.jpeg";
import italia3 from "../images/italian3.jpeg";
import italia4 from "../images/italian4.jpeg";
import italia5 from "../images/italian5.jpeg";

import catering from "../images/catering.jpeg";
import catering2 from "../images/catering2.jpg";
import catering3 from "../images/catering3.jpeg";
import catering4 from "../images/catering4.jpeg";
import catering5 from "../images/catering5.jpeg";
import catering6 from "../images/catering6.jpeg";
import Spinner from "../components/Spinner";


function Services() {

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
        <div>
            <div className='container-services'>

                <div className='service-carousel'>
                    <Carousel slide={false}>
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
                    </Carousel>
                    <h2>CATERING</h2>
                </div>

                <div className='service-carousel'>
                    <Carousel slide={false}>
                        <Carousel.Item>
                            <img src={pic} alt='asian'></img>
                            <Carousel.Caption>
                                <h3>SOPA WANTON</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src={pic2} alt='asian'></img>
                            <Carousel.Caption>
                                <h3>ENSALADA DE PEPINO</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src={pic3} alt='asian'></img>
                            <Carousel.Caption>
                                <h3>LUMPIAS</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src={pic4} alt='asian'></img>
                            <Carousel.Caption>
                                <h3>ARROZ</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src={pic5} alt='asian'></img>
                            <Carousel.Caption>
                                <h3>TALLARINES</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src={pic6} alt='asian'></img>
                            <Carousel.Caption>
                                <h3>POLLO MIEL Y AJONJOLÍ</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={pic10} alt='asian'></img>
                            <Carousel.Caption>
                                <h3>POLLO GARLIC-PARMESAN</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src={pic7} alt='asian'></img>
                            <Carousel.Caption>
                                <h3>LOMITO EN SALSA DE OSTRAS</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src={pic8} alt='asian'></img>
                            <Carousel.Caption>
                                <h3>ALAS EN BBQ COREANA</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src={pic11} alt='asian'></img>
                            <Carousel.Caption>
                                <h3>BITES DE COSTILLA</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src={pic9} alt='asian'></img>
                            <Carousel.Caption>
                                <h3>PANCETA CROCANTE</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <h2>COMIDA ASIÁTICA</h2>
                </div>
                <div className='service-carousel'>
                    <Carousel slide={false}>
                        <Carousel.Item>
                            <img src={ceviche} alt='ceviche'></img>
                            <Carousel.Caption>
                                <h3>CLÁSICO</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src={ceviche2} alt='ceviche'></img>
                            <Carousel.Caption>
                                <h3>CLÁSICO</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <h2>CEVICHE</h2>
                </div>
                <div className='service-carousel'>
                    <Carousel slide={false}>
                        <Carousel.Item>
                            <img src={italia} alt='italian'></img>
                            <Carousel.Caption>
                                <h3>LASAGNA</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src={italia3} alt='italian'></img>
                            <Carousel.Caption>
                                <h3>TORTELLINI</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src={italia4} alt='italian'></img>
                            <Carousel.Caption>
                                <h3>GNOCCHI</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src={italia5} alt='italian'></img>
                            <Carousel.Caption>
                                <h3>TIRAMISÙ</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                    <h2>COMIDA ITALIANA</h2>
                </div>

            </div>
            <div className='more-info'>
                <h4>Para más información</h4>

                <a href='https://wa.me/message/26GNQXJCZ3VVM1' target='_blank' rel="noreferrer">
                    <button href='' className='button'>Comunícate a través de Whatsapp</button>
                </a>

            </div>
            {isLoading && <Spinner />}
        </div>
    );
}

export default Services;
