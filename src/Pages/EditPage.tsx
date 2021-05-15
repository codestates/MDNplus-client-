import React, { useState } from "react";
import styled from "styled-components";
import EditConfirmModal from "../Components/EditConfirmModal";
import useContentData from "../Hooks/useContentData";

function EditPage() {
  const { state, onChangeContent } = useContentData();
  const { contentData } = state; // contentPage에서 수정 버튼 눌러 EditPage로 이동하므로, 같은 contentData 사용
  const [checkModal, setCheckModal] = useState(false);

  //유저가 글을 수정하여 onchange 이벤트가 발생 시, contentData의 body를 수정하기 위한 함수
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChangeContent(e.target.value);

  };

  // 유저가 수정버튼 누를 시, 정말로 수정할 것인지 물어보는 모달의 상태(true, false)를 관리하는 함수
  const handleConfirmModal = () => {
    if (checkModal) {
      setCheckModal(false);
    } else {
      setCheckModal(true);
    }
  };

  return (
    <>
      {checkModal ? <EditConfirmModal handleConfirmModal={handleConfirmModal}/> : null}
      {!contentData ? (
        <div>로딩 중입니다</div>
      ) : (
        <Container>
          <LeftContainer>
            <Title>{contentData.title}</Title>
            {contentData.body ? <Body defaultValue={contentData.body} onChange={handleChange}></Body> : <Body placeholder="당신의 지식을 공유해주세요..." onChange={handleChange}></Body>}
            <SubmitBtn onClick={handleConfirmModal}>수정 완료</SubmitBtn>
          </LeftContainer>
          <RightContainer>
            <PreviewTitle>{contentData.title}</PreviewTitle>
            <PreviewBody>{contentData.body}</PreviewBody>
          </RightContainer>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100vw;
  height: 100vw;
`;

const LeftContainer = styled.div`
  padding: 0px 30px 30px 30px;
`;

const Title = styled.h1``;

const Body = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: 20px;
  border: none;
  outline: none;
  resize: none;
`;

const SubmitBtn = styled.button`
  position: fixed;
  top: 45rem;
  left: 38rem;
  // top: 900px;
  // left: 800px;
`;

const RightContainer = styled.div`
  background: #f4f4f4;
  padding: 0px 30px 30px 30px;
`;

const PreviewTitle = styled.h1``;

const PreviewBody = styled.div`
  font-size: 20px;
`;

export default EditPage;
