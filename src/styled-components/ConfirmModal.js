import styled from "styled-components";
import { fadeIn, slideUp } from "../styled-components/Animation";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  animation-duration: 0.2s;
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
  height: 10rem;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  background: white;
  transition: 0.2s ease-in;
`;

export const Message = styled.div`
  width: 100%;
  padding-left: 2.5rem;
  color: #616161;
`;

export const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
  margin-top: 2rem;
`;

export const CancelBtn = styled.button`
  border: none;
  margin-right: 1rem;
  background: none;
  cursor: pointer;
  color: #616161;
  font-size: 1rem;
`;

export const SubmitBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: #0055fa;
  font-size: 1rem;
`;
