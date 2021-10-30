import QuestionPageContainer from "../../container/helpdesk/QuestionPageContainer";

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
