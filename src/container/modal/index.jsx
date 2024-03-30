import React from 'react';

import { Root, Content, Button } from './modal.styled';

export default function Modal ({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <Root>
            <Content>
                {children}
                <Button onClick={onClose}>Fermer la modal</Button>
            </Content>
        </Root>
    );
};