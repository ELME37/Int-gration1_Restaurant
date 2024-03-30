import React from 'react';

import { Root } from './button.styled';

export default function Button ({ children }) {
    return (
        <Root>
            {children}
        </Root>
    );
};