import styled from "styled-components";

import { colors } from "../../utils/colors";

export const Root = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 1);
    z-index: 999;
`;

export const Content = styled.div`

`;

export const Svg = styled.svg`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    fill: ${colors.white};

    @media (max-width: 500px) {
        width: 20px;
        height: 20px;
    }
`;