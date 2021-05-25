import React from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import useContentData from "../Hooks/useContentData";
import axios from 'axios'
import useBooleanData from '../Hooks/useBooleanData';

// axios.defaults.withCredentials = true

type EditProps = {
  // EditPage로부터 받아오는 Props 타입 설정을 위한 코드
  handleConfirmModal: () => void;
};

//EditPage에서 수정 버튼 누를 시, 정말로 수정을 할 것인지 유저에게 확인하기 위해 만든 모달
function EditConfirmModal({ handleConfirmModal }:EditProps) {
  const { contentState } = useContentData();
  const { contentData } = contentState;
  const { onSetWriteMode} = useBooleanData()
  const history = useHistory();

  // 모달창에 있는 수정 버튼 또는 O 버튼 누를 시, 서버에 글수정 요청을 보내는 코드
  const handleSubmit = () => {
    axios.patch('http://localhost:80/maincontent', {mainContentId: contentData._id, body: contentData.body}, {withCredentials:true})
    .then(res => console.log(res))
    handleConfirmModal();
    history.push("/ContentPage");
    onSetWriteMode()
  };
  
  console.log(contentData);
  return (
    <ModalContainer onClick={handleConfirmModal}>
        <ModalBox onClick={(e) => e.stopPropagation()}>
          <div>게시물을 수정하시겠습니까?</div>
          <div>
            <button onClick={handleSubmit}>수정하기</button>
            <button onClick={handleConfirmModal}>취소하기</button>
          </div>
        </ModalBox>
    </ModalContainer>
  );
}

export default EditConfirmModal;

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
