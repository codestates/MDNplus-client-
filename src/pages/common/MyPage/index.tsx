import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allDataAction } from "../../../modules/MyPageData";
import { RootState } from "../../../modules";
import { useHistory } from "react-router-dom";
import userIcon from "../../../img/userIcon_gray.png";
import axios from "axios";
import useBooleanData from "../../../hooks/useBooleanData";
import Loading from "../../../components/Loading";
import person from "../../../img/person.png";
import {
  Stage,
  AnswerBtn,
  Container,
  EmptyComment,
  EmptyMessage,
  Img,
  LeftContainer,
  QuestionAnswersNum,
  QuestionBody,
  QuestionBox,
  QuestionBtn,
  QuestionContainer,
  QuestionDate,
  QuestionLastLine,
  QuestionLikes,
  QuestionTitle,
  RightContainer,
  UserInfoContainer,
  UserInfoImage,
  UserInfoName,
} from "./MyPage.style";

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

  const handleMyQuestions = (el: QuestionType) => {
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
    axios.get("http://localhost:8080/helpdesk/me", { withCredentials: true }).then((res) => {
      dispatch(allDataAction(res.data));
    });

    if (history.location.pathname === "/MyPage") {
      onContentPageMode(false);
    }
  }, []);

  return mdnAllData === null || mdnAllData === undefined ? (
    <Loading />
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
                <EmptyComment>
                  <Img src={person}></Img>
                  <EmptyMessage>포스트가 없습니다</EmptyMessage>
                </EmptyComment>
              ) : (
                <QuestionContainer>
                  {mdnAllData.questions.map((el) => (
                    <QuestionBox key={el._id} onClick={() => handleMyQuestions(el)}>
                      <QuestionTitle>{el.title}</QuestionTitle>
                      <QuestionBody>{el.pureBody}</QuestionBody>
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
              <EmptyComment>
                <Img src={person}></Img>
                <EmptyMessage>포스트가 없습니다</EmptyMessage>
              </EmptyComment>
            ) : (
              <QuestionContainer>
                {mdnAllData?.comments.map((el) => (
                  <QuestionBox key={el._id} onClick={() => handleMyAnswers(el)}>
                    <QuestionTitle>{el.questionId.title}</QuestionTitle>
                    <QuestionBody>{el.content}</QuestionBody>
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
