import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../utils/colors';

export const Span = styled.span`
    font-family: "Amatic SC";
    font-weight: 700;
    text-align: center;
    font-size: 2vw;
    color: ${colors.gray};
    background: ${colors.white};
    padding: 2% 3%;
    border-radius: 4px;

    @media (max-width: 1200px) {
        font-size: 2.5vw;
        padding: 3% 6%;
    }

    @media (max-width: 800px) {
        font-size: 3.5vw;
        padding: 3% 10%;
    }

    @media (max-width: 500px) {
        font-size: 5vw;
        padding: 3% 10%;
    }
`;

export const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(60%);
    transition: filter .3s ease;
`;

export const Root = styled(Link)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% / 4 - 30px);
    aspect-ratio: 16/9;
    border-radius: 4px;
    overflow: hidden;

    &:hover ${Span} {
        color: ${colors.gold};
    }

    &:hover ${Image} {
        filter: brightness(100%);
    }

    @media (max-width: 1200px) {
        width: calc(100% / 2 - 15px);
        
        &:nth-child(-n+2) {
            margin-bottom: 30px;
        }
    }

    @media (max-width: 800px) {
        width: 100%;
        margin-bottom: 30px;
      
    }
`;
