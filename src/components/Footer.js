import React from "react";
import pin from "../images/pin.png";
import "../styles/Footer.css";
import Media from "./Instagram";

function Footer() {
    return (
        <footer className="footer">
            <div className="content">
                <Media />
                <div className="location">
                    <img src={pin} alt="pin" />
                    <p>Tampa, Florida</p>
                </div>
                <div>
                    <p>Copyright © 2026 Miguel Bravo · All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
