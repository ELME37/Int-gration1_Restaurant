import styled from "styled-components";

import { colors } from "../../utils/colors";

export const Root = styled.li`
    font-family: "Raleway";
    font-weight: 400;
    font-style: italic;
    text-transform: capitalize;
    color: ${colors.white};
    filter: brightness(60%);
    margin-top: 6px;

    &:not(:last-child)::after {
        content:"/";
        margin: 0 4px;
    }

    @media (max-width: 500px) {
        font-size: 14px;
    }
`;
