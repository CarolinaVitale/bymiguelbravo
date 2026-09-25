import React from "react";
import PageMeta from "../components/PageMeta";
import portrait from "../images/miguel-bravo.jpg";
import monogram from "../images/brand/mb-gold.png";
import ochoSeal from "../images/brand/ocho-trece/seal-gold.png";
import ochoFish from "../images/brand/ocho-trece/fish-gold.png";
import "../styles/Links.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare, faPlus, faPhone, faArrowRightLong, faArrowUpLong, faAt } from "@fortawesome/free-solid-svg-icons";

function Links() {
  return (
    <main id="main-content" className="links-page" lang="en">
      <PageMeta title="Contact & links" description="Miguel Bravo, Executive Chef at Ocho Trece. Save my contact, explore our websites, and connect with Ocho Trece." />
      <div className="links-atmosphere" aria-hidden="true">
        <img className="links-backdrop-mark" src={monogram} alt="" />
        <img className="links-backdrop-fish" src={ochoFish} alt="" />
      </div>
      <div className="links-card">
        <img className="links-monogram" src={monogram} alt="" />
        <img className="links-portrait" src={portrait} alt="Miguel Bravo" width="120" height="120" />
        <header className="links-identity">
          <h1>Miguel Bravo</h1>
          <p>Executive Chef <span aria-hidden="true">·</span> Ocho Trece</p>
        </header>
        <nav className="links-actions" aria-label="Contact and websites">
          <a className="links-action links-save" href={`${process.env.PUBLIC_URL}/miguel-bravo.vcf`} download="Miguel-Bravo.vcf">
            <span className="links-symbol" aria-hidden="true"><FontAwesomeIcon icon={faArrowUpLong} style={{ transform: "rotate(180deg)" }} /></span>
            <span><strong>Save my contact</strong><small>Miguel Bravo · Executive Chef</small></span>
            <span aria-hidden="true"><FontAwesomeIcon icon={faPlus} /></span>
          </a>
          <a className="links-action" href="https://bymiguelbravo.com" target="_blank" rel="noopener noreferrer">
            <span className="links-symbol" aria-hidden="true"><FontAwesomeIcon icon={faUpRightFromSquare} /></span>
            <span><strong>My website</strong><small>bymiguelbravo.com</small></span>
            <span aria-hidden="true"><FontAwesomeIcon icon={faArrowRightLong} style={{ transform: "rotate(320deg)" }} /></span>
          </a>
        </nav>
        <section className="links-restaurant-section" aria-labelledby="links-restaurant-title">
          <header className="links-restaurant-heading">
            <div><span className="links-eyebrow">THE RESTAURANT</span><h2 id="links-restaurant-title">Ocho Trece</h2></div>
            <img className="links-ocho-seal" src={ochoSeal} alt="" />
          </header>
          <img className="links-restaurant-fish" src={ochoFish} alt="" aria-hidden="true" />
          <nav className="links-restaurant" aria-label="Connect with Ocho Trece">
            <a className="links-action" href="https://ochotrece.restaurant" target="_blank" rel="noopener noreferrer">
              <img className="links-button-logo" src={ochoFish} alt="" />
              <span><strong>Visit our website</strong><small>ochotrece.restaurant</small></span>
              <span aria-hidden="true"><FontAwesomeIcon icon={faArrowRightLong} style={{ transform: "rotate(320deg)" }} /></span>
            </a>
            <a className="links-action" href="tel:8133745363">
              <span className="links-symbol" aria-hidden="true"><FontAwesomeIcon icon={faPhone} /></span>
              <span><strong>Call us</strong><small>Reservations, events &amp; catering</small><small>813 374 5363</small></span>
              <span aria-hidden="true"><FontAwesomeIcon icon={faArrowRightLong} style={{ transform: "rotate(320deg)" }} /></span>
            </a>
            <a className="links-action" href="https://www.instagram.com/ochotrece.restaurant/" target="_blank" rel="noopener noreferrer">
              <span className="links-symbol" aria-hidden="true"><FontAwesomeIcon icon={faAt} /></span>
              <span><strong>Follow on Instagram</strong><small>@ochotrece.restaurant</small></span>
              <span aria-hidden="true"><FontAwesomeIcon icon={faArrowRightLong} style={{ transform: "rotate(320deg)" }} /></span>
            </a>
          </nav>
        </section>
        <div className="links-signoff" aria-hidden="true">BY MIGUEL BRAVO</div>
      </div>
    </main>
  );
}

export default Links;
