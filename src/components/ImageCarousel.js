import React, {useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";

import image1 from "../images/carousel1.jpg";
import image2 from "../images/carousel2.jpeg";
import image3 from "../images/carousel3.jpeg";
import Spinner from "../components/Spinner";



function ImageCarousel () {

    const [isLoading, setIsLoading] = useState(true);


    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div>
            <Carousel >
                <CarouselItem interval={1500}>
                    <img src={image1} alt='Pop-up Dinner' onLoad={handleImageLoad}></img>
                    {isLoading && <Spinner />}
                </CarouselItem>

                <CarouselItem interval={1500}>
                    <img src={image2} alt='Pop-up Dinner' onLoad={handleImageLoad}></img>
                    {isLoading && <Spinner />}
                </CarouselItem>

                <CarouselItem interval={1500}>
                    <img src={image3} alt='Pop-up Dinner' onLoad={handleImageLoad}></img>
                    {isLoading && <Spinner />}
                </CarouselItem>
               
            </Carousel>
        </div>
    );
}

export default ImageCarousel;