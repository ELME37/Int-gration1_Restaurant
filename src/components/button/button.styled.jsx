import styled from "styled-components";

import { colors } from "../../utils/colors";

export const Root = styled.button`
    position: relative;
    color: ${colors.white};
    border: 1px ${colors.white} solid;
    border-radius: 20px;
    background: transparent;
    margin-top: 50px;
    padding: 2% 4%;
    text-transform: uppercase;
    overflow: hidden;
    z-index: 1;
    cursor: pointer;

    &:hover {
        border-color: transparent;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background-color: ${colors.gold};
        z-index: -1;
        transition: all 0.5s ease;
    }

    &:hover::before {
        left: 0;
    }

    @media (max-width: 500px) {
        margin-top: 20px;
    }
`;