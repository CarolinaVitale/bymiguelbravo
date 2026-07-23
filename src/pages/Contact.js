import React from "react";
import PageMeta from "../components/PageMeta";
import "../styles/App.css";

function Contact() {
    return (
        <main id="main-content" className="contact-page">
            <PageMeta title="Contact & Event Inquiries" description="Plan a private dinner, catering event, or pop-up experience with Chef Miguel Bravo in Tampa Bay." />
            <section className="contact-heading">
                <span>Private dining · Catering · Events</span>
                <h1>Let’s make <br aria-hidden="true" />something memorable.</h1>
                <p>For availability, private dining, and catering inquiries, contact Miguel directly through Instagram. Include your preferred date, approximate guest count, location, and the experience you have in mind.</p>
            </section>

            <section className="contact-options" aria-label="Ways to connect" data-reveal>
                <a href="https://www.instagram.com/chefbravovera/" target="_blank" rel="noreferrer"><span>Bookings and inquiries</span><h2>Instagram</h2><b>Message @chefbravovera →</b></a>
                <a href="https://www.linkedin.com/in/miguelbravovera/" target="_blank" rel="noreferrer"><span>Professional inquiries</span><h2>LinkedIn</h2><b>Connect with Miguel →</b></a>
            </section>
            <section className="contact-location" data-reveal><span>Serving</span><h2>Tampa Bay, Florida</h2><p>Available for select travel and destination events.</p></section>
        </main>
    );
}

export default Contact;
