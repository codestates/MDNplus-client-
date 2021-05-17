import { useState, useEffect } from "react";
import LoginModal from "./LoginModal";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuModal from "./MenuModal";
import axios from "axios";

const { Kakao }: any = window;

function Nav() {
  const [isLogin, setIsLogin] = useState(false);
<<<<<<< HEAD
  const [userName, setUserName] = useState("");
  // const accessToken = localStorage.getItem("accessToken");
  const history = useHistory();
=======
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [gitHubImage, setGitHubImage] = useState([]);

  const handleLoginModal = () => {
    setIsLogInOpen(!isLogInOpen);
  };

  const handleMenuModal = () => {
    setIsMenuOpen(!isMenuOpen);
  };
>>>>>>> 36cb644f88b4ce9bc4f5416b7a269e2abf2a265c

  //깃허브 accessToken 받아오는 요청
  const gitAccessToken = (authorizationCode: string) => {
    axios.post("http://localhost:80/oauth/github", { authorizationCode: authorizationCode }).then((res) => {
      if (res.data.accessToken) {
        setIsLogin(true);
        localStorage.setItem("accessToken", res.data.accessToken);
      }
    });
  };

<<<<<<< HEAD
  // 깃허브 유저 정보 받아오는 요청
  const gitUserInfo = () => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken)
    console.log('토큰 있음, userInfo 받아오는 요청 보내짐')
    axios
      .get("https://api.github.com/user", {
        headers: { authorization: `token ${accessToken}` },
      })
      .then((res) => {
        console.log("여기 깃허브 유저인포 가져옴");
        console.log(res);
        setUserName(res.data.login);
      })
      .catch((err) => console.log("에러 발생"));
  };

  //카카오 accessToken 받아오는 요청
=======
  //서버로부터 카카오 accessToken 받아오는 요청
>>>>>>> 36cb644f88b4ce9bc4f5416b7a269e2abf2a265c
  const kakaoAccessToken = (authorizationCode: string) => {
    console.log("카카오 accessToken 받는 요청 보내짐");
    axios.post("http://localhost:80/oauth/kakao", { authorizationCode: authorizationCode }).then((res) => {
      console.log(res);
      const { accessToken, refreshToken } = res.data.data;
      if (accessToken) {
        setIsLogin(true);
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
      }
    });
  };

<<<<<<< HEAD
  //카카오 유저 정보 받아오는 요청
  const kakaoUserInfo = () => {
    console.log("hi");
    Kakao.API.request({
      url: "/v2/user/me",
      success: function (res: any) {
        const email = res.kakao_account.email;
        const nickname = res.properties.nickname;
        console.log(res);
        console.log(email, nickname);
        history.push('/')
      },
      fail: function (err: any) {
        console.log(err);
      },
    });
  };

  // 카카오 로그아웃 메소드
  const handleLogout = () => {
    if (!Kakao.Auth.getAccessToken()) {
      console.log("Not logged in.");
      return;
    }
    Kakao.Auth.logout(function () {
      console.log(Kakao.Auth.getAccessToken());
      setIsLogin(false);
    });
  };

  //카카오 회원탈퇴 메소드
  const handleCancelKakao = () => {
    Kakao.API.request({
      url: "/v1/user/unlink",
      success: function (response: any) {
        console.log(response);
      },
      fail: function (error: any) {
        console.log(error);
      },
    });
  };

=======
>>>>>>> 36cb644f88b4ce9bc4f5416b7a269e2abf2a265c
  // loginModal에서 깃허브 로그인 성공 후, 리디렉션이 되어서 localhost로 돌아오면 실행되는 라이프사이클 코드
  useEffect(() => {
    const url = new URL(window.location.href); // 현재 위치하는 웹사이트의 url을 가져옴
    const authorizationCode = url.searchParams.get("code"); // 깃허브로부터 받은 인증코드를 가져옴 ex) http://localhost:3000/?code=5e52fb85d6a1ed46a51f 여기서 code 뒤의 숫자들이 인증코드
    if (url.pathname === "/kakaoLogin") {
      if (authorizationCode) {
        //만약 깃허브에서 로그인이 성공하여 code를 받아왔다면, client(서버)에 accessToken 받아오는 요청을 보냄
        kakaoAccessToken(authorizationCode);
      }
    } else {
      if (authorizationCode) {
<<<<<<< HEAD
        //만약 깃허브에서 로그인이 성공하여 code를 받아왔다면, client(서버)에 accessToken 받아오는 요청을 보냄
        gitAccessToken(authorizationCode);
        gitUserInfo();
=======
        console.log(authorizationCode);
        //만약 깃허브에서 로그인이 성공하여 code를 받아왔다면, client(서버)에 accessToken 받아오는 요청을 보냄
        gitAccessToken(authorizationCode);
>>>>>>> 36cb644f88b4ce9bc4f5416b7a269e2abf2a265c
      }
    }
  }, []);

  return (
<<<<<<< HEAD
    <div>
      <LoginModal />
      <div></div>
      {isLogin ? <div>로그인 되어 있음</div> : <div>로그인 안되어 있음</div>}
      {userName ? <div>{userName}</div> : <div>아직 깃허브에서 유저정보 안가져옴</div>}
      <button onClick={handleLogout}>로그아웃</button>
      <button onClick={handleCancelKakao}>회원탈퇴</button>
    </div>
=======
    <NavBar>
      <Logo>MDN +</Logo>
      <SearchBar>
        <Icon>
          <FontAwesomeIcon icon="search" size="1x" color="black" />
        </Icon>
        <Search />
      </SearchBar>
      {isLogin ? (
        <NavButtons>
          <UserIconContainer onClick={handleMenuModal}>
            <User>유저정보창</User>
            <FontAwesomeIcon icon="sort-down" size="sm" color="black" />
            {isMenuOpen ? <MenuModal getGitHubImage={setGitHubImage} isOpen={isMenuOpen} onClose={handleMenuModal} checkMenu={setIsMenuOpen}></MenuModal> : null}
          </UserIconContainer>
          <QuestionBtn>자주하는 질문</QuestionBtn>
        </NavButtons>
      ) : (
        <NavButtons>
          <LoginBtn onClick={handleLoginModal}>로그인</LoginBtn>
          <LoginModal isOpen={isLogInOpen} onClose={handleLoginModal} checkLogin={setIsLogin}></LoginModal>
          <QuestionBtn>자주하는 질문</QuestionBtn>
        </NavButtons>
      )}
    </NavBar>
>>>>>>> 36cb644f88b4ce9bc4f5416b7a269e2abf2a265c
  );
}

export default Nav;

const User = styled.div`
  margin: 2px;
`;

const NavBar = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-bottom: 1.8px solid #a7a3a3;
`;

const Icon = styled.span`
  padding: 15px;
`;

const Search = styled.input`
  border: none;
  width: 400px;
  font-size: 1.2em;
  outline: none;
  height: 2em;
`;

const SearchBar = styled.div`
  border: 1.8px solid #a7a3a3;
  border-radius: 34px;
  width: 517px;
  height: 45;
  box-shadow: 12px 8px 10px #a7a3a3;
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBtn = styled.button`
  background-color: white;
  font-size: 14px;
  font-weight: bold;
  margin: 5px;
  border: 1.8px solid #a7a3a3;
  padding: 10px;
  border-radius: 34px;
  box-shadow: 12px 8px 10px #a7a3a3;
  cursor: pointer;
`;

const QuestionBtn = styled.button`
  border-radius: 34px;
  background-color: white;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  margin: 5px;
  border: 1.8px solid #a7a3a3;
  box-shadow: 12px 8px 10px #a7a3a3;
  cursor: pointer;
`;

const Logo = styled.div`
  font-size: 64px;
  color: #005ce7;
  cursor: pointer;
`;

const UserIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 34px;
  background-color: white;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  margin: 5px;
  border: 1.8px solid #a7a3a3;
  box-shadow: 12px 8px 10px #a7a3a3;
  cursor: pointer;
`;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import LoginModal from "./LoginModal";
// import { useHistory } from "react-router";
// // axios.defaults.withCredentials = i;

// function Nav() {
//   const [isLogin, setIsLogin] = useState(false);
// const [userName, setUserName] = useState("");
// const accessToken = localStorage.getItem("accessToken");
// const history = useHistory();

//   //서버로부터 깃허브 accessToken 받아오는 요청
//   const gitAccessToken = (authorizationCode: string) => {
//     axios.post("http://localhost:80/oauth/github", { authorizationCode: authorizationCode }).then((res) => {
//       if (res.data.accessToken) {
//         setIsLogin(true);
//         localStorage.setItem("accessToken", res.data.accessToken);
//       }
//     });
//   };

//   //서버로부터 카카오 accessToken 받아오는 요청
//   const kakaoAccessToken = (authorizationCode: string) => {
//     console.log("카카오 accessToken 받는 요청 보내짐");
//     console.log(authorizationCode);
//     axios.post("http://localhost:80/oauth/kakao", { authorizationCode: authorizationCode })
//     .then((res) => {
//       console.log(res);
//       const { accessToken, refreshToken } = res.data.data;
//       if (accessToken) {
//         setIsLogin(true);
//         localStorage.setItem("accessToken", accessToken);
//         localStorage.setItem("refreshToken", refreshToken);
//         kakaoUserInfo()
//       }
//     });
//   };

//   // 깃허브 유저 정보 받아오는 요청
//   const gitUserInfo = () => {
//     const accessToken = localStorage.getItem("accessToken");
//     axios
//       .get("https://api.github.com/user", {
//         headers: { authorization: `token ${accessToken}` },
//       })
//       .then((res) => {
//         console.log("여기 깃허브 유저인포 가져옴");
//         setUserName(res.data.login);
//       });
//   };

//   let header : any = `Bearer ${accessToken}`;

//   const kakaoUserInfo = () => {
//     console.log('카카오 유저 정보 받아오는 요청 보내짐')
//     axios.get("https://kapi.kakao.com/v2/user/me", header)
//     .then(res => console.log(res))

//   };

//   // loginModal에서 깃허브 로그인 성공 후, 리디렉션이 되어서 localhost로 돌아오면 실행되는 라이프사이클 코드
//   useEffect(() => {
//     const url = new URL(window.location.href); // 현재 위치하는 웹사이트의 url을 가져옴
//     const authorizationCode = url.searchParams.get("code"); // 깃허브로부터 받은 인증코드를 가져옴 ex) http://localhost:3000/?code=5e52fb85d6a1ed46a51f 여기서 code 뒤의 숫자들이 인증코드
//     if (url.pathname === "/kakaoLogin") {
//       if (authorizationCode) {
//         //만약 깃허브에서 로그인이 성공하여 code를 받아왔다면, client(서버)에 accessToken 받아오는 요청을 보냄
//         kakaoAccessToken(authorizationCode);
//       }
//     } else {
//       if (authorizationCode) {
//         //만약 깃허브에서 로그인이 성공하여 code를 받아왔다면, client(서버)에 accessToken 받아오는 요청을 보냄
//         gitAccessToken(authorizationCode);
//         gitUserInfo();
//       }
//     }
//   }, []);

//   return (
//     <div>
//       <LoginModal />
//       {isLogin ? <div>로그인 되어 있음</div> : <div>로그인 안되어 있음</div>}
//       {userName ? <div>{userName}</div> : <div>아직 깃허브에서 유저정보 안가져옴</div>}
//     </div>
//   );
// }

// export default Nav;
