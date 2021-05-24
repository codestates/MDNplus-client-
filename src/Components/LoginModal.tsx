import styled from "styled-components";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  checkLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

function LoginModal({ isOpen, onClose, checkLogin }: Props) {
  const overLay = useRef(null);

  const REST_API_KEY = "144bf580b6a5f37255716facf6728b0d";
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

  //카카오톡 URL 마크 해줘야함
  const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=&redirect_uri=`;

  const socialLoginHandler = () => {
    // 깃허브로 로그인 버튼이 클릭이 되면, 깃허브 로그인 주소로 이동하게 됨
    console.log("깃허브 로그인 실행됨");
    window.location.assign(GITHUB_LOGIN_URL);
  };

  const kakaoLoginHandler = () => {
    // 깃허브로 로그인 버튼이 클릭이 되면, 깃허브 로그인 주소로 이동하게 됨
    console.log("카카오 로그인 실행됨");
    window.location.assign(KAKAO_LOGIN_URL);
    Kakao.Auth.authorize({
      redirectUri: REDIRECT_URI,
    });
  };

  return isOpen ? (
    <ModalContainer>
      <Overlay onClick={handleOverLay} ref={overLay} />
      <ModalBox>
        <CloseIcon onClick={handleCloseIcon}>
          <FontAwesomeIcon icon="times" size="lg" color="#005ce7" />
        </CloseIcon>
        <OauthContainer>
          <KakaoOauth onClick={kakaoLoginHandler}>kakao로 로그인</KakaoOauth>
          <GithubOauthButton onClick={socialLoginHandler}>github로 로그인</GithubOauthButton>
        </OauthContainer>
      </ModalBox>
    </ModalContainer>
  ) : null;
}

export default LoginModal;

const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;

const ModalBox = styled.div`
  position: relative;
  width: 30%;
  height: 30%;
  margin: 0 10%;
  padding: 50px;
  background-color: white;
  border-radius: 34px;
  box-sizing: border-box;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: rotate(180deg);
  }
`;

const OauthContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const KakaoOauth = styled.button`
  width: 85%;
  height: 20%;
  margin: 20px 0;
  font-size: 1rem;
  border: 1.8px solid #a7a3a3;
  box-shadow: 12px 8px 10px #a7a3a3;
  font-weight: bold;
  border-radius: 34px;
  cursor: pointer;

  &:hover {
    background-color: #005ce7;
  }
`;

const GithubOauthButton = styled.button`
  width: 85%;
  height: 20%;
  margin: 20px 0;
  font-size: 1rem;
  border: 1.8px solid #a7a3a3;
  box-shadow: 12px 8px 10px #a7a3a3;
  font-weight: bold;
  border-radius: 34px;
  cursor: pointer;

  &:hover {
    background-color: #005ce7;
  }
`;

// import axios from 'axios'
// import React, { useState } from 'react'
// // require('dotenv').config();

// // const clientID = process.env.GITHUB_CLIENT_ID;
// // const clientSecret = process.env.GITHUB_CLIENT_SECRET;

// const REST_API_KEY = '144bf580b6a5f37255716facf6728b0d'
// const REDIRECT_URI = 'http://localhost:3000/kakaoLogin'

// function LoginModal() {
//     const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize/?client_id=6247a72ec8e51735ea34`
//     const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}
//     `

//     const socialLoginHandler = () => { // 깃허브로 로그인 버튼이 클릭이 되면, 깃허브 로그인 주소로 이동하게 됨
//         console.log('깃허브 로그인 실행됨')
//         window.location.assign(GITHUB_LOGIN_URL)
//     }

//     const kakaoLoginHandler = () => { // 깃허브로 로그인 버튼이 클릭이 되면, 깃허브 로그인 주소로 이동하게 됨
//         console.log('카카오 로그인 실행됨')
//         window.location.assign(KAKAO_LOGIN_URL)
//     }

//     return (
//         <div>
//             <button onClick={socialLoginHandler}>깃허브로 로그인</button>
//             <button onClick={kakaoLoginHandler}>카카오로 로그인</button>
//         </div>
//     )
// }

// export default LoginModal
