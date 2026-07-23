import React from "react";
import { Link } from "react-router-dom";
import "../styles/Popupdinner.css";
import hero from "../images/popupdinner4.jpg";
import dinner from "../images/carousel1.jpg";
import table from "../images/popupdinner2.jpg";
import detail from "../images/popupdinner3.jpg";
import PageMeta from "../components/PageMeta";

function Popup() {
    return (
        <main id="main-content" className="events-page">
            <PageMeta title="Pop-up Dinner Events" description="Discover limited-seat pop-up dinners and private culinary events by Chef Miguel Bravo in Tampa." />
            <header className="event-hero" style={{ backgroundImage: `url(${hero})` }}>
                <div><span>Limited-seat culinary experiences</span><h1>Pop-up <br aria-hidden="true" />dinners.</h1></div>
            </header>
            <section className="event-story">
                <span className="section-kicker">An evening out of the ordinary</span>
                <h2>One table. One menu. <br aria-hidden="true" />One night only.</h2>
                <p>Miguel’s pop-up dinners are intimate, temporary culinary experiences staged in unexpected spaces. Each edition features a carefully paced tasting menu built around seasonality, technique, and surprise.</p>
            </section>
            <section className="event-gallery">
                <img src={dinner} alt="Guests at a Miguel Bravo pop-up dinner" loading="lazy" width="1200" height="900" />
                <img src={table} alt="Pop-up dinner table setting" loading="lazy" width="900" height="700" />
                <img src={detail} alt="A dish served at a pop-up dinner" loading="lazy" width="900" height="700" />
            </section>
            <section className="event-details">
                <div><span>What to expect</span><h2>A complete experience</h2></div>
                <div><p>Seasonal multi-course tasting menu</p><p>Thoughtful beverage pairings</p><p>Intimate, limited seating</p><p>A unique Tampa location</p></div>
            </section>
            <section className="event-cta"><h2>Join the next table.</h2><p>Contact us for upcoming dates or to create a private edition.</p><Link to="/contact">Request details <span>→</span></Link></section>
        </main>
    );
}

export default Popup;
