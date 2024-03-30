import React, { useState } from 'react';
import Slider from "react-slick";

import Star from '../../components/star';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Root, ContainerSlide, Slide, SlideInfo, Info, ActiveDot, CustomDot} from './carousel.styled';
import { StarContainer } from '../../components/star/star.styled';

export default function CarouselSpecialties ({ slides }) {
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
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
            <SlideInfo>
              <Info>{slide.name}</Info>
              <StarContainer>
                {[...Array(5)].map((star, id) => {
                  return <Star key={id} active={id < slide.stars} />
                })}
              </StarContainer>
              <Info>{slide.price + " €"}</Info>
            </SlideInfo>
        </ContainerSlide>
        ))}
      </Slider>
    </Root>
  );
};
