import React from "react";
import "../styles/App.css";
import logo3D from "../images/logotype-3d.png";
import Slide from "../components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Program from "../components/Program";





function Home() {

    return (

        <div className="App">

            <Slide className='carousel' />

            <img src={logo3D} className='logo-3d' alt="logo-3d" />
            
            <a href='https://wa.me/message/26GNQXJCZ3VVM1' target='_blank' rel="noreferrer">
                <button className='contact-button'>Ponte en Contacto</button>
            </a>
            
            <Program />

        </div>

    );

}



export default Home;