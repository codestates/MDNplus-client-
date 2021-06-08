import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useBooleanData from "../Hooks/useBooleanData";
import FooterComponent from "../Components/FooterComponent";
import {
  fadeIn,
  slideUp,
  slideUp_Intro,
  slideUp_short,
  fadeIn_img,
  slideLeft,
  slideLeft_line,
  slideRight_line,
  slideLeft_box,
  slideRight_box,
} from "../styled-components/Animation";
import monitor3 from "../img/monitor3.png";
import MainNewsImage from "../img/MainNews.jpg";
import PenImg from "../img/pen.jpg";
import networkImg from "../img/network.jpg";
import noteImg from "../img/note.jpg";
import avatar1 from "../img/avatar1.png";
import avatar2 from "../img/avatar2.png";
import avatar3 from "../img/avatar3.png";
import googleLogo from "../img/googleLogo.png";
import appleLogo from "../img/appleLogo.png";
import appeal1 from "../img/appeal1.png";
import appeal2 from "../img/appeal2.png";
import clockIcon from "../img/clockIcon.png";
import arrow from "../img/arrow2.png";
import { useHistory } from "react-router";

const LandingPage = () => {
  const { onSetWriteMode } = useBooleanData();
  const [height, setHeight] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const history = useHistory();

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

  return (
    <Container>
      {currentY >= 640 ? (
        <Nav2>
          <Logo
            onClick={() => {
              history.push("/LandingPage");
            }}
            style={{ color: "#005CE7" }}
          >
            MDN+
          </Logo>
          <Nav_RightBox>
            <QuestionsBtn
              onClick={() => {
                history.push("/FAQ");
              }}
            >
              자주 하는 질문
            </QuestionsBtn>
            <HomeBtn
              onClick={() => {
                history.push("/Wiki");
              }}
            >
              웹 서비스 이동
            </HomeBtn>
            <ArrowImg src={arrow}></ArrowImg>
          </Nav_RightBox>
        </Nav2>
      ) : (
        <Nav>
          <Logo
            onClick={() => {
              history.push("/LandingPage");
            }}
          >
            MDN+
          </Logo>
          <Nav_RightBox>
            <QuestionsBtn
              onClick={() => {
                history.push("/FAQ");
              }}
            >
              자주 하는 질문
            </QuestionsBtn>
            <HomeBtn
              onClick={() => {
                history.push("/Wiki");
              }}
            >
              웹 서비스 이동
            </HomeBtn>
            <ArrowImg src={arrow}></ArrowImg>
          </Nav_RightBox>
        </Nav>
      )}
      <IntroBoxContainer>
        <LeftContainer>
          <IntroBox>
            <IntroBox_Body1>개발이</IntroBox_Body1>
            <IntroBox_Body2>편안해지는 공간</IntroBox_Body2>

            <AppBtnBox>
              <GoogleBtn>
                <AppLogo src={googleLogo}></AppLogo>
                Google Play
              </GoogleBtn>
              <AppStoreBtn>
                <AppLogo src={appleLogo}></AppLogo>
                App Store
              </AppStoreBtn>
            </AppBtnBox>
            <CountBox>
              <CountBox>
                <EditCountBox>
                  <CountTitle>누적 문서 수정 수</CountTitle>
                  <Count>35,072</Count>
                </EditCountBox>
                <HelpCountBox>
                  <CountTitle>누적 질문 / 답변 수</CountTitle>
                  <Count>3,590</Count>
                </HelpCountBox>
              </CountBox>
            </CountBox>
          </IntroBox>
        </LeftContainer>
        <RightContainer>
          <ImgBox>
            <Img src={monitor3}></Img>
          </ImgBox>
        </RightContainer>
      </IntroBoxContainer>

      {currentY >= 260 ? (
        <TimeContainer_ON>
          <TimeBox>
            <TimeImg src={clockIcon}></TimeImg>
            <TimeBoxTitle>MDN+로 아낀 개발 검색 시간</TimeBoxTitle>
            <Time>153,352분</Time>
            <TimeSub>* 2021년 6월 설문조사 기준</TimeSub>
          </TimeBox>
        </TimeContainer_ON>
      ) : (
        <TimeContainer_OFF></TimeContainer_OFF>
      )}

      {currentY >= 600 ? (
        <AppealBox1Container_ON>
          <PreviewBox>
            <SubBox1></SubBox1>
            <PreviewImg src={appeal1}></PreviewImg>
          </PreviewBox>
          <AppealBox>
            <UnderLine1></UnderLine1>
            <AppealTitle>MDN+ 위키</AppealTitle>
            <AppealBody>
              개발자들이 자유롭게 작성해놓은 개발 정보들을 얻어가세요!
            </AppealBody>
          </AppealBox>
        </AppealBox1Container_ON>
      ) : (
        <AppealBox1Container_OFF></AppealBox1Container_OFF>
      )}

      <EmptySpace></EmptySpace>

      {currentY >= 1300 ? (
        <AppealBox2Container_ON>
          <AppealBox>
            <UnderLine2></UnderLine2>
            <AppealTitle>헬프데스크</AppealTitle>
            <AppealBody>
              개발 관련 정보들을 찾는데 시간이 오래 걸리셨나요?
            </AppealBody>
            <AppealBody>헬프데스크에 질문하세요!</AppealBody>
          </AppealBox>
          <PreviewBox>
            <SubBox2></SubBox2>
            <PreviewImg src={appeal2}></PreviewImg>
          </PreviewBox>
        </AppealBox2Container_ON>
      ) : (
        <AppealBox2Container_OFF></AppealBox2Container_OFF>
      )}

      {currentY >= 2350 ? (
        <ReviewBoxContainer_ON>
          <ReviewBoxTitle>
            개발공부에 얼마나 많은 도움이 되었을까?{" "}
          </ReviewBoxTitle>
          <ReviewBoxSubTitle>
            언제 어디서든 MDN+에 있는 여러 개발자분들 덕분에 개발공부에 두려움이
            없어졌어요.
          </ReviewBoxSubTitle>
          <ReviewFlexBox>
            <ReviewBox>
              <ReviewerBox>
                <ReviewerImg src={avatar1}></ReviewerImg>
                <Reviewer>코드스테이츠 27기 김코딩</Reviewer>
              </ReviewerBox>
              <ReviewBody>
                MDN에 번역이 조금 이해가 안되는 부분들이 있었어서 힘들었는데
                MDN+ 위키에 어떤 분이 좀 더 자연스럽게 번역해서 올리셨더라구요.
                잘못된 정보들도 몇군데 있었는데, 제가 직접 수정하면서 동시에
                공부도 할 수 있었어서 개발 공부에 도움이 많이 됐습니다.
              </ReviewBody>
            </ReviewBox>
            <ReviewBox>
              <ReviewerBox>
                <ReviewerImg src={avatar2}></ReviewerImg>
                <Reviewer>주니어 개발자 문코딩</Reviewer>
              </ReviewerBox>
              <ReviewBody>
                처음으로 혼자 진행하던 사이드 프로젝트에서 오류가 발생해
                며칠동안 밤을 새도 답이 안나왔었는데 시니어 개발자님이 답변을
                달아주셔서 해결할 수 있었습니다! 앞으로도 개발하면서 계속 이용할
                것 같습니다. 좋은 서비스 감사합니다 :)
              </ReviewBody>
            </ReviewBox>
            <ReviewBox>
              <ReviewerBox>
                <ReviewerImg src={avatar3}></ReviewerImg>
                <Reviewer>개발 3년차 조코딩</Reviewer>
              </ReviewerBox>
              <ReviewBody>
                MDN+ 헬프데스크에 올라오는 질문들에 틈틈히 답변을 달았었습니다.
                나중에 이직하는 과정에서 이러한 경험들을 자기소개서에 담았더니,
                면접관님이 좋게봐주셔서 무사히 원하던 기업에 이직할 수
                있었습니다. 정말 감사합니다 !
              </ReviewBody>
            </ReviewBox>
          </ReviewFlexBox>
        </ReviewBoxContainer_ON>
      ) : (
        <ReviewBoxContainer_OFF></ReviewBoxContainer_OFF>
      )}

      {currentY >= 3200 ? (
        <NewsContainer_ON>
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
                  "개발 공부를 시작하면서 MDN을 많이 참고했는데 번역이 매끄럽지
                  않고 조금 어렵게 설명이 되어있는 부분들이 있더라구요. 그래서
                  이런 부분들을 현업에서 일하는 개발자들 또는 개발을 공부하는
                  사람들이 자유롭게 수정을 하며 새롭게 MDN을 재구성한다면 어떨까
                  생각을 ...
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
        </NewsContainer_ON>
      ) : (
        <NewsContainer_OFF></NewsContainer_OFF>
      )}

      <FooterComponent />
    </Container>
  );
};

export default LandingPage;

const EmptySpace = styled.div`
  width: 100%;
  height: 10rem;
  // border: 1px solid black;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

const Nav = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #cfd8dc;
  padding: 2rem;
  position: fixed;
  top: 0;
  z-index: 99;

  @media (max-width: 500px) {
  }
`;

const Nav2 = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 2rem;
  position: fixed;
  top: 0;
  z-index: 99;
`;

const Logo = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
  margin-left: 1rem;
  cursor: pointer;

  color: ${(props) => props.color || "black"};
`;

const Nav_RightBox = styled.div``;

const QuestionsBtn = styled.span`
  font-size: 1.1rem;
  color: black;
  cursor: pointer;
  font-weight: bold;
  margin-right: 2rem;
  border: 1px solid black;
  padding: 0.5rem 1.2rem 0.5rem 1.2rem;
  border-radius: 2rem;
  background: white;
`;

const HomeBtn = styled.span`
  font-size: 1.1rem;
  color: black;
  cursor: pointer;
  font-weight: 500;
  border: 1px solid black;
  padding: 0.5rem 2.5rem 0.5rem 1.2rem;
  border-radius: 2rem;
  position: relative;
  background: #263238;
  color: white;
`;

const ArrowImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 1.2rem;
  right: 2.5rem;
`;

const IntroBoxContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #cfd8dc;
  position: relative;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const LeftContainer = styled.div``;

const RightContainer = styled.div``;

const IntroBox = styled.div`
  // border: 1px solid red;
  margin-left: 2rem;
  width: 30rem;
  margin-top: 8rem;

  @media (max-width: 500px) {
    margin-left: 0rem;
    margin-top: 8rem;
  }
`;

const IntroBox_Body1 = styled.div`
  font-size: 3rem;
  margin: 1rem 0 1rem 0;
  color: black;

  animation-duration: 1.2s;
  animation-timing-function: cubic-bezier(0.65, 0.05, 0.32, 0.98);
  animation-name: ${slideUp_Intro};
  animation-fill-mode: forwards;

  @media (max-width: 500px) {
    font-size: 2rem;
    margin-left: 1rem;
  }
`;

const IntroBox_Body2 = styled.div`
  font-size: 3rem;
  margin: 1rem 0 1rem 0;
  color: black;
  font-weight: bold;

  animation-duration: 1.2s;
  animation-timing-function: cubic-bezier(0.65, 0.05, 0.32, 0.98);
  animation-name: ${slideUp_Intro};
  animation-fill-mode: forwards;

  @media (max-width: 500px) {
    font-size: 2rem;
    margin-left: 1rem;
  }
`;

const AppBtnBox = styled.div`
  // border: 1px solid black;
  width: 30rem;
  margin-top: 3rem;
  display: flex;
  align-items: center;

  animation-duration: 1.5s;
  animation-timing-function: cubic-bezier(0.65, 0.05, 0.32, 0.98);
  animation-name: ${slideUp_short};
  animation-fill-mode: forwards;

  @media (max-width: 500px) {
    margin-top: 0rem;
  }
`;

const AppLogo = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: cover;
  margin-right: 1rem;

  @media (max-width: 500px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const GoogleBtn = styled.button`
  font-size: 1.2rem;
  border-radius: 2rem;
  padding: 0.9rem 2rem 0.9rem 2rem;
  border: none;
  margin-right: 1rem;
  color: #616161;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;

  @media (max-width: 500px) {
    font-size: 1rem;
    padding: 0.5rem 1.3rem 0.5rem 1.3rem;
    margin-left: 1rem;
  }
`;

const AppStoreBtn = styled.button`
  font-size: 1.2rem;
  border-radius: 2rem;
  background: #263238;
  padding: 0.9rem 2.5rem 0.9rem 2rem;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    opacity: 0;
  }
`;

const CountBox = styled.div`
  position: absolute;
  bottom: 0rem;
  left: 1rem;
  width: 55vw;
  height: 17vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: white;
  z-index: 1;

  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.56, 0.14, 0.84, 0.76);
  animation-name: ${slideLeft};
  animation-fill-mode: forwards;

  @media (max-width: 500px) {
    width: 96%;
    height: 12vh;
  }
`;

const HelpCountBox = styled.div`
  text-align: center;

  animation-duration: 3.2s;
  animation-timing-function: cubic-bezier(0.67, 0.07, 0.31, 0.95);
  animation-name: ${slideUp_short};
  animation-fill-mode: forwards;
`;

const EditCountBox = styled.div`
  text-align: center;

  animation-duration: 3.2s;
  animation-timing-function: cubic-bezier(0.67, 0.07, 0.31, 0.95);
  animation-name: ${slideUp_short};
  animation-fill-mode: forwards;
`;

const CountTitle = styled.div`
  color: #424242;
  font-size: 1.3rem;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const Count = styled.div`
  color: black;
  font-size: 2rem;
  font-weight: 500;

  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: flex-end;
  // border: 1px solid blue;

  @media (max-width: 500px) {
  }
`;

const Img = styled.img`
  width: 40rem;
  height: 100vh;
  object-fit: cover;

  animation-duration: 3.5s;
  animation-timing-function: cubic-bezier(0.68, 0.04, 0.81, 0.68);
  animation-name: ${fadeIn_img};
  animation-fill-mode: forwards;

  @media (max-width: 500px) {
    width: 100%;
    height: 28rem;
  }
`;

//------------------------시간 섹션-------------------------------//
const TimeContainer_ON = styled.div`
  opacity: 1;
  width: 100%;
  height: 31rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;

  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const TimeContainer_OFF = styled.div`
  opacity: 0;
  width: 100%;
  height: 30rem;
`;

const TimeBox = styled.div`
  // border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TimeImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin-bottom: 1rem;
`;

const TimeBoxTitle = styled.div`
  font-size: 2rem;
  color: #757575;
  margin-bottom: 1rem;
`;

const Time = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

const TimeSub = styled.div`
  margin-top: 0.3rem;
`;

//------------------------사용하는 이유 섹션-------------------------//

const AppealBox1Container_ON = styled.div`
  // border: 1px solid blue;
  opacity: 1;
  width: 100%;
  height: 45rem;
  display: grid;
  grid-template-columns: 0.6fr 0.4fr;
  background: #fafafa;

  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const AppealBox1Container_OFF = styled.div`
  opacity: 0;
  width: 100%;
  height: 45rem;
`;

const AppealBox2Container_ON = styled.div`
  // border: 1px solid red;
  opacity: 1;
  width: 100%;
  height: 45rem;
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  background: white;

  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const AppealBox2Container_OFF = styled.div`
  opacity: 0;
  width: 100%;
  height: 45rem;
`;

const PreviewBox = styled.div`
  // border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const PreviewImg = styled.img`
  width: 40rem;
  height: 37rem;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 1;

  animation-duration: 3s;
  animation-timing-function: cubic-bezier(0.65, 0.05, 0.32, 0.98);
  animation-name: ${slideUp_short};
  animation-fill-mode: forwards;

  @media (max-width: 500px) {
    width: 20rem;
    height: 19rem;
  }
`;

const SubBox1 = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 23vw;
  height: 100%;
  background: #cfd8dc;

  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.65, 0.05, 0.32, 0.98);
  animation-name: ${slideLeft_box};
  animation-fill-mode: forwards;
`;

const SubBox2 = styled.div`
  position: absolute;
  top: 0rem;
  right: 0rem;
  width: 23vw;
  height: 100%;
  background: #cfd8dc;

  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.65, 0.05, 0.32, 0.98);
  animation-name: ${slideRight_box};
  animation-fill-mode: forwards;
`;

const AppealBox = styled.div`
  // border: 1px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  animation-duration: 4s;
  animation-timing-function: cubic-bezier(0.65, 0.05, 0.32, 0.98);
  animation-name: ${slideUp_short};
  animation-fill-mode: forwards;
`;

const UnderLine1 = styled.div`
  width: 4rem;
  border: 1px solid black;
  position: absolute;
  top: 14rem;
  left: -2rem;

  animation-duration: 5s;
  animation-timing-function: ease-out;
  animation-name: ${slideLeft_line};
  animation-fill-mode: forwards;

  @media (max-width: 500px) {
    border: none;
  }
`;

const UnderLine2 = styled.div`
  width: 4rem;
  border: 1px solid black;
  position: absolute;
  top: 14rem;
  right: -2rem;

  animation-duration: 5s;
  animation-timing-function: ease-out;
  animation-name: ${slideRight_line};
  animation-fill-mode: forwards;

  @media (max-width: 500px) {
    border: none;
  }
`;

const AppealTitle = styled.div`
  // border: 1px solid black;
  width: 75%;
  margin-top: 10rem;
  margin-bottom: 1rem;
  color: #616161;
  font-size: 1.2rem;

  @media (max-width: 500px) {
  }
`;

const AppealBody = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  width: 75%;
  line-height: 3.5rem;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

//---------------------------리뷰 섹션----------------------------//

const ReviewBoxContainer_ON = styled.div`
  opacity: 1;
  width: 100%;
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #eeeeee;

  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  @media (max-width: 500px) {
    display: none;
  }
`;

const ReviewBoxContainer_OFF = styled.div`
  opacity: 0;
  width: 100%;
  height: 50rem;
`;

const ReviewFlexBox = styled.div`
  display: flex;

  @media (max-width: 500px) {
    display: grid;
  }
`;

const ReviewBoxTitle = styled.div`
  font-weight: bold;
  font-size: 3rem;
  margin-top: 4rem;
  color: #424242;

  @media (max-width: 500px) {
    font-size: 1rem;
    margin-top: -10srem;
  }
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
  padding: 1.2rem;
  position: relative;
  background: white;
`;

const ReviewBody = styled.div`
  font-size: 1.2rem;
  line-height: 2.3rem;
  color: #757575;
`;

const ReviewerBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 20rem;
  margin-bottom: 1rem;
  // border: 1px solid black;
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

const NewsContainer_ON = styled.div`
  opacity: 1;
  width: 100%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;

  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const NewsContainer_OFF = styled.div`
  opacity: 0;
  width: 100%;
  height: 40rem;
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
