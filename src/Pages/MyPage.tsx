import React, { useEffect, useState } from "react";
import axios from "axios";

function MyPage() {
  const [userName, setUserName] = useState("");
  const accessToken = localStorage.getItem("accessToken");

  const getGitHubUserInfo = async () => {
    console.log('유저정보 가져오는 요청 실행됨')
    const result = await axios
      .get("https://api.github.com/user", {
        headers: { authorization: `token ${accessToken}` },
      })
      .then((res) => {
        console.log("여기 깃허브 유저인포 가져옴");
        setUserName(res.data.login);
      });
  };

  useEffect(() => {
    console.log("useEffect 사용된 후" + userName);
    getGitHubUserInfo();
  });

  console.log("useEffect 사용되기 전" + userName);
  // console.log('hi')

  return (
    <div>
      {accessToken ? <div>{userName}</div> : <div>accessToken 없음</div>}
    </div>
  )
}

export default MyPage;
