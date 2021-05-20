import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
// import userMyPateData from "../Hooks/useMyPageData";

function SettingPage() {
  // const { myPageUserData } = userMyPateData();
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e: any) => {
    setImage(e.target.files[0]);
  };

  const onClick = async () => {
    console.log("데이터전송중");
    const formData = new FormData();
    formData.append("file", image);
    // 서버의 upload API 호출
    const res = await axios
      .post("http://localhost:8080/posts", formData)
      .then((res) => {
        console.log("유저 정보 수정 완료" + res);
        setImage(res.data);
      })
      .catch((err) => console.log("실패"));

    console.log(res);
  };

  return (
    <Container>
      <UserInfo>
        !!!!!!Setting Page!!!!!!
        {/* <div>{myPageUserData.myPageUserName}</div> */}
        <h1>Upload Images</h1>
        <input type="file" name="file" placeholder="upload an image" onChange={onChange} />
        <button onClick={onClick}>제출</button>
        {loading ? <h3>Loading....</h3> : <img src={image} style={{ width: "300px" }}></img>}
      </UserInfo>
    </Container>
  );
}

export default SettingPage;

const Container = styled.div`
  height: 100vh;
  weidth: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserInfo = styled.div`
  font-size: 80px;
  background-color: white;
  height: 60%;
  weidth: 200px;
`;
