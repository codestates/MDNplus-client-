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
import axios from "axios";
import { DummyData } from "../MyPageDummyData";
import { userData } from "../Redux/MyPageData";
import useMyPageData from "../Hooks/useMyPageData";

type ContentType = {
  title: string;
  body: string;
  updatedAt: string;
};

type DataType = {
  userNamee: string;
  content: Array<ContentType>;
};

function MyPage() {
  const [userName, setUserName] = useState("");
  const accessToken = localStorage.getItem("accessToken");
  const { userNamee, content }: DataType = DummyData;
  const dispatch = useDispatch();
  const { myPageState } = useMyPageData();

  const UserInfo = async () => {
    console.log("유저정보 가져오는 요청 실행됨");
    dispatch(userData(DummyData));
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

  // console.log("useEffect 사용되기 전" + userName);

  console.log("hi");
  console.log(myPageState);

  return (
    <div>
      {/* {content.map((el) => (
        <div>
          {el.title}
          {el.body}
          {el.updatedAt}
        </div>
      ))} */}
    </div>
  );

  {
    /* return <div>{accessToken ? <div>{userName}</div> : <div>accessToken 없음</div>}</div>; */
  }
}

export default MyPage;
