import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

type Qprops = {
    handleConfirmModal: () => void;
    handleSubmitQ: () => void;
}

function QconfirmModal({handleConfirmModal, handleSubmitQ}: Qprops) {
  const history = useHistory();

  return (
    <ModalContainer onClick={handleConfirmModal}>
        <ModalBox onClick={(e) => e.stopPropagation()}>
          <div>질문을 등록하시겠습니까?</div>
          <div>
            <button onClick={handleSubmitQ}>등록하기</button>
            <button onClick={handleConfirmModal}>취소하기</button>
          </div>
        </ModalBox>
    </ModalContainer>
  );
}

export default QconfirmModal;

const ModalContainer = styled.div`
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
`;

const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 200px;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  background: white;
  transition: 0.4s ease-in;
`;

const SubmitBtn = styled.button``;