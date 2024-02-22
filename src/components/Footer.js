import React, { useEffect, useState } from "react";
import pin from "../images/pin.png";
import "../styles/Footer.css";
import Media from "./Instagram";

function Footer() {
    const [isFooterFixed, setIsFooterFixed] = useState(false);

    useEffect(() => {
        adjustFooterPosition();
        window.addEventListener("resize", adjustFooterPosition);
        return () => {
            window.removeEventListener("resize", adjustFooterPosition);
        };
    }, []);

    function adjustFooterPosition() {
        const content = document.querySelector("body");
        const footer = document.querySelector(".footer");
        if (content && footer) {
            const contentHeight = content.offsetHeight;
            const windowHeight = window.innerHeight;
            
        setIsFooterFixed(contentHeight < windowHeight);
       }
    }

    return (
        <footer className={`footer ${isFooterFixed ? "fixed" : ""}`}>
            <div className="content">
                <Media />
                <div className="location">
                    <img src={pin} alt="pin" />
                    <p>Venezuela</p>
                </div>
                <div>
                    <p>Copyright © 2024 by Miguel Bravo - All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;