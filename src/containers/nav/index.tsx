import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import LoginModal from "./LoginModal";
import MenuModal from "./MenuModal";
import { Wrapper } from "./styles";
import SearchContainer from "./Search";
import Button from "../../components/Button";

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
  const history = useHistory();

  const handleMenuModal = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const gitAccessToken = useCallback(
    (authorizationCode: string) => {
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

          window.localStorage.setItem(
            "sessionId",
            JSON.stringify(res.data._id)
          );
        });
    },
    [handleChangeUserImg, handleLogin, history]
  );

  const kakaoAccessToken = useCallback(
    (authorizationCode: string) => {
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
          window.localStorage.setItem(
            "sessionId",
            JSON.stringify(res.data._id)
          );
        });
    },
    [handleChangeUserImg, handleLogin, history]
  );

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
      setIsLogin(true);
    }
  }, [gitAccessToken, kakaoAccessToken, setIsLogin]);

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
          <img
            className="user-icon"
            src={userImg}
            onClick={handleMenuModal}
            alt="user profile"
          ></img>
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
          <Button size="small" btnStyle="white" handler={handleLoginModal}>
            로그인
          </Button>
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
