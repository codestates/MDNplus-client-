import MainPage from "./Pages/MainPage";
import React, { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import { BrowserRouter, Switch, Route, useHistory, withRouter } from "react-router-dom";
import ContentPage from "./Pages/ContentPage";
import EditPage from "./Pages/EditPage";
import MyPage from "./HelpdeskPages/MyPage";
import SearchPage from "./Pages/SearchPage";
import SettingPage from "./Pages/SettingPage";
import QcontentPage from "./HelpdeskPages/QcontentPage";
import AnswerPage from "./HelpdeskPages/AnswerPage";
import NameSettingPage from "./Pages/NameSettingPage"

import "./App.css";
import HelpdeskPage from "./HelpdeskPages/HelpdeskPage";
import HquestionPage from "./HelpdeskPages/HquestionPage";
import styled from "styled-components";
import SideBar from "./Components/SideBar";
import useAllData from "./Hooks/useAllData";
import userIcon from "./img/userIcon_gray.png"
import useBooleanData from './Hooks/useBooleanData';


function App() {
  const [userImg, setUserImg] = useState(userIcon)
  const [isLogin, setIsLogin] = useState(false);
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const {BooleanState} = useBooleanData()
  const {writeMode} = BooleanState

  const handleLoginModal = () => {
    console.log('로그인 모달 다루는 코드 실행됨')
    setIsLogInOpen(!isLogInOpen);
  };

  const handleChangeMenuIcon = (url:string) => {
    console.log('이미지 바뀌는 요청 들어옴')
    setUserImg(url)
  }

  const handleLogin = () => {
    setIsLogin(true)
  }

  // console.log(userImg)

  return (
    <>
      {writeMode ? null : <Nav userImg={userImg} isLogin={isLogin} isLogInOpen={isLogInOpen} handleLogin={handleLogin} handleLoginModal={handleLoginModal}></Nav>}
      <Container>
        {writeMode ? null : <SideBar></SideBar>}
        <Switch>
          <Route exact path="/" render={() => <MainPage />} />
          <Route path="/ContentPage" render={() => <ContentPage isLogin={isLogin} handleLoginModal={handleLoginModal}/>} />
          <Route path="/EditPage" render={() => <EditPage />} />
          <Route path="/SearchPage" render={() => <SearchPage />} />
          <Route path="/SettingPage" render={() => <SettingPage handleChangeMenuIcon={handleChangeMenuIcon}/>} />
          <Route path="/NameSettingPage" render={() => <NameSettingPage />} />
          <Route path="/MyPage" render={() => <MyPage />} />
          <Route path="/HelpdeskPage" render={() => <HelpdeskPage />} />
          <Route path="/AnswerPage" render={() => <AnswerPage />} />
          <Route path="/HquestionPage" render={() => <HquestionPage />} />
          <Route path="/QcontentPage" render={() => <QcontentPage />} />
        </Switch>
      </Container>
    </>
  );
}

export default withRouter(App);

const Container = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;
