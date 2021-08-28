import ContentPageContainer from "../../../container/helpdesk/ContentPageContainer";

type PropsOption = {
  isLogin: boolean;
  handleLoginModal: () => void;
};

function ContentPage({ isLogin, handleLoginModal }: PropsOption) {
  return (
    <>
      <ContentPageContainer
        isLogin={isLogin}
        handleLoginModal={handleLoginModal}
      ></ContentPageContainer>
    </>
  );
}

export default ContentPage;
