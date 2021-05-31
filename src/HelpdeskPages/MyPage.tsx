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

  useEffect(() => {
    // 유저가 마이페이지로 이동했을 때, 유저 정보, 나의 질문, 나의 답변 데이터들을 받아오는 요청
    axios.get("http://localhost:8080/helpdesk/me", { withCredentials: true }).then((res) => {
      console.log(res);
      dispatch(allDataAction(res.data));
    });
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

  return mdnAllData === null || mdnAllData === undefined ? (
    <div> 비어있습니다!</div>
  ) : (
    <Container>
      <UserInfoContainer>
        {!mdnAllData.user.image ? <UserInfoImage src={userIcon} /> : <UserInfoImage src={mdnAllData.user.image} />}
        <UserInfoName>{mdnAllData.user.nickName}</UserInfoName>

        {/* userIcon */}
      </UserInfoContainer>
      <LeftContainer>
        <QuestionList style={{ color: questionColor }} onClick={handleMDNClicked}>
          나의질문
        </QuestionList>
        <AnswerList style={{ color: answerColor }} onClick={handleHelpDeckClicked}>
          나의답변
        </AnswerList>
      </LeftContainer>
      <RightContainer>
        {isQuestion ? (
          <QuestionContainer>
            {mdnAllData?.questions.map((el) => (
              <QuestionBox key={el._id} onClick={() => handleMyQuestions(el)}>
                <Q>Q</Q>
                <QuestionTitle>{el.title}</QuestionTitle>
                <QuestionBody>{el.pureBody}</QuestionBody>
                <div>
                  {el.tags.map((el, index: number) => (
                    <QuestionTag key={index.toString()}>{el}</QuestionTag>
                  ))}
                </div>
                <QuestionLastLine>
                  <QuestionLikes> 좋아요: &nbsp; {el.like}</QuestionLikes>
                  <QuestionAnswersNum>답변수:&nbsp; {el.commentCount}</QuestionAnswersNum>
                  <QuestionDate>{el.createdAt.substring(0, 10)}</QuestionDate>
                </QuestionLastLine>
              </QuestionBox>
            ))}
          </QuestionContainer>
        ) : (
          <QuestionContainer>
            {mdnAllData?.comments.map((el) => (
              <QuestionBox key={el._id} onClick={() => handleMyAnswers(el)}>
                <Q>Q</Q>
                <QuestionTitle>{el.questionId.title}</QuestionTitle>
                <QuestionBody>{el.content}</QuestionBody>
                <QuestionLastLine>
                  <QuestionLikes> 좋아요: &nbsp;{el.like}</QuestionLikes>
                  <QuestionDate>{el.createdAt.substring(0, 10)}</QuestionDate>
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
  margin-top: 1rem;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
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
    color: "#005ce7";
  }
`;

const QuestionContainer = styled.div``;

const QuestionBox = styled.div`
  border-radius: 1rem;
  border: none;
  padding: 0 1rem 1rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.03) 10px 10px 20px;
  background: white;
  cursor: pointer;
  margin: 2rem 0 2rem 0;
`;

const AnswerContainer = styled.div``;

const UserInfoContainer = styled.div`
  grid-area: 1/2/2/8;
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: 2px solid #a7a3a3;
`;

const UserInfoImage = styled.img`
  margin: 3rem;
  width: 10em;
  height: 10em;
  border-radius: 50%;
  object-fit: cover;
`;

const UserInfoName = styled.div`
  font-weight: bold;
  font-size: 2.2rem;
  color: #757575;
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
  grid-area: 2/3/3/8;
`;

const Q = styled.span`
  font-size: 3rem;
  color: #005ce7;
`;

const QuestionTitle = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  padding 1rem;
`;

const QuestionBody = styled.div`
padding 0.7rem;
margin: 1.5rem 0 2rem 2.7rem;
line-height: 1.8rem;
`;

const QuestionAnswersNum = styled.span`
padding 0.5rem;`;

const QuestionDate = styled.span`
padding 0.5rem;
margin-right:1rem;
`;

const QuestionLikes = styled.span`
padding 0.5rem;
margin-right:1rem;

`;

const QuestionTag = styled.span`
  font-size: 0.8rem;
  border-radius: 1.5rem;
  border: none;
  padding: 0.5rem;
  margin-left: 3.2rem;
  color: #1658d8;
  background-color: #f5f5f5;
`;

const QuestionLastLine = styled.div`
  text-align: right;
  margin: 1.2rem 0 3rem 0;
  color: #686868;
`;
