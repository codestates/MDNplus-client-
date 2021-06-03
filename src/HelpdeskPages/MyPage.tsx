import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allDataAction } from "../Redux/MyPageData";
import { RootState } from "../Redux";
import { useHistory, useLocation } from "react-router-dom";
import { currentQData } from "../Redux/QcontentData";
import styled from "styled-components";
import FakeData2 from "../FakeData2";
import myPageFakeData from "../mypageFakeData";
import userIcon from "../img/userIcon_gray.png";

import axios from "axios";
import useBooleanData from "../Hooks/useBooleanData";

// axios.defaults.withCredentials = true;

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
  const [questionColor, setQuestionColor] = useState("#005ce7");
  const [answerColor, setAnswerColor] = useState(" #a7a3a3");
  const { onContentPageMode } = useBooleanData();

  useEffect(() => {
    // 유저가 마이페이지로 이동했을 때, 유저 정보, 나의 질문, 나의 답변 데이터들을 받아오는 요청
    axios.get("http://localhost:8080/helpdesk/me", { withCredentials: true }).then((res) => {
      console.log(res);
      dispatch(allDataAction(res.data));
    });

    console.log(history);
  }, []);

  //나의 질문에는 질문자가 질문한 제목,내용,날짜
  //나의 답변에는 답변된 질문의 제목과, 답변내용
  const handleMyQuestions = (el: QuestionType) => {
    //myPage 에서 클릭한 question Id 값으로 요청보내면됨 Q컨텐트페이지에서 데이터 받게됨.
    // dispatch(currentQData(el));

    // 마이페이지에서 질문을 클릭했을 때, 해당하는 질문의 데이터들을 받아오는 요청(질문의 ID가 params로 필요)
    // axios.get('http://localhost:80')
    console.log("QcontentPage로 이동할거");

    history.push({
      pathname: "/QcontentPage",
      state: { pageName: "/MyPage", questionId: el._id },
    });
  };

  const handleMyAnswers = (el: AnswerType) => {
    history.push({
      pathname: "/QcontentPage",
      state: { pageName: "/MyPage", questionId: el.questionId._id },
    });
  };

  const handleMDNClicked = () => {
    setQuestionColor("#005ce7");
    setAnswerColor("#a7a3a3");
    setIsQuestion(true);
  };

  const handleHelpDeckClicked = () => {
    setAnswerColor("#005ce7");
    setQuestionColor("#a7a3a3");
    setIsQuestion(false);
  };

  useEffect(() => {
    console.log(history);
    if (history.location.pathname === "/MyPage") {
      onContentPageMode(false);
    }
  }, []);

  return mdnAllData === null || mdnAllData === undefined ? (
    <EmptyComment> 비어있습니다</EmptyComment>
  ) : (
    <>
      <Container>
        <UserInfoContainer>
          {!mdnAllData.user.image ? <UserInfoImage src={userIcon} /> : <UserInfoImage src={mdnAllData.user.image} />}
          <UserInfoName>{mdnAllData.user.nickName}</UserInfoName>
        </UserInfoContainer>
        <Stage>
          <LeftContainer>
            <QuestionBtn style={{ color: questionColor }} onClick={handleMDNClicked}>
              나의 질문
            </QuestionBtn>
            <AnswerBtn style={{ color: answerColor }} onClick={handleHelpDeckClicked}>
              나의 답변
            </AnswerBtn>
          </LeftContainer>
          <RightContainer>
            {isQuestion ? (
              mdnAllData.questions.length === 0 ? (
                <EmptyComment>비어있습니다</EmptyComment>
              ) : (
                <QuestionContainer>
                  {mdnAllData.questions.map((el) => (
                    <QuestionBox key={el._id} onClick={() => handleMyQuestions(el)}>
                      <QuestionTitle>{el.title}</QuestionTitle>
                      <QuestionBody>{el.pureBody}</QuestionBody>
                      {/* <div>
                      {el.tags.map((el, index: number) => (
                        <QuestionTag key={index.toString()}>{el}</QuestionTag>
                      ))}
                    </div> */}
                      <QuestionLastLine>
                        <QuestionDate>{`${el.createdAt.substring(0, 4)}년 ${el.createdAt.substring(5, 7)}월 ${el.createdAt.substring(8, 10)}일`}</QuestionDate>
                        <QuestionAnswersNum>답변수 {el.commentCount}</QuestionAnswersNum>
                        <QuestionLikes> 좋아요 {el.like}</QuestionLikes>
                      </QuestionLastLine>
                    </QuestionBox>
                  ))}
                </QuestionContainer>
              )
            ) : mdnAllData.comments.length === 0 ? (
              <EmptyComment>비어있음</EmptyComment>
            ) : (
              <QuestionContainer>
                {mdnAllData?.comments.map((el) => (
                  <QuestionBox key={el._id} onClick={() => handleMyAnswers(el)}>
                    <QuestionTitle>{el.questionId.title}</QuestionTitle>
                    <QuestionBody>{el.content}</QuestionBody>
                    {/* <QuestionLastLine>
                      <QuestionLikes> 좋아요: &nbsp;{el.like}</QuestionLikes>
                      <QuestionDate>{el.createdAt.substring(0, 10)}</QuestionDate>
                    </QuestionLastLine> */}
                    <QuestionLastLine>
                      <QuestionDate>{`${el.createdAt.substring(0, 4)}년 ${el.createdAt.substring(5, 7)}월 ${el.createdAt.substring(8, 10)}일`}</QuestionDate>
                      <QuestionLikes> 좋아요 {el.like}</QuestionLikes>
                    </QuestionLastLine>
                  </QuestionBox>
                ))}
              </QuestionContainer>
            )}
          </RightContainer>
        </Stage>
      </Container>
    </>
  );
}

export default MyPage;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  // border: 1px solid black;
  margin-top: 5rem;
  width: 75%;
  padding: 4rem 0 4rem 0;
  border-bottom: 1px solid #bdbdbd;
`;

const UserInfoImage = styled.img`
  width: 7em;
  height: 7em;
  border-radius: 50%;
  object-fit: cover;
  @media (max-width: 375px) {
    width: 5em;
    height: 5em;
  }
`;

const UserInfoName = styled.div`
  font-weight: bold;
  font-size: 2.2rem;
  margin-left: 3.5rem;
  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Stage = styled.div`
  width: 80%;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  padding: 3rem;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  height: 100%;
`;

const QuestionBtn = styled.div`
  margin: 2rem 0rem 1rem 0rem;
  font-size: 1.5rem;
  font-weight: bold;
  @media (max-width: 375px) {
    font-size: 1rem;
  }
`;

const AnswerBtn = styled.div`
  margin: 1rem 0rem 1rem 0rem;
  font-size: 1.5rem;
  font-weight: bold;
  @media (max-width: 375px) {
    font-size: 1rem;
  }
`;

const RightContainer = styled.div``;

const QuestionContainer = styled.div``;

const QuestionBox = styled.div`
  border-bottom: 1px solid #e0e0e0;
  padding: 0 1rem 1rem 1rem;
  cursor: pointer;
  margin: 2rem 0 2rem 0;
`;

const AnswerContainer = styled.div``;

const QuestionTitle = styled.span`
  font-weight: 600;
  font-size: 1.3rem;
  @media (max-width: 375px) {
    font-size: 0.8rem;
  }
`;

const QuestionBody = styled.div`
  line-height: 1.8rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  @media (max-width: 375px) {
    font-size: 0.8rem;
  }
`;

const QuestionLastLine = styled.div`
  color: #686868;
  margin-top: 1rem;
  font-size: 0.8rem;
`;

const QuestionDate = styled.span`
  @media (max-width: 375px) {
    font-size: 0.5rem;
  }
`;

const QuestionAnswersNum = styled.span`
  margin-left: 0.8rem;
`;

const QuestionLikes = styled.span`
  margin-left: 0.8rem;
  @media (max-width: 375px) {
    font-size: 0.5rem;
  }
`;

const EmptyComment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;
