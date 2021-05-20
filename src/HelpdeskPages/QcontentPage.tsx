import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux";
import { currentQData, likeData } from "../Redux/QcontentData";
import { useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import QfakeData from "../QFakeData";

type PageNameType = {
  pageName: string;
};
function QcontentPage() {
  const history = useHistory();
  const allState = useSelector((state: RootState) => state.QcontentDataReducer);
  const dispatch = useDispatch();
  const { currentData, currentLike } = allState;
  const [isMainPage, setisMainPage] = useState<boolean>(true);
  const [isLike, setIsLike] = useState<boolean>(true);

  const location = useLocation<PageNameType>();

  useEffect(() => {
    if (location.state === undefined) {
      console.log("null");
    } else if (location.state.pageName === "MyPage") {
      setisMainPage(false);
      console.log(location.state.pageName);
    } else {
      console.log(location.state.pageName);
    }
  }, []);

  const handleIncreaseLikes = (likesNum: number, idNum: number) => {
    console.log("좋아요 증가");
    setIsLike(() => !isLike);

    dispatch(likeData(likesNum + 1, idNum));
  };

  const handleDecreaseLikes = (likesNum: number, idNum: number) => {
    console.log("좋아요 감소");
    setIsLike(() => !isLike);

    dispatch(likeData(likesNum - 1, idNum));
  };
  console.log(currentData);
  const handleAnswerBtn = () => {};

  return (
    <div>
      {currentData !== null ? (
        <div>
          {currentData.userName}
          {currentData.id}
          {currentData.title}

          {isLike ? (
            <div onClick={() => handleIncreaseLikes(currentData.likes, currentData.id)}>{currentData.likes}</div>
          ) : (
            <div onClick={() => handleDecreaseLikes(currentData.likes, currentData.id)}>{currentData.likes}</div>
          )}
        </div>
      ) : (
        <div>empty</div>
      )}
      {/* {currentData?.allData.map((el: any) => (
        <div>
          {isLike ? (
            <div onClick={handleLikeBtn}>
              <FontAwesomeIcon icon={["fas", "thumbs-up"]} size="2x" color="blue" />
            </div>
          ) : (
            <div onClick={handleLikeBtn}>
              <FontAwesomeIcon icon={["far", "thumbs-up"]} size="2x" color="blue" />
            </div>
          )}
          <div>
            <div>{el.userName}</div>
            <div>{el.title}</div>
            <div>{el.body}</div>
            <Likes onClick={() => handleLikesNum(el.likes, el.id)}> 라이크 버튼{el.likes}</Likes>
            <div>{el.tags}</div>
            <div>{el.createdAt}</div>
          </div>
          {isMainPage ? <div onClick={handleAnswerBtn}>답변버튼버튼버튼</div> : <div>마이페이지에서 와서 버튼 음슴</div>}
          {el.answers.map((el: any) => (
            <div>
              <div>{el.userName}</div>
              <div>{el.qTitle}</div>
              <div>{el.body}</div>
              <div>{el.likes}</div>
              <div>{el.createdAt}</div>
            </div>
          ))}
        </div>
      ))} */}
    </div>
  );
}

export default QcontentPage;

const Likes = styled.div`
  cursor: pointer;
`;
