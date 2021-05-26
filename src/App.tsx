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
import NameSettingPage from "./Pages/NameSettingPage";
import FAQ from "./Pages/FAQ";

import "./App.css";
import HelpdeskPage from "./HelpdeskPages/HelpdeskPage";
import HquestionPage from "./HelpdeskPages/HquestionPage";
import styled from "styled-components";
import SideBar from "./Components/SideBar";
import useAllData from "./Hooks/useAllData";

function App() {
  // const [ writeMode, setWriteMode ] = useState(false)
  const { allState, onSetWriteMode } = useAllData();
  const { writeMode } = allState;

  return (
    <>
      {writeMode ? null : <Nav></Nav>}
      <Container>
        {writeMode ? null : <SideBar></SideBar>}
        <Switch>
          <Route exact path="/" render={() => <MainPage />} />
          <Route path="/ContentPage" render={() => <ContentPage />} />
          <Route path="/EditPage" render={() => <EditPage />} />
          <Route path="/SearchPage" render={() => <SearchPage />} />
          <Route path="/SettingPage" render={() => <SettingPage />} />
          <Route path="/NameSettingPage" render={() => <NameSettingPage />} />
          <Route path="/MyPage" render={() => <MyPage />} />
          <Route path="/HelpdeskPage" render={() => <HelpdeskPage />} />
          <Route path="/AnswerPage" render={() => <AnswerPage />} />
          <Route path="/HquestionPage" render={() => <HquestionPage />} />
          <Route path="/QcontentPage" render={() => <QcontentPage />} />
          <Route path="/FAQ" render={() => <FAQ />} />
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
