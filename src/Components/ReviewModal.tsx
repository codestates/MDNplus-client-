import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ModalProps = {
  handleCloseModal: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  getModalData: {
    title: string;
    body: string;
  };
};

function ReviewModal({ handleCloseModal, setIsOpen, getModalData }: ModalProps) {
  const handleCloseIcon = () => {
    setIsOpen(false);
  };

  return (
    <ModalContainer>
      <ModalBox>
        <CloseIcon onClick={handleCloseIcon}>
          <FontAwesomeIcon icon="times" size="lg" color="#005ce7" />
        </CloseIcon>
        <ContentContainer>
          <Title>{getModalData.title}</Title>
          <Body>{getModalData.body}</Body>
        </ContentContainer>
      </ModalBox>
    </ModalContainer>
  );
}

export default ReviewModal;

const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalBox = styled.div`
  position: relative;
  width: 50%;
  height: 70%;
  margin: 0 10%;
  padding: 50px;
  background-color: white;
  border-radius: 34px;
  box-sizing: border-box;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: rotate(180deg);
  }
`;

const ContentContainer = styled.div`
  height: 100%;
  weidth: 100%;
`;

const Title = styled.div`
  height: 10%;
  padding: 30px;
`;

const Body = styled.div`
  weidth: 100%;
  height: 90%;
  padding: 30px;
  overflow-x: hidden;
  overflow-y: auto;
`;
