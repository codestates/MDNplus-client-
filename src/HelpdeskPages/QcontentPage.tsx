import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";
import { answerPageData } from "../Redux/AnswerPageData";
import ReactMarkdown from "react-markdown";
import useBooleanData from "../Hooks/useBooleanData";
import useQcontentData from "../Hooks/useQcontentData";
import axios from "axios";
import userImg from "../img/userIcon_gray.png";

type DataType = {
  question: {
    tags: string[];
    commentCount: number;
    like: number;
    pureBody: string;
    _id: string;
    title: string;
    body: string;
    userId: {
      nickName: string;
      kakaoId: string;
      githubId: string;
      image: string;
      _id: string;
      __v: number;
    };
    createdAt: string;
    updatedAt: string;
    __v: number;
    isLike: boolean;
  };
  comments: {
    like: number;
    pureBody: string;
    _id: string;
    questionId: string;
    content: string;
    userId: {
      nickName: string;
      kakaoId: string;
      githubId: string;
      image: string;
      _id: string;
      __v: number;
    };
    createdAt: string;
    updatedAt: string;
    __v: number;
    isLike: boolean;
  }[];
};

type AnswerType = {
  like: number;
  _id: string;
  questionId: string;
  content: string;
  pureBody: string;
  userId: {
    nickName: string;
    kakaoId: string;
    githubId: string;
    image: string;
    _id: string;
    __v: number;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
  isLike: boolean;
};

type PageNameType = {
  pageName: string;
  questionId: string;
};

type LoginType = {
  isLogin: boolean;
  handleLoginModal: () => void;
};

function QcontentPage({ isLogin, handleLoginModal }: LoginType) {
  const { QcontentState, onCurrentQData, onQuestionLike, onAnswerLike } = useQcontentData();
  const { onSetWriteMode, onContentPageMode } = useBooleanData();
  const { currentData } = QcontentState;
  const history = useHistory();
  const dispatch = useDispatch();
  const [isMainPage, setisMainPage] = useState<boolean>(false);
  const location = useLocation<PageNameType>();

  // 질문에 대한 좋아요 처리하는 코드
  const handleQuestionLike = (updateData: DataType) => {
    if (updateData.question.isLike === true) {
      updateData.question.like = updateData.question.like + 1;
      updateData.question.isLike = false;

      onQuestionLike(updateData);
    } else {
      updateData.question.like = updateData.question.like - 1;
      updateData.question.isLike = true;
      onQuestionLike(updateData);
    }

    axios
      .post("http://localhost:8080/question/like", { questionId: updateData.question._id, like: updateData.question.like, isLike: updateData.question.isLike }, { withCredentials: true })
      .then((res) => console.log("응답받은 질문에대한 좋아요 =", res));
  };

  const handleAnswerLike = (updateData: AnswerType, index: number) => {
    console.log("대답에대한 좋아요 = ", updateData);

    if (updateData.isLike === true) {
      console.log("clicked");
      updateData.like = updateData.like + 1;
      updateData.isLike = false;
      onAnswerLike(updateData);
    } else {
      updateData.like = updateData.like - 1;
      updateData.isLike = true;
      onAnswerLike(updateData);
      // onAnswerLike(updateData);
    }
    axios
      .post("http://localhost:8080/question/like", { questionId: updateData.questionId, like: updateData.like, isLike: updateData.isLike }, { withCredentials: true })
      .then((res) => console.log("응답받은 대답에대한 좋아요 =", res));

    // axios.post("http://localhost:80/question/like", { questionId: updateData.questionId, like: updateData.question.like }, {withCredentials:true}).then((res) => console.log(res));
  };

  //답변하기 버튼 눌렀을 때, 실행되는 코드
  const handleAnswerBtn = () => {
    //비로그인 유저라면 로그인하게 유도하는 코드
    if (!isLogin) {
      handleLoginModal();
      return;
    }
    dispatch(answerPageData(currentData?.question));
    history.push({
      pathname: "/AnswerPage",
      state: { pageName: "this page is from QcontentPage" },
    });
  };

  useEffect(() => {
    //questionID 설정해주는 코드들
    onContentPageMode(true);
    let questionID: string = "";
    if (location.state === undefined) {
      // console.log("null");
    } else if (location.state.pageName === "/MyPage") {
      questionID = location.state.questionId;
      // console.log(location.state.pageName);
    } else if (location.state.pageName === "/HelpdeskPage") {
      setisMainPage(true);
      questionID = location.state.questionId;
    } else if (location.state.pageName === "/Searchpage") {
      questionID = location.state.questionId;
    }

    //바껴진 questionID를 이용하여 QcontentPage에 렌더링할 데이터를 가져오는 요청
    axios.get(`http://localhost:8080/question/${questionID}`).then((res) => {
      console.log("데이터 처음으로 랜더링함", res);
      onCurrentQData(res.data);
    });
  }, []);

  return (
    <div>
      {currentData !== null && currentData !== undefined ? (
        <Container>
          <QuestionContainer>
            <LikeBox_Q>
              {currentData.question.isLike === true ? (
                <FontAwesomeIcon onClick={() => handleQuestionLike(currentData)} icon={["far", "heart"]} color="#686868" size="lg" />
              ) : (
                <FontAwesomeIcon onClick={() => handleQuestionLike(currentData)} icon={["fas", "heart"]} color="#ef5350" size="lg" />
              )}
              <LikeNum_Q> {currentData.question.like}</LikeNum_Q>
            </LikeBox_Q>
            <QuestionBox>
              <QuestionTitleBox>
                <TitleIcon>질문</TitleIcon>
                <QuestionTitle> {currentData.question.title}</QuestionTitle>
              </QuestionTitleBox>
              <QuestionBody>
                <ReactMarkdown children={currentData.question.body} />
              </QuestionBody>
              <TagBox>
                {currentData.question.tags?.map((el, index: number) => (
                  <Tag key={index}>{el}</Tag>
                ))}
              </TagBox>
              <InfoBox_Q>
                {currentData.question.userId.image ? <UserImg_Q src={currentData.question.userId.image}></UserImg_Q> : <UserImg_Q src={userImg}></UserImg_Q>}
                <UserName_Q>{currentData.question.userId.nickName}</UserName_Q>
                <Date_Q>{`${currentData.question.createdAt.substring(0, 4)}.${currentData.question.createdAt.substring(5, 7)}.${currentData.question.createdAt.substring(8, 10)}`}</Date_Q>
                {isMainPage ? <AnswerBtn onClick={handleAnswerBtn}>답변하기</AnswerBtn> : null}
              </InfoBox_Q>
            </QuestionBox>
          </QuestionContainer>
          <AnswerContainer>
            {/* <AnswersNumBox> */}
            {/* <AnswersNum color="#3949AB">답변 </AnswersNum>
            <AnswersNum>{currentData.question.commentCount}개</AnswersNum> */}
            {/* </AnswersNumBox> */}
            {currentData.comments?.map((el, index: number) => (
              <AnswerBox key={index}>
                <LikeBox_A>
                  {el.isLike === true ? (
                    <HeartIcon>
                      <FontAwesomeIcon onClick={() => handleAnswerLike(el, index)} icon={["far", "heart"]} color="#686868" size="lg" />{" "}
                    </HeartIcon>
                  ) : (
                    <HeartIcon>
                      <FontAwesomeIcon icon={["fas", "heart"]} color="#ef5350" size="lg" />{" "}
                    </HeartIcon>
                  )}
                  <LikeNum_A> {el.like}</LikeNum_A>
                </LikeBox_A>
                <Answer>
                  <AnswerTitleBox>
                    {el.userId.image ? <AnswerUserImg src={el.userId.image}></AnswerUserImg> : <AnswerUserImg src={userImg}></AnswerUserImg>}
                    <Date_A>{`${el.createdAt.substring(0, 4)}.${el.createdAt.substring(5, 7)}.${el.createdAt.substring(8, 10)}`}</Date_A>
                    {el.userId.nickName !== null ? <AnswerTitle> {el.userId.nickName} 님 답변</AnswerTitle> : <div>비공개</div>}
                  </AnswerTitleBox>
                  <AnswerBody>
                    <ReactMarkdown children={el.content}></ReactMarkdown>
                  </AnswerBody>
                </Answer>
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

const HeartIcon = styled.span``;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // padding-left: 2rem;
`;

const LikeBox_Q = styled.div`
  display: flex;
  justity-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const LikeNum_Q = styled.span``;

const QuestionBox = styled.div`
  // border: 1px solid black;
  width: 50%;
  padding: 3rem;
`;

const QuestionTitleBox = styled.div`
  padding-bottom: 1rem;
`;

const TitleIcon = styled.span`
  border: none;
  padding: 0.7rem;
  background: #90a4ae;
  color: white;
  font-weight: bold;
  margin-right: 0.5rem;
`;

const QuestionTitle = styled.span`
  font-size: 1.2rem;
`;

const QuestionBody = styled.div``;

const TagBox = styled.div`
  height: 3rem;
`;

const Tag = styled.span`
  color: #78909c;
  margin-right: 0.5rem;
  cursor: pointer;
`;

const InfoBox_Q = styled.div`
  display: flex;
  align-items: center;
`;

const UserImg_Q = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.4rem;
  border: none;
`;

const UserName_Q = styled.span`
  margin-right: 0.4rem;
  color: black;
  font-size: 0.9rem;
`;

const Date_Q = styled.span`
  color: #757575;
  font-size: 0.8rem;
  padding-bottom: 0.1rem;
`;
const AnswerBtn = styled.button`
  margin-left: auto;
  padding: 0.7rem 1rem 0.7rem 1rem;
  border-radius: 1rem;
  border: none;
`;

//-----------------------------------답변 섹션-------------------------------------//

// const AnswersNumBox = styled.div`
// margin-left: 3rem;
// border: 1px solid black;
// width: 80%;
// `;

// const AnswersNum = styled.span`
//   font-size: 1.5rem;
//   font-weight: bold;

//   color: ${props => props.color || 'black'}
// `;

const AnswerContainer = styled.div`
  // padding: 3rem 5rem 5rem 5rem;
  background: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 5rem;
`;

const AnswerBox = styled.div`
  background: white;
  padding: 5rem 1rem 5rem 1rem;
  width: 60%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

const LikeBox_A = styled.div`
  // border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 2.5rem;
  margin: 3rem 0.5rem 0rem -2rem;
`;

const LikeNum_A = styled.div``;

const Answer = styled.div`
  margin-top: -3rem;
  position: relative;
  width: 75%;
`;

const AnswerTitleBox = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 1rem;
`;

const AnswerUserImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
`;

const AnswerTitle = styled.span`
  font-weight: bold;
`;

const AnswerBody = styled.div``;

const Date_A = styled.div`
  color: #757575;
  position: absolute;
  bottom: -3rem;
  right: 0rem;
`;

// const handleQuestionIncreaseLikes = (updateData: DataType) => {
//   updateData.question.like = updateData.question.like + 1;

//   console.log(updateData);

//   onQuestionLike(updateData);

//   axios.post("http://localhost:80/question/like", { questionId: updateData.question._id, like: updateData.question.like }).then((res) => console.log(res));
// };

// const handleQuestionDecreaseLikes = (updateData: DataType) => {
//   updateData.question.like = updateData.question.like - 1;

//   console.log(updateData);

//   onQuestionLike(updateData);

//   setIsLike(() => !isLike);
//   // axios.post('http://localhost:80') // 바껴진 숫자를 업데이트 하는 요청
// };

// const handleAnswerDecreaseLikes = (updateData: AnswerType) => {
//   console.log("답변 좋아요 감소");

//   if (updateData.like <= 0) {
//     console.log("싫어요ㅠㅠ 맘이아픔니다");
//     return;
//   }
//   updateData.like = updateData.like - 1;

//   // onAnswerLike(updateData,true);

//   setIsAnswerLike(() => !isAnswerLike);
//   // axios.post('http://localhost:80') // 바껴진 숫자를 업데이트 하는 요청
// };

// const handleAnswerIncreaseLikes = (updateData: AnswerType) => {
//   console.log("답변 좋아요 증가");

//   setTimeout(() => {
//     console.log("실행");
//   }, 3000);

//   updateData.like = updateData.like + 1;

//   // onAnswerLike(updateData);

//   setIsAnswerLike(() => !isAnswerLike);
//   // axios.post('http://localhost:80') // 바껴진 숫자를 업데이트 하는 요청
// };

//   onCurrentQData(res.data);
// dispatch(onCurrentQData(QContentFakeData));

// window.scrollTo(0, 0); // 스크롤 맨위로 이동시키는 코드
// console.log(history)
// if(history.location.pathname === '/ContentPage') {
//   onSetWriteMode(false)
// }

// console.log(location.state.questionId);

// console.log("쿼스천 함수 실행됨");

// });
