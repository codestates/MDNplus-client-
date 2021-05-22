import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux";
import { currentQData, likeData } from "../Redux/QcontentData";
import { useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { answerPageData } from "../Redux/AnswerPageData";
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

  const handleAnswerBtn = () => {
    dispatch(answerPageData(currentData));
    history.push({
      pathname: "/AnswerPage",
      state: { pageName: "this page is from QcontentPage" },
    });
  };

  console.log("myPage에서 전달받은 질문", currentData);
  return (
    <div>
      {currentData !== null && currentData !== undefined ? (
        <Container>
          <div> 질문한 내용</div>
          <QuestionContainer>
            <Title> {currentData.title}</Title>
            <Date>{currentData.createdAt}</Date>
            <UserName>{currentData.userName}</UserName>
            <Body>{currentData.body}</Body>
            <Tags>{currentData.tags}</Tags>

            {isLike ? (
              <div onClick={() => handleIncreaseLikes(currentData.likes, currentData.id)}>{currentData.likes}</div>
            ) : (
              <div onClick={() => handleDecreaseLikes(currentData.likes, currentData.id)}>{currentData.likes}</div>
            )}

            {isMainPage ? <AnswerBtn onClick={handleAnswerBtn}>답변하기 버튼</AnswerBtn> : null}
          </QuestionContainer>

          <AnswerContainer>
            <div> 답변</div>
            {currentData.answers?.map((answerData) => (
              <AnswerBox>
                <Title> {answerData.userName}</Title>
                <Date>{answerData.createdAt}</Date>
                <UserName>{answerData.userName}</UserName>
                <Body>{answerData.body}</Body>
                <Likes>{answerData.likes}</Likes>
              </AnswerBox>
            ))}
          </AnswerContainer>
        </Container>
      ) : (
        <div>empty</div>
      )}
    </div>
  );
}

export default QcontentPage;

const Container = styled.div`
  cursor: pointer;
`;

const QuestionContainer = styled.div`
  border: 2px solid #a7a3a3;
`;
const AnswerContainer = styled.div`
  border: 2px solid #a7a3a3;
`;

const AnswerBox = styled.div``;
const Title = styled.div``;
const Date = styled.div``;
const UserName = styled.div``;
const Body = styled.div``;
const Likes = styled.div``;
const Tags = styled.div``;
const AnswerBtn = styled.div``;
