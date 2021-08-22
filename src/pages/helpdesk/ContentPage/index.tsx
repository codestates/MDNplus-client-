import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { answerPageData } from "../../../modules/AnswerPageData";
import ReactMarkdown from "react-markdown";
import useBooleanData from "../../../hooks/useBooleanData";
import useQcontentData from "../../../hooks/useQcontentData";
import axios from "axios";
import Loading from "../../../components/Loading";
import {
  QuestionBox,
  Answer,
  AnswerBody,
  AnswerBox,
  AnswerBtn,
  AnswerContainer,
  AnswerTitle,
  AnswerTitleBox,
  AnswerTitle_empty,
  AnswerUserImg,
  BackBtn,
  Container,
  Date_A,
  Date_Q,
  HeartIcon,
  InfoBox_Q,
  LikeBox_A,
  LikeBox_Q,
  LikeNum_A,
  LikeNum_Q,
  QuestionBody,
  QuestionContainer,
  QuestionTitle,
  QuestionTitleBox,
  Tag,
  TagBox,
  TitleIcon,
  UserImg_Q,
  UserName_Q,
} from "./ContentPage.style";

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

function ContentPage({ isLogin, handleLoginModal }: LoginType) {
  const { QcontentState, onCurrentQData, onQuestionLike, onAnswerLike } =
    useQcontentData();
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
      pathname: "/PostPage",
      hash: "Answer",
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
          <BackBtn onClick={() => window.history.back()}>
            {"< 돌아가기"}
          </BackBtn>
          <QuestionContainer>
            <LikeBox_Q>
              {currentData.question.isLike === true ? (
                <FontAwesomeIcon
                  onClick={() => handleQuestionLike(currentData)}
                  icon={["far", "heart"]}
                  color="#686868"
                  size="lg"
                />
              ) : (
                <FontAwesomeIcon
                  onClick={() => handleQuestionLike(currentData)}
                  icon={["fas", "heart"]}
                  color="#ef5350"
                  size="lg"
                />
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
                {currentData.question.userId.image ? (
                  <UserImg_Q src={currentData.question.userId.image} />
                ) : (
                  <UserImg_Q src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112353/userIcon_gray_k0aghd.jpg" />
                )}
                <UserName_Q>{currentData.question.userId.nickName}</UserName_Q>
                <Date_Q>{`${currentData.question.createdAt.substring(
                  0,
                  4
                )}년 ${currentData.question.createdAt.substring(
                  5,
                  7
                )}월 ${currentData.question.createdAt.substring(
                  8,
                  10
                )}일`}</Date_Q>
                {isMainPage ? (
                  <AnswerBtn onClick={handleAnswerBtn}>답변하기</AnswerBtn>
                ) : null}
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
                        <FontAwesomeIcon
                          onClick={() => handleAnswerLike(el, index)}
                          icon={["far", "heart"]}
                          color="#686868"
                          size="lg"
                        />
                      </HeartIcon>
                    ) : (
                      <HeartIcon>
                        <FontAwesomeIcon
                          onClick={() => handleAnswerLike(el, index)}
                          icon={["fas", "heart"]}
                          color="#ef5350"
                          size="lg"
                        />{" "}
                      </HeartIcon>
                    )}
                    <LikeNum_A> {el.like}</LikeNum_A>
                  </LikeBox_A>
                  <Answer>
                    <AnswerTitleBox>
                      {el.userId.image !== "" ? (
                        <AnswerUserImg src={el.userId.image}></AnswerUserImg>
                      ) : (
                        <AnswerUserImg src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112353/userIcon_gray_k0aghd.jpg"></AnswerUserImg>
                      )}
                      <Date_A>{`${el.createdAt.substring(
                        0,
                        4
                      )}년 ${el.createdAt.substring(
                        5,
                        7
                      )}월 ${el.createdAt.substring(8, 10)}일`}</Date_A>
                      {el.userId.nickName !== null ? (
                        <AnswerTitle> {el.userId.nickName} 님 답변</AnswerTitle>
                      ) : null}
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
                    <AnswerTitle_empty>
                      답변을 기다리는 중입니다.
                    </AnswerTitle_empty>
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

export default ContentPage;
