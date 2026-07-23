import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import "../styles/Menu.css";
import featuredDish from "../images/editorial/beef-green-sauce-vertical.jpg";
import empanadas from "../images/editorial/empanadas.jpg";
import octopus from "../images/editorial/octopus-special-clean.jpg";
import PageMeta from "../components/PageMeta";
import dinner from "../images/carousel1.jpg";
import table from "../images/popupdinner2.jpg";
import detail from "../images/popupdinner3.jpg";
import "../styles/Popupdinner.css";

const services = [
    { number: "01", id: "private-dining", title: "Private dining", text: "A restaurant-level experience in your home, from a tailored menu to the final course.", image: featuredDish },
    { number: "02", id: "event-catering", title: "Event catering", text: "Thoughtful food and seamless service for intimate celebrations, weddings, and corporate gatherings.", image: empanadas },
    { number: "03", id: "chefs-table", title: "Chef's table", text: "A seasonal multi-course journey that brings Miguel's global influences to one shared table.", image: octopus },
];

function Services() {
    return (
        <main id="main-content" className="services-page">
            <PageMeta title="Services" description="Explore private dining, catering, chef's tables, and pop-up events by Chef Miguel Bravo in Tampa Bay." />
            <header className="page-hero services-hero">
                <span>Gather · Taste · Celebrate</span>
                <h1>Hospitality, <br aria-hidden="true" />made personal.</h1>
                <p>Custom culinary experiences for homes and venues across Tampa Bay.</p>
            </header>
            <nav className="service-index" aria-label="Services on this page">
                {services.map((service) => <a href={`#${service.id}`} key={service.id}><span>{service.number}</span>{service.title}</a>)}
                <a href="#experiences"><span>04</span>Pop-up events</a>
            </nav>
            <section className="services-grid">
                {services.map((service) => (
                    <article className="service-card" id={service.id} key={service.title} data-reveal>
                        <div className="service-image"><img src={service.image} alt={`${service.title} experience by Miguel Bravo`} loading="lazy" width="1200" height="900" /></div>
                        <div className="service-copy">
                            <span>{service.number}</span>
                            <h2>{service.title}</h2>
                            <p>{service.text}</p>
                        </div>
                    </article>
                ))}
            </section>
            <section className="event-story" id="experiences" data-reveal>
                <span className="section-kicker">Pop-ups and special events</span>
                <h2>One table. One menu. <br aria-hidden="true" />One night only.</h2>
                <p>Miguel’s pop-up dinners are intimate culinary experiences built around seasonality, technique, and surprise. They can also be created as a private edition for your own group and location.</p>
            </section>
            <section className="event-gallery" aria-label="Pop-up dinner experience" data-reveal>
                <img src={dinner} alt="Guests sharing a Miguel Bravo pop-up dinner" loading="lazy" width="1200" height="900" />
                <img src={table} alt="An intimate table prepared for a culinary event" loading="lazy" width="900" height="700" />
                <img src={detail} alt="A course served during a pop-up dinner" loading="lazy" width="900" height="700" />
            </section>
            <section className="event-details">
                <div><span>What to expect</span><h2>A complete experience</h2></div>
                <div><p>Seasonal multi-course menus</p><p>Private homes or selected venues</p><p>Intimate, limited seating</p><p>Thoughtful service from start to finish</p></div>
            </section>
            <section className="service-cta">
                <span>Have something special in mind?</span>
                <h2>Let’s create a menu your guests will talk about.</h2>
                <Link to="/contact">Plan your event <b>→</b></Link>
            </section>
        </main>
    );
}

export default Services;
