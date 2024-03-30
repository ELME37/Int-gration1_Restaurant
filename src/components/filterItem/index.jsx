import React from 'react';

import { Root, Icon, NameItem } from './filterItem.styled';

export default function FilterItem ({ icon, name, active, onClick }) {
    return (
        <Root onClick={onClick} $active={active}>
            <Icon src={icon} alt={name}/>
            <NameItem>{name}</NameItem>
        </Root>
    );
};