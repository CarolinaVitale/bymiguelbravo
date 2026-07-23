import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollReveal() {
    const { pathname } = useLocation();

    useEffect(() => {
        const elements = document.querySelectorAll("[data-reveal]");
        if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            elements.forEach((element) => element.classList.add("is-visible"));
            return undefined;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.14, rootMargin: "0px 0px -7%" });

        elements.forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, [pathname]);

    return null;
}

export default ScrollReveal;
