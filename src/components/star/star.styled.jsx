import styled from 'styled-components';

import { colors } from '../../utils/colors';

export const StarContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 8px 0;
    padding: 0
`;

export const StarStyle = styled.span`
    font-size: 16px;
    padding: 0;
    margin: 5px;

    &.star-active {
        fill: ${colors.gold};
        filter: brightness(100%);
    }
    
    &.star-inactive {
        fill: ${colors.gold};
        filter: brightness(40%);
    }
`;

export const Svg = styled.svg`
    padding: 0;
    margin: 0;

`;