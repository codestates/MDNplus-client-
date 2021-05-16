import React from "react";
import ReactMarkdown from 'react-markdown';
import { useHistory } from 'react-router';
import styled from "styled-components";
import useContentData from "../Hooks/useContentData";
import {Components} from "./EditPage" 

function ContentPage() {
  const { state } = useContentData();
  const { contentData } = state;
  const history = useHistory()

  // 수정 버튼 누르면, EditPage로 이동
  const handleClickEdit = () => {
    history.push('/EditPage')
  }
  return (
    <>
    <Container>
      <Stage>
        {contentData === null ? (
          <div>로딩중입니다</div>
        ) : (
          <div>
            <Title>{contentData.title}</Title>
            <ReactMarkdown components={Components} children={contentData.body} />
            {/* <Body>{contentData.body}</Body> */}
          </div>
        )}
        <EditBtnBox>
        <EditBtn onClick={handleClickEdit}>수정</EditBtn>
      </EditBtnBox>
      </Stage>
    </Container>
      </>
  );
}

export default ContentPage;

const Container = styled.div`
  width: 100vw;
  height: 100vw;
  display: flex;
  justify-content: center;
`;

const Stage = styled.div`
  width: 50%;
`;

const Title = styled.h1`
  font-size: 45px;
`;

const Body = styled.div``;

const EditBtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const EditBtn = styled.button`
margin-top: 50px;
margin-right: 50px;
`;
