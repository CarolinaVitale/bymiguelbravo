import React from "react";
import popup from "../images/popupgif.gif";
import "../styles/Popupdinner.css";


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

            <a href="/popupdinner">
                <button className='button'>Conoce más</button>
            </a>
               
 
        </div>
    );
}

export default PopupDinner;