import { useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ModalProps = {
  // handleCloseModal: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  btnName: string;
};

function AnswerModal({ setIsOpen, btnName }: ModalProps) {
  const overLay = useRef(null);

  const handleOverLay = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsOpen(false);
  };
  const handleCloseIcon = () => {
    setIsOpen(false);
  };

  const handleAnswerYes = () => {
    console.log("click");

    //요청보내야함
    window.history.back();
  };

  const handleAnswerNo = () => {
    setIsOpen(false);
  };

  const handleExitYes = () => {
    window.history.back();
  };
  const handleExitNo = () => {
    setIsOpen(false);
  };

  return (
    <ModalContainer>
      <Overlay onClick={handleOverLay} ref={overLay} />

      <ModalBox>
        <CloseIcon onClick={handleCloseIcon}>
          <FontAwesomeIcon icon="times" size="lg" color="#005ce7" />
        </CloseIcon>
        {btnName === "답변" ? (
          <>
            <AskInfo>답변하시겠습니까?</AskInfo>
            <ContentContainer>
              <Answer onClick={handleAnswerYes}>네</Answer>
              <Answer onClick={handleAnswerNo}>아니요</Answer>
            </ContentContainer>
          </>
        ) : (
          <>
            <AskInfo>나가시겠습니까?</AskInfo>
            <ContentContainer>
              <Answer onClick={handleExitYes}>네</Answer>
              <Answer onClick={handleExitNo}>아니요</Answer>
            </ContentContainer>
          </>
        )}
      </ModalBox>
    </ModalContainer>
  );
}

export default AnswerModal;

const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;
const ModalBox = styled.div`
  position: relative;
  width: 28%;
  height: 18%;
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
`;

const AskInfo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem;
  text-align: center;
  color: #686868;
`;

const Answer = styled.button`
  font-size: 1.2rem;
  margin: 1rem;
  border: none;
  background-color: white;
  cursor: pointer;
  color: #686868;

  &:hover {
    font-weight: bold;
    color: #005ce7;
  }
`;
