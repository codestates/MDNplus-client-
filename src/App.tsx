import MainPage from "./Pages/MainPage";
import Nav from "./Components/Nav";
import { Switch, Route } from "react-router-dom";
import ContentPage from "./Pages/ContentPage";
import EditPage from "./Pages/EditPage";
import MyPage from "./Pages/MyPage";
import QuestionPage from "./Pages/QuestionPage";
import SearchPage from "./Pages/SearchPage";
import SettingPage from "./Pages/SettingPage";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/ContentPage" render={() => <ContentPage />} />
        <Route path="/EditPage" render={() => <EditPage />} />
        <Route path="/MyPage" render={() => <MyPage />} />
        <Route path="/QuestionPage" render={() => <QuestionPage />} />
        <Route path="/SearchPage" render={() => <SearchPage />} />
        <Route path="/SettingPage" render={() => <SettingPage />} />
      </Switch>
    </div>
  );
}

export default App;
