import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { answerPageData } from "../Redux/AnswerPageData";
import QContentFakeData from "../QContentFakeData";
import useQcontentData from "../Hooks/useQcontentData";
import axios from 'axios';
import QfakeData from '../QContentFakeData';

type DataType = {
  question: {
    tags: string[];
    commentCount: number;
    like: number;
    _id: string;
    title: string;
    body: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  comments: {
    like: number;
    _id: string;
    questionId: string;
    content: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }[];
};

type AnswerType = {
  like: number;
  _id: string;
  questionId: string;
  content: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type PageNameType = {
  pageName: string;
};

function QcontentPage() {
  const { QcontentState, onCurrentQData, onQuestionLike, onAnswerLike } = useQcontentData();
  const { currentData } = QcontentState;
  const history = useHistory();
  const dispatch = useDispatch();
  const [isMainPage, setisMainPage] = useState<boolean>(true);
  const [isLike, setIsLike] = useState<boolean>(false);
  const [isAnswerLike, setIsAnswerLike] = useState<boolean>(true);
  const location = useLocation<PageNameType>();

  const handleQuestionIncreaseLikes = (updateData: DataType) => {
    updateData.question.like = updateData.question.like + 1;

    console.log(updateData);

    onQuestionLike(updateData);

    axios.post('http://localhost:80/question/like', {questionId: updateData.question._id, like: updateData.question.like})
    .then(res => console.log(res))
  };

  const handleQuestionDecreaseLikes = (updateData: DataType) => {
    updateData.question.like = updateData.question.like - 1;

    console.log(updateData);

    onQuestionLike(updateData);

    setIsLike(() => !isLike);
    // axios.post('http://localhost:80') // 바껴진 숫자를 업데이트 하는 요청
  };

  const handleAnswerDecreaseLikes = (updateData: AnswerType) => {
    console.log("답변 좋아요 감소");

    if (updateData.like <= 0) {
      console.log("싫어요ㅠㅠ 맘이아픔니다");
      return;
    }
    updateData.like = updateData.like - 1;

    onAnswerLike(updateData);

    setIsAnswerLike(() => !isAnswerLike);
    // axios.post('http://localhost:80') // 바껴진 숫자를 업데이트 하는 요청
  };

  const handleAnswerIncreaseLikes = (updateData: AnswerType) => {
    console.log("답변 좋아요 증가");

    setTimeout(() => {
      console.log("실행");
    }, 3000);

    updateData.like = updateData.like + 1;

    onAnswerLike(updateData);

    setIsAnswerLike(() => !isAnswerLike);
    // axios.post('http://localhost:80') // 바껴진 숫자를 업데이트 하는 요청
  };

  const handleAnswerBtn = () => {
    dispatch(answerPageData(currentData?.question));
    history.push({
      pathname: "/AnswerPage",
      state: { pageName: "this page is from QcontentPage" },
    });
  };

  useEffect(() => {
    if (location.state === undefined) {
      console.log("null");
    } else if (location.state.pageName === "MyPage") {
      setisMainPage(false);
      console.log(location.state.pageName);
    } else {
      console.log(location.state.pageName);
    }
    onCurrentQData(QContentFakeData);

    console.log("쿼스천 함수 실행됨");
  }, []);

  console.log("myPage에서 전달받은 질문", currentData);
  return (
    <div>
      {currentData !== null && currentData !== undefined ? (
        <Container>
          <QuestionContainer>
            <LikesPart>
              <span onClick={() => handleQuestionIncreaseLikes(currentData)}>up</span>
              <Likes>좋아요 &nbsp; {currentData.question.like}</Likes>
              <span onClick={() => handleQuestionDecreaseLikes(currentData)}>down</span>
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
            {currentData.comments?.map((el) => (
              <EachAnswer>
                <LikesPart>
                  <span onClick={() => handleAnswerIncreaseLikes(el)}> up</span>
                  <Likes>좋아요 &nbsp; {el.like}</Likes>
                  <span onClick={() => handleAnswerDecreaseLikes(el)}> down</span>
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
