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
import search from "../img/search.jpeg";
import userIcon from "../img/userIcon_gray.png";
import useBooleanData from "../Hooks/useBooleanData";
import useContentData from "../Hooks/useContentData";
import SearchDataDummy from "../SearchpageDummy";

// axios.defaults.withCredentials = true;

const { Kakao }: any = window;

function Nav({ userImg, isLogInOpen, isLogin, handleLogin, handleLoginModal }: any) {
  const { onSearching, SearchDataState } = useMyPageData();
  // const [isLogin, setIsLogin] = useState(false);
  // const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [gitHubImage, setGitHubImage] = useState([]);
  const { contentState } = useContentData();
  const { contentData } = contentState;
  const { BooleanState } = useBooleanData();
  const history = useHistory();
  const dispatch = useDispatch();

  console.log(contentData);

  const handleHomeBtn = () => {
    history.push("/");
  };

  const handleMenuModal = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 검색창에 검색을 칠때마다 state를 업데이트함.
  const handleWritingState = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchWord(e.target.value));
    console.log(e.target.value);
  };

  //엔터를 치면 검색 결과와 select 태그 내용을 가져오게됨.
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement> & React.ChangeEvent<HTMLInputElement>): void => {
    let word: string = e.target.value;
    let tag: string | null = SearchDataState.tag;

    if (e.key === "Enter") {
      console.log(word, "태그내용", tag);

      if (SearchDataState.word === "" || SearchDataState.word === SearchDataState.result) {
        alert("입력해주세요");
        return;
      }

      dispatch(searchResult(e.target.value, SearchDataState.tag));
      //리덕스 훅스에가서 state 업데이트함.

      // 검색할 때 필요한 요청 코드
      // axios.post('http://localhost:80/section/search', {title: word, type: tag})

      onSearching(SearchDataDummy);

      history.push("/SearchPage");

      e.target.value = "";
    }
  };

  //깃허브 accessToken 받아오는 요청
  const gitAccessToken = (authorizationCode: string) => {
    axios.post("http://localhost:80/oauth", { authorizationCode: authorizationCode }, { withCredentials: true }).then((res) => {
      console.log("요청 성공해서 들어옴");
      const { nickName, _id } = res.data;
      if (nickName) {
        console.log("이미 가입했던 회원이므로 메인페이지로 이동");
        console.log(res);
        history.push("/");
        handleLogin();
      } else {
        console.log("처음 로그인한 유저이므로 닉네임 설정 페이지로 이동");
        console.log(res);
        handleLogin();
        history.push("/NameSettingPage");
      }
      // if (res.data.d) {
      //   setIsLogin(true);
      //   localStorage.setItem("sessionId", res.data.data._id);
      // } else if(res.data.user) {
      //   setIsLogin(true);
      //   localStorage.setItem("sessionId", res.data.data._id);
      // }
    });
  };

  //서버로부터 카카오 accessToken 받아오는 요청
  const kakaoAccessToken = (authorizationCode: string) => {
    console.log("카카오 accessToken 받는 요청 보내짐");
    axios.post("http://localhost:80/oauth", { authorizationCode: authorizationCode }, { withCredentials: true }).then((res) => {
      const { nickName, _id } = res.data;
      console.log("로그인 요청 성공함");
      if (nickName) {
        console.log("이미 가입했던 회원이므로 메인페이지로 이동");
        console.log(res);
        history.push("/");
        handleLogin();
      } else {
        console.log("처음 로그인한 유저이므로 닉네임 설정 페이지로 이동");
        console.log(res);
        handleLogin();
        history.push("/NameSettingPage");
      }
      // if (accessToken) {
      //   setIsLogin(true);
      //   localStorage.setItem("accessToken", accessToken);
      //   localStorage.setItem("refreshToken", refreshToken);
      // }
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
  const option = (e: React.ChangeEvent<HTMLSelectElement> & React.MouseEvent<HTMLSelectElement>) => {
    dispatch(searchSelect(e.target.value));
  };

  console.log(userImg);
  console.log(BooleanState.contentPage);

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
          <UserIconContainer src={userImg} onClick={handleMenuModal}></UserIconContainer>
          {isMenuOpen ? <MenuModal handleLogin={handleLogin} getGitHubImage={setGitHubImage} isOpen={isMenuOpen} onClose={handleMenuModal} checkMenu={setIsMenuOpen}></MenuModal> : null}
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
  font-weight: 500;
  margin: 1rem;
  border: 1px solid #a7a3a3;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  border-radius: 1.5rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #616161;
    color: white;
  }
`;

const UserIconContainer = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
`;
