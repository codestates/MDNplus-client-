import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import loadingGif from "../img/R6bD.gif";

function SettingPage() {
  const [img, setImage] = useState<any>(null);
  const [newImg, setNewImg] = useState({
    url: "",
  });
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState("Seong seok");

  const url = "https://api.cloudinary.com/v1_1/dr4ka7tze/image/upload";
  const formData = new FormData();

  // 유저가 이름을 수정할 시, 바뀌는 이름을 실시간으로 state에 업데이트하는 코드
  const handleInputChange = (e: any) => {
    setUsername(e.target.value);
  };

  //유저 이름 수정 완료 버튼을 눌렀을 시, 서버에 수정된 이름을 업데이트 하기 위한 코드
  const handleNameSave = () => {
    console.log(username);
    setEditing(false);
  };

  // 유저가 file을 업로드하여 change 이벤트가 발생할 때, 실행되는 코드
  const handleChange = async (e: any) => {
    setImage(e.target.files[0]);
  };

  //이미지 제거 클릭했을 시, 실행되는 코드
  const handleImgDelete = () => {};

  // 유저가 이미지 업로드를 하였을 때, img state가 업데이트 되고난 후, 실행되는 코드
  // 아래 useEffect가 실행되는 조건
  // 1. img가 있을 경우
  // 2. img state가 변경이 되었을 경우
  useEffect(() => {
    if (img) {
      setLoading(true); // 아래 코드 실행 전에, 로딩중 상태를 true로 바꿔서 로딩중 gif가 뜨게 함
      formData.append("file", img);
      formData.append("upload_preset", "vzsh73vh");
      // 서버의 upload API 호출
      console.log(img);
      axios
        .post(url, formData)
        .then((res) => {
          console.log(res);
          setNewImg({ url: res.data.url });
          setLoading(false); // newImg state가 업데이트 되고난 후, 로딩중 gif를 제거
        })
        .catch((err) => console.log(err));
    }
  }, [img]);

  return (
    <Container>
      <Stage>
        <ImgBox>{!loading && !newImg.url ? <Img></Img> : loading && !newImg.url ? <Img></Img> : !loading && newImg.url ? <Img src={newImg.url}></Img> : null}</ImgBox>
        {!editing ? (
          <UserNameBox>
            <UserName>{username}</UserName>
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
            <input onChange={handleInputChange} value={username} autoFocus></input>
            <EditName
              onClick={() => {
                handleNameSave();
              }}
            >
              저장
            </EditName>
          </UserNameBox>
        )}

        <SubmitBox>
          <ImgPickerBox>
            <ImgPicker type="file" id="ex_file" onChange={handleChange} />
            <ImgPickerLetter htmlFor="ex_file">이미지 업로드</ImgPickerLetter>
          </ImgPickerBox>
          <ImgDelete onClick={handleImgDelete}>이미지 삭제</ImgDelete>
        </SubmitBox>
      </Stage>
      <DelAccountBox>
        <DelAccount>회원 탈퇴</DelAccount>
        <DelAccountBtn>회원 탈퇴</DelAccountBtn>
      </DelAccountBox>
    </Container>
  );
}

// 로딩과 url 모두 false일 경우, 빈 동그라미 이미지
// 로딩이 true일 떄는, 로딩중 이미지
// 로딩은 false이고, url은 true일 떄는, 업데이트된 이미지

export default SettingPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
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
  border: 1px solid black;
  width: 10em;
  height: 10em;
  border-radius: 50%;
  object-fit: cover;
`;

const UserNameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20rem;
`;

const UserName = styled.div`
  // border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
`;

const EditName = styled.span`
  // border: 1px solid black;
  margin-top: 1rem;
  padding-left: 2rem;
  color: #3b85f3;
`;

const SubmitBox = styled.div`
  // border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
`;
const ImgPickerBox = styled.div``;

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
  padding: 0.5em 0.75em;
  color: white;
  background-color: #3f51b5;
  cursor: pointer;
  border: 1px solid #ebebeb;
`;

const ImgDelete = styled.div`
  display: inline-block;
  padding: 0.5em 0.75em;
  color: #999;
  background-color: #fdfdfd;
  cursor: pointer;
  border: 1px solid #ebebeb;
`;

const DelAccountBox = styled.div`
  // border: 1px solid black;
  width: 37%;
  display: flex;
  justify-content: space-between;
`;

const DelAccount = styled.span``;

const DelAccountBtn = styled.button`
  margin-right: 7rem;
`;
