import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import UserQuestion from "../../../components/UserQuestion";
import useBooleanData from "../../../hooks/useBooleanData";
import useQcontentData from "../../../hooks/useQuestionData";
import { answerPageData } from "../../../modules/AnswerPageData";
import Comment from "../../../components/Comment";
import Loading from "../../../components/Loading";
import { Container } from "./styles";
import Button from "../../../components/Button";

type QuestionPageContainerProps = {
  isLogin: boolean;
  handleLoginModal: () => void;
};

type PageNameType = {
  pageName: string;
  questionId: string;
};

function QuestionPageContainer({
  isLogin,
  handleLoginModal,
}: QuestionPageContainerProps) {
  const { QuestionState, onCurrentQData } = useQcontentData();
  const { onContentPageMode } = useBooleanData();
  const { currentData } = QuestionState;
  const history = useHistory();
  const dispatch = useDispatch();
  const [isContentPage, setIsContentPage] = useState<boolean>(false);
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

  const handleMoveToBack = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    window.history.back();
  };

  useEffect(() => {
    onContentPageMode(true);
    let questionID: string = "";
    if (location.state === undefined) {
    } else if (location.state.pageName === "/MyPage") {
      questionID = location.state.questionId;
    } else if (location.state.pageName === "/HelpdeskPage") {
      setIsContentPage(true);
      questionID = location.state.questionId;
    } else if (location.state.pageName === "/Searchpage") {
      questionID = location.state.questionId;
    }

    axios.get(`http://localhost:8080/question/${questionID}`).then((res) => {
      onCurrentQData(res.data);
    });
  }, [location, onContentPageMode, onCurrentQData]);

  return (
    <>
      {currentData !== null && currentData !== undefined ? (
        <Container>
          <Button
            size="large"
            btnStyle="text"
            handler={handleMoveToBack}
            className="back-btn"
          >{`< 돌아가기`}</Button>

          <section className="question-section">
            <UserQuestion
              data={currentData.question}
              isContentPage={isContentPage}
              handleAnswerBtn={handleAnswerBtn}
              handleSearchTag={handleSearchTag}
              type="content"
            ></UserQuestion>
          </section>

          <section className="comment-section">
            {currentData.comments.length !== 0 ? (
              <>
                {currentData.comments?.map((el, index: number) => (
                  <Comment data={el}></Comment>
                ))}
              </>
            ) : (
              <Comment></Comment>
            )}
          </section>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default QuestionPageContainer;
