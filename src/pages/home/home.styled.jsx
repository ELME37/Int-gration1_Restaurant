import styled from "styled-components";

import { colors } from "../../utils/colors";

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin: 100px 0;

    @media (max-width: 500px) {
        margin: 50px 0
    }
`;

export const Specialties = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Carte = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 100px;
`;

export const Filter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 60%;
    margin-top: 80px;
    margin-bottom: 50px;

    @media (max-width: 1150px) {
        width: 70%;
    }

    @media (max-width: 1000px) {
        width: 80%;
    }

    @media (max-width: 800px) {
        width: 80%;
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`;

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;

    @media (max-width: 1150px) {
        width: 70%;
    }

    @media (max-width: 1000px) {
        width: 80%;
    }

    @media (max-width: 800px) {
        width: 90%;
    }

    @media (max-width: 650px) {
        width: 100%;
    }
`;

export const Gallery = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`;

export const GalleryPhoto = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 16px;
    width: 80%;
    aspect-ratio: 16/6;
    margin-top: 80px;

    @media (max-width: 1000px) {
        width: 100%;
    }

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Chef = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`;

export const Table = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    width: 100%;
    aspect-ratio: 16/6;

    @media (max-width: 900px) {
        aspect-ratio: 16/7;
    }

    @media (max-width: 700px) {
        aspect-ratio: 16/8;
    }

    @media (max-width: 500px) {
        aspect-ratio: 16/9;
    }
`;

export const TableImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(40%);
`;

export const TableInfos = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TableH3 = styled.h3`
    font-family: "Great Vibes";
    font-weight: 400;
    color: ${colors.gold};
    font-size: 4vw;
    margin-bottom: 10px;

    @media (max-width: 1000px) {
        font-size: 5vw;
    }

    @media (max-width: 800px) {
        font-size: 6vw;
    }

    @media (max-width: 500px) {
        font-size: 7vw;
    }
`;

export const TableSpan = styled.span`
    font-family: "Raleway";
    font-weight: 600;
    color: ${colors.white};
    text-transform: uppercase;
    font-size: 1.5vw;

    @media (max-width: 1000px) {
        font-size: 2vw;
    }

    @media (max-width: 800px) {
        font-size: 2.5vw;
    }

    @media (max-width: 500px) {
        font-size: 3vw;
    }
`;

export const Reservation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`;

export const H2 = styled.h2`
    font-family: "Raleway";
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    font-size: 3vw;
    letter-spacing: 4px;
    color: ${colors.white};

    @media (max-width: 1000px) {
        font-size: 4vw;
    }

    @media (max-width: 800px) {
        font-size: 5vw;
    }

    @media (max-width: 500px) {
        font-size: 6vw;
    }
`;

export const SpanTitle = styled.span`
    font-family: "Satisfy";
    font-size: 2vw;
    color: ${colors.gold};

    @media (max-width: 1000px) {
        font-size: 3vw;
    }

    @media (max-width: 800px) {
        font-size: 4vw;
    }

    @media (max-width: 500px) {
        font-size: 5vw;
    }
`;
