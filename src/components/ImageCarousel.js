import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import image1 from "../images/carousel1.jpg";
import image2 from "../images/carousel2.jpeg";
import image3 from "../images/carousel3.jpeg";
import Spinner from "./Spinner";

const slides = [
    [image1, "Chef Miguel Bravo hosting an outdoor dinner"],
    [image2, "A shared culinary experience by Miguel Bravo"],
    [image3, "Guests gathered around a private dinner table"],
];

function ImageCarousel() {
    const [isLoading, setIsLoading] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setReduceMotion(media.matches);
        update();
        media.addEventListener?.("change", update);
        return () => media.removeEventListener?.("change", update);
    }, []);

    const paused = isPaused || reduceMotion;

    return (
        <div className="hero-carousel-wrap">
            <Carousel interval={paused ? null : 5000} pause="hover" fade={!reduceMotion}>
                {slides.map(([src, alt], index) => (
                    <CarouselItem key={src}>
                        <img
                            src={src}
                            alt={alt}
                            onLoad={index === 0 ? () => setIsLoading(false) : undefined}
                            loading={index === 0 ? "eager" : "lazy"}
                            width="1600"
                            height="1000"
                        />
                    </CarouselItem>
                ))}
            </Carousel>
            {isLoading && <Spinner />}
            {!reduceMotion && (
                <button className="carousel-motion-control" type="button" onClick={() => setIsPaused((value) => !value)} aria-pressed={isPaused}>
                    {isPaused ? "Play slideshow" : "Pause slideshow"}
                </button>
            )}
        </div>
    );
}

export default ImageCarousel;
