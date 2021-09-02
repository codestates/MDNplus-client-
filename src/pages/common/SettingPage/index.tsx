import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import useBooleanData from "../../../hooks/useBooleanData";
import {
  Container,
  DelAccountBox,
  DelAccountBtn,
  EditInput,
  EditName,
  EditName_save,
  Img,
  ImgBox,
  ImgDelete,
  ImgPicker,
  ImgPickerBox,
  ImgPickerLetter,
  Stage,
  SubmitBox,
  UserName,
  UserNameBox,
} from "./Setting.style";

function SettingPage({ handleChangeUserImg, handleLogin }: any) {
  const [userInfo, setUserInfo] = useState({
    img: "",
    nickName: "",
  });
  const [selectedImg, setSelectedImg] = useState("");
  const [editing, setEditing] = useState(false);
  const { onContentPageMode } = useBooleanData();
  const history = useHistory();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, nickName: e.target.value });
  };

  const handleNameSave = () => {
    axios
      .patch(
        "http://localhost:8080/userinfo/nick",
        { nickName: userInfo.nickName },
        { withCredentials: true }
      )
      .then((res) => console.log(res));
    setEditing(false);
  };

  const handleChange = (e: any) => {
    setSelectedImg(e.target.files[0]);
  };

  const handleImgDelete = () => {
    axios
      .patch(
        "http://localhost:8080/userinfo/img",
        { img: "" },
        { withCredentials: true }
      )
      .then((res) => {
        setUserInfo({ ...userInfo, img: "" });
        handleChangeUserImg("");
      });
  };

  const handleCancelMembership = () => {
    axios
      .delete("http://localhost:8080/userinfo/membership", {
        withCredentials: true,
      })
      .then((res) => console.log(res));
    history.push("/");
    handleLogin();
  };

  useEffect(() => {
    if (selectedImg) {
      const url = "https://api.cloudinary.com/v1_1/dr4ka7tze/image/upload";
      const formData = new FormData();
      formData.append("file", selectedImg);
      formData.append("upload_preset", "vzsh73vh");

      axios
        .post(url, formData)
        .then((res) => {
          setUserInfo({ ...userInfo, img: res.data.url });
          handleChangeUserImg(res.data.url);
          axios
            .patch(
              "http://localhost:8080/userinfo/img",
              { img: res.data.url },
              { withCredentials: true }
            )
            .then((res) => console.log(res));
        })
        .catch((err) => console.log(err));
    }
  }, [selectedImg]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/userinfo", { withCredentials: true })
      .then((res) => {
        setUserInfo({ nickName: res.data.nickName, img: res.data.image });
        handleChangeUserImg(res.data.image);
      });

    if (history.location.pathname === "/SettingPage") {
      onContentPageMode(false);
    }
  }, []);

  return (
    <Container>
      <Stage>
        <ImgBox>
          {!userInfo.img ? (
            <Img src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112353/userIcon_gray_k0aghd.jpg"></Img>
          ) : (
            <Img src={userInfo.img} />
          )}
        </ImgBox>
        {!editing ? (
          <UserNameBox>
            <UserName>{userInfo.nickName}</UserName>
            <EditName
              onClick={() => {
                setEditing(true);
              }}
            >
              수정
            </EditName>
          </UserNameBox>
        ) : (
          <UserNameBox>
            <EditInput
              onChange={handleInputChange}
              value={userInfo.nickName}
              autoFocus
            ></EditInput>
            <EditName_save
              onClick={() => {
                handleNameSave();
              }}
            >
              저장
            </EditName_save>
          </UserNameBox>
        )}

        <SubmitBox>
          <ImgPickerBox>
            <ImgPicker type="file" id="ex_file" onChange={handleChange} />
            <ImgPickerLetter htmlFor="ex_file">프로필 설정</ImgPickerLetter>
          </ImgPickerBox>
          <ImgDelete onClick={handleImgDelete}>프로필 삭제</ImgDelete>
        </SubmitBox>
        <DelAccountBox>
          <DelAccountBtn onClick={handleCancelMembership}>
            회원 탈퇴
          </DelAccountBtn>
        </DelAccountBox>
      </Stage>
    </Container>
  );
}
export default SettingPage;
