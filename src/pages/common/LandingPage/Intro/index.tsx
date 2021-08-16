import {
  IntroBox,
  IntroBoxContainer,
  IntroBox_Body1,
  IntroBox_Body2,
  LeftContainer,
  RightContainer,
  AppBtnBox,
  AppLogo,
  AppStoreBtn,
  GoogleBtn,
  CountBox,
  Count,
  CountTitle,
  EditCountBox,
  HelpCountBox,
  Img,
  ImgBox,
} from "./Intro.style";

function IntroSection() {
  return (
    <>
      <IntroBoxContainer>
        <LeftContainer>
          <IntroBox>
            <IntroBox_Body1>개발이</IntroBox_Body1>
            <IntroBox_Body2>편안해지는 공간</IntroBox_Body2>

            <AppBtnBox>
              <GoogleBtn>
                <AppLogo src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112349/googleLogo_vxfjro.png"></AppLogo>
                Google Play
              </GoogleBtn>
              <AppStoreBtn>
                <AppLogo src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112348/appleLogo_pcdiqo.png"></AppLogo>
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
            <Img src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112350/monitor3_ltq26s.png"></Img>
          </ImgBox>
        </RightContainer>
      </IntroBoxContainer>
    </>
  );
}

export default IntroSection;
