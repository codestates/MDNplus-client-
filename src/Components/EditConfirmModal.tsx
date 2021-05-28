import React from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import useContentData from "../Hooks/useContentData";
import axios from "axios";
import useBooleanData from "../Hooks/useBooleanData";
import {BtnBox, CancelBtn, Message, ModalBox, ModalContainer, SubmitBtn, } from "../styled-components/ConfirmModal"

// axios.defaults.withCredentials = true

type EditProps = {
  // EditPage로부터 받아오는 Props 타입 설정을 위한 코드
  handleConfirmModal: () => void;
};

//EditPage에서 수정 버튼 누를 시, 정말로 수정을 할 것인지 유저에게 확인하기 위해 만든 모달
function EditConfirmModal({ handleConfirmModal }: EditProps) {
  const { contentState } = useContentData();
  const { contentData } = contentState;
  const { onSetWriteMode } = useBooleanData();
  const history = useHistory();

  // 모달창에 있는 수정 버튼 또는 O 버튼 누를 시, 서버에 글수정 요청을 보내는 코드
  const handleSubmit = () => {
    axios.patch("http://localhost:80/maincontent", { mainContentId: contentData._id, body: contentData.body, pureBody: contentData.pureBody}, { withCredentials: true }).then((res) => console.log(res));
    handleConfirmModal();
    history.push("/ContentPage");
    onSetWriteMode(false);
  };

  console.log(contentData);
  return (
    <ModalContainer onClick={handleConfirmModal}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <Message>게시물을 수정하시겠습니까?</Message>
        <BtnBox>
          <CancelBtn onClick={handleConfirmModal}>취소</CancelBtn>
          <SubmitBtn onClick={handleSubmit}>수정</SubmitBtn>
        </BtnBox>
      </ModalBox>
    </ModalContainer>
  );
}

export default EditConfirmModal;

// # h1
// ## h2
// ### h3
// #### h4

// _기울기_

// ***굵기 && 기울기***

// ```
// 테스트 const test = [1, 2, 3, 4, 5]
// ```

// ![](https://media.istockphoto.com/vectors/hundred-number-vector-icon-symbol-isolated-on-white-background-vector-id1097228036?k=6&m=1097228036&s=612x612&w=0&h=66yCC83tPzTe7w6CdzTvZy6UeEwNhBIuLp6Ambyrqis=)
