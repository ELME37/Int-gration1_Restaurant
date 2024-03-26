import styled, { keyframes } from 'styled-components';

import { colors } from '../../utils/colors';

export const Root = styled.div`
    position: relative;
`;

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const Image = styled.img`
    width: 100%;
    aspect-ratio: 16/9;
    opacity: 0;
    animation: ${slideDown} 1s ease-in-out forwards;
`;

const slideLeft = keyframes`
  0% {
    opacity: 0;
    left: 40%;
  }
  100% {
    opacity: 1;
    left: 50%;;
  }
`;

export const H1 = styled.h1`
    font-family: "Amatic SC";
    width: 100%;
    height: 100vh;
    text-align: center;
    line-height: 100vh;
    font-size: 10vw;
    font-weight: 700;
    color: white;
    position: absolute;
    top: 40%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
    animation: ${slideLeft} 2s ease-in-out forwards 2s;

    @media (max-width: 800px) {
      font-size: 11vw;
      top: 45%;
    }
`;

export const Svg = styled.svg`
    color: #cdaa7c;
    position: absolute;
    top: 16%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Path = styled.path`
    fill: transparent;
`;

const scale = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const Span = styled.span`
    font-family: "Amatic SC";
    color: ${colors.gold};
    position: absolute;
    width: 100%;
    height: 100vh;
    text-align: center;
    line-height: 100vh;
    font-size: 3vw;
    top: 28%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    animation: ${scale} 2s ease-in-out 1s forwards;

    @media (max-width: 800px) {
      font-size: 4vw;
    }

    @media (max-width: 500px) {
      font-size: 5vw;
    }
`;

export const CurvedText = styled.text`
    font-family: "Amatic SC";
    width: 100%;
    height: 100vh;
    text-align: center;
    line-height: 100vh;
    font-size: 3vw;
    fill: ${colors.gold};
    opacity: 0;
    animation: ${slideDown} 1.5s ease-in-out 0.5s forwards;
  
    @media (max-width: 800px) {
      font-size: 4vw;
    }

    @media (max-width: 500px) {
      font-size: 5vw;
    }
`;