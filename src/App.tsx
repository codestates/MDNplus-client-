import MainPage from "./Pages/MainPage";
import Nav from "./Components/Nav";
import { BrowserRouter ,Router, Switch, Route } from "react-router-dom";
import ContentPage from "./Pages/ContentPage";
import EditPage from "./Pages/EditPage";
import MyPage from "./Pages/MyPage";
import QuestionPage from "./Pages/QuestionPage";
import SearchPage from "./Pages/SearchPage";
import SettingPage from "./Pages/SettingPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
<<<<<<< HEAD
        <Switch>
          <Route exact path="/" render={() => <MainPage />} />
          <Route path="/ContentPage" render={() => <ContentPage />} />
          <Route path="/EditPage" render={() => <EditPage />} />
          <Route path="/MyPage" render={() => <MyPage />} />
          <Route path="/QuestionPage" render={() => <QuestionPage />} />
          <Route path="/SearchPage" render={() => <SearchPage />} />
          <Route path="/SettingPage" render={() => <SettingPage />} />
        </Switch>
    </BrowserRouter>
=======
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/ContentPage" render={() => <ContentPage />} />
        <Route path="/EditPage" render={() => <EditPage />} />
        <Route path="/MyPage" render={() => <MyPage />} />
        <Route path="/QuestionPage" render={() => <QuestionPage />} />
        <Route path="/SearchPage" render={() => <SearchPage />} />
        <Route path="/SettingPage" render={() => <SettingPage />} />
      </Switch>
      </BrowserRouter>
>>>>>>> 36cb644f88b4ce9bc4f5416b7a269e2abf2a265c
  );
}

export default App;
