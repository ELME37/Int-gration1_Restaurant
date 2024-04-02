import React from 'react';

import { Root } from './tag.styled';

export default function Tag ({ id, content }) {
    return (
        <Root key={id}>
            { content }
        </Root>
    );
};