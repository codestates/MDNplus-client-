import React, { useEffect, useState } from "react";
import axios from "axios";
import LoginModal from "./LoginModal";
import { useHistory } from "react-router";
// axios.defaults.withCredentials = i;

const { Kakao }: any = window;

function Nav() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const accessToken = localStorage.getItem("accessToken");
  const history = useHistory();

  //깃허브 accessToken 받아오는 요청
  const gitAccessToken = (authorizationCode: string) => {
    axios.post("http://localhost:80/oauth/github", { authorizationCode: authorizationCode }).then((res) => {
      if (res.data.accessToken) {
        setIsLogin(true);
        localStorage.setItem("accessToken", res.data.accessToken);
      }
    });
  };

  // 깃허브 유저 정보 받아오는 요청
  const gitUserInfo = () => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .get("https://api.github.com/user", {
        headers: { authorization: `token ${accessToken}` },
      })
      .then((res) => {
        console.log("여기 깃허브 유저인포 가져옴");
        setUserName(res.data.login);
      });
  };

  //카카오 accessToken 받아오는 요청
  const kakaoAccessToken = (authorizationCode: string) => {
    console.log("카카오 accessToken 받는 요청 보내짐");
    console.log(authorizationCode);
    axios.post("http://localhost:80/oauth/kakao", { authorizationCode: authorizationCode }).then((res) => {
      console.log(res);
      const { accessToken, refreshToken } = res.data.data;
      if (accessToken) {
        setIsLogin(true);
        Kakao.Auth.setAccessToken(accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        kakaoUserInfo();
      }
    });
  };

  //카카오 유저 정보 받아오는 요청
  const kakaoUserInfo = () => {
    console.log("hi");
    Kakao.API.request({
      url: '/v2/user/me',
      success: function(res:any) {
        const email = res.kakao_account.email
        const nickname = res.properties.nickname
          console.log(email, nickname);
      },
      fail: function(err:any) {
          console.log(err);
      }
  });
  };

  const handleLogout = () => {
    if (!Kakao.Auth.getAccessToken()) {
      console.log('Not logged in.');
      return;
    }
    Kakao.Auth.logout(function() {
      console.log(Kakao.Auth.getAccessToken());
      setIsLogin(false)
    });
  }

  const handleMembership = () => {
    Kakao.API.request({
      url: '/v1/user/unlink',
      success: function(response:any) {
        console.log(response);
      },
      fail: function(error:any) {
        console.log(error);
      },
    });
  }

  // loginModal에서 깃허브 로그인 성공 후, 리디렉션이 되어서 localhost로 돌아오면 실행되는 라이프사이클 코드
  useEffect(() => {
    // console.log(Kakao.isInitialized())
    const url = new URL(window.location.href); // 현재 위치하는 웹사이트의 url을 가져옴
    const authorizationCode = url.searchParams.get("code"); // 깃허브로부터 받은 인증코드를 가져옴 ex) http://localhost:3000/?code=5e52fb85d6a1ed46a51f 여기서 code 뒤의 숫자들이 인증코드
    if (url.pathname === "/kakaoLogin") {
      if (authorizationCode) {
        //만약 깃허브에서 로그인이 성공하여 code를 받아왔다면, client(서버)에 accessToken 받아오는 요청을 보냄
        kakaoAccessToken(authorizationCode);
      }
    } else {
      if (authorizationCode) {
        //만약 깃허브에서 로그인이 성공하여 code를 받아왔다면, client(서버)에 accessToken 받아오는 요청을 보냄
        gitAccessToken(authorizationCode);
        gitUserInfo();
      }
    }
  }, []);

  return (
    <div>
      <LoginModal />
      <div></div>
      {isLogin ? <div>로그인 되어 있음</div> : <div>로그인 안되어 있음</div>}
      {userName ? <div>{userName}</div> : <div>아직 깃허브에서 유저정보 안가져옴</div>}
      <button onClick={handleLogout}>로그아웃</button>
      <button onClick={handleMembership}>회원탈퇴</button>
    </div>
  );
}

export default Nav;
