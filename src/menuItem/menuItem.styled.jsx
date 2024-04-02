import styled from "styled-components";

import { colors } from "../utils/colors";

export const Root = styled.div`
    display: flex;
    align-items: center;
    width: calc(100% / 2 - 30px);
    margin-bottom: 30px;

    @media (max-width: 1150px) {
        width: 100%;
    }

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const ImageStyle = styled.img`
    width: 100px;
    aspect-ratio: 1/1;
    margin-right: 20px;
    border-radius: 50%;
    object-fit: cover;
    
    @media (max-width: 800px) {
        margin-bottom: 10px;
    }
`;

export const ContainerInfos = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%
`;

export const Infos = styled.div`
    display: flex;
    align-items: center;
`;

export const TitleStyle = styled.h3`
    font-family: "Raleway";
    font-weight: 400;
    color: ${colors.white};
    text-wrap: nowrap;

    @media (max-width: 500px) {
        font-size: 16px;
    }
`;

export const Dot = styled.span`
    flex-grow: 1;
    border-bottom: 1px white dotted;
    transform: translateY(6px);
    margin: 0 4px;
`;

export const PriceStyle = styled.span`
    font-family: "Raleway";
    font-weight: 400;
    font-size: 20px;
    color: ${colors.white};

    @media (max-width: 500px) {
        font-size: 18px;
    }
`;

export const ContainerTag = styled.ul`
    display: flex;
`;