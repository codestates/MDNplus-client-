import QuestionPageContainer from "../../containers/helpdesk/QuestionPageContainer";

type QuestionPageProps = {
  isLogin: boolean;
  handleLoginModal: () => void;
};

function QuestionPage({ isLogin, handleLoginModal }: QuestionPageProps) {
  return (
    <QuestionPageContainer
      isLogin={isLogin}
      handleLoginModal={handleLoginModal}
    />
  );
}

export default QuestionPage;
