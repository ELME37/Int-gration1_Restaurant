import React from 'react';

import Tag from '../components/tag';

import { Root, ImageStyle, ContainerInfos, Infos, TitleStyle, Dot, PriceStyle, ContainerTag } from './menuItem.styled';

export default function MenuItem ({ image, name, price, tags }) {
    return (
        <Root>
            <ImageStyle src={image} alt={name} />
            <ContainerInfos>
                <Infos>
                    <TitleStyle>{name}</TitleStyle>
                    <Dot></Dot>
                    <PriceStyle>{price + " €"}</PriceStyle>
                </Infos>
                <ContainerTag>
                    {tags.map((tag, id) => (
                        <Tag content={tag} key={id} />
                    ))}
                </ContainerTag>
            </ContainerInfos>
        </Root>
    );
};