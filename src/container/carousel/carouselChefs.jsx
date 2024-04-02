import React, { useState } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Root, ContainerSlide, Slide, ActiveDot, CustomDot} from './carousel.styled';

export default function CarouselChefs ({ slides }) {
    const [activeDotIndex, setActiveDotIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
              }
            }
          ],
        customPaging: i => (
          i === activeDotIndex ? <ActiveDot /> : <CustomDot />
        ),
        beforeChange: (current, next) => {
          setActiveDotIndex(next);
        }
      }

    return (
        <Root >
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <ContainerSlide key={index}>
                        <Slide src={slide.image} alt={slide.name} />
                    </ContainerSlide>
                ))}
            </Slider>
        </Root>
    );
};