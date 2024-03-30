import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  overflow: hidden;
`

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  position: relative;

  padding-top:350px;
`

export const Slider = styled.div`

  position: absolute;
  top: 0;
  left:0;
  
  transform: translateX(${(props) => props.xPosition * -1}px);
  display: flex;
  align-items: center;
  justify-content: center;
  
  &.isTransition {
    transition: transform 0.3s ease-in-out;
  }
`

export const Controls = styled.div`
    width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Button = styled.div`
  width: 50px;
  height: 50px;
  margin:0 20px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:9px;
`
export const ButtonPrevious = styled(Button)``
export const ButtonNext = styled(Button)``
