import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import useBooleanData from "./hooks/useBooleanData";
import Nav from "./container/nav";
import Sidebar from "./components/Sidebar";
import SearchPage from "./pages/common/SearchPage";
import NameSettingPage from "./pages/common/NameSettingPage";
import MyPage from "./pages/common/MyPage";
import FAQ from "./pages/common/FAQ";
import FooterComponent from "./components/Footer";
import LandingPage from "./pages/common/LandingPage";
import ContentPage from "./pages/wiki/ContentPage";
import SettingPage from "./pages/common/SettingPage";
import MainPage from "./pages/wiki/MainPage";
import QcontentPage from "./pages/helpdesk/ContentPage";
import HelpdeskPage from "./pages/helpdesk/HelpdeskPage";
import PostPage from "./pages/common/PostPage";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [helpModal, setHelpModal] = useState(false);
  const [userImg, setUserImg] = useState(
    "https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112353/userIcon_gray_k0aghd.jpg"
  );
  const { BooleanState } = useBooleanData();
  const { writeMode, contentPageMode } = BooleanState;

  const handleLoginModal = () => {
    setIsLogInOpen(!isLogInOpen);
  };

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleHelpModal = () => {
    setHelpModal(!helpModal);
  };

  const handleChangeUserImg = (url: string) => {
    if (url) {
      setUserImg(url);
    } else {
      setUserImg(
        "https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112353/userIcon_gray_k0aghd.jpg"
      );
    }
  };

  return (
    <div>
      {writeMode ? null : (
        <Nav
          setIsLogin={setIsLogin}
          userImg={userImg}
          isLogin={isLogin}
          isLogInOpen={isLogInOpen}
          handleLogin={handleLogin}
          handleLoginModal={handleLoginModal}
          handleChangeUserImg={handleChangeUserImg}
        ></Nav>
      )}

      <Container>
        {writeMode ? null : contentPageMode ? null : <Sidebar></Sidebar>}
        {/* <div className="content-section"> */}
          <Switch>
            <Route exact path="/" render={() => <LandingPage />} />
            <Route
              path="/ContentPage"
              render={() => (
                <ContentPage
                  isLogin={isLogin}
                  handleLoginModal={handleLoginModal}
                />
              )}
            />
            <Route path="/SearchPage" render={() => <SearchPage />} />
            <Route
              path="/SettingPage"
              render={() => (
                <SettingPage
                  handleLogin={handleLogin}
                  handleChangeUserImg={handleChangeUserImg}
                />
              )}
            />
            <Route path="/NameSettingPage" render={() => <NameSettingPage />} />
            <Route path="/MyPage" render={() => <MyPage />} />
            <Route path="/HelpdeskPage" render={() => <HelpdeskPage />} />
            <Route
              path="/QcontentPage"
              render={() => (
                <QcontentPage
                  isLogin={isLogin}
                  handleLoginModal={handleLoginModal}
                />
              )}
            />
            <Route path="/FAQ" render={() => <FAQ />} />
            <Route path="/Wiki" render={() => <MainPage />} />
            <Route
              path="/PostPage"
              render={() => (
                <PostPage
                  helpModal={helpModal}
                  handleHelpModal={handleHelpModal}
                />
              )}
            ></Route>
          </Switch>
        {/* </div> */}
      </Container>
      {writeMode ? null : <FooterComponent />}
    </div>
  );
}
export default App;

const Container = styled.div`
  display: flex;

  .content-section {
    // width: 85%;
  }
`;
