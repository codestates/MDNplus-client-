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

axios.defaults.withCredentials = true;

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
  const [questionColor, setQuestionColor] = useState("blue");
  const [answerColor, setAnswerColor] = useState("black");

  useEffect(() => {
    // 유저가 마이페이지로 이동했을 때, 유저 정보, 나의 질문, 나의 답변 데이터들을 받아오는 요청
    axios.get("http://localhost:80/helpdesk/me").then((res) => {
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

    history.push({
      pathname: "/Qcontentpage",
      state: { pageName: "this is Question State" },
    });
  };

  const handleMyAnswers = (el: AnswerType) => {
    //해당 답변을 클릭했을시 질문에 해당하는 ID를 요청보내주면됨
    // axios.get('http://localhost:80/') //내가 답변한 질문을 클릭했을 시, 해당하는 질문의 데이터들을 받아오는 요청 (해당 질문 ID 필요)
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

  const HandleMDNClicked = () => {
    setQuestionColor("blue");
    setAnswerColor("black");
    setIsQuestion(true);
  };

  const HandleHelpDeckClicked = () => {
    setAnswerColor("blue");
    setQuestionColor("black");
    setIsQuestion(false);
  };

  console.log("change");

  return (
    <Container>
      <UserInfoContainer>
        {!mdnAllData ? (
          <div>
            <UserInfoImage> 유저 사진</UserInfoImage>
            <UserInfoName> 유저 이름</UserInfoName>
          </div>
        ) : (
          <div>
            <UserInfoImage>{mdnAllData.user.image}</UserInfoImage>
            <UserInfoName>{mdnAllData.user.nickName}</UserInfoName>
          </div>
        )}
      </UserInfoContainer>
      <LeftContainer>
        <QuestionList style={{ color: questionColor }} onClick={HandleMDNClicked}>
          나의질문
        </QuestionList>
        <AnswerList style={{ color: answerColor }} onClick={HandleHelpDeckClicked}>
          나의답변
        </AnswerList>
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
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 300px 1000px;
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
