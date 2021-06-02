import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useBooleanData from "../Hooks/useBooleanData";
import library from "../img/library.jpg";
import monitor from "../img/monitor.png";
import monitor2 from "../img/monitor2.png";
import developer from "../img/developer.png";
import { fadeIn, slideUp, slideUp_Intro } from "../styled-components/Animation";
import preview from "../img/preview.png";
import MainNewsImage from "../img/MainNews.jpg";
import PenImg from "../img/pen.jpg";
import networkImg from "../img/network.jpg";
import noteImg from "../img/note.jpg";
import avatar1 from "../img/avatar1.png";
import avatar2 from "../img/avatar2.png";
import avatar3 from "../img/avatar3.png";
import FooterComponent from "../Components/FooterComponent"

const LandingPage = () => {
  const { onSetWriteMode } = useBooleanData();
  const [height, setHeight] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [isSelected, setIsSelected] = useState({
    firstBox: true,
    secondBox: false,
    thirdBox: false,
  });
  const { firstBox, secondBox, thirdBox } = isSelected;

  const handleClickBox = (idx: number) => {
    if (idx === 1) {
      setIsSelected({ firstBox: true, secondBox: false, thirdBox: false });
    } else if (idx === 2) {
      setIsSelected({ firstBox: false, secondBox: true, thirdBox: false });
    } else if (idx === 3) {
      setIsSelected({ firstBox: false, secondBox: false, thirdBox: true });
    }
  };

  useEffect(() => {
    onSetWriteMode(true);
    const height = document.body.scrollHeight;
    const currentY = window.scrollY;
    setHeight(height);
    setCurrentY(currentY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setCurrentY(window.scrollY);
    });
  }, [currentY]);

  console.log(currentY);
  return (
    <Container>
      <Nav>
        <Logo>MDN+</Logo>
        <Nav_RightBox>
          <Intro>서비스 소개</Intro>
          <Questions>자주 하는 질문</Questions>
        </Nav_RightBox>
      </Nav>
      <IntroBoxContainer>
        <IntroBox>
          <IntroBox_Body1>개발이</IntroBox_Body1>
          <IntroBox_Body2>편안해지는 공간</IntroBox_Body2>
        </IntroBox>
        <Img src={monitor}></Img>
      </IntroBoxContainer>
      {/* <StartBtn>시작하기</StartBtn> */}
      <AppealBoxContainer>
        <AppealBoxTitle>성공적인 개발 커리어에 필요한 것들이 이곳에</AppealBoxTitle>
        <AppealBoxSubTitle>개발 능력을 향상시키고 성장을 도와줄 서비스들을 제공합니다. </AppealBoxSubTitle>
        <AppealBoxStage>
          <LeftContainer>
            {firstBox && currentY >= 500 ? <Preview src={preview}></Preview> : null}
            {secondBox ? <Preview src={MainNewsImage}></Preview> : null}
            {thirdBox ? <Preview src={PenImg}></Preview> : null}
          </LeftContainer>
          <RightContainer>
            {firstBox ? (
              <AppealBox_selected>
                <AppealTitle>보다 쉽게 번역된 정보들</AppealTitle>
                <AppealBody>공식 문서에서 이해하기 어려웠던 정보들을 다른 유저가</AppealBody>
                <AppealBody>재번역한 정보들을 확인하세요</AppealBody>
              </AppealBox_selected>
            ) : (
              <AppealBox
                onClick={() => {
                  handleClickBox(1);
                  console.log(currentY);
                }}
              >
                <AppealTitle>보다 쉽게 번역된 정보들</AppealTitle>
                <AppealBody>공식 문서에서 이해하기 어려웠던 정보들을 다른 유저가</AppealBody>
                <AppealBody>재번역한 정보들을 확인하세요</AppealBody>
              </AppealBox>
            )}
            {secondBox ? (
              <AppealBox_selected>
                <AppealTitle>문서 수정</AppealTitle>
                <AppealBody>잘못된 정보나, 자신이 공부한 것들을 정리하여</AppealBody>
                <AppealBody>문서 완성도에 기여해주세요</AppealBody>
              </AppealBox_selected>
            ) : (
              <AppealBox
                onClick={() => {
                  handleClickBox(2);
                }}
              >
                <AppealTitle>문서 수정</AppealTitle>
                <AppealBody>잘못된 정보나, 자신이 공부한 것들을 정리하여</AppealBody>
                <AppealBody>문서 완성도에 기여해주세요</AppealBody>
              </AppealBox>
            )}
            {thirdBox ? (
              <AppealBox_selected>
                <AppealTitle>개발 관련 질문</AppealTitle>
                <AppealBody>구글링하면서 영어 때문에 개발하기 어려우셨나요?</AppealBody>
                <AppealBody>자유롭게 한글로 궁금한 점들을 질문하세요</AppealBody>
              </AppealBox_selected>
            ) : (
              <AppealBox
                onClick={() => {
                  handleClickBox(3);
                }}
              >
                <AppealTitle>개발 관련 질문</AppealTitle>
                <AppealBody>구글링하면서 영어 때문에 개발하기 어려우셨나요?</AppealBody>
                <AppealBody>자유롭게 한글로 궁금한 점들을 질문하세요</AppealBody>
              </AppealBox>
            )}
          </RightContainer>
        </AppealBoxStage>
      </AppealBoxContainer>

      <ReviewBoxContainer>
        <ReviewBoxTitle>개발공부에 얼마나 많은 도움이 되었을까? </ReviewBoxTitle>
        <ReviewBoxSubTitle>언제 어디서든 MDN+에 있는 여러 개발자분들 덕분에 개발공부에 두려움이 없어졌어요.</ReviewBoxSubTitle>
        <ReviewFlexBox>
          <ReviewBox>
            <ReviewBody>
              MDN에 번역이 조금 이해가 안되는 부분들이 있었어서 힘들었는데 MDN+ 위키에 어떤 분이 좀 더 자연스럽게 번역해서 올리셨더라구요. 잘못된 정보들도 몇군데 있었는데, 제가 직접 수정하면서 동시에
              공부도 할 수 있었어서 개발 공부에 도움이 많이 됐습니다.
            </ReviewBody>
            <ReviewerBox>
              <ReviewerImg src={avatar1}></ReviewerImg>
              <Reviewer>코드스테이츠 27기 김코딩</Reviewer>
            </ReviewerBox>
          </ReviewBox>
          <ReviewBox>
            <ReviewBody>
              처음으로 혼자 진행하던 사이드 프로젝트에서 오류가 발생해 며칠동안 밤을 새도 답이 안나왔었는데 시니어 개발자님이 답변을 달아주셔서 해결할 수 있었습니다! 앞으로도 개발하면서 계속 이용할 것
              같습니다. 좋은 서비스 감사합니다 :)
            </ReviewBody>
            <ReviewerBox>
              <ReviewerImg src={avatar2}></ReviewerImg>
              <Reviewer>주니어 개발자 문코딩</Reviewer>
            </ReviewerBox>
          </ReviewBox>
          <ReviewBox>
            <ReviewBody>
              MDN+ 헬프데스크에 올라오는 질문들에 틈틈히 답변을 달았었습니다. 나중에 이직하는 과정에서 이러한 경험들을 자기소개서에 담았더니, 면접관님이 좋게봐주셔서 무사히 원하던 기업에 이직할 수
              있었습니다. 정말 감사합니다 !
            </ReviewBody>
            <ReviewerBox>
              <ReviewerImg src={avatar3}></ReviewerImg>
              <Reviewer>개발 3년차 조코딩</Reviewer>
            </ReviewerBox>
          </ReviewBox>
        </ReviewFlexBox>
      </ReviewBoxContainer>
      <NewsContainer>
        <NewsIntroBox>
          <NewsIntro1>MDN+</NewsIntro1>
          <NewsIntro2> 뉴스</NewsIntro2>
        </NewsIntroBox>
        <NewsBox>
          <MainNews>
            <MainNewsContents>
              <MainNewsTitle>개발 공부가 힘들 때</MainNewsTitle>
              <MainNewsTitle>'MDN+'를 이용해요</MainNewsTitle>
              <MainNewsBody>
                "개발 공부를 시작하면서 MDN을 많이 참고했는데 번역이 매끄럽지 않고 조금 어렵게 설명이 되어있는 부분들이 있더라구요. 그래서 이런 부분들을 현업에서 일하는 개발자들 또는 개발을 공부하는
                사람들이 자유롭게 수정을 하며 새롭게 MDN을 재구성한다면 어떨까 생각을 ...
              </MainNewsBody>
            </MainNewsContents>
            <MainNewsImg src={MainNewsImage}></MainNewsImg>
            <MainNewsOverlay></MainNewsOverlay>
          </MainNews>
          <SubNews>
            <SubNewsTitle1>사용자라면 누구든지 수정이 가능한</SubNewsTitle1>
            <SubNewsTitle2>MDN판 위키백과</SubNewsTitle2>
            <SubNewsOverlay></SubNewsOverlay>
            <SubNewsImg src={PenImg}></SubNewsImg>
          </SubNews>
          <SubNews>
            <SubNewsTitle1>MDN+,</SubNewsTitle1>
            <SubNewsTitle2>누적 사용자 5만명 돌파</SubNewsTitle2>
            <SubNewsOverlay></SubNewsOverlay>
            <SubNewsImg src={networkImg}></SubNewsImg>
          </SubNews>
          <SubNews>
            <SubNewsTitle1>예비 개발자라면</SubNewsTitle1>
            <SubNewsTitle2>꼭 알아야 할 5가지</SubNewsTitle2>
            <SubNewsOverlay></SubNewsOverlay>
            <SubNewsImg src={noteImg}></SubNewsImg>
          </SubNews>
        </NewsBox>
      </NewsContainer>
      <FooterComponent/>
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  display: flex;
  width: 100vw;
  // height: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 2rem;
`;

const Logo = styled.span`
  font-size: 1.7rem;
  color: #005ce7;
  font-weight: bold;
  margin-left: 10rem;
`;

const Nav_RightBox = styled.div`
  margin-right: 5rem;
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

const IntroBoxContainer = styled.div`
  width: 100%;
  height: 45rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: #536DFE;
`;

const IntroBox = styled.div`
  margin-left: 12rem;
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
  color: white;
  transition: 1s ease-in-out;

  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp_Intro};
  animation-fill-mode: forwards;
`;

const IntroBox_Body2 = styled.div`
  font-size: 3rem;
  margin: 1rem 0 1rem 0;
  color: white;
  font-weight: bold;

  transition: 1s ease-in-out;

  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp_Intro};
  animation-fill-mode: forwards;
`;

const Img = styled.img`
  width: 40rem;
  object-fit: cover;
  margin-right: 5rem;
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

//------------------------사용하는 이유 섹션-------------------------//

const AppealBoxContainer = styled.div`
  width: 100vw;
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  background: #fafafa;
`;

const AppealBoxTitle = styled.div`
  font-size: 2.3rem;
  font-weight: bold;
  color: black;
  margin-bottom: 1rem;
`;

const AppealBoxSubTitle = styled.div`
  font-size: 1.2rem;
  color: #424242;
`;

const AppealBoxStage = styled.div`
  width: 70rem;
  // border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 5rem;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px solid black;
`;

const Preview = styled.img`
  width: 28rem;
  height: 15rem;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.15);

  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const RightContainer = styled.div`
  padding-left: 4rem;
`;

const AppealBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 2rem 2rem 5rem;
  cursor: pointer;
`;

const AppealBox_selected = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0rem 2rem 5rem;
  cursor: pointer;
  background: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 0.5rem;
`;

const AppealTitle = styled.div`
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.7rem;
`;

const AppealBody = styled.div`
  color: #616161;
`;

//---------------------------리뷰 섹션----------------------------//

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
  width: 20rem;
  height: 25rem;
  border-radius: 0.3rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
  margin: 2rem;
  padding: 2rem;
  position: relative;
`;

const ReviewBody = styled.div`
  font-size: 1.2rem;
  line-height: 2.3rem;
  color: #757575;
`;

const ReviewerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18rem;
  position: absolute;
  bottom: 0.5rem;
  left: 0rem;
`;
const ReviewerImg = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
`;
const Reviewer = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  color: #424242;
  margin-left: 1rem;
`;

//----------------------------뉴스 컨테이너------------------------//

const NewsContainer = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f0f1f5;
`;

const NewsIntroBox = styled.div`
  width: 61rem;
  margin-bottom: 1rem;
`;

const NewsIntro1 = styled.span`
  font-size: 2.1rem;
`;
const NewsIntro2 = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const NewsBox = styled.div`
  width: 65rem;
  height: 25rem;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.5rem;
  column-gap: 1.5rem;
`;

//--------------------------------메인 뉴스---------------------//
const MainNews = styled.div`
  position: relative;
  grid-row: 1 / span 3;
  border: none;
  cursor: pointer;
`;

const MainNewsContents = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  padding: 2rem;
`;

const MainNewsTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const MainNewsBody = styled.div`
  margin-top: 1rem;
  color: white;
  line-height: 1.7rem;
  word-spacing: 0.1rem;
`;

const MainNewsImg = styled.img`
  position: absolute;
  top: 0rem;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
`;

const MainNewsOverlay = styled.div`
  background: rgba(255, 255, 255, 0.2);
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0rem;
  z-index: 1;
  border-radius: 0.5rem;
`;

//--------------------------------서브 뉴스---------------------------//

const SubNews = styled.div`
  padding: 2rem;
  position: relative;
  cursor: pointer;
`;

const SubNewsTitle1 = styled.div`
  position: absolute;
  top: 1.3rem;
  font-size: 1.2rem;
  color: white;
  z-index: 2;
`;

const SubNewsTitle2 = styled.div`
  position: absolute;
  top: 3rem;
  font-size: 1.2rem;
  color: white;
  z-index: 2;
`;

const SubNewsOverlay = styled.div`
  background: rgba(255, 255, 255, 0.2);
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0rem;
  left: 0rem;
  z-index: 1;
  border-radius: 0.5rem;
`;

const SubNewsImg = styled.img`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  object-fit: cover;
`;
