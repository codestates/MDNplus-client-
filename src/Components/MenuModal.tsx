// 로그인이 되면 유저정보 버튼이 생김
// 유저정보 버튼이 생겨서 클릭할경우 유저 정보창이 열림

import React from "react";
import styled from "styled-components";
import { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";


type MenuProps = {
  isOpen: boolean;
  checkMenu: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  handleLogin: () => void;
};

function MenuModal({ isOpen, checkMenu, onClose, handleLogin }: MenuProps) {
  const [isHelpDesk, setIsHelpDesk] = useState(false);
  const overLay = useRef(null);
  const history = useHistory();

  const handleOverLay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === overLay.current) {
      onClose();
    }
  };

  const handleLogOutButton = () => {
    axios.post("http://localhost:80/oauth/logout", null, { withCredentials: true }).then((res) => console.log(res));
    handleLogin();
    onClose();
  };

  console.log("hi");

  const handleMyPageButton = () => {
    history.push("/MyPage");
  };

  const handleMypage = () => {
    history.push("/MyPage");
    onClose();
  };

  const handleEditInfoButton = () => {
    history.push("/SettingPage");
    onClose();
  };

  return (
    <ModalContainer>
      <Overlay onClick={handleOverLay} ref={overLay} />
      <ModalBox>
        <ModalButton onClick={handleMypage}>마이페이지</ModalButton>
        <ModalButton onClick={handleEditInfoButton}>정보수정</ModalButton>
        <ModalButton onClick={handleLogOutButton}>로그아웃</ModalButton>
      </ModalBox>
    </ModalContainer>
  );
}

export default MenuModal;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  z-index: 1;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const ModalBox = styled.div`
  position: fixed;
  top: 5rem;
  right: 0rem;
  width: 10%;
  height: 20%;
  background-color: white;
  border-radius: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const ModalButton = styled.div`
  background-color: white;
  cursor: pointer;
  width: 100%;
  padding: 1.1rem;
  text-align: center;
  color: #424242;

  &:hover {
    background: #f5f5f5;
  }
`;

// const MenuButtonContainer = styled.div`
//   height: 100%;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;
