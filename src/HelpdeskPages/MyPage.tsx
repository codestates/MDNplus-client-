import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { myPageAction, questionAction, answerAction } from "../Redux/MyPageData";
import { RootState } from "../Redux";
import { useHistory, useLocation } from "react-router-dom";
import { currentQData } from "../Redux/QcontentData";
import styled from "styled-components";
import FakeData2 from "../FakeData2";

import axios from "axios";

type QuestionType = {
  id: number;
  userId: number;
  userName: string;
  title: string;
  body: string;
  answers: {
    id: number;
    userId: number;
    userName: string;
    qTitle: string;
    body: string;
    likes: number;
    createdAt: string;
  }[];
  likes: number;
  tags: string[];
  createdAt: string;
};

type AnswerType = {
  id: number;
  userId: number;
  userName: string;
  qTitle: string;
  body: string;
  likes: number;
  createdAt: string;
};

function MyPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const allState = useSelector((state: RootState) => state.MyPageReducer);
  const { myPageData, questionData, answerData } = allState;

  const [isQuestion, setIsQuestion] = useState(true);

  useEffect(() => {
    dispatch(questionAction(FakeData2.myData));
    dispatch(answerAction(FakeData2.answers));
  }, []);

  //나의 질문에는 질문자가 질문한 제목,내용,날짜
  //나의 답변에는 답변된 질문의 제목과, 답변내용
  const handleMyQuestions = (e: QuestionType) => {
    dispatch(currentQData(e));

    history.push({
      pathname: "/Qcontentpage",
      state: { pageName: "this is Question State" },
    });
  };

  const handleMyAnswers = (el: AnswerType) => {
    const answerTitle = el.qTitle;

    const findData = questionData?.allData.filter((questionTitle) => questionTitle.title === answerTitle);

    console.log(findData);
    if (findData !== undefined && findData !== null) {
      dispatch(currentQData(findData[0]));
      history.push({
        pathname: "/Qcontentpage",
        state: { pageName: "this is Answer State" },
      });
    }

    // dispatch(currentQData(e));
    // history.push({
    //   pathname: "/Qcontentpage",
    //   state: { pageName: "this is answer state" },
    // });
  };

  const handleMyPage = () => {
    setIsQuestion(() => !isQuestion);
  };

  return (
    <div>
      <div onClick={handleMyPage}>나의질문</div>
      <div onClick={handleMyPage}>나의답변</div>

      {isQuestion ? (
        <QuestionContainer>
          <div>나의질문</div>
          <div>
            {questionData?.allData.map((el) => (
              <QuestionBox onClick={() => handleMyQuestions(el)}>
                <div>{questionData?.userName}</div>

                <div>{el.title}</div>
                <div>{el.body}</div>

                <div>{el.tags}</div>

                <div>{el.likes}</div>
                <div>나의 질문에 대한 답변</div>
                <div>
                  {el.answers.map((el) => (
                    <div>
                      <div>{el.userName}</div>
                      <div>{el.qTitle}</div>
                      <div>{el.body}</div>
                      <div>{el.likes}</div>
                      <div>{el.createdAt}</div>
                    </div>
                  ))}
                </div>
              </QuestionBox>
            ))}
          </div>
        </QuestionContainer>
      ) : (
        <AnswerContainer>
          {answerData?.map((el) => (
            <div onClick={() => handleMyAnswers(el)}>
              <div>나의답변</div>
              <div>{el.userName}</div>
              <div>{el.qTitle}</div>
              <div>{el.body}</div>
              <div>{el.likes}</div>
              <div>{el.createdAt}</div>
            </div>
          ))}
        </AnswerContainer>
      )}
    </div>
  );
}

export default MyPage;

const QuestionContainer = styled.div`
  border: 2px solid #a7a3a3;
`;

const QuestionBox = styled.div`
  border: 2px solid #a7a3a3;
`;

const AnswerContainer = styled.div`
  border: 2px solid #a7a3a3;
`;
