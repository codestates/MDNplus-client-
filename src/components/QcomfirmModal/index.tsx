import { useHistory } from "react-router-dom";
import {
  BtnBox,
  CancelBtn,
  Message,
  ModalBox,
  ModalContainer,
  SubmitBtn,
} from "../EditConfirmModal/ConfirmModal";

type Qprops = {
  handleConfirmModal: () => void;
  handleSubmitQ: () => void;
  askInfo: string;
};

function QconfirmModal({ handleConfirmModal, handleSubmitQ, askInfo }: Qprops) {
  const history = useHistory();

  const handleExit = () => {
    history.push("/HelpdeskPage");
  };

  const handleAnswerNo = () => {
    handleConfirmModal();
  };

  return (
    <ModalContainer onClick={handleConfirmModal}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        {askInfo === "질문" ? (
          <>
            <Message>질문을 등록하시겠습니까?</Message>
            <BtnBox>
              <CancelBtn onClick={handleConfirmModal}>취소</CancelBtn>
              <SubmitBtn onClick={handleSubmitQ}>등록</SubmitBtn>
            </BtnBox>
          </>
        ) : (
          <>
            <Message>나가시겠습니까?</Message>
            <BtnBox>
              <CancelBtn onClick={handleExit}>네 </CancelBtn>
              <SubmitBtn onClick={handleAnswerNo}>아니요 </SubmitBtn>
            </BtnBox>
          </>
        )}
      </ModalBox>
    </ModalContainer>
  );
}

export default QconfirmModal;
