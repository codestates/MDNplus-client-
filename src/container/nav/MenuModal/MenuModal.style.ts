import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  z-index: 1;
`;

export const ModalBox = styled.div`
  position: fixed;
  top: 5rem;
  right: 0rem;
  width: 10%;
  height: 20%;
  background-color: white;
  border-radius: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  @media (max-width: 375px) {
    width: 100%;
    height: auto;
    font-size: 1rem;
  }
`;

export const ModalButton = styled.div`
  background-color: white;
  cursor: pointer;
  width: 100%;
  padding: 1.1rem;
  text-align: center;
  color: #424242;

  &:hover {
    background: #f5f5f5;
  }

  @media (max-width: 375px) {
    font-size: 0.7rem;
  }
`;
