import React, { useEffect } from "react";
import styled from "styled-components";
import useBooleanData from "../Hooks/useBooleanData";
import library from "../img/library.jpg";
import monitor from "../img/monitor.png";
import developer from "../img/developer.png";
import { fadeIn, slideUp, slideUp_Intro } from "../styled-components/Animation";

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
      <AppealBoxContainer>
        <AppealBoxTitle>MDN+를 언제 이용하면 되나요?</AppealBoxTitle>
        <AppealBox>
          <AppealTitle>MDN 공식문서 내용이 이해가 안갈 때</AppealTitle>
          <AppealBody>공식문서를 참고할 때, 번역이 매끄럽지 않거나 이해하기 힘든 부분들이 있지 않았었나요? 다른 개발자들이 자유롭게 수정한 MDN+를 확인하세요!</AppealBody>
        </AppealBox>
        <AppealBox>
          <AppealTitle>Stack overFlow 영어 답변이 이해가 안될 때</AppealTitle>
          <AppealBody>영어 때문에 개발하기 어려우셨나요? 여러 개발자들이 공유한 지식을 얻어가보세요!</AppealBody>
        </AppealBox>
        <AppealBox>
          <AppealTitle>자신의 개발 지식을 다른 사람들과 공유하고 싶을 때</AppealTitle>
          <AppealBody>개발공부하면서 얻은 지식을 다른 개발자들에게 공유해보고 싶지 않으신가요. MDN+ 에 공유해주세요!</AppealBody>
        </AppealBox>
      </AppealBoxContainer>

      <ReviewBoxContainer>
        <ReviewBoxTitle>개발공부에 얼마나 많은 도움이 되었을까? </ReviewBoxTitle>
        <ReviewBoxSubTitle>언제 어디서든 MDN+에 있는 여러 개발자분들 덕분에 개발공부에 두려움이 없어졌어요.</ReviewBoxSubTitle>
        <ReviewFlexBox>
          <ReviewBox>
            <ReviewBody>
              MDN 에서 한국말 번역기 제대로 안되어있어 힘들었는데 MDN+에서 어떤분이 제대로 정리해서 올리셨더라구요. 잘못된 정보들도 있었는데 공부할겸 정리해서 직접 수정 할 수도있고 정말 도움이 많이
              되었습니다!!
            </ReviewBody>
            <Reviewer>코드스테이츠 27기 김코딩</Reviewer>
          </ReviewBox>
          <ReviewBox>
            <ReviewBody>
              한국에도 웹 개발자들을 위해 이런 서비스가 있다니... 제가 남긴 질문을 시니어 개발자님이 답변해주셨습니다. 정말 든든하네요 ㅎㅎ 관리가 잘되어서 번창하셨으면 좋겠습니다.
            </ReviewBody>
            <Reviewer>주니어 개발자 문코딩</Reviewer>
          </ReviewBox>
          <ReviewBox>
            <ReviewBody>
              웹개발에 필요한 Javascript CSS 에대한 정보가 정말 많은 것 같습니다. 초보 개발자라 map method 을 어떻게 사용하는지 잘 몰랐는데 다른 분들이 남겨주신 다양한 예시들을 보고 겨우 이해했네요
              감사합니다!
            </ReviewBody>
            <Reviewer>개발입문자 조코딩</Reviewer>
          </ReviewBox>
        </ReviewFlexBox>
      </ReviewBoxContainer>
      {/* <NewsTitle>MDN+ 뉴스</NewsTitle> */}
      <NewsBoxContainer>
        <LeftBox> 왼쪽박스</LeftBox>
        <RightBox>
          <RightBoxContent>컨텐트1</RightBoxContent>
          <RightBoxContent>컨텐트2</RightBoxContent>
          <RightBoxContent>컨텐트3</RightBoxContent>
        </RightBox>
      </NewsBoxContainer>
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
  height: 16rem;
  margin-top: 1rem;
  width: 75%;
`;

const Logo = styled.span`
  font-size: 1.7rem;
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
  width: 20rem;
  margin-top: -5rem;

  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const IntroBox_Body1 = styled.div`
  font-size: 3rem;
  margin: 1rem 0 1rem 0;
  color: #616161;
  transition: 1s ease-in-out;

  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp_Intro};
  animation-fill-mode: forwards;
`;

const IntroBox_Body2 = styled.div`
  font-size: 3rem;
  margin: 1rem 0 1rem 0;
  color: #616161;
  font-weight: bold;

  transition: 1s ease-in-out;

  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp_Intro};
  animation-fill-mode: forwards;
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

const AppealBoxContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-size: 1rem;
  color: black;
`;

const AppealBoxTitle = styled.div``;

const AppealBox = styled.div`
  border: 1px solid black;
  margin: 2rem 0 2rem 0;
`;

const AppealTitle = styled.div``;

const AppealBody = styled.div``;

const ChangeHeight = styled.div`
  height: 50rem;
`;
const ReviewBoxContainer = styled.div`
  width: 70%;

  height: 70rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ReviewFlexBox = styled.div`
  display: flex;
`;

const ReviewBoxTitle = styled.div`
  font-weight: bold;
  font-size: 3rem;
  margin-top: 4rem;
  color: #424242;
`;
const ReviewBoxSubTitle = styled.div`
  font-size: 1.2rem;
  margin: 0.5rem 0 3rem 0;
  color: #757575;
`;

const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 25rem;
  border-radius: 0.6rem;
  border: none;
  padding: 0 1rem 1rem 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
  margin: 2rem;
  padding: 2rem;
  position: relative;
`;
const ReviewBody = styled.div`
  font-size: 1.3rem;
  line-height: 2.3rem;
  color: #757575;
`;
const Reviewer = styled.div`
  position: absolute;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0 0 2rem 0;
  bottom: 0;
  color: #424242;
`;

const NewsTitle = styled.div``;
const NewsBoxContainer = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LeftBox = styled.div`
  border: 1px solid black;
`;
const RightBox = styled.div`
  border: 1px solid black;
`;

const RightBoxContent = styled.div``;
