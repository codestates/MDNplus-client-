import styled from "styled-components";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fadeIn, slideUp } from "../styled-components/Animation";
import kakao from "../img/kakao2.png";
import github from "../img/github.png";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  handleLogin: () => void;
};

function LoginModal({ isOpen, onClose, handleLogin }: Props) {
  const overLay = useRef(null);
  const REDIRECT_URI = "http://localhost:3000/kakaoLogin";
  const { Kakao }: any = window;

  const handleOverLay = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overLay.current) {
      onClose();
    }
  };

  const handleCloseIcon = () => {
    onClose();
  };

  const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize/?client_id=6247a72ec8e51735ea34`;

  const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=&redirect_uri=144bf580b6a5f37255716facf6728b0d`;

  const socialLoginHandler = () => {
    window.location.assign(GITHUB_LOGIN_URL);
  };

  const kakaoLoginHandler = () => {
    window.location.assign(KAKAO_LOGIN_URL);
    Kakao.Auth.authorize({
      redirectUri: REDIRECT_URI,
    });
  };

  return isOpen ? (
    <ModalContainer onClick={handleOverLay} ref={overLay}>
      <ModalBox>
        <CloseIcon onClick={handleCloseIcon}>
          <FontAwesomeIcon icon="times" size="lg" color="#BDBDBD" />
        </CloseIcon>
        <OauthContainer>
          <Title>MDN +</Title>
          <SocialBtnBox>
            <KaKaoLogo src={kakao}></KaKaoLogo>
            <KakaoBtn onClick={kakaoLoginHandler}>카카오 로그인</KakaoBtn>
            <GithubLogo src={github}></GithubLogo>
            <GithubBtn onClick={socialLoginHandler}>깃허브 로그인</GithubBtn>
          </SocialBtnBox>
        </OauthContainer>
      </ModalBox>
    </ModalContainer>
  ) : null;
}

export default LoginModal;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25rem;
  height: 23rem;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  background: white;
  transition: 0.4s ease-in;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 99;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: -8rem;
  width: 10rem;
  height: 10rem;
  cursor: pointer;
`;

const OauthContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2.5rem;
  color: #005ce7;
  margin-top: -2rem;
  margin-bottom: 6rem;
  font-family: "Archivo Black", sans-serif;
`;

const SocialBtnBox = styled.div`
  margin-bottom: -2rem;
`;

const KakaoBtn = styled.div`
  position: relative;
  width: 17rem;
  height: 2.5rem;
  border-radius: 0.3rem;
  cursor: pointer;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: bold;
  background: #fce300;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  padding: 1.3rem 0rem 1.3rem 2rem;

  &:hover {
  }
`;

const KaKaoLogo = styled.img`
  position: absolute;
  top: 12.6rem;
  left: 8rem;
  width: 2rem;
  z-index: 1;
  background: #ffeb3b;
`;

const GithubBtn = styled.div`
  width: 17rem;
  height: 2.5rem;
  border-radius: 0.3rem;
  cursor: pointer;
  border: 1px solid #bdbdbd;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  background: white;
  padding: 1.3rem 0rem 1.3rem 2rem;

  &:hover {
  }
`;

const GithubLogo = styled.img`
  position: absolute;
  top: 16.1rem;
  left: 8rem;
  width: 2rem;
  z-index: 1;
`;
