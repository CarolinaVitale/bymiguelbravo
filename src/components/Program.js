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
import bestOfFest from "../images/editorial/best-of-the-fest-2026.jpg";


function Program() {

    return (
        <div className='program'>
            <section className="program-section bio" data-reveal>
                <span className="program-side-word" aria-hidden="true">ROOTS · CRAFT · STORY</span>
                <div className="program-copy">
                    <span className="section-number">01 / The chef</span>
                    <h2 className="pop-h">A story told through food</h2>
                    <p>Discover the journey, roots, and passion behind every plate Miguel creates.</p>
                    <Link className="program-link" to="/about">Meet Miguel <span>→</span></Link>
                </div>
                <div className='program-visual pop-up-container'>
                    <img className='pop-up-pic chef-story-image' src={miguel} alt='Chef Miguel Bravo with his son outside Ocho Trece in Tampa' loading="lazy" width="1200" height="900" ></img>
                    <span className="image-note" aria-hidden="true">Tampa</span>
                </div>
            </section>

            <section className="award-story" data-reveal aria-labelledby="award-story-title">
                <div className="award-story-copy">
                    <span className="section-number">A Tampa Bay favorite</span>
                    <h2 id="award-story-title">Best of the Fest.</h2>
                    <p>Ocho Trece was named <strong>Best of the Fest Champion</strong> at the 2026 Tampa Bay Wine &amp; Food Festival—a celebration of bold ideas, big flavor, and Tampa’s culinary community.</p>
                    <Link className="program-link" to="/menu">Discover Ocho Trece <span>→</span></Link>
                </div>
                <div className="award-story-visual">
                    <div className="award-photo-frame">
                        <img src={bestOfFest} alt="Chef Miguel Bravo holding the Best of the Fest award at the Tampa Bay Wine and Food Festival" loading="lazy" width="3024" height="4032" />
                    </div>
                    <div className="award-seal" aria-hidden="true">
                        <span>Winner</span>
                        <strong>2026</strong>
                        <small>Tampa Bay</small>
                    </div>
                    <span className="award-caption" aria-hidden="true">Wine &amp; Food Festival · Best of the Fest</span>
                </div>
                <div className="award-marquee" aria-hidden="true">
                    <div>
                        <span>Best of the Fest</span><b>✦</b><span>Ocho Trece</span><b>✦</b>
                        <span>Best of the Fest</span><b>✦</b><span>Ocho Trece</span><b>✦</b>
                    </div>
                </div>
            </section>

            <section className="program-section catering" data-reveal>
                <span className="catering-outline" aria-hidden="true">GATHER</span>
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
                    <div className="catering-motion-mark" aria-hidden="true">
                        <svg viewBox="0 0 190 64"><path d="M2 48 C34 4 72 8 92 37 S147 70 188 18"/><path d="M177 18 L188 18 L184 29"/></svg>
                        <span>Made around your table</span>
                    </div>
                </div>
            </section>

            <section className='program-section popup-div' data-reveal>
                <div className="popup-spark" aria-hidden="true">
                    <svg viewBox="0 0 100 100">
                        <path className="spark-core" d="M50 27 C53 42 59 47 74 50 C59 53 53 59 50 74 C47 59 41 53 26 50 C41 47 47 42 50 27Z"/>
                        <path d="M50 5 L50 18 M50 82 L50 95 M5 50 L18 50 M82 50 L95 50 M18 18 L28 28 M72 72 L82 82 M82 18 L72 28 M28 72 L18 82"/>
                    </svg>
                    <span>Limited edition<br/>One night only</span>
                </div>
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
