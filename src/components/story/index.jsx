import React from 'react';

import { LayoutFluid } from '../../container/layout';

import Restaurateur from '../../assets/images/générals/restaurateur.jpg'

import { Root, DescriptionContainer, Description, DescriptionSpan, DescriptionText, Image } from './story.styled';

export default function Story () {
    return (
        <LayoutFluid>
            <Root>
                <DescriptionContainer>
                    <Description>
                        <DescriptionSpan>Notre Histoire</DescriptionSpan>
                        <DescriptionText>Notre brasserie est bien plus qu'un simple restaurant. Il incarne l'essence même de la tradition culinaire et de l'hospitalité. Nous nous efforçons de servir à nos clients des plats savoureux, inspirés par nos racines régionales.</DescriptionText>
                        <DescriptionSpan>Mon Bistro</DescriptionSpan>
                    </Description>
                </DescriptionContainer>
                <Image src={Restaurateur} alt="Restaurateur" />
            </Root>
        </LayoutFluid>
    );
};
