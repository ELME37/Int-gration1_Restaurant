import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Root2, ContainerSlide, Slide } from './carousel.styled';

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
                    <ContainerSlide key={index}>
                        <Slide src={gallery.image} alt="restaurant" />
                    </ContainerSlide>
                ))}
            </Slider>
        </Root2>
    );
};