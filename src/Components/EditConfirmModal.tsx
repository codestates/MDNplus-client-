import { useHistory } from "react-router-dom";
import useContentData from "../Hooks/useContentData";
import axios from "axios";
import useBooleanData from "../Hooks/useBooleanData";
import {
  BtnBox,
  CancelBtn,
  Message,
  ModalBox,
  ModalContainer,
  SubmitBtn,
} from "../styled-components/ConfirmModal";

type EditProps = {
  handleConfirmModal: () => void;
  handleExitModal: () => void;
  askInfo: string;
};

function EditConfirmModal({
  handleConfirmModal,
  handleExitModal,
  askInfo,
}: EditProps) {
  const { contentState } = useContentData();
  const { contentData } = contentState;
  const { onSetWriteMode } = useBooleanData();
  const history = useHistory();

  const handleSubmit = () => {
    const pureBodyArr = contentData.pureBody.split("()").slice(1);
    let pureBody = "";
    for (let i = 0; i < pureBodyArr.length; i++) {
      pureBody = pureBody + pureBodyArr[i];
    }
    axios
      .patch(
        "http://localhost:8080/maincontent",
        {
          mainContentId: contentData._id,
          body: contentData.body,
          pureBody: pureBody,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
      });
    handleConfirmModal();
    history.push("/ContentPage");
    onSetWriteMode(false);
  };

  const handleExit = () => {
    history.push("/ContentPage");
  };

  const handleAnswerNo = () => {
    handleExitModal();
  };

  return (
    <ModalContainer onClick={handleConfirmModal}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        {askInfo === "수정" ? (
          <>
            <Message>게시물을 수정하시겠습니까?</Message>
            <BtnBox>
              <CancelBtn onClick={handleAnswerNo}>취소</CancelBtn>
              <SubmitBtn onClick={handleSubmit}>수정</SubmitBtn>
            </BtnBox>
          </>
        ) : (
          <>
            <Message>나가시겠습니까?</Message>
            <BtnBox>
              <CancelBtn onClick={handleExit}>네</CancelBtn>
              <SubmitBtn onClick={handleAnswerNo}>아니요</SubmitBtn>
            </BtnBox>
          </>
        )}
      </ModalBox>
    </ModalContainer>
  );
}

export default EditConfirmModal;
