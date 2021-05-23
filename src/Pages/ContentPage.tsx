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

  // const handleChangeContent = () => {
  //   onChangeContent()
  // }
  console.log('hi')

  // 수정 버튼 누르면, EditPage로 이동
  const handleClickEdit = () => {
    history.push("/EditPage");
  };
  return (
    <>
      <Container>
        <LeftContainer>
          <SideList>
            {!currentData
              ? null
              : currentData.map((el) => (
                  <SideMethod
                    onClick={() => {
                      onClickMethod(el);
                    }}
                    key={el.id}
                  >
                    {el.title}
                  </SideMethod>
                ))}
          </SideList>
        </LeftContainer>
        <RightContainer>
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
        </RightContainer>
      </Container>
    </>
  );
}

export default ContentPage;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100vw;
  height: 100vh;
`;

const LeftContainer = styled.div``;
const SideList = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  padding-top: 170px;
`;

const SideMethod = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
  color: #283593;
`;

const RightContainer = styled.div`
  padding: 100px;
  padding-top: 50px;
  display: flex;
`;

const ContentBox = styled.div`
  width: 80%;
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
