import InfoPageContainer from "../../container/wiki/InfoPageContainer";

type PropsOption = {
  isLogin: boolean;
  handleLoginModal: () => void;
};

function InfoPage({ isLogin, handleLoginModal }: PropsOption) {
  return (
    <InfoPageContainer
      isLogin={isLogin}
      handleLoginModal={handleLoginModal}
    ></InfoPageContainer>
  );
}

export default InfoPage;
