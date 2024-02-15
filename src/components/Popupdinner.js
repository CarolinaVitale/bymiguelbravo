import React from "react";
import popup from "../images/popupgif.gif";
import "../styles/Popupdinner.css";
import { Link } from "react-router-dom";


function PopupDinner() {
    return (
        <div className='popup-div'>
            <h1>EVENTOS</h1>
            <br/>
            <h2>POP-UP DINNER</h2>
            <br />
            <div className='pop-up-container'>
                <img className='pop-up-pic' src={popup} alt='miguel'></img>
            </div>

            <Link to="/popupdinner">
                <button href='' className='social-button'>Conoce más</button>
            </Link>

        </div>
    );
}

export default PopupDinner;