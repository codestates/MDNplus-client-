import { useHistory } from "react-router";
import {
  Nav2,
  Nav,
  ArrowImg,
  Logo,
  NavRightBox,
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
          <NavRightBox>
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
          </NavRightBox>
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
          <NavRightBox>
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
          </NavRightBox>
        </Nav>
      )}
    </>
  );
}

export default NavContainer;
