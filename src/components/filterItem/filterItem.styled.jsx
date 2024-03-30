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
`;