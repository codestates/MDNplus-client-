import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import LoginModal from "./LoginModal";
import MenuModal from "./MenuModal";
import { LoginBtn, Wrapper } from "./Nav.style";
import SearchContainer from "./Search";

type NavContainerProps = {
  userImg: string;
  isLogInOpen: boolean;
  isLogin: boolean;
  handleLogin: () => void;
  handleLoginModal: () => void;
  handleChangeUserImg: (url: string) => void;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavContainer({
  userImg,
  isLogInOpen,
  isLogin,
  handleLogin,
  handleLoginModal,
  handleChangeUserImg,
  setIsLogin,
}: NavContainerProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userUrl, setUserUrl] = useState("");
  const history = useHistory();

  const handleMenuModal = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const gitAccessToken = (authorizationCode: string) => {
    axios
      .post(
        "http://localhost:8080/oauth",
        { authorizationCode: authorizationCode },
        { withCredentials: true }
      )
      .then((res) => {
        const { nickName } = res.data;
        if (nickName) {
          handleChangeUserImg(res.data.image);
          history.push("/Wiki");
          handleLogin();
        } else {
          handleLogin();
          history.push("/NameSettingPage");
        }

        window.localStorage.setItem("sessionId", JSON.stringify(res.data._id));
      });
  };

  const kakaoAccessToken = (authorizationCode: string) => {
    axios
      .post(
        "http://localhost:8080/oauth",
        { authorizationCode: authorizationCode },
        { withCredentials: true }
      )
      .then((res) => {
        const { nickName } = res.data;
        if (nickName) {
          handleChangeUserImg(res.data.image);
          history.push("/Wiki");
          handleLogin();
        } else {
          handleLogin();
          history.push("/NameSettingPage");
        }
        window.localStorage.setItem("sessionId", JSON.stringify(res.data._id));
      });
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get("code");
    if (url.pathname === "/kakaoLogin") {
      if (authorizationCode) {
        kakaoAccessToken(authorizationCode);
      }
    } else {
      if (authorizationCode) {
        gitAccessToken(authorizationCode);
      }
    }

    if (window.localStorage.getItem("sessionId")) {
      axios
        .get("http://localhost:8080/userinfo", { withCredentials: true })
        .then((res) => {
          setUserUrl(res.data.image);
        });
      setIsLogin(true);
    }
  }, []);

  return (
    <Wrapper>
      <div className="left-box">
        <div className="logo" onClick={() => history.push("/")}>
          MDN +
        </div>
        <SearchContainer />
      </div>
      {isLogin ? (
        <>
          {userUrl ? (
            <img
              className="user-icon"
              src={userUrl}
              onClick={handleMenuModal}
            ></img>
          ) : (
            <img
              className="user-icon"
              src={userImg}
              onClick={handleMenuModal}
            ></img>
          )}
          {isMenuOpen ? (
            <MenuModal
              handleLogin={handleLogin}
              isOpen={isMenuOpen}
              onClose={handleMenuModal}
              checkMenu={setIsMenuOpen}
            ></MenuModal>
          ) : null}
        </>
      ) : (
        <>
          <LoginBtn handler={handleLoginModal}>로그인</LoginBtn>
          <LoginModal
            isOpen={isLogInOpen}
            onClose={handleLoginModal}
            handleLogin={handleLogin}
          ></LoginModal>
        </>
      )}
    </Wrapper>
  );
}

export default NavContainer;
