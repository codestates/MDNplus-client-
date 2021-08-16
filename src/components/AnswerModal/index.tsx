import { useRef } from "react";
import useBooleanData from "../../hooks/useBooleanData";
import {
  AskEmptyInfo,
  AskInfo,
  BtnBox,
  CancelBtn,
  ContentContainer,
  EmptyBox,
  ModalBox,
  ModalContainer,
  Overlay,
  Submit,
  SubmitBtn,
} from "./AnswerModal.style";

type ModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  btnName: string;
  writing: string;
  handleAnswerBtn: () => void;
};

function AnswerModal({
  setIsOpen,
  btnName,
  handleAnswerBtn,
  writing,
}: ModalProps) {
  const overLay = useRef(null);
  const { onContentPageMode, onSetWriteMode } = useBooleanData();

  const handleOverLay = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsOpen(false);
  };

  const handleAnswerYes = () => {
    handleAnswerBtn();
  };

  const handleAnswerNo = () => {
    setIsOpen(false);
  };

  const handleExitYes = () => {
    window.history.back();
    onSetWriteMode(false);
    onContentPageMode(true);
  };
  const handleExitNo = () => {
    setIsOpen(false);
  };

  return (
    <ModalContainer>
      <Overlay onClick={handleOverLay} ref={overLay} />

      <ModalBox>
        {btnName === "답변" ? (
          writing ? (
            <>
              <AskInfo>답변을 등록하시겠습니까?</AskInfo>
              <ContentContainer>
                <BtnBox>
                  <CancelBtn onClick={handleAnswerNo}>취소</CancelBtn>
                  <SubmitBtn onClick={handleAnswerYes}>등록</SubmitBtn>
                </BtnBox>
              </ContentContainer>
            </>
          ) : (
            <>
              <EmptyBox>
                <AskEmptyInfo>게시물을 작성해주세요.</AskEmptyInfo>
                <Submit onClick={handleAnswerNo}>확인</Submit>
              </EmptyBox>
            </>
          )
        ) : (
          <>
            <AskInfo>나가시겠습니까?</AskInfo>
            <ContentContainer>
              <BtnBox>
                <CancelBtn onClick={handleExitYes}>네</CancelBtn>
                <SubmitBtn onClick={handleExitNo}>아니요</SubmitBtn>
              </BtnBox>
            </ContentContainer>
          </>
        )}
      </ModalBox>
    </ModalContainer>
  );
}

export default AnswerModal;
