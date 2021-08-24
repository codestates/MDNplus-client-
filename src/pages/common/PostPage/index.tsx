import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import AnswerContainer from "../../../container/post/Answer";
import EditContainer from "../../../container/post/Edit";
import QuestionContainer from "../../../container/post/Question";
import useBooleanData from "../../../hooks/useBooleanData";

type PostPageProps = {
  helpModal: boolean;
  handleHelpModal: () => void;
};

function PostPage({ helpModal, handleHelpModal }: PostPageProps) {
  const { onSetWriteMode } = useBooleanData();
  const history = useHistory();
  const [pageType, setPageType] = useState("");

  useEffect(() => {
    onSetWriteMode(true);
    setPageType(history.location.hash);
  }, []);

  return (
    <>
      {pageType === "#Answer" ? (
        <AnswerContainer
          helpModal={helpModal}
          handleHelpModal={handleHelpModal}
        ></AnswerContainer>
      ) : null}
      {pageType === "#Question" ? (
        <QuestionContainer
          helpModal={helpModal}
          handleHelpModal={handleHelpModal}
        ></QuestionContainer>
      ) : null}
      {pageType === "#Edit" ? (
        <EditContainer
          helpModal={helpModal}
          handleHelpModal={handleHelpModal}
        ></EditContainer>
      ) : null}
    </>
  );
}

export default PostPage;
