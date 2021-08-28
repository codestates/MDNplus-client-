import axios from "axios";
import { MouseEventHandler, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import UserQuestion from "../../../components/UserQuestion";
import useBooleanData from "../../../hooks/useBooleanData";
import useQcontentData from "../../../hooks/useQcontentData";
import { answerPageData } from "../../../modules/AnswerPageData";
import Comment from "../../../components/Comment";
import Loading from "../../../components/Loading";
import {
  CommentContainer,
  Container,
  QuestionContainer,
} from "./ContentPageContainer.style";
import Button from "../../../components/Button";
import styled from "styled-components";

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
          <BackBtn
            size="large"
            color="#78909c"
            handler={handleMoveToBack}
            className="back-btn"
          >{`< 돌아가기`}</BackBtn>

          <QuestionContainer>
            <UserQuestion
              data={currentData.question}
              isMainPage={isMainPage}
              handleAnswerBtn={handleAnswerBtn}
              handleSearchTag={handleSearchTag}
              type="content"
            ></UserQuestion>
          </QuestionContainer>

          {currentData.comments.length !== 0 ? (
            <CommentContainer>
              {currentData.comments?.map((el, index: number) => (
                <div className="comment-box" key={index}>
                  <Comment data={el}></Comment>
                </div>
              ))}
            </CommentContainer>
          ) : (
            <CommentContainer>
              <div className="comment-box">
                <Comment></Comment>
              </div>
            </CommentContainer>
          )}
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ContentPageContainer;

const BackBtn = styled(Button)`
  font-size: 1.4rem;
`;
