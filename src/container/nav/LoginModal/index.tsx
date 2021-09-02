import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Title,
  CloseIcon,
  GithubBtn,
  GithubLogo,
  KaKaoLogo,
  KakaoBtn,
  ModalBox,
  ModalContainer,
  OauthContainer,
  SocialBtnBox,
} from "./LoginModal.style";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  handleLogin: () => void;
};

const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize/?client_id=6247a72ec8e51735ea34`;
const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=&redirect_uri=144bf580b6a5f37255716facf6728b0d`;

function LoginModal({ isOpen, onClose }: Props) {
  const REDIRECT_URI = "http://localhost:3000/kakaoLogin";
  const { Kakao }: any = window;

  const githubLoginHandler = () => {
    window.location.assign(GITHUB_LOGIN_URL);
  };

  const kakaoLoginHandler = () => {
    window.location.assign(KAKAO_LOGIN_URL);
    Kakao.Auth.authorize({
      redirectUri: REDIRECT_URI,
    });
  };

  return isOpen ? (
    <ModalContainer onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <CloseIcon onClick={onClose}>
          <FontAwesomeIcon icon="times" size="lg" color="#BDBDBD" />
        </CloseIcon>
        <OauthContainer>
          <Title>MDN +</Title>
          <SocialBtnBox>
            <KaKaoLogo src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112350/kakao2_evw3bk.png"></KaKaoLogo>
            <KakaoBtn onClick={kakaoLoginHandler}>카카오 로그인</KakaoBtn>
            <GithubLogo src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112349/github_il3cw8.png"></GithubLogo>
            <GithubBtn onClick={githubLoginHandler}>깃허브 로그인</GithubBtn>
          </SocialBtnBox>
        </OauthContainer>
      </ModalBox>
    </ModalContainer>
  ) : null;
}

export default LoginModal;
