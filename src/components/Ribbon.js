import React from "react";
import "../styles/Ribbon.css";

const phrases = ["Private dining", "Catering", "Pop-up dinners", "Tampa Bay", "By Miguel Bravo"];

function Ribbon() {
    const content = [0, 1].flatMap((set) => phrases.map((phrase) => <React.Fragment key={`${set}-${phrase}`}><span>{phrase}</span><b aria-hidden="true">✦</b></React.Fragment>));

    return (
        <div className="brand-ribbon" aria-label="Private dining, catering, and pop-up dinners in Tampa Bay">
            <div className="brand-ribbon-track">{content}</div>
        </div>
    );
}

export default Ribbon;
