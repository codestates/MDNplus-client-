import "./App.css";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import useBooleanData from "./hooks/useBooleanData";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import SearchPage from "./pages/common/SearchPage";
import NameSettingPage from "./pages/wiki/NameSettingPage";
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

  const handleChangeMenuIcon = (url: string) => {
    if (url) {
      setUserImg(url);
    } else {
      setUserImg(
        "https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112353/userIcon_gray_k0aghd.jpg"
      );
    }
  };

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleHelpModal = () => {
    setHelpModal(!helpModal);
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
                handleChangeMenuIcon={handleChangeMenuIcon}
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
height: 100vh;
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
  width: 100%;
`;

const Footer = styled.div`
  grid-area: footer;
`;
