import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useHistory } from "react-router";
import styled from "styled-components";
import useAllData from "../Hooks/useAllData";
import useContentData from "../Hooks/useContentData";
import { Components } from "./EditPage";

function ContentPage() {
  const { contentState, onClickMethod } = useContentData();
  const { allState } = useAllData();
  const { contentData } = contentState;
  const { currentData } = allState;
  const history = useHistory();


  // 수정 버튼 누르면, EditPage로 이동
  const handleClickEdit = () => {
    history.push("/EditPage");
  };

  return (
    <>
      <Container>
          {contentData === null ? (
            <div>로딩중입니다</div>
          ) : (
            <ContentBox>
              <TitleBox>
                <Title>{contentData.title}</Title>
                <EditBtn onClick={handleClickEdit}>수정</EditBtn>
              </TitleBox>
              <ReactMarkdown components={Components} children={contentData.body} />
            </ContentBox>
          )}
      </Container>
    </>
  );
}

export default ContentPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const ContentBox = styled.div`
  width: 53%;
  margin-top: 2rem;
  margin-left: -10rem;
`;

const TitleBox = styled.div`
display: flex;
justify-content: space-between;
`

const Title = styled.h1`
  font-size: 45px;
  display: inline-block;
`;

const EditBtn = styled.span`
  cursor: pointer;
  font-size: 17px;
  margin-top: 60px;
  margin-right: 15px;
`;
