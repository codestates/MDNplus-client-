import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux";
import { currentQData, questionLike } from "../Redux/QcontentData";
import { useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { answerPageData } from "../Redux/AnswerPageData";
import QfakeData from "../QFakeData";
import QContentFakeData from "../QContentFakeData";

type PageNameType = {
  pageName: string;
};
function QcontentPage() {
  const history = useHistory();
  const allState = useSelector((state: RootState) => state.QcontentDataReducer);
  const dispatch = useDispatch();
  const { currentData } = allState;
  const [isMainPage, setisMainPage] = useState<boolean>(true);
  const [isLike, setIsLike] = useState<boolean>(true);
  const [isAnswerLike, setIsAnswerLike] = useState<boolean>(true);

  const location = useLocation<PageNameType>();

  console.log("hello");

  useEffect(() => {
    if (location.state === undefined) {
      console.log("null");
    } else if (location.state.pageName === "MyPage") {
      setisMainPage(false);
      console.log(location.state.pageName);
    } else {
      console.log(location.state.pageName);
    }

    dispatch(currentQData(QContentFakeData));
  }, []);

  const handleQuestionIncreaseLikes = (likesNum: number, idNum: string) => {
    console.log("좋아요 증가");
    setIsLike(() => !isLike);
  };

  const handleQuestionDecreaseLikes = (likesNum: number, idNum: string) => {
    console.log("좋아요 감소");
    setIsLike(() => !isLike);
  };

  const handleAnswerDecreaseLikes = (likesNum: number, idNum: string) => {
    console.log("답변 좋아요 감소", likesNum);
    setIsAnswerLike(() => !isAnswerLike);
  };

  const handleAnswerIncreaseLikes = (likesNum: number, idNum: string) => {
    console.log("답변 좋아요 증가", likesNum);
    setIsAnswerLike(() => !isAnswerLike);
  };

  const handleAnswerBtn = () => {
    dispatch(answerPageData(currentData?.question));
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
          <QuestionContainer>
            <LikesPart>
              <span onClick={() => handleQuestionIncreaseLikes(currentData.question.like, currentData.question._id)}>up</span>
              <Likes>좋아요 &nbsp; {currentData.question.like}</Likes>
              <span onClick={() => handleQuestionDecreaseLikes(currentData.question.like, currentData.question._id)}>down</span>
            </LikesPart>

            <QuestionBox>
              <Title> {currentData.question.title}</Title>
              <UserName>유저이름</UserName>
              <Date>{currentData.question.createdAt}</Date>

              <Body>{currentData.question.body}</Body>
              {currentData.question.tags?.map((el) => (
                <Tags>{el}</Tags>
              ))}

              {isMainPage ? <AnswerBtn onClick={handleAnswerBtn}>답변하기</AnswerBtn> : null}
            </QuestionBox>
          </QuestionContainer>

          <AnswerContainer>
            {currentData.comments.map((el) => (
              <EachAnswer>
                <LikesPart>
                  <span onClick={() => handleAnswerIncreaseLikes(el.like, el._id)}> up</span>
                  <Likes>좋아요 &nbsp; {el.like}</Likes>
                  <span onClick={() => handleAnswerDecreaseLikes(el.like, el._id)}> down</span>
                </LikesPart>
                <AnswerBox>
                  <UserName>답변자 이름</UserName>
                  <Date>{el.createdAt}</Date>
                  <Body>{el.content}</Body>
                </AnswerBox>
              </EachAnswer>
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
  height: 100vh;
  weidth: 100vw;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, auto);
`;

const QuestionContainer = styled.div`
  grid-area: 1/2/3/6;
  display: flex;
  padding-bottom: 2rem;
  align-items: center;
  border-bottom: 2px solid #a7a3a3;
`;

const QuestionBox = styled.div`
  width: 80%;
`;

const AnswerContainer = styled.div`
  grid-area: 3/2/5/6;
`;

const EachAnswer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #a7a3a3;
`;

const AnswerBox = styled.div`
  margin: 1rem;
  width: 80%;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  padding: 1rem;
`;
const Date = styled.div`
  padding: 1rem;

  text-align: right;
`;
const UserName = styled.div`
  padding: 1rem;
`;
const Body = styled.div`
  padding: 1rem;
  line-height: 2rem;
`;
const LikesPart = styled.span`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  margin: 1rem;
  cursor: pointer;
`;

const Likes = styled.span`
  padding: 0.5rem;
`;

const Tags = styled.span`
  border: 1px solid gray;
  padding: 0.2rem;
  margin: 1rem;
`;

const AnswerBtn = styled.span`
  float: right;
  color: blue;
  cursor: pointer;
`;
