import MainPage from "./Pages/MainPage";
import React, {useEffect, useState} from "react";
import Nav from "./Components/Nav";
import { BrowserRouter, Switch, Route, useHistory, withRouter } from "react-router-dom";
import ContentPage from "./Pages/ContentPage";
import EditPage from "./Pages/EditPage";
import MyPage from "./Pages/MyPage";
import QuestionPage from "./Pages/QuestionPage";
import SearchPage from "./Pages/SearchPage";
import SettingPage from "./Pages/SettingPage";
import "./App.css";
import HelpdeskPage from './HelpdeskPages/HelpdeskPage';
import HquestionPage from './HelpdeskPages/HquestionPage'
import styled from 'styled-components'
import SideBar from "./Components/SideBar"
import useAllData from './Hooks/useAllData';

function App() {
  // const [ writeMode, setWriteMode ] = useState(false)
  const {allState, onSetWriteMode} = useAllData()
  const {writeMode} = allState


  return (
    <>
    {writeMode ? null : <Nav></Nav>}
    <Container>
    {writeMode ? null : <SideBar></SideBar>}
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/ContentPage" render={() => <ContentPage />} />
        <Route path="/EditPage" render={() => <EditPage />} />
        <Route path="/MyPage" render={() => <MyPage />} />
        <Route path="/SearchPage" render={() => <SearchPage />} />
        <Route path="/SettingPage" render={() => <SettingPage />} />
        <Route path="/HelpdeskPage" render={() => <HelpdeskPage />} />
        <Route path="/HquestionPage" render={() => <HquestionPage />} />
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
`

