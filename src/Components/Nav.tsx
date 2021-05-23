import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useHistory } from "react-router";
import useMyPageData from "../Hooks/useSearchData";
import { useDispatch } from "react-redux";
import { searchWord, searchSelect, searchResult } from "../Redux/SearchData";
import LoginModal from "./LoginModal";
import MenuModal from "./MenuModal";
import FakeData from "../FakeData";
import search from "../img/search.jpeg";

const { Kakao }: any = window;

function Nav() {
  const { onSearching, SearchDataState } = useMyPageData();
  const [isLogin, setIsLogin] = useState(true);
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [gitHubImage, setGitHubImage] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleHomeBtn = () => {
    history.push("/");
  };

  const handleLoginModal = () => {
    setIsLogInOpen(!isLogInOpen);
  };

  const handleMenuModal = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 검색창에 검색을 칠때마다 state를 업데이트함.
  const handleWritingState = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchWord(e.target.value));
  };

  //엔터를 치면 검색 결과와 select 태그 내용을 가져오게됨.
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement> & React.ChangeEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      console.log(SearchDataState.word, "태그내용", SearchDataState.tag);

      if (SearchDataState.tag === null || SearchDataState.tag === "-선택해주세요-") {
        alert("선택해주세요");
        return;
      }

      dispatch(searchResult(e.target.value, SearchDataState.tag));
      //리덕스 훅스에가서 state 업데이트함.
      onSearching(FakeData);

      history.push("/SearchPage");
      e.target.value = "";
    }
  };

  //깃허브 accessToken 받아오는 요청
  const gitAccessToken = (authorizationCode: string) => {
    axios.post("http://localhost:80/oauth/github", { authorizationCode: authorizationCode }).then((res) => {
      if (res.data.accessToken) {
        setIsLogin(true);
        localStorage.setItem("accessToken", res.data.accessToken);
      }
    });
  };

  //서버로부터 카카오 accessToken 받아오는 요청
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
        console.log(authorizationCode);
        //만약 깃허브에서 로그인이 성공하여 code를 받아왔다면, client(서버)에 accessToken 받아오는 요청을 보냄
        gitAccessToken(authorizationCode);
      }
    }
  }, []);

  //태그를 선택할때 tag state 업데이트가 됨.
  const option = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(searchSelect(e.target.value));
  };

  return (
    <NavBar>
      <LeftBox>
        <Logo>MDN +</Logo>
        <SearchBar>
          <Search type="search" onKeyPress={handleKeyPress} onChange={handleWritingState} />
          <SearchIcon src={search}></SearchIcon>
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
          <UserIconContainer onClick={handleMenuModal}>
            <User>유저정보창</User>
            <FontAwesomeIcon icon="sort-down" size="sm" color="black" />
            {isMenuOpen ? <MenuModal getGitHubImage={setGitHubImage} isOpen={isMenuOpen} onClose={handleMenuModal} checkMenu={setIsMenuOpen}></MenuModal> : null}
          </UserIconContainer>
        </NavButtons>
      ) : (
        <NavButtons>
          <LoginBtn onClick={handleLoginModal}>로그인</LoginBtn>
          <LoginModal isOpen={isLogInOpen} onClose={handleLoginModal} checkLogin={setIsLogin}></LoginModal>
        </NavButtons>
      )}
    </NavBar>
  );
}

export default Nav;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f4f4f4;
  font-family: "Archivo Black", sans-serif;
  box-shadow: 0px 4px 5px #eeeeee;

  @media (max-width: 375px) {
    width: 375px;
  }
`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 2.5rem;
  color: #005ce7;
  margin: 1rem 1rem 1rem 3rem;
`;

const SearchBar = styled.div`
  border: 1px solid #005ce7;
  width: 37%;
  background: white;
  padding-left: 1rem;
  margin-left: 2rem;
`;

const Search = styled.input`
  border: none;
  width: 90%;
  font-size: 1rem;
  outline: none;
  height: 2rem;
`;

const SearchIcon = styled.img`
  width: 10%;
  margin-bottom: -0.3rem;
  margin-left: -0.4rem;
`;

const SearchFilter = styled.select`
  margin-left: 1rem;
  border: none;
  background: #f4f4f4;
  padding-right: 0.3rem;
  outline: none;
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
  cursor: pointer;
`;

const User = styled.div`
  margin: 2px;
`;
