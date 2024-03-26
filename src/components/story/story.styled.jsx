import styled from "styled-components";

import { colors } from "../../utils/colors";

export const Root = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: 100px;
    border-radius: 4px;
    background: ${colors.gold};

    @media (max-width: 1000px) {
        flex-direction: column-reverse;
    }

    @media (max-width: 700px) {
        width: 100%;
    }
`;

export const DescriptionContainer = styled.div`
    width: calc(100% / 2);
    padding: 20px;

    @media (max-width: 1000px) {
        width: 100%;
        aspect-ratio : 16/9;
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10%;
    border: 1px ${colors.white} solid;
    border-radius: 4px;
`;

export const DescriptionSpan = styled.span`
    text-align: center;
    font-family: "Satisfy";
    font-size: 42px;
    color: ${colors.white};

    @media (max-width: 1020px) {
        font-size: 32px;
    }
`;

export const DescriptionText = styled.p`
    text-align: center;
    font-family: "Raleway";
    font-size: 16px;
    font-style: italic;
    margin: 30px 0;
    color: ${colors.white};

    @media (max-width: 1020px) {
        margin: 20px 0;
    }
`;

export const Image = styled.img`
    width: calc(100% / 2);
    aspect-ratio : 3/4;
    max-height: 500px;
    object-fit: cover;

    @media (max-width: 1000px) {
        width: 100%;
        aspect-ratio : 16/9;
    }

    @media (max-width: 500px) {
        width: 100%;
        aspect-ratio : 1/1;
    }
`;