// 카카오나 깃허브로 로그인이 성공되면 authorization code 를 백엔드 측으로 보내주고 유저 정보를 요청함.
// 유저 정보를 성공적으로 받으면 State 를 받게됨
// State에는 string 형태의 유저네임하고 array object 형태인 Content 를 받게됨
//State = username:string, content

//더미 데이터 예시.

// export const DummyData = {
//   userNamee: "Jun",

//   content: [
//     { title: "title1", body: "body1", updatedAt: "updateDate" },
//   ],
// };

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DummyData } from "../MyPageDummyData";
import { myPageUserAction } from "../Redux/MyPageData";
import MyPageList from "../Components/MyPageList";
import useMyPageData from "../Hooks/useMyPageData";
import axios from "axios";

function MyPage() {
  const [userName, setUserName] = useState("");
  const accessToken = localStorage.getItem("accessToken");
  // const { userNamee, content }: DataType = DummyData;
  const dispatch = useDispatch();
  const { myPageUserData } = useMyPageData();

  const UserInfo = async () => {
    console.log("유저정보 가져오는 요청 실행됨");

    dispatch(myPageUserAction(DummyData));

    // await axios
    //   .get("https://api.github.com/user", {
    //     headers: { authorization: `token ${accessToken}` },
    //   })
    //   .then((res) => {
    //     console.log("여기 깃허브 유저인포 가져옴");
    //     setUserName(res.data.login);
    //   });
  };

  useEffect(() => {
    console.log("useEffect 사용된 후" + userName);
    UserInfo();
  }, []);

  console.log("hi");

  return myPageUserData === null ? <div>로딩중</div> : <MyPageList />;
}

export default MyPage;
