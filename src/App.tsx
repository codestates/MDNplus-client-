import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";
import userIcon from "./img/userIcon_gray.png";
import useBooleanData from "./Hooks/useBooleanData";
//공통
import Nav from "./Components/Nav";
import SideBar from "./Components/SideBar";
import SearchPage from "./Pages/SearchPage";
import NameSettingPage from "./Pages/NameSettingPage";
import MyPage from "./HelpdeskPages/MyPage";
import FAQ from "./Pages/FAQ";
import FooterComponent from "./Components/FooterComponent";
import LandingPage from "./Pages/LandingPage";
// Wiki
import ContentPage from "./Pages/ContentPage";
import SettingPage from "./Pages/SettingPage";
import EditPage from "./Pages/EditPage";
import MainPage from "./Pages/MainPage";
// helpDesk
import QcontentPage from "./HelpdeskPages/QcontentPage";
import AnswerPage from "./HelpdeskPages/AnswerPage";
import HelpdeskPage from "./HelpdeskPages/HelpdeskPage";
import HquestionPage from "./HelpdeskPages/HquestionPage";
import TestEditPage from "./Pages/TestEditPage";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [userImg, setUserImg] = useState(userIcon);
  const { BooleanState } = useBooleanData();
  const { writeMode, contentPageMode } = BooleanState;

  const handleLoginModal = () => {
    console.log("로그인 모달 다루는 코드 실행됨");
    setIsLogInOpen(!isLogInOpen);
  };

  const handleChangeMenuIcon = (url: string) => {
    console.log("이미지 바뀌는 요청 들어옴");
    if (url) {
      setUserImg(url);
    } else {
      setUserImg(userIcon);
    }
  };

  const handleLogin = () => {
    if (isLogin) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  };

  return (
    <Container>
      <Header>
        {/* {writeMode && !contentPageMode ? null : (
          <Nav userImg={userImg} isLogin={isLogin} isLogInOpen={isLogInOpen} handleLogin={handleLogin} handleLoginModal={handleLoginModal} handleChangeMenuIcon={handleChangeMenuIcon}></Nav>
        )}
        {contentPageMode ? (
          <Nav userImg={userImg} isLogin={isLogin} isLogInOpen={isLogInOpen} handleLogin={handleLogin} handleLoginModal={handleLoginModal} handleChangeMenuIcon={handleChangeMenuIcon}></Nav>
        ) : null} */}

        {writeMode ? null : <Nav userImg={userImg} isLogin={isLogin} isLogInOpen={isLogInOpen} handleLogin={handleLogin} handleLoginModal={handleLoginModal} handleChangeMenuIcon={handleChangeMenuIcon}></Nav>}
      </Header>

      {/* {writeMode ? null : (
        <SideArea>
          <SideBar></SideBar>
        </SideArea>
      )} */}

      {writeMode ? null : contentPageMode ? null : (
        <SideArea>
          <SideBar></SideBar>
        </SideArea>
      )}

      <Body>
        <Switch>
          <Route exact path="/" render={() => <MainPage />} />
          <Route path="/ContentPage" render={() => <ContentPage isLogin={isLogin} handleLoginModal={handleLoginModal} />} />
          <Route path="/EditPage" render={() => <EditPage />} />
          <Route path="/SearchPage" render={() => <SearchPage />} />
          <Route path="/SettingPage" render={() => <SettingPage handleLogin={handleLogin} handleChangeMenuIcon={handleChangeMenuIcon} />} />
          <Route path="/NameSettingPage" render={() => <NameSettingPage />} />
          <Route path="/MyPage" render={() => <MyPage />} />
          <Route path="/HelpdeskPage" render={() => <HelpdeskPage />} />
          <Route path="/AnswerPage" render={() => <AnswerPage />} />
          <Route path="/HquestionPage" render={() => <HquestionPage />} />
          <Route path="/QcontentPage" render={() => <QcontentPage isLogin={isLogin} handleLoginModal={handleLoginModal} />} />
          <Route path="/FAQ" render={() => <FAQ />} />
          <Route path="/TestEditPage" render={() => <TestEditPage />} />
          <Route path="/LandingPage" render={() => <LandingPage />} />
        </Switch>
      </Body>
      {/* <Footer>푸터</Footer> */}
      {writeMode ? null : (
        <Footer>
          <FooterComponent />
        </Footer>
      )}
    </Container>
  );
}

export default withRouter(App);

// const Container = styled.div`
//   display: flex;
//   height: 100vh;

//   @media (max-width: 375px) {
//     flex-direction: column;
//   }
// `;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100vh;

  grid-template-areas:
    "header header"
    "side main"
    "footer footer";

  @media (max-width: 375px) {
    grid-template-areas:
      "header header"
      "side main"
      "main footer";
  }
`;
const Header = styled.div`
  grid-area: header;
`;
const SideArea = styled.div`
  grid-area: side;
  width: 13rem;
  background: #f4f4f4;
`;

const Body = styled.div`
  grid-area: main;
  margin: 0;
  width: 100%;
`;
const Footer = styled.div`
  grid-area: footer;
`;
