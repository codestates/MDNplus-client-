import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { answerPageData } from "../Redux/AnswerPageData";
import QContentFakeData from "../QContentFakeData";
import useQcontentData from "../Hooks/useQcontentData";

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
  const [isLike, setIsLike] = useState<boolean>(true);
  const [isAnswerLike, setIsAnswerLike] = useState<boolean>(true);
  const location = useLocation<PageNameType>();

  const handleQuestionIncreaseLikes = (updateData: DataType) => {
    updateData.question.like = updateData.question.like + 1;

    console.log(updateData);

    onQuestionLike(updateData);
  };

  const handleQuestionDecreaseLikes = (updateData: DataType) => {
    updateData.question.like = updateData.question.like - 1;

    console.log(updateData);

    onQuestionLike(updateData);

    setIsLike(() => !isLike);
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
  };

  const handleAnswerIncreaseLikes = (updateData: AnswerType) => {
    console.log("답변 좋아요 증가");

    setTimeout(() => {
      console.log("실행");
    }, 3000);

    updateData.like = updateData.like + 1;

    onAnswerLike(updateData);

    setIsAnswerLike(() => !isAnswerLike);
  };

  const handleQuestionLike = (updateData: DataType) => {
    if (isLike === true) {
      updateData.question.like = updateData.question.like + 1;

      console.log(updateData);

      onQuestionLike(updateData);
    } else {
      updateData.question.like = updateData.question.like - 1;

      console.log(updateData);

      onQuestionLike(updateData);
    }

    setIsLike(() => !isLike);
  };

  const handleAnswerLike = (updateData: AnswerType) => {
    if (isAnswerLike === true) {
      updateData.like = updateData.like + 1;

      onAnswerLike(updateData);
    } else {
      updateData.like = updateData.like - 1;

      onAnswerLike(updateData);
    }

    setIsAnswerLike(() => !isAnswerLike);
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
            <LineArea>질문</LineArea>
            <Question>
              <LikesPart>
                <span onClick={() => handleQuestionIncreaseLikes(currentData)}></span>
                <LikesNum> {currentData.question.like}</LikesNum>
                <Likes onClick={() => handleQuestionLike(currentData)}>좋아요</Likes>
                <span onClick={() => handleQuestionDecreaseLikes(currentData)}></span>
              </LikesPart>
              <QuestionBox>
                <Q>Q</Q>
                <Title> {currentData.question.title}</Title>
                <NameDate>
                  <UserName>유저이름</UserName>
                  <Date>{currentData.question.createdAt}</Date>
                </NameDate>
                <Body>{currentData.question.body}</Body>
                <div>
                  {currentData.question.tags?.map((el, index: number) => (
                    <Tags key={index}>{el}</Tags>
                  ))}
                </div>
                {isMainPage ? <AnswerBtn onClick={handleAnswerBtn}>답변하기</AnswerBtn> : null}
              </QuestionBox>
            </Question>
          </QuestionContainer>

          <AnswerContainer>
            <LineArea>답변</LineArea>
            {currentData.comments?.map((el, index: number) => (
              <EachAnswer key={index}>
                <LikesPart>
                  <span onClick={() => handleAnswerIncreaseLikes(el)}> </span>
                  <LikesNum> {el.like}</LikesNum>
                  <Likes onClick={() => handleAnswerLike(el)}>좋아요</Likes>
                  <span onClick={() => handleAnswerDecreaseLikes(el)}></span>
                </LikesPart>
                <AnswerBox>
                  <Body>{el.content}</Body>
                  <NameDate>
                    <UserName>답변자 이름</UserName>
                    <Date>{el.createdAt}</Date>
                  </NameDate>
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
  margin: 8rem 0 2rem 0;
`;

const Question = styled.div`
  grid-area: 1/2/3/6;
  display: flex;
  padding-bottom: 4rem;
  align-items: center;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.09) 10px 10px 20px;
`;

const Q = styled.span`
  font-size: 3rem;
  color: #005ce7;
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
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.09) 10px 10px 20px;
  padding-bottom: 2rem;
  margin-bottom: 3rem;
`;

const AnswerBox = styled.div`
  margin: 2rem 0 1rem 0;
  width: 80%;
`;

const LineArea = styled.div`
  font-size: 2rem;
  color: #686868;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 2rem;
  padding: 1rem;
`;
const Date = styled.span`
  padding: 1rem;
`;
const UserName = styled.span`
  padding: 1rem;
`;

const NameDate = styled.div`
  margin: 2rem 0 2rem 0;
  color: #686868;
  text-align: right;
`;
const Body = styled.div`
  font-size: 1rem;
  margin: 2rem 0 2rem 0;
  line-height: 1.8rem;
`;
const LikesPart = styled.span`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  margin: 0 2rem 0 0;
`;

const LikesNum = styled.div`
  text-align: center;
  color: #686868;
  font-weight: 500;
`;

const Likes = styled.span`
  text-align: center;
  color: #686868;
  font-weight: 500;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    color: #1658d8;
    font-weight: bold;
  }
`;

const Tags = styled.span`
  font-size: 0.8rem;
  border-radius: 1.5rem;
  border: none;
  padding: 0.5rem;
  margin: 0.5rem;
  color: #1658d8;
  background-color: #f5f5f5;
`;

const AnswerBtn = styled.button`
  border: none;
  font-size: 0.8rem;
  border-radius: 0.8rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  color: white;
  background-color: #ef5350;
  float: right;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 10px 10px 20px;

  }
`;
