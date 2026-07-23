import React from "react";
import "../styles/App.css";
import PageMeta from "../components/PageMeta";

function About() {
    return (
        <main id="main-content" className="about-info">
            <PageMeta title="About Chef Miguel Bravo" description="Meet Chef Miguel Bravo and discover the international experience behind his private dining and catering work in Tampa." />
            <header className="about-heading">
                <span>Venezuela · Peru · Spain · Tampa</span>
                <h1>Meet Miguel Bravo.</h1>
            </header>
            <section className="about-story" data-reveal>
                <aside className="about-manifesto" aria-label="Miguel Bravo's approach">
                    <span>His approach</span>
                    <p>Technique creates the foundation. Curiosity gives every plate its character.</p>
                    <b>10+ years<br />across cultures</b>
                </aside>
                <div className="about-text">
                    <p className="about-lead">A chef shaped by different places, connected by one generous way of cooking.</p>
                    <p>After beginning his career as an engineer, Miguel discovered that his real calling was in the kitchen. He graduated from Le Cordon Bleu Peru in 2015 and has spent the last decade building a culinary career across countries and cultures.</p>
                    <p>His professional journey began with a catering venture in Venezuela, serving everything from intimate weddings to large corporate events. From 2017 to 2022 he continued his work in Spain, refining his technique and deepening his love of hospitality.</p>
                    <p>In 2019, Miguel expanded his training with a Japanese cuisine program in Spain. Today, his cooking brings together Asian influences with Spanish, Peruvian, and French foundations—always guided by curiosity and respect for the ingredient.</p>
                    <p>Now based in Tampa, Miguel creates personal dining experiences where technique never overshadows warmth. His food is expressive, generous, and meant to bring people together.</p>
                </div>
            </section>
        </main>
    );
}

export default About;
