import styled from 'styled-components';

import { colors } from '../../utils/colors';

export const Root = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const Root2 = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 30px;
`;
export const ContainerSlide = styled.div`
  padding: 60px;
`;

export const ContainerSlide2 = styled.div`
  padding: 60px;

  @media (max-width: 800px) {
    padding: 0;
    padding-top: 60px;
}
`;

export const Slide = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
`;

export const Slide2 = styled.img`
  width: 80%;
  aspect-ratio: 16/12;
  margin: 0 auto;
  border-radius: 20px;
  object-fit: cover;

  @media (max-width: 500px) {
    width: 95%;
}
`;

export const SlideInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const Info = styled.p`
  color: ${colors.white};
  font-family: "Raleway";
  font-weight: 400;
  text-align: center;
  text-wrap: nowrap;
`;


export const CustomDot = styled.div`
  background-color: ${colors.gold};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  filter: brightness(40%);
  cursor: pointer;
`;

export const ActiveDot = styled(CustomDot)`
  background-color: ${colors.gold};
  filter: brightness(100%);
`;