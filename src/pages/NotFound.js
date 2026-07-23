import React from "react";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

function NotFound() {
    return (
        <main id="main-content" className="not-found-page">
            <PageMeta title="Page not found" description="The page you requested could not be found." />
            <span>404 · Page not found</span>
            <h1>This table<br aria-hidden="true" /> isn’t set.</h1>
            <p>The page may have moved, but there is still plenty to discover.</p>
            <div className="not-found-actions">
                <Link to="/">Return home</Link>
                <Link to="/services">Explore services</Link>
                <Link to="/contact">Plan an event</Link>
            </div>
        </main>
    );
}

export default NotFound;
