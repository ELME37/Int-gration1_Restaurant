import styled from 'styled-components';

import { colors } from '../../utils/colors';

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% / 4);
    cursor: pointer;
    opacity: ${({ $active }) => $active ? '1' : '0.5'};;

    &:hover {
        opacity: 1;
    }

    @media (max-width: 800px) {
        width: calc(100% / 2);
        margin-bottom: 30px;
    }
`;

export const Icon = styled.img`
   margin-bottom: 10px;
`;

export const NameItem = styled.span`
    font-family: "Raleway";
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    text-wrap: nowrap;
    color: ${colors.white};

    @media (max-width: 1150px) {
        font-size: 16px;
    }

    @media (max-width: 800px) {
        font-size: 18px;
    }

    @media (max-width: 400px) {
        font-size: 14px;
    }
`;