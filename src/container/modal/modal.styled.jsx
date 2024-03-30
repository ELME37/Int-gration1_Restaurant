import styled from "styled-components";

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

export const Button = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    cursor: pointer;
`;