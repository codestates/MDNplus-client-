import styled from "styled-components";
import {
  slideUp_Intro,
  slideUp_short,
  fadeIn_img,
  slideLeft,
} from "../../../../styled-components/Animation";

export const IntroBoxContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #cfd8dc;
  position: relative;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftContainer = styled.div``;

export const RightContainer = styled.div``;

export const IntroBox = styled.div`
  // border: 1px solid red;
  margin-left: 2rem;
  width: 30rem;
  margin-top: 8rem;

  @media (max-width: 500px) {
    margin-left: 0rem;
    margin-top: 8rem;
  }
`;

export const IntroBox_Body1 = styled.div`
  font-size: 3rem;
  margin: 1rem 0 1rem 0;
  color: black;

  animation-duration: 1.2s;
  animation-timing-function: cubic-bezier(0.65, 0.05, 0.32, 0.98);
  animation-name: ${slideUp_Intro};
  animation-fill-mode: forwards;

  @media (max-width: 500px) {
    font-size: 2rem;
    margin-left: 1rem;
  }
`;

export const IntroBox_Body2 = styled.div`
  font-size: 3rem;
  margin: 1rem 0 1rem 0;
  color: black;
  font-weight: bold;

  animation-duration: 1.2s;
  animation-timing-function: cubic-bezier(0.65, 0.05, 0.32, 0.98);
  animation-name: ${slideUp_Intro};
  animation-fill-mode: forwards;

  @media (max-width: 500px) {
    font-size: 2rem;
    margin-left: 1rem;
  }
`;

export const AppBtnBox = styled.div`
  // border: 1px solid black;
  width: 30rem;
  margin-top: 3rem;
  display: flex;
  align-items: center;

  animation-duration: 1.5s;
  animation-timing-function: cubic-bezier(0.65, 0.05, 0.32, 0.98);
  animation-name: ${slideUp_short};
  animation-fill-mode: forwards;

  @media (max-width: 500px) {
    margin-top: 0rem;
  }
`;

export const AppLogo = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: cover;
  margin-right: 1rem;

  @media (max-width: 500px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const GoogleBtn = styled.button`
  font-size: 1.2rem;
  border-radius: 2rem;
  padding: 0.9rem 2rem 0.9rem 2rem;
  border: none;
  margin-right: 1rem;
  color: #616161;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;

  @media (max-width: 500px) {
    font-size: 1rem;
    padding: 0.5rem 1.3rem 0.5rem 1.3rem;
    margin-left: 1rem;
  }
`;

export const AppStoreBtn = styled.button`
  font-size: 1.2rem;
  border-radius: 2rem;
  background: #263238;
  padding: 0.9rem 2.5rem 0.9rem 2rem;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    opacity: 0;
  }
`;

export const CountBox = styled.div`
  position: absolute;
  bottom: 0rem;
  left: 1rem;
  width: 55vw;
  height: 17vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: white;
  z-index: 1;

  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.56, 0.14, 0.84, 0.76);
  animation-name: ${slideLeft};
  animation-fill-mode: forwards;

  @media (max-width: 500px) {
    width: 96%;
    height: 12vh;
  }
`;

export const HelpCountBox = styled.div`
  text-align: center;

  animation-duration: 3.2s;
  animation-timing-function: cubic-bezier(0.67, 0.07, 0.31, 0.95);
  animation-name: ${slideUp_short};
  animation-fill-mode: forwards;
`;

export const EditCountBox = styled.div`
  text-align: center;

  animation-duration: 3.2s;
  animation-timing-function: cubic-bezier(0.67, 0.07, 0.31, 0.95);
  animation-name: ${slideUp_short};
  animation-fill-mode: forwards;
`;

export const CountTitle = styled.div`
  color: #424242;
  font-size: 1.3rem;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Count = styled.div`
  color: black;
  font-size: 2rem;
  font-weight: 500;

  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: flex-end;
  // border: 1px solid blue;

  @media (max-width: 500px) {
  }
`;

export const Img = styled.img`
  width: 40rem;
  height: 100vh;
  object-fit: cover;

  animation-duration: 3.5s;
  animation-timing-function: cubic-bezier(0.68, 0.04, 0.81, 0.68);
  animation-name: ${fadeIn_img};
  animation-fill-mode: forwards;

  @media (max-width: 500px) {
    width: 100%;
    height: 28rem;
  }
`;
