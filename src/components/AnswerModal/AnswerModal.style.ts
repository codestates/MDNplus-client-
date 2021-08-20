import styled from "styled-components";
import { fadeIn } from "../../styled-components/Animation";

export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  @media (max-width: 375px) {
    height: 100%;
    width: 100%;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
`;

export const ModalBox = styled.div`
  position: relative;
  width: 25rem;
  height: 10rem;
  padding: 40px;
  background-color: white;
  border: 1px solid #9e9e9e;
  transition: 0.2s ease-in;
  border-radius: 10px;
  @media (max-width: 375px) {
    height: 9rem;
    width: 18rem;
  }

  .askInfo {
    width: 100%;
    left: 0;
    color: #616161;
    margin-bottom: 0.5rem;
  }

  .emptyBox {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
  }

  .selectBox {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50%;
    width: 100%;
    margin-right: -2rem;
    margin-top: 2rem;
    position: relative;
  }

  .confitmBtn {
    color: #616161;
    font-size: 0.9rem;
    cursor: pointer;
  }

  .select {
    border: none;
    background: none;
    cursor: pointer;
    color: #616161;
    font-size: 1rem;
  }

  .select.cancel {
    margin-right: 1rem;
  }

  .select.submit {
    color: #3d5afe;
  }
`;
