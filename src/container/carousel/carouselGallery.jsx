import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Root2, ContainerSlide2, Slide2 } from './carousel.styled';

export default function CarouselGallery ({ images, initialSlide }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        initialSlide: initialSlide,
    }

    return (
        <Root2>
            <Slider {...settings}>
                {images.map((gallery, index) => (
                    <ContainerSlide2 key={index}>
                        <Slide2 src={gallery.image} alt="restaurant" />
                    </ContainerSlide2>
                ))}
            </Slider>
        </Root2>
    );
};