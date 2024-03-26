import React from 'react';

import { Root, Image, Span } from './categoryMenuCard.styled';

export default function CategoryMenuCard ({ image, span }) {
    return (
        <Root to="">
            <Image src={image} alt="Catégorie Menu" />
            <Span>{span}</Span>
        </Root>
    );
};
