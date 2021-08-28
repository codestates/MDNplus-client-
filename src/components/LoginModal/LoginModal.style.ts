import styled from "styled-components";
import { fadeIn, slideUp } from "../../styles/Animation";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

export const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25rem;
  height: 23rem;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  background: white;
  transition: 0.4s ease-in;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 99;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: -8rem;
  width: 10rem;
  height: 10rem;
  cursor: pointer;
`;

export const OauthContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  color: #005ce7;
  margin-top: -2rem;
  margin-bottom: 6rem;
  font-family: "Archivo Black", sans-serif;
`;

export const SocialBtnBox = styled.div`
  margin-bottom: -2rem;
`;

export const KakaoBtn = styled.div`
  position: relative;
  width: 17rem;
  height: 2.5rem;
  border-radius: 0.3rem;
  cursor: pointer;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: bold;
  background: #fce300;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  padding: 1.3rem 0rem 1.3rem 2rem;

  &:hover {
  }
`;

export const KaKaoLogo = styled.img`
  position: absolute;
  top: 12.6rem;
  left: 8rem;
  width: 2rem;
  z-index: 1;
  background: #ffeb3b;
`;

export const GithubBtn = styled.div`
  width: 17rem;
  height: 2.5rem;
  border-radius: 0.3rem;
  cursor: pointer;
  border: 1px solid #bdbdbd;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  background: white;
  padding: 1.3rem 0rem 1.3rem 2rem;

  &:hover {
  }
`;

export const GithubLogo = styled.img`
  position: absolute;
  top: 16.1rem;
  left: 8rem;
  width: 2rem;
  z-index: 1;
`;
