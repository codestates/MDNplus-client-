import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allDataAction } from "../Redux/MyPageData";
import { RootState } from "../Redux";
import { useHistory, useLocation } from "react-router-dom";
import { currentQData } from "../Redux/QcontentData";
import styled from "styled-components";
import FakeData2 from "../FakeData2";
import myPageFakeData from "../mypageFakeData";

import axios from "axios";

type QuestionType = {
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

type AnswerType = {
  like: number;
  _id: string;
  questionId: {
    _id: string;
    title: string;
  };
  content: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

function MyPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const allState = useSelector((state: RootState) => state.MyPageReducer);
  const { mdnAllData } = allState;
  const [isQuestion, setIsQuestion] = useState(true);

  useEffect(() => {
    dispatch(allDataAction(myPageFakeData));
  }, []);

  //나의 질문에는 질문자가 질문한 제목,내용,날짜
  //나의 답변에는 답변된 질문의 제목과, 답변내용
  const handleMyQuestions = (el: QuestionType) => {
    //myPage 에서 클릭한 question Id 값으로 요청보내면됨 Q컨텐트페이지에서 데이터 받게됨.
    // dispatch(currentQData(el));

    history.push({
      pathname: "/Qcontentpage",
      state: { pageName: "this is Question State" },
    });
  };

  const handleMyAnswers = (el: AnswerType) => {
    //해당 답변을 클릭했을시 질문에 해당하는 ID를 요청보내주면됨
    // el.questionId;
    // const findData = questionData?.allData.filter((questionTitle) => questionTitle.title == answerTitle);
    // const findData = questionData?.allData.filter((el) => (el.answers.filter((questionTitle) => questionTitle.qTitle === answerTitle)));
    // const findData = mdnAllData?.filter((all) => all.title === el.qTitle);
    // console.log(findData);
    // if (findData !== undefined && findData !== null) {
    //   dispatch(currentQData(findData[0]));
    //   history.push({
    //     pathname: "/Qcontentpage",
    //     state: { pageName: "this is Answer State" },
    //   });
    // }
    // dispatch(currentQData(findData));
    // history.push({
    //   pathname: "/Qcontentpage",
    //   state: { pageName: "this is answer state" },
    // });
  };

  const handleMyPage = () => {
    setIsQuestion(() => !isQuestion);
  };

  return (
    <Container>
      <UserInfoContainer>
        <UserInfoImage> 유저 사진</UserInfoImage>
        <UserInfoName> 유저이름</UserInfoName>
      </UserInfoContainer>
      <LeftContainer>
        <QuestionList onClick={handleMyPage}>나의질문</QuestionList>
        <AnswerList onClick={handleMyPage}>나의답변</AnswerList>
      </LeftContainer>
      <RightContainer>
        {isQuestion ? (
          <QuestionContainer>
            {mdnAllData?.questions.map((el) => (
              <QuestionBox onClick={() => handleMyQuestions(el)}>
                <QuestionTitle>
                  <span>Q</span>
                  {el.title}
                </QuestionTitle>
                <QuestionBody>{el.body}</QuestionBody>

                <QuestionLastLine>
                  {el.tags.map((el) => (
                    <QuestionTag>{el}</QuestionTag>
                  ))}
                  <QuestionLikes> 좋아요: &nbsp; {el.like}</QuestionLikes>
                  <QuestionAnswersNum>답변수:&nbsp; {el.commentCount}</QuestionAnswersNum>
                  <QuestionDate>{el.createdAt}</QuestionDate>
                </QuestionLastLine>
                {/* <div>나의 질문에 대한 답변</div>
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
                  </div> */}
              </QuestionBox>
            ))}
          </QuestionContainer>
        ) : (
          <QuestionContainer>
            {mdnAllData?.comments.map((el) => (
              <QuestionBox onClick={() => handleMyAnswers(el)}>
                <QuestionTitle>
                  <span>Q</span>
                  {el.questionId.title}
                </QuestionTitle>
                <QuestionBody>{el.content}</QuestionBody>
                <QuestionLastLine>
                  <QuestionLikes>{el.like}</QuestionLikes>
                  <QuestionDate>{el.createdAt}</QuestionDate>
                </QuestionLastLine>
              </QuestionBox>
            ))}
          </QuestionContainer>
        )}
      </RightContainer>
    </Container>
  );
}

export default MyPage;

const Container = styled.div`
  height: 100vh;
  weidth: 100vw;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 300px auto;
`;

const QuestionList = styled.div`
  margin: 1rem;
  font-size: 1.5rem;
  &:hover {
    color: #005ce7;
  }
`;

const AnswerList = styled.div`
  margin: 1rem;
  font-size: 1.5rem;

  &:hover {
    color: #005ce7;
  }
`;

const QuestionContainer = styled.div``;

const QuestionBox = styled.div`
  margin: 1rem;
  padding: 2rem;
  cursor: pointer;
  border-bottom: 2px solid #a7a3a3;
`;

const AnswerContainer = styled.div``;

const UserInfoContainer = styled.div`
  grid-area: 1/2/2/6;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #a7a3a3;
`;

const UserInfoImage = styled.div`
  margin: 8rem;
`;

const UserInfoName = styled.div`
  margin: 3rem;
`;

const LeftContainer = styled.div`
  grid-area: 2/2/3/3;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  padding: 2rem;
`;

const RightContainer = styled.div`
  grid-area: 2/3/3/6;
  flex-wrap: wrap;
`;

const QuestionTitle = styled.div`
  font-size: 1.5rem;
  padding 1rem;
`;

const QuestionBody = styled.div`
padding 0.7rem;`;

const QuestionAnswersNum = styled.span`
padding 0.5rem;`;

const QuestionDate = styled.span`
padding 0.5rem;
float:right;
`;

const QuestionLikes = styled.span`
padding 0.5rem;`;

const QuestionTag = styled.span`
padding 0.5rem;
border: 1px solid gray;
margin:0.1rem;

`;

const QuestionLastLine = styled.div`
  padding: 0.7rem;
`;