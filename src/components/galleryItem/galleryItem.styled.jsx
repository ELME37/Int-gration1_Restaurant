import styled from "styled-components";

import { colors } from "../../utils/colors";

export const Svg = styled.svg`
    position: absolute;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    fill : ${colors.white};
    background: ${colors.gold};
    opacity: 0;
    transform: scale(0);
    transition: all 0.3s ease;
`;

export const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Root = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;

    &:hover ${Image} {
        filter: brightness(40%);
    }

    &:hover ${Svg} {
        opacity: 1;
        transform: scale(1);
    }

    &:nth-child(1) {
        grid-column: span 2;
        grid-row: span 1;
      }
      
    &:nth-child(2) {
        grid-column: span 1;
        grid-row: span 1;
      }
      
    &:nth-child(3) {
        grid-column: span 1;
        grid-row: span 2;
        height: 100%;
      }
      
    &:nth-child(n+4) {
        grid-column: span 1;
        grid-row: span 1;
      }
`;