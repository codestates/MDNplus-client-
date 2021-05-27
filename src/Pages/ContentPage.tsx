import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useHistory } from "react-router";
import styled from "styled-components";
import LoginModal from "../Components/LoginModal";
import useAllData from "../Hooks/useAllData";
import useBooleanData from "../Hooks/useBooleanData";
import useContentData from "../Hooks/useContentData";
import { Components } from "./EditPage";

type PropsOption = {
  isLogin: Boolean;
  handleLoginModal: () => void;
};

function ContentPage({ isLogin, handleLoginModal }: PropsOption) {
  const { contentState, onClickMethod } = useContentData();
  const { allState } = useAllData();
  const { contentData } = contentState;
  const { currentData } = allState;
  const { BooleanState, onsetContentPage } = useBooleanData();
  const history = useHistory();

  // 수정 버튼 눌렀을 시, 로그인 상태에 따라 EditPage로 이동 또는 로그인 모달창 띄움
  const handleClickEdit = () => {
    console.log("수정 버튼 눌려짐");
    console.log(isLogin);
    if (isLogin) {
      history.push("/EditPage");
    } else {
      onsetContentPage(true);
      localStorage.setItem("contentPage", "true");
      handleLoginModal();
    }
  };

  useEffect(() => {
    // console.log('유즈 이펙트 실행됨')
    window.scrollTo(0, 0); // 스크롤 맨위로 이동시키는 코드
  }, []);

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
`;

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
