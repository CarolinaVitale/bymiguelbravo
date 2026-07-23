import React from "react";
import "../styles/Menu.css";
import signaturePork from "../images/editorial/signature-pork.jpg";
import crispyBites from "../images/editorial/crispy-bites.jpg";
import porkPuree from "../images/editorial/pork-puree.jpg";
import slicedBeef from "../images/editorial/sliced-beef.jpg";
import chickenSkewer from "../images/editorial/chicken-skewer.jpg";
import PageMeta from "../components/PageMeta";
import { Link } from "react-router-dom";

const gallery = [
    [signaturePork, "Chef Miguel Bravo's plated pork with sweet potato purée and pickled onion", "Signature plate"],
    [crispyBites, "Three crispy bites finished with avocado sauce and scallions", "Small bites"],
    [porkPuree, "Crispy sliced pork served over a bright seasonal purée", "Layers & contrast"],
    [slicedBeef, "Sliced beef with a creamy sauce, capers, and fresh arugula", "From the pass"],
    [chickenSkewer, "Glazed chicken and vegetable skewer presented at Ocho Trece", "Fire & glaze"],
];

function Menu() {
    return (
        <main id="main-content" className="menu-page">
            <PageMeta title="Ocho Trece" description="Discover the food, space, and creative energy of Ocho Trece through Chef Miguel Bravo's work in Tampa." />
            <header className="page-hero menu-hero">
                <span>Ocho Trece · Tampa</span>
                <h1>A chapter told <br aria-hidden="true" />through food.</h1>
                <p>A visual look at the restaurant, the dishes, and the ideas brought to life in Miguel’s kitchen.</p>
            </header>

            <section className="menu-intro" data-reveal>
                <div>
                    <span className="section-kicker">Inside Ocho Trece</span>
                    <h2>Food with a point of view.</h2>
                </div>
                <div className="menu-intro-copy">
                    <p>This is not a fixed menu. It is a portrait of a creative period: seasonal plates, bold contrasts, and an approach shaped by Asian, Latin American, and European influences.</p>
                    <a href="https://ochotrece.restaurant/" target="_blank" rel="noreferrer">Visit Ocho Trece <span>↗</span></a>
                </div>
            </section>

            <section className="menu-gallery" aria-labelledby="menu-gallery-title">
                <div className="menu-gallery-heading" data-reveal>
                    <span className="section-kicker">From Miguel’s table</span>
                    <h2 id="menu-gallery-title">A taste of the experience</h2>
                </div>
                <div className="food-grid">
                    {gallery.map(([image, alt, label], index) => (
                        <figure className={`food-grid-item food-grid-item-${index + 1}`} key={image} data-reveal style={{ "--reveal-delay": `${index * 80}ms` }}>
                            <img src={image} alt={alt} loading="lazy" width="1200" height="1600" />
                            <figcaption><span>0{index + 1}</span>{label}</figcaption>
                        </figure>
                    ))}
                </div>
            </section>

            <section className="menu-cta">
                <p>Bring Miguel’s point of view to your next gathering.</p>
                <Link to="/services">Explore catering services <span>→</span></Link>
            </section>
        </main>
    );
}

export default Menu;
