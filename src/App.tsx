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
  const [helpModal, setHelpModal] = useState(false);
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

  //유저가 오른쪽 하단 도움말을 눌렀을 때 나오는 모달을 관리하는 함수
  const handleHelpModal = () => {
    if (helpModal) {
      setHelpModal(false);
    } else {
      setHelpModal(true);
    }
  };

  return (
    <Container>
      <Header>
        {writeMode ? null : (
          <Nav
            setIsLogin={setIsLogin}
            userImg={userImg}
            isLogin={isLogin}
            isLogInOpen={isLogInOpen}
            handleLogin={handleLogin}
            handleLoginModal={handleLoginModal}
            handleChangeMenuIcon={handleChangeMenuIcon}
          ></Nav>
        )}
      </Header>

      {writeMode ? null : contentPageMode ? null : (
        <SideArea>
          <SideBar></SideBar>
        </SideArea>
      )}

      <Body>
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route path="/ContentPage" render={() => <ContentPage isLogin={isLogin} handleLoginModal={handleLoginModal} />} />
          <Route path="/EditPage" render={() => <EditPage helpModal={helpModal} handleHelpModal={handleHelpModal} />} />
          <Route path="/SearchPage" render={() => <SearchPage />} />
          <Route path="/SettingPage" render={() => <SettingPage handleLogin={handleLogin} handleChangeMenuIcon={handleChangeMenuIcon} />} />
          <Route path="/NameSettingPage" render={() => <NameSettingPage />} />
          <Route path="/MyPage" render={() => <MyPage />} />
          <Route path="/HelpdeskPage" render={() => <HelpdeskPage />} />
          <Route path="/AnswerPage" render={() => <AnswerPage helpModal={helpModal} handleHelpModal={handleHelpModal} />} />
          <Route path="/HquestionPage" render={() => <HquestionPage helpModal={helpModal} handleHelpModal={handleHelpModal} />} />
          <Route path="/QcontentPage" render={() => <QcontentPage isLogin={isLogin} handleLoginModal={handleLoginModal} />} />
          <Route path="/FAQ" render={() => <FAQ />} />
          <Route path="/TestEditPage" render={() => <TestEditPage />} />
          <Route path="/Wiki" render={() => <MainPage />} />
        </Switch>
      </Body>
      {writeMode ? null : (
        <Footer>
          <FooterComponent />
        </Footer>
      )}
    </Container>
  );
}
export default App;

const Container = styled.div`
display: grid;
grid-template-columns: auto 1fr;
grid-template-rows: auto 1fr auto;
height: 100%;
width: 100%;

grid-template-areas:
  "header header"
  "side main"
  "footer footer";

@media (max-width: 375px) {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  height: 100vh;
  width: 100vw;

  grid-template-areas:
    "header"
    "side"
    "main";
`;
const Header = styled.div`
  grid-area: header;
`;


const SideArea = styled.div`
  grid-area: side;
  width: 13rem;
  background: #f4f4f4;

  @media (max-width: 375px) {
    width: 100%;
    height: 7rem;
  }
`;

const Body = styled.div`
  grid-area: main;
  margin: 0;
  width: 100%;
  height: 100%;
`;
const Footer = styled.div`
  grid-area: footer;
`;