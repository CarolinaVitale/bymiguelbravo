import React, { useState, useEffect } from "react";
import "../styles/App.css";
import "../styles/Buttons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "../components/Spinner";
import "../styles/Menu.css";
import MenuSlide from "../components/MenuSlide";


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
                    <div className="price"><p>4</p></div>
                </div>

                <div className="menu-item">
                    <div className="menu"><p>Arroz Pollo, Jamón y Camarón</p></div >
                    <div className="price"><p>12</p></div>
                </div>

                <div className="menu-item">
                    <div className="menu"><p>Tallarines Pollo y Jamón</p></div>
                    <div className="price"><p>11</p></div>
                </div>

                <div className="menu-item">
                    <div className="menu"><p>Alitas en Salsa BBQ Coreana</p></div >
                    <div className="price"><p>8</p></div>
                </div>

                <div className="menu-item">
                    <div className="menu"><p>Alitas Garlic-Parmesan (ajo y parmesano)</p></div >
                    <p className="new">nuevo</p>
                    <div className="price"><p>10</p></div>
                </div>

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
                    <div className="menu sold-out"><p>Lomito en Salsa de Ostras</p></div>
                    <div className="price"><p>16</p></div>
                </div>

                <div className="menu-item">
                    <div className="menu"><p>Panceta Crocante</p></div>
                    <div className="price"><p>16</p></div>
                </div>

                <h3>Especial de la Semana</h3>

                <div className="menu-item">
                    <div className="menu"><p>Callos a la Madrileña</p></div>
                    <div className="price"><p>16</p></div>
                </div>

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
            </div>
            
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}

export default Menu;