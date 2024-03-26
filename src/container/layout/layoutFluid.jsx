import React from 'react';
import { LayoutFluidStyle } from './layout.styled';

export default function LayoutFluid ({children }) {
    return (
        <LayoutFluidStyle>
            {children}
        </LayoutFluidStyle>
    );
};