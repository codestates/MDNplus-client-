import { useHistory } from "react-router";
import {
  Nav2,
  Nav,
  ArrowImg,
  Logo,
  Nav_RightBox,
  QuestionsBtn,
  HomeBtn,
} from "./Nav.style";

type NavContainerProps = {
  currentY: number;
};

function NavContainer({ currentY }: NavContainerProps) {
  const history = useHistory();

  return (
    <>
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
            <ArrowImg src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112348/arrow2_oht57k.png"></ArrowImg>
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
            <ArrowImg src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112348/arrow2_oht57k.png"></ArrowImg>
          </Nav_RightBox>
        </Nav>
      )}
    </>
  );
}

export default NavContainer;
