import ContentPageContainer from "../../../container/helpdesk/ContentPageContainer";

type ContentPageProps = {
  isLogin: boolean;
  handleLoginModal: () => void;
};

function ContentPage({ isLogin, handleLoginModal }: ContentPageProps) {
  return (
    <ContentPageContainer
      isLogin={isLogin}
      handleLoginModal={handleLoginModal}
    />
  );
}

export default ContentPage;
