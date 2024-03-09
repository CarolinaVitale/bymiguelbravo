import React, { useState, useEffect } from "react";
import "../styles/App.css";
import "../styles/Buttons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "../components/Spinner";
import "../styles/Menu.css";
import MenuSlide from "../components/MenuSlide";
import Carousel from "react-bootstrap/Carousel";
import pic from "../images/ch-1.jpeg";
import pic2 from "../images/ch2.jpeg";
import pic3 from "../images/ch3.jpeg";
import pic4 from "../images/ch-4.jpeg";
import pic5 from "../images/ch-5.jpeg";
import pic6 from "../images/ch-6.jpeg";
import pic7 from "../images/ch-7.jpeg";
import pic8 from "../images/ch-8.jpeg";
import pic9 from "../images/ch-9.jpeg";
import pic10 from "../images/pollo-garlic.jpg";
import pic11 from "../images/costillas.jpeg";



function Menu() {
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
            <MenuSlide />
            <div className="menu-container">
                <br />

                <div className="menu-item">
                    <div className="menu"><p>Ración de Lumpias (2)</p></div >
                    <div className="price"><p>5</p></div>
                </div>

                <div className="menu-item">
                    <div className="menu"><p>Arroz Pollo, Jamón y Camarón</p></div >
                    <div className="price"><p>12</p></div>
                </div>

                <div className="menu-item">
                    <div className="menu"><p>Tallarines Pollo y Jamón</p></div>
                    <div className="price"><p>11</p></div>
                </div>

                {/* <div className="menu-item">
                    <div className="menu"><p>Alitas en Salsa BBQ Coreana</p></div >
                    <div className="price"><p>8</p></div>
                </div> */}

                {/* <div className="menu-item">
                    <div className="menu"><p>Alitas Garlic-Parmesan (ajo y parmesano)</p></div >
                    <p className="new">nuevo</p>
                    <div className="price"><p>10</p></div>
                </div> */}

                <div className="menu-item">
                    <div className="menu"><p>Pollo Miel y Ajonjolí</p></div>
                    <div className="price"><p>12</p></div>
                </div>

                <div className="menu-item">
                    <div className="menu"><p>Pollo Garlic-Parmesan (ajo y parmesano)</p></div>
                    <p className="new">nuevo</p>
                    <div className="price"><p>14</p></div>
                </div>

                <div className="menu-item">
                    <div className="menu"><p>Bites de Costillas Agridulce con Piña y Pimentón</p></div>
                    <p className="new">nuevo</p>
                    <div className="price"><p>15</p></div>
                </div>

                <div className="menu-item">
                    <div className="menu"><p>Lomito en Salsa de Ostras</p></div>
                    <div className="price"><p>16</p></div>
                </div>

                {/* <div className="menu-item">
                    <div className="menu"><p>Panceta Crocante</p></div>
                    <div className="price"><p>16</p></div>
                </div>*/}

                <h3>Especial de la Semana</h3>

                <div className="menu-item">
                    <div className="menu"><p>Callos a la Madrileña</p></div>
                    <div className="price"><p>16</p></div>
                </div>

                <br />
                <br />
                
                <div className="menu-item">
                    <div className="menu"><p className="delivery">Delivery</p></div>
                    <div className="price"><p className="delivery">2</p></div>
                </div>

                {isLoading && <Spinner />}

                <div className="menu-button">
                    <a href='https://wa.me/message/26GNQXJCZ3VVM1' target='_blank' rel="noreferrer">
                        <button href='' className='grey-button'>Haz tu pedido aquí</button>
                    </a>
                </div>
                <br/>
                <br />
                <br />
                <br />

                <div className='menu-carousel'>
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
                    <br />

                    <br />
                </div>

            </div>
               
            


            <br />
            <br />
            <br />
            <br />
        </div>
    );
}

export default Menu;