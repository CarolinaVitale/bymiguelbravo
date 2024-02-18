import React, {useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";

import image1 from "../images/carousel1.jpg";
import image2 from "../images/carousel2.jpeg";
import image3 from "../images/carousel3.jpeg";
import Spinner from "../components/Spinner";



function Slide () {

    const [isLoading, setIsLoading] = useState(true);
    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div>
            <Carousel onLoad={handleImageLoad} >
                <CarouselItem interval={1500}>
                    <img src={image1} alt='Pop-up Dinner' ></img>
                </CarouselItem>

                <CarouselItem interval={1500}>
                    <img src={image2} alt='Pop-up Dinner' ></img>
                </CarouselItem>

                <CarouselItem interval={1500}>
                    <img src={image3} alt='Pop-up Dinner' ></img>
                </CarouselItem>
                {isLoading && <Spinner />}
            </Carousel>
        </div>
    );
}

export default Slide;