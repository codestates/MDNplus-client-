import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import useSearchData from "../../hooks/useSearchData";
import LoginModal from "../LoginModal";
import MenuModal from "../MenuModal";
import search from "../../img/search.jpeg";
import { LeftBox, LoginBtn, Logo, NavBar, NavButtons, Search, SearchBar, SearchFilter, SearchIcon, UserIconContainer} from "./Nav.style"

function Nav({ userImg, isLogInOpen, isLogin, handleLogin, handleLoginModal, handleChangeMenuIcon, setIsLogin }: any) {
  const { SearchDataState, onSearchingData, onSearchingResult, onSearchingWord, onSearchingTag } = useSearchData();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userUrl, setUserUrl] = useState("");
  const history = useHistory();

  const handleMenuModal = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWritingState = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchingWord(e.target.value);
  };

  const handleIconClick = () => {
    let word: string | null = SearchDataState.word;
    let tag: string | null = SearchDataState.tag;
    if (SearchDataState.word === "") {
      alert("입력해주세요");
      return;
    }
    onSearchingResult(word, tag);
    axios.post("http://localhost:8080/search", { type: tag, content: word }).then((res) => {
      onSearchingData(res.data);
    });
    word = null;

    history.push("/SearchPage");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement> & React.ChangeEvent<HTMLInputElement>): void => {
    let word: string | null = e.target.value;
    let tag: string | null = SearchDataState.tag;
    if (e.key === "Enter") {
      if (SearchDataState.word === "") {
        alert("입력해주세요");
        return;
      }
      onSearchingResult(e.target.value, SearchDataState.tag);
      axios.post("http://localhost:8080/search", { type: tag, content: word }).then((res) => {
        onSearchingData(res.data);
      });
      word = null;
      history.push("/SearchPage");
    }
  };

  const gitAccessToken = (authorizationCode: string) => {
    axios.post("http://localhost:8080/oauth", { authorizationCode: authorizationCode }, { withCredentials: true }).then((res) => {
      const { nickName } = res.data;
      if (nickName) {
        handleChangeMenuIcon(res.data.image);
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
    axios.post("http://localhost:8080/oauth", { authorizationCode: authorizationCode }, { withCredentials: true }).then((res) => {
      const { nickName } = res.data;
      if (nickName) {
        handleChangeMenuIcon(res.data.image);
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
      axios.get("http://localhost:8080/userinfo", { withCredentials: true }).then((res) => {
        setUserUrl(res.data.image);
      });
      setIsLogin(true);
    }
  }, []);

  const option = (e: React.ChangeEvent<HTMLSelectElement> & React.MouseEvent<HTMLSelectElement>) => {
    onSearchingTag(e.target.value);
  };

  return (
    <NavBar>
      <LeftBox>
        <Logo onClick={() => history.push("/")}>MDN +</Logo>
        <SearchBar>
          <Search onKeyPress={handleKeyPress} onChange={handleWritingState} />
          <SearchIcon onClick={handleIconClick} src={search}></SearchIcon>
        </SearchBar>
        <SearchFilter name="filter" id="filter" onChange={option}>
          <option value="전체">전체</option>
          <option value="제목">제목</option>
          <option value="내용">내용</option>
          <option value="태그">태그</option>
        </SearchFilter>
      </LeftBox>
      {isLogin ? (
        <NavButtons>
          {userUrl ? <UserIconContainer src={userUrl} onClick={handleMenuModal}></UserIconContainer> : <UserIconContainer src={userImg} onClick={handleMenuModal}></UserIconContainer>}
          {isMenuOpen ? <MenuModal handleLogin={handleLogin} isOpen={isMenuOpen} onClose={handleMenuModal} checkMenu={setIsMenuOpen}></MenuModal> : null}
        </NavButtons>
      ) : (
        <NavButtons>
          <LoginBtn onClick={handleLoginModal}>로그인</LoginBtn>
          <LoginModal isOpen={isLogInOpen} onClose={handleLoginModal} handleLogin={handleLogin}></LoginModal>
        </NavButtons>
      )}
    </NavBar>
  );
}

export default Nav;