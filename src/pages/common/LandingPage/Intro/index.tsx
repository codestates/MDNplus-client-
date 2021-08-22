import { Container, LeftContainer, RightContainer } from "./Intro.style";

function IntroSection() {
  return (
    <>
      <Container>
        <LeftContainer>
          <div className="intro-box">
            <div className="intro-title">개발이</div>
            <div className="intro-title">편안해지는 공간</div>
            <div className="app-btns">
              <button className="app-btn google">
                <img
                  className="app-logo"
                  src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112349/googleLogo_vxfjro.png"
                ></img>
                Google Play
              </button>
              <button className="app-btn apple">
                <img
                  className="app-logo"
                  src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112348/appleLogo_pcdiqo.png"
                ></img>
                App Store
              </button>
            </div>
            <div className="count-container">
              <div className="count-box">
                <div className="count-title">누적 문서 수정 수</div>
                <div className="count">35,072</div>
              </div>
              <div className="count-box">
                <div className="count-title">누적 질문 / 답변 수</div>
                <div className="count">3,590</div>
              </div>
            </div>
          </div>
        </LeftContainer>
        <RightContainer>
          <div className="img-box">
            <img
              className="main-image"
              src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112350/monitor3_ltq26s.png"
            ></img>
          </div>
        </RightContainer>
      </Container>
    </>
  );
}

export default IntroSection;
