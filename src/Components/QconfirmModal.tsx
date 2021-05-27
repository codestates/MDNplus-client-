import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {BtnBox, CancelBtn, Message, ModalBox, ModalContainer, SubmitBtn, } from "../styled-components/ConfirmModal"


type Qprops = {
    handleConfirmModal: () => void;
    handleSubmitQ: () => void;
}

function QconfirmModal({handleConfirmModal, handleSubmitQ}: Qprops) {
  const history = useHistory();

  return (
    <ModalContainer onClick={handleConfirmModal}>
        <ModalBox onClick={(e) => e.stopPropagation()}>
          <Message>질문을 등록하시겠습니까?</Message>
          <BtnBox>
            <CancelBtn onClick={handleConfirmModal}>취소</CancelBtn>
            <SubmitBtn onClick={handleSubmitQ}>등록</SubmitBtn>
          </BtnBox>
        </ModalBox>
    </ModalContainer>
  );
}

export default QconfirmModal;