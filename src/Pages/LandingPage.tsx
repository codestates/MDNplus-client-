import React, { useEffect } from "react";
import styled from "styled-components";
import useBooleanData from "../Hooks/useBooleanData";
import library from "../img/library.jpg";
import monitor from "../img/monitor.png";
import developer from "../img/developer.png";

const LandingPage = () => {
  const { onSetWriteMode } = useBooleanData();

  useEffect(() => {
    onSetWriteMode(true);
  }, []);

  return (
    <Container>
      <Nav>
        <Logo>MDN+</Logo>
        <Nav_RightBox>
          <Intro>서비스 소개</Intro>
          <Questions>자주 하는 질문</Questions>
        </Nav_RightBox>
      </Nav>
      <IntroBox>
        <IntroBoxBody_Container>
          <IntroBox_Body1>개발이</IntroBox_Body1>
          <IntroBox_Body2>편안해지는 공간</IntroBox_Body2>
        </IntroBoxBody_Container>
        <Img src={monitor}></Img>
      </IntroBox>
      {/* <StartBtn>시작하기</StartBtn> */}
      <AppealBox></AppealBox>
      <ReviewBox>리뷰</ReviewBox>
      <NewsBox>MDN+ 뉴스</NewsBox>
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  margin-top: 2rem;
  width: 75%;
`;

const Logo = styled.span`
  font-size: 2rem;
  color: #005ce7;
  font-weight: bold;
  width: 40%;
`;

const Nav_RightBox = styled.div`
  // margin-right: -3rem;
`;

const Intro = styled.span`
  font-size: 1.3rem;
  color: #005ce7;
  cursor: pointer;
  font-weight: bold;
  margin-right: 3rem;
`;

const Questions = styled.span`
  font-size: 1.3rem;
  color: #616161;
  cursor: pointer;
  font-weight: bold;
`;

const IntroBox = styled.div`
  width: 80%;
  height: 30rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  color: white;
  margin-top: 5rem;
`;

const IntroBoxBody_Container = styled.div`
  margin-left: 4rem;
  width: 25rem;
`;

const IntroBox_Body1 = styled.div`
  font-size: 3rem;
  margin: 1rem 0 1rem 0;
  color: black;
`;

const IntroBox_Body2 = styled.div`
  font-size: 3rem;
  margin: 2rem 0 1rem 0;
  color: black;
  font-weight: bold;
`;

const StartBtn = styled.span`
  font-size: 1.2rem;
  padding: 0.5rem 1.3rem 0.5rem 1.3rem;
  border: 1px solid black;
  background: #424242;
  color: white;
  cursor: pointer;
  margin-top: 3rem;
`;

const Img = styled.img`
  width: 40rem;
  object-fit: cover;
`;

const AppealBox = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //   background: #005ce7;
  font-size: 5rem;
  color: white;
`;

const ReviewBox = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NewsBox = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
