import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";
import { answerPageData } from "../Redux/AnswerPageData";
import QContentFakeData from "../QContentFakeData";
import useQcontentData from "../Hooks/useQcontentData";
import axios from "axios";

type DataType = {
  question: {
    tags: string[];
    commentCount: number;
    like: number;
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

function QcontentPage() {
  const { QcontentState, onCurrentQData, onQuestionLike, onAnswerLike } = useQcontentData();
  const { currentData } = QcontentState;
  const history = useHistory();
  const dispatch = useDispatch();
  const [isMainPage, setisMainPage] = useState<boolean>(true);
  const [isAnswerLike, setIsAnswerLike] = useState<boolean>(true);
  const location = useLocation<PageNameType>();
  const [isLike, setIsLike] = useState<boolean>(true);

  const handleQuestionIncreaseLikes = (updateData: DataType) => {
    updateData.question.like = updateData.question.like + 1;

    console.log(updateData);

    onQuestionLike(updateData);

    axios.post("http://localhost:80/question/like", { questionId: updateData.question._id, like: updateData.question.like }).then((res) => console.log(res));
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

    // onAnswerLike(updateData,true);

    setIsAnswerLike(() => !isAnswerLike);
    // axios.post('http://localhost:80') // 바껴진 숫자를 업데이트 하는 요청
  };

  const handleAnswerIncreaseLikes = (updateData: AnswerType) => {
    console.log("답변 좋아요 증가");

    setTimeout(() => {
      console.log("실행");
    }, 3000);

    updateData.like = updateData.like + 1;

    // onAnswerLike(updateData);

    setIsAnswerLike(() => !isAnswerLike);
    // axios.post('http://localhost:80') // 바껴진 숫자를 업데이트 하는 요청
  };

  const handleQuestionLike = (updateData: DataType) => {
    if (isLike === true) {
      updateData.question.like = updateData.question.like + 1;
      updateData.question.isLike = updateData.question.isLike = false;
      console.log(updateData);

      onQuestionLike(updateData);
    } else {
      updateData.question.like = updateData.question.like - 1;
      updateData.question.isLike = updateData.question.isLike = true;
      console.log(updateData);

      onQuestionLike(updateData);
    }

    setIsLike(() => !isLike);
  };

  const handleAnswerLike = (updateData: AnswerType, index: number) => {
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
  };

  const handleAnswerBtn = () => {
    dispatch(answerPageData(currentData?.question));
    history.push({
      pathname: "/AnswerPage",
      state: { pageName: "this page is from QcontentPage" },
    });
  };

  // useEffect(() => {
  //   if(currentData) {
  //     console.log(isLike.length)
  //     if(isLike.length === 1) {
  //       return
  //     } else {
  //       for(let i = 0; i < currentData?.comments.length; i++) {
  //         console.log('state안에 답변의 갯수만큼 0을 넣어줌')
  //         const newIsLike = [...isLike, 0]
  //         setIsLike(newIsLike)
  //         console.log(isLike)
  //       }
  //     }
  //   } else {
  //     console.log('currentData 없음')
  //   }
  // },[test])

  useEffect(() => {
    let questionID: string = "";
    if (location.state === undefined) {
      // console.log("null");
    } else if (location.state.pageName === "MyPage") {
      questionID = location.state.questionId;
      setisMainPage(false);
      // console.log(location.state.pageName);
    } else if (location.state.pageName === "HelpdeskPage") {
      questionID = location.state.questionId;
    } else if (location.state.pageName === "Searchpage") {
      questionID = location.state.questionId;
    }
    // axios.get(`http://localhost:80/question/${questionID}`).then((res) => {
    //   onCurrentQData(res.data);
    dispatch(onCurrentQData(QContentFakeData));

    // });
    console.log("useEffect 실행후 Search Page 에서 아이디 가져옴 ===>> ", questionID);
  }, []);

  return (
    <div>
      {currentData !== null && currentData !== undefined ? (
        <Container>
          <QuestionContainer>
            {/* <LineArea>질문</LineArea> */}
            <Question>
              <LikesPart onClick={() => handleQuestionLike(currentData)}>
                <span onClick={() => handleQuestionIncreaseLikes(currentData)}></span>

                {currentData.question.isLike === true ? <FontAwesomeIcon icon={["far", "heart"]} color="#686868" size="lg" /> : <FontAwesomeIcon icon={["fas", "heart"]} color="#ef5350" size="lg" />}
                <LikesNum> {currentData.question.like}</LikesNum>

                {/* <Likes onClick={() => handleQuestionLike(currentData)}>좋아요</Likes> */}
                <span onClick={() => handleQuestionDecreaseLikes(currentData)}></span>
              </LikesPart>
              <QuestionBox>
                <Q>Q</Q>
                <Title> {currentData.question.title}</Title>
                <NameDate>
                  <UserName>{currentData.question.userId.nickName}</UserName>
                  <Date>{currentData.question.createdAt.substring(0, 10)}</Date>
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
            <LineArea> {currentData.question.commentCount} 개의 답변</LineArea>
            {currentData.comments?.map((el, index: number) => (
              <EachAnswer key={index}>
                <LikesPart onClick={() => handleAnswerLike(el, index)}>
                  <span onClick={() => handleAnswerIncreaseLikes(el)}> </span>
                  {el.isLike === true ? (
                    <HeartIcon>
                      <FontAwesomeIcon icon={["far", "heart"]} color="#686868" size="lg" />{" "}
                    </HeartIcon>
                  ) : (
                    <AnimatedHeart>
                      <FontAwesomeIcon icon={["fas", "heart"]} color="#ef5350" size="lg" />{" "}
                    </AnimatedHeart>
                  )}
                  <LikesNum> {el.like}</LikesNum>
                  <span onClick={() => handleAnswerDecreaseLikes(el)}></span>
                </LikesPart>
                <AnswerBox>
                  <AnswerTitle> {el.userId.nickName} 님의 답변</AnswerTitle>
                  <Body>{el.content}</Body>
                  <NameDate>
                    <Date>{el.createdAt.substring(0, 10)}</Date>
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

const heartAnimation = keyframes`
0%
{
  transform: scale( 0.2 );
}

0%
{
  transform: scale( 0.5 );
}

100%
{
  transform: scale( 1.5 );
}

`;

const HeartIcon = styled.span``;

const AnimatedHeart = styled(HeartIcon)`
  animation: ${heartAnimation} 1s infinite;
`;

const Container = styled.div`
  height: 100vh;
  width: 85vw;
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
  box-shadow: rgba(0, 0, 0, 0.03) 10px 10px 20px;
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
  box-shadow: rgba(0, 0, 0, 0.03) 10px 10px 20px;
  padding-bottom: 2rem;
  margin-bottom: 3rem;
`;

const AnswerBox = styled.div`
  margin: 2rem 0 1rem 0;
  width: 80%;
`;

const LineArea = styled.span`
  font-size: 1.3rem;
  color: #1658d8;
  font-weight: bold;
  margin: 0 0 5rem 2.6rem;
  padding-bottom: 0.8rem;
  border-bottom: 0.17rem solid #e0e0e0;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 2rem;
  padding: 1rem;
`;

const AnswerTitle = styled.div`
  padding-top: 2rem;
  font-weight: bold;
  font-size: 1rem;
  color: #686868;
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
  margin: 3rem 0 5rem 0;
  line-height: 1.8rem;
`;
const LikesPart = styled.span`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  margin: 0 1.5rem 0 0;
  cursor: pointer;
`;

const LikesNum = styled.span`
  text-align: center;
  color: #686868;
  font-weight: 500;
  margin-top 0.4rem;

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
  padding: 0.5rem 1.5rem;
  margin: 0.5rem;
  color: white;
  background-color: #ef5350;
  float: right;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 10px 10px 20px;
  }
`;
