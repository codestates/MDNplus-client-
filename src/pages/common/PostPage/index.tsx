import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import CommentContainer from "../../../container/post/Comment";
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
        <CommentContainer
          helpModal={helpModal}
          handleHelpModal={handleHelpModal}
        ></CommentContainer>
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
