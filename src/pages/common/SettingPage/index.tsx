import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import useBooleanData from "../../../hooks/useBooleanData";
import { Container } from "./Setting.style";

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
      <section className="setting-section">
        <div className="user-info-box">
          {!userInfo.img ? (
            <img
              src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112353/userIcon_gray_k0aghd.jpg"
              alt="user profile"
            ></img>
          ) : (
            <img src={userInfo.img} alt="user profile" />
          )}
          {!editing ? (
            <div>
              <strong className="user-name">{userInfo.nickName}</strong>
              <button
                className="name-edit-btn"
                onClick={() => {
                  setEditing(true);
                }}
              >
                수정
              </button>
            </div>
          ) : (
            <div className="edit-box">
              <form method="POST" onSubmit={handleNameSave}>
                <input
                  onChange={handleInputChange}
                  value={userInfo.nickName}
                  className="edit-input"
                  autoFocus
                ></input>
                <button type="submit" className="edit-save-btn">
                  저장
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="setting-btn-box">
          <div className="image-setting-box">
            <input
              type="file"
              id="ex_file"
              className="image-picker"
              onChange={handleChange}
            />
            <label htmlFor="ex_file" className="setting-btn">
              프로필 설정
            </label>
            <button
              type="button"
              className="image-delete-btn"
              onClick={handleImgDelete}
            >
              프로필 삭제
            </button>
          </div>
          <div className="cancel-membership-box">
            <button
              type="button"
              className="setting-btn"
              onClick={handleCancelMembership}
            >
              회원 탈퇴
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
}
export default SettingPage;
