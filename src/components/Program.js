import React from "react";
import { Link } from "react-router-dom";
import miguel from "../images/editorial/ocho-trece-exterior.jpg";
import "../styles/Program.css";
import "../styles/Buttons.css";
import popup from "../images/popupgif.gif";
import "../styles/App.css";
import Carousel from "react-bootstrap/Carousel";
import catering from "../images/catering.jpeg";
import catering2 from "../images/catering2.jpg";
import catering3 from "../images/catering3.jpeg";
import catering4 from "../images/catering4.jpeg";


function Program() {

    return (
        <div className='program'>
            <section className="program-section bio" data-reveal>
                <div className="program-copy">
                    <span className="section-number">01 / The chef</span>
                    <h2 className="pop-h">A story told through food</h2>
                    <p>Discover the journey, roots, and passion behind every plate Miguel creates.</p>
                    <Link className="program-link" to="/about">Meet Miguel <span>→</span></Link>
                </div>
                <div className='program-visual pop-up-container'>
                    <img className='pop-up-pic chef-story-image' src={miguel} alt='Chef Miguel Bravo with his son outside Ocho Trece in Tampa' loading="lazy" width="1200" height="900" ></img>
                </div>
            </section>

            <section className="program-section catering" data-reveal>
                <div className='program-visual program-carousel'>
                    <Carousel slide={false} interval={null}>
                        <Carousel.Item>
                            <img src={catering4} alt='Catering plate with seared fish and a crisp croquette' loading="lazy" width="1200" height="800"></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={catering} alt='Plated catering dish' loading="lazy" width="1200" height="800" ></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={catering2} alt='Guests at a catered dinner' loading="lazy" width="1200" height="800"></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={catering3} alt='Chef plating a private dinner course' loading="lazy" width="1200" height="800"></img>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="program-copy">
                    <span className="section-number">02 / Catering</span>
                    <h2 className="pop-h">Your celebration, your way</h2>
                    <p>Custom menus and attentive service designed around your gathering in Tampa Bay.</p>
                    <Link className="program-link" to="/services">Explore services <span>→</span></Link>
                </div>
            </section>

            <section className='program-section popup-div' data-reveal>
                <div className="program-copy">
                    <span className="section-number">03 / Experiences</span>
                    <h2 className="pop-h">Pop-up dinner</h2>
                    <p>Intimate tables, seasonal menus, and one-of-a-kind evenings created for curious diners.</p>
                    <Link className="program-link" to="/services#experiences">Explore events <span>→</span></Link>
                </div>
                <div className='program-visual pop-up-container'>
                    <img className='pop-up-pic' src={popup} alt='Guests enjoying a Miguel Bravo pop-up dinner' loading="lazy" width="1200" height="800"></img>
                </div>
            </section>
        </div>
    );
}

export default Program;
