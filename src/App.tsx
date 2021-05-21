import MainPage from "./Pages/MainPage";
import React, { useState } from "react";
import Nav from "./Components/Nav";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import ContentPage from "./Pages/ContentPage";
import EditPage from "./Pages/EditPage";
import MyPage from "./HelpdeskPages/MyPage";
import QuestionPage from "./HelpdeskPages/QuestionPage";
import SearchPage from "./Pages/SearchPage";
import SettingPage from "./Pages/SettingPage";
import QcontentPage from "./HelpdeskPages/QcontentPage";
import HelpdeskPage from "./HelpdeskPages/HelpdeskPage";
import AnswerPage from "./HelpdeskPages/AnswerPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>

      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/ContentPage" render={() => <ContentPage />} />
        <Route path="/EditPage" render={() => <EditPage />} />
        <Route path="/SearchPage" render={() => <SearchPage />} />
        <Route path="/SettingPage" render={() => <SettingPage />} />
        <Route path="/MyPage" render={() => <MyPage />} />
        <Route path="/QuestionPage" render={() => <QuestionPage />} />
        <Route path="/QcontentPage" render={() => <QcontentPage />} />
        <Route path="/HelpdeskPage" render={() => <HelpdeskPage />} />
        <Route path="/HelpdeskPage" render={() => <HelpdeskPage />} />
        <Route path="/AnswerPage" render={() => <AnswerPage />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
