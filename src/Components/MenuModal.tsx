// 로그인이 되면 유저정보 버튼이 생김
// 유저정보 버튼이 생겨서 클릭할경우 유저 정보창이 열림

import React from "react";
import styled from "styled-components";
import { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

type MenuProps = {
  isOpen: boolean;
  checkMenu: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  getGitHubImage: React.Dispatch<React.SetStateAction<never[]>>;
};

function MenuModal({ isOpen, checkMenu, onClose }: MenuProps) {
  const [isHelpDesk, setIsHelpDesk] = useState(false);
  const overLay = useRef(null);
  const history = useHistory();

  const handleOverLay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === overLay.current) {
      onClose();
    }
  };
  //<Link to="/courses" replace />

  useEffect(() => {
    var pageName = "";

    var tempPageName = window.location.href;
    var strPageName = tempPageName.split("/");
    pageName = strPageName[strPageName.length - 1];

    if (pageName === "HelpdeskPage") {
      setIsHelpDesk(true);
    } else {
      setIsHelpDesk(false);
    }
  }, []);

  const handleLogOutButton = () => {
    console.log("logout");
  };

  const handleEditInfoButton = () => {
    history.push("/SettingPage");
  };

  const handleMyPageButton = () => {
    history.push("/MyPage");
  };

  return (
    <ModalContainer>
      <Overlay onClick={handleOverLay} ref={overLay} />
      <ModalBox>
        <MenuButtonContainer>
          <LogOut onClick={handleLogOutButton}>로그아웃</LogOut>
          <EditInfo onClick={handleEditInfoButton}>정보수정</EditInfo>
          {isHelpDesk ? <div onClick={handleMyPageButton}>마이페이지</div> : null}
        </MenuButtonContainer>
      </ModalBox>
    </ModalContainer>
  );
}

export default MenuModal;

const LogOut = styled.div`
  background-color: white;
  margin: 10px;
`;

const MyPage = styled.div`
  background-color: white;
  margin: 10px;
`;

const EditInfo = styled.div`
  background-color: white;
  margin: 10px;
`;

const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: fixed;
  top: 10%;
  margin: 10px;
  left: 80%;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
`;

const ModalBox = styled.div`
  position: relative;
  width: 10%;
  height: 20%;
  padding: 10px;
  background-color: white;
  border: 1.8px solid #a7a3a3;

  border-radius: 34px;
  box-sizing: border-box;
`;

const MenuButtonContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
