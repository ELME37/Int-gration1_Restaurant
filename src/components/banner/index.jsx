import React from 'react';

import banner from "../../assets/images/banner/banner2.jpg"

import { Root, Image, H1, Svg, Path, Span, CurvedText } from './banner.styled';

export default function Banner () {
    return (
        <Root>
            <Image src={banner} alt="banner" />
            <Svg width="260" height="130">
                <Path id='curve' d='M 0 120 C 0 120, 130 0, 260 120'>
                </Path>
                <CurvedText textAnchor='middle'>
                    <textPath href='#curve' startOffset="50%">
                        Fresh & Good Food
                    </textPath>
                </CurvedText>
            </Svg>
            <H1>Mon Bistro</H1>
            <Span>100% Fait Maison</Span>
        </Root>
    );
};
