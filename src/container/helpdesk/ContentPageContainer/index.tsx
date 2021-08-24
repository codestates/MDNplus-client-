import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import QuestionSection from "../../../components/QuestionSection";
import useBooleanData from "../../../hooks/useBooleanData";
import useQcontentData from "../../../hooks/useQcontentData";
import { answerPageData } from "../../../modules/AnswerPageData";
import Answer from "../../../components/Answer";
import Loading from "../../../components/Loading";
import {
  AnswerContainer,
  Container,
  QuestionContainer,
} from "./ContentPageContainer.style";

type ContentPageContainerProps = {
  isLogin: boolean;
  handleLoginModal: () => void;
};

type PageNameType = {
  pageName: string;
  questionId: string;
};

function ContentPageContainer({
  isLogin,
  handleLoginModal,
}: ContentPageContainerProps) {
  const { QcontentState, onCurrentQData } = useQcontentData();
  const { onContentPageMode } = useBooleanData();
  const { currentData } = QcontentState;
  const history = useHistory();
  const dispatch = useDispatch();
  const [isMainPage, setisMainPage] = useState<boolean>(false);
  const location = useLocation<PageNameType>();

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
          <span className="back-btn" onClick={() => window.history.back()}>
            {"< 돌아가기"}
          </span>

          <QuestionContainer>
            <QuestionSection
              data={currentData.question}
              isMainPage={isMainPage}
              handleAnswerBtn={handleAnswerBtn}
              handleSearchTag={handleSearchTag}
              type="content"
            ></QuestionSection>
          </QuestionContainer>

          {currentData.comments.length !== 0 ? (
            <AnswerContainer>
              {currentData.comments?.map((el, index: number) => (
                <div className="answer-box" key={index}>
                  <Answer data={el}></Answer>
                </div>
              ))}
            </AnswerContainer>
          ) : (
            <AnswerContainer>
              <div className="answer-box">
                <Answer></Answer>
              </div>
            </AnswerContainer>
          )}
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ContentPageContainer;
