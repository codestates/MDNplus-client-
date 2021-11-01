import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import CommentContainer from "../../../containers/post/Comment";
import EditContainer from "../../../containers/post/Edit";
import QuestionContainer from "../../../containers/post/Question";
import useBooleanData from "../../../hooks/useBooleanData";

type PostPageProps = {
  helpModal: boolean;
  handleHelpModal: () => void;
};

function PostPage({ helpModal, handleHelpModal }: PostPageProps) {
  const { onSetWriteMode } = useBooleanData();
  const history = useHistory();
  const [pageType, setPageType] = useState("");
  const [checkModal, setCheckModal] = useState(false);
  const [btnName, setBtnName] = useState("");

  const handleModal = () => {
    setCheckModal(!checkModal);
  };

  const handleExit = () => {
    window.history.back();
    onSetWriteMode(false);
  };

  const handleExitModal = () => {
    setBtnName("exit");
    setCheckModal(() => !checkModal);
  };

  const handleSubmitModal = () => {
    setBtnName("submit");
    setCheckModal(() => !checkModal);
  };

  useEffect(() => {
    onSetWriteMode(true);
    setPageType(history.location.hash);
  }, [history, onSetWriteMode]);

  return (
    <>
      {pageType === "#Answer" ? (
        <CommentContainer
          helpModal={helpModal}
          handleHelpModal={handleHelpModal}
          handleExit={handleExit}
          handleExitModal={handleExitModal}
          handleModal={handleModal}
          handleSubmitModal={handleSubmitModal}
          btnName={btnName}
          checkModal={checkModal}
        ></CommentContainer>
      ) : null}
      {pageType === "#Question" ? (
        <QuestionContainer
          helpModal={helpModal}
          handleHelpModal={handleHelpModal}
          handleExit={handleExit}
          handleExitModal={handleExitModal}
          handleModal={handleModal}
          handleSubmitModal={handleSubmitModal}
          btnName={btnName}
          checkModal={checkModal}
        ></QuestionContainer>
      ) : null}
      {pageType === "#Edit" ? (
        <EditContainer
          helpModal={helpModal}
          handleHelpModal={handleHelpModal}
          handleExit={handleExit}
          handleExitModal={handleExitModal}
          handleModal={handleModal}
          handleSubmitModal={handleSubmitModal}
          btnName={btnName}
          checkModal={checkModal}
        ></EditContainer>
      ) : null}
    </>
  );
}

export default PostPage;
