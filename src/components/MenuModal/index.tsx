import React from "react";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {ModalContainer, ModalBox, ModalButton, Overlay} from "./MenuModal.style"

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
    axios
      .post("http://localhost:8080/oauth/logout", null, {
        withCredentials: true,
      })
      .then((res) => console.log(res));
    window.localStorage.removeItem("sessionId");
    handleLogin();
    onClose();
    history.push("/");
  };

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

