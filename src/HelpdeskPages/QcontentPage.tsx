import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { answerPageData } from "../Redux/AnswerPageData";
import ReactMarkdown from "react-markdown";
import useBooleanData from "../Hooks/useBooleanData";
import useQcontentData from "../Hooks/useQcontentData";
import axios from "axios";
import userImg from "../img/userIcon_gray.png";
import Loading from "../styled-components/Loading";

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
  const { onContentPageMode } = useBooleanData();
  const { currentData } = QcontentState;
  const history = useHistory();
  const dispatch = useDispatch();
  const [isMainPage, setisMainPage] = useState<boolean>(false);
  const location = useLocation<PageNameType>();

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

    axios.post(
      "http://localhost:8080/question/like",
      {
        questionId: updateData.question._id,
        like: updateData.question.like,
        isLike: updateData.question.isLike,
      },
      { withCredentials: true }
    );
  };

  const handleAnswerLike = (updateData: AnswerType, index: number) => {
    if (updateData.isLike === true) {
      updateData.like = updateData.like + 1;
      updateData.isLike = false;

      onAnswerLike(updateData);
    } else {
      updateData.like = updateData.like - 1;
      updateData.isLike = true;
      onAnswerLike(updateData);
    }

    axios.post(
      "http://localhost:8080/question/like",
      {
        questionId: updateData.questionId,
        like: updateData.like,
        isLike: updateData.isLike,
      },
      { withCredentials: true }
    );
  };

  const handleAnswerBtn = () => {
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

  const handleSearchTag = (tagName: string) => {
    history.push({
      pathname: "/SearchPage",
      state: { tagName },
    });
  };

  useEffect(() => {
    onContentPageMode(true);
    let questionID: string = "";
    if (location.state === undefined) {
    } else if (location.state.pageName === "/MyPage") {
      questionID = location.state.questionId;
    } else if (location.state.pageName === "/HelpdeskPage") {
      setisMainPage(true);
      questionID = location.state.questionId;
    } else if (location.state.pageName === "/Searchpage") {
      questionID = location.state.questionId;
    }

    axios.get(`http://localhost:8080/question/${questionID}`).then((res) => {
      onCurrentQData(res.data);
    });
  }, []);

  return (
    <>
      {currentData !== null && currentData !== undefined ? (
        <Container>
          <BackBtn onClick={() => window.history.back()}>{"< 돌아가기"}</BackBtn>
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
                  <Tag key={index} onClick={() => handleSearchTag(el)}>
                    {el}
                  </Tag>
                ))}
              </TagBox>
              <InfoBox_Q>
                {currentData.question.userId.image ? <UserImg_Q src={currentData.question.userId.image} /> : <UserImg_Q src={userImg} />}
                <UserName_Q>{currentData.question.userId.nickName}</UserName_Q>
                <Date_Q>{`${currentData.question.createdAt.substring(0, 4)}년 ${currentData.question.createdAt.substring(5, 7)}월 ${currentData.question.createdAt.substring(8, 10)}일`}</Date_Q>
                {isMainPage ? <AnswerBtn onClick={handleAnswerBtn}>답변하기</AnswerBtn> : null}
              </InfoBox_Q>
            </QuestionBox>
          </QuestionContainer>
          {currentData.comments.length !== 0 ? (
            <AnswerContainer>
              {currentData.comments?.map((el, index: number) => (
                <AnswerBox key={index}>
                  <LikeBox_A>
                    {el.isLike === true ? (
                      <HeartIcon>
                        <FontAwesomeIcon onClick={() => handleAnswerLike(el, index)} icon={["far", "heart"]} color="#686868" size="lg" />
                      </HeartIcon>
                    ) : (
                      <HeartIcon>
                        <FontAwesomeIcon onClick={() => handleAnswerLike(el, index)} icon={["fas", "heart"]} color="#ef5350" size="lg" />{" "}
                      </HeartIcon>
                    )}
                    <LikeNum_A> {el.like}</LikeNum_A>
                  </LikeBox_A>
                  <Answer>
                    <AnswerTitleBox>
                      {el.userId.image !== "" ? <AnswerUserImg src={el.userId.image}></AnswerUserImg> : <AnswerUserImg src={userImg}></AnswerUserImg>}
                      <Date_A>{`${el.createdAt.substring(0, 4)}년 ${el.createdAt.substring(5, 7)}월 ${el.createdAt.substring(8, 10)}일`}</Date_A>
                      {el.userId.nickName !== null ? <AnswerTitle> {el.userId.nickName} 님 답변</AnswerTitle> : null}
                    </AnswerTitleBox>
                    <AnswerBody>
                      <ReactMarkdown children={el.content}></ReactMarkdown>
                    </AnswerBody>
                  </Answer>
                </AnswerBox>
              ))}
            </AnswerContainer>
          ) : (
            <AnswerContainer>
              <AnswerBox>
                <Answer>
                  <AnswerTitleBox>
                    <AnswerTitle_empty>답변을 기다리는 중입니다.</AnswerTitle_empty>
                  </AnswerTitleBox>
                </Answer>
              </AnswerBox>
            </AnswerContainer>
          )}
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default QcontentPage;

const HeartIcon = styled.span``;

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  
  @media (max-width: 375px) {
    height: 100vh;
    width: 100vw;
  }
`;

const BackBtn = styled.span`
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 1.3rem;
  color: #78909c;
  cursor: pointer;
  @media (max-width: 375px) {
    font-size: 1rem;
    top: 0.2rem;
    bottom: 0.5rem;
    left: 0;
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LikeBox_Q = styled.div`
  display: flex;
  justity-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
  cursor: pointer;
  @media (max-width: 375px) {
    margin-left: 1rem;
  }
`;

const LikeNum_Q = styled.span``;

const QuestionBox = styled.div`
  width: 50%;
  padding: 3rem;
  @media (max-width: 375px) {
    margin-top: 0.5rem;
    font-size: 1rem;
    width: 100%;
  }
`;

const QuestionTitleBox = styled.div`
  padding-bottom: 1rem;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const TitleIcon = styled.span`
  border: none;
  padding: 0.7rem;
  background: #90a4ae;
  color: white;
  font-weight: bold;
  margin-right: 0.5rem;
  width: 4rem;
  text-align: center;


  @media (max-width: 375px) {
    font-size: 0.8rem;
    padding: 0.15rem;
  }
`;

const QuestionTitle = styled.span`
  font-size: 1.2rem;
  @media (max-width: 375px) {
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

const QuestionBody = styled.div`
  @media (max-width: 375px) {
    font-size: 0.8rem;
  }
`;

const TagBox = styled.div`
  height: 3rem;
`;

const Tag = styled.span`
  color: #78909c;
  margin-right: 0.5rem;
  cursor: pointer;

  &:hover {
    color: #2196f3;
  }
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
  @media (max-width: 375px) {
    font-size: 0.6rem;
  }
`;

const Date_Q = styled.span`
  color: #757575;
  font-size: 0.8rem;
  padding-bottom: 0.1rem;
  @media (max-width: 375px) {
    font-size: 0.6rem;
  }
`;
const AnswerBtn = styled.button`
  margin-left: auto;
  padding: 0.7rem 1rem 0.7rem 1rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  @media (max-width: 375px) {
    font-size: 0.6rem;
  }
`;

const AnswerContainer = styled.div`
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
  @media (max-width: 375px) {
    width: 100%;
  }
`;

const LikeBox_A = styled.div`
  // border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 2.5rem;
  margin: 3rem 0.5rem 0rem -2rem;
  cursor: pointer;
  @media (max-width: 375px) {
    margin: 0;
  }
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

const AnswerTitle_empty = styled.div`
  text-align: center;
  width: 100%;
  font-size: 1.2rem;
  color: #424242;
`;

const AnswerBody = styled.div`
  line-height: 2rem;
`;

const Date_A = styled.div`
  color: #757575;
  position: absolute;
  bottom: -3rem;
  right: 0rem;
`;
