import styled from "styled-components";

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