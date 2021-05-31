import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import loadingGif from "../img/R6bD.gif";
import userIcon from "../img/userIcon_gray.png";
import { useHistory } from "react-router";

// axios.defaults.withCredentials = true;

function SettingPage({ handleChangeMenuIcon, handleLogin }: any) {
  const [userInfo, setUserInfo] = useState({
    img: "",
    nickName: "",
  });
  const [selectedImg, setSelectedImg] = useState("");
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  // 유저가 이름을 수정할 시, 바뀌는 이름을 실시간으로 state에 업데이트하는 코드
  const handleInputChange = (e: any) => {
    setUserInfo({ ...userInfo, nickName: e.target.value });
  };

  //유저 이름 수정 완료 버튼을 눌렀을 시, 서버에 수정된 이름을 업데이트 하기 위한 코드
  const handleNameSave = () => {
    axios.patch("http://localhost:8080/userinfo/nick", { nickName: userInfo.nickName }, { withCredentials: true }).then((res) => console.log(res));
    setEditing(false);
  };

  // 유저가 file을 업로드하여 change 이벤트가 발생할 때, 실행되는 코드
  const handleChange = (e: any) => {
    setSelectedImg(e.target.files[0]);
  };

  //이미지 제거 클릭했을 시, 실행되는 코드
  const handleImgDelete = () => {
    axios.patch("http://localhost:8080/userinfo/img", { img: "" }, { withCredentials: true }).then((res) => {
      setUserInfo({ ...userInfo, img: "" });
      handleChangeMenuIcon("");
    });
  };

  //회원 탈퇴 버튼 클릭 시, 실행되는 코드
  const handleCancelMembership = () => {
    axios.delete("http://localhost:8080/userinfo/membership", { withCredentials: true }).then((res) => console.log(res));
    history.push("/");
    handleLogin();
  };

  // 유저가 이미지 업로드를 하였을 때, selectedImg state가 업데이트 되고난 후, 실행되는 코드
  // 아래 useEffect가 실행되는 조건
  //1. selectedImg state가 변경이 되었을 경우
  //2. selectedImg state가 있을 경우
  useEffect(() => {
    if (selectedImg) {
      const url = "https://api.cloudinary.com/v1_1/dr4ka7tze/image/upload";
      const formData = new FormData();
      formData.append("file", selectedImg);
      formData.append("upload_preset", "vzsh73vh");

      // 클라우디너리 서버의 upload API 호출
      axios
        .post(url, formData)
        .then((res) => {
          setUserInfo({ ...userInfo, img: res.data.url });
          handleChangeMenuIcon(res.data.url);
          axios.patch("http://localhost:8080/userinfo/img", { img: res.data.url }, { withCredentials: true }).then((res) => console.log(res));
        })
        .catch((err) => console.log(err));
    }
  }, [selectedImg]);

  useEffect(() => {
    axios.get("http://localhost:8080/userinfo", { withCredentials: true }).then((res) => {
      setUserInfo({ nickName: res.data.nickName, img: res.data.image });
      handleChangeMenuIcon(res.data.image);
    });
  }, []);

  return (
    <Container>
      <Stage>
        <ImgBox>{!userInfo.img ? <Img src={userIcon}></Img> : <Img src={userInfo.img} />}</ImgBox>
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
            <EditInput onChange={handleInputChange} value={userInfo.nickName} autoFocus></EditInput>
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
      </Stage>
      <DelAccountBox>
        <DelAccount>회원 탈퇴</DelAccount>
        <DelAccountBtn onClick={handleCancelMembership}>회원 탈퇴</DelAccountBtn>
      </DelAccountBox>
    </Container>
  );
}

// 로딩과 url 모두 false일 경우, 빈 동그라미 이미지
// 로딩이 true일 떄는, 로딩중 이미지
// 로딩은 false이고, url은 true일 떄는, 업데이트된 이미지

export default SettingPage;

const Container = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Stage = styled.div`
  // border: 1px solid black;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ImgBox = styled.div`
  // border: 1px solid black;
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  // border: 1px solid black;
  width: 10em;
  height: 10em;
  border-radius: 50%;
  object-fit: cover;
`;

const UserNameBox = styled.div`
  width: 20rem;
  padding-top: 3rem;
  // border: 1px solid black;
`;

const UserName = styled.div`
  // border: 1px solid black;
  margin-left: 3rem;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
  color: #616161;
`;

const EditName = styled.span`
  // border: 1px solid black;
  color: #3b85f3;
  margin-left: 3rem;
  cursor: pointer;
`;

const EditName_save = styled.span`
  display: inline-block;
  float: right;
  color: white;
  margin-right: 2.4rem;
  margin-top: 1rem;
  background: #3b85f3;
  padding: 0.3rem 0.7rem 0.3rem 0.7rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
`;

const EditInput = styled.input`
  margin-left: 2.5rem;
  width: 15rem;
  font-size: 1.3rem;
  outline: #bdbdbd;
`;

const SubmitBox = styled.div`
  // border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
`;
const ImgPickerBox = styled.div`
  margin-top: 1rem;
`;

const ImgPicker = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const ImgPickerLetter = styled.label`
  display: inline-block;
  padding: 0.5rem 1.7rem 0.5rem 1.7rem;
  color: white;
  background-color: #3b85f3;
  cursor: pointer;
  border-radius: 0.5rem;
`;

const ImgDelete = styled.div`
  display: inline-block;
  color: #3b85f3;
  cursor: pointer;
  margin: 1rem 0rem 1rem 0rem;
`;

const DelAccountBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 37%;
  margin-top: 3rem;
`;

const DelAccount = styled.span`
  margin-left: 2rem;
  font-weight: 600;
`;

const DelAccountBtn = styled.button`
  margin-right: 5rem;
  margin-top: -0.5rem;
  padding: 0.5rem 1.7rem 0.5rem 1.7rem;
  color: white;
  background-color: #ff5b5b;
  cursor: pointer;
  border-radius: 0.5rem;
  border: none;
  font-size: 1rem;
`;
