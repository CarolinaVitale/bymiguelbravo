import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'

import image1 from '../images/carousel1.JPG'
import image2 from '../images/carousel2.JPG'
import image3 from '../images/carousel3.JPG'


function Slide () {
    return (
        <Carousel >
            <CarouselItem interval={1500}>
                <img src={image1} alt='Pop-up Dinner'></img>
            </CarouselItem>

            <CarouselItem interval={1500}>
                <img src={image2} alt='Pop-up Dinner'></img>
            </CarouselItem>

            <CarouselItem interval={1500}>
                <img src={image3} alt='Pop-up Dinner'></img>
            </CarouselItem>
        </Carousel>
    );
}

export default Slide;