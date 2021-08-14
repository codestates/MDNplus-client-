import styled from "styled-components";
import {
  fadeIn,
  slideUp_short,
  slideLeft_line,
  slideRight_line,
  slideLeft_box,
  slideRight_box,
} from "../../../../styled-components/Animation";

export const Preview1Container_ON = styled.div`
  // border: 1px solid blue;
  opacity: 1;
  width: 100%;
  height: 45rem;
  display: grid;
  grid-template-columns: 0.6fr 0.4fr;
  background: #fafafa;

  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const Preview1Container_OFF = styled.div`
  opacity: 0;
  width: 100%;
  height: 45rem;
`;

export const Preview2Container_ON = styled.div`
  // border: 1px solid red;
  opacity: 1;
  width: 100%;
  height: 45rem;
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  background: white;

  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const Preview2Container_OFF = styled.div`
  opacity: 0;
  width: 100%;
  height: 45rem;
`;

export const PreviewBox = styled.div`
  // border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const PreviewImg = styled.img`
  width: 40rem;
  height: 37rem;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 1;

  animation-duration: 3s;
  animation-timing-function: cubic-bezier(0.65, 0.05, 0.32, 0.98);
  animation-name: ${slideUp_short};
  animation-fill-mode: forwards;

  @media (max-width: 500px) {
    width: 20rem;
    height: 19rem;
  }
`;

export const SubBox1 = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 23vw;
  height: 100%;
  background: #cfd8dc;

  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.65, 0.05, 0.32, 0.98);
  animation-name: ${slideLeft_box};
  animation-fill-mode: forwards;
`;

export const SubBox2 = styled.div`
  position: absolute;
  top: 0rem;
  right: 0rem;
  width: 23vw;
  height: 100%;
  background: #cfd8dc;

  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.65, 0.05, 0.32, 0.98);
  animation-name: ${slideRight_box};
  animation-fill-mode: forwards;
`;

export const AppealBox = styled.div`
  // border: 1px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  animation-duration: 4s;
  animation-timing-function: cubic-bezier(0.65, 0.05, 0.32, 0.98);
  animation-name: ${slideUp_short};
  animation-fill-mode: forwards;
`;

export const UnderLine1 = styled.div`
  width: 4rem;
  border: 1px solid black;
  position: absolute;
  top: 14rem;
  left: -2rem;

  animation-duration: 5s;
  animation-timing-function: ease-out;
  animation-name: ${slideLeft_line};
  animation-fill-mode: forwards;

  @media (max-width: 500px) {
    border: none;
  }
`;

export const UnderLine2 = styled.div`
  width: 4rem;
  border: 1px solid black;
  position: absolute;
  top: 14rem;
  right: -2rem;

  animation-duration: 5s;
  animation-timing-function: ease-out;
  animation-name: ${slideRight_line};
  animation-fill-mode: forwards;

  @media (max-width: 500px) {
    border: none;
  }
`;

export const AppealTitle = styled.div`
  // border: 1px solid black;
  width: 75%;
  margin-top: 10rem;
  margin-bottom: 1rem;
  color: #616161;
  font-size: 1.2rem;

  @media (max-width: 500px) {
  }
`;

export const AppealBody = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  width: 75%;
  line-height: 3.5rem;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;
