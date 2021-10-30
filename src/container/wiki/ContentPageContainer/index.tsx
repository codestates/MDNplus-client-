import { useEffect } from "react";
import { useHistory } from "react-router";
import useBooleanData from "../../../hooks/useBooleanData";
import useContentData from "../../../hooks/useContentData";
import Loading from "../../../components/Loading";
import MethodInfo from "../../../components/MethodInfo";
import styled from "styled-components";

type PropsOption = {
  isLogin: boolean;
  handleLoginModal: () => void;
};

function ContentPageContainer({ isLogin, handleLoginModal }: PropsOption) {
  const { contentState } = useContentData();
  const { contentData } = contentState;
  const { onSetWriteMode } = useBooleanData();
  const history = useHistory();

  const handleClickEdit = () => {
    if (isLogin) {
      history.push({
        pathname: "/PostPage",
        hash: "Edit",
      });
    } else {
      localStorage.setItem("contentPage", "true");
      handleLoginModal();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (history.location.pathname === "/ContentPage") {
      onSetWriteMode(false);
    }
  }, []);

  return (
    <Container>
      {contentData === null ? (
        <Loading />
      ) : (
        <>
          <MethodInfo
            key={contentData._id}
            data={contentData}
            handleClickEdit={handleClickEdit}
          ></MethodInfo>
        </>
      )}
    </Container>
  );
}

export default ContentPageContainer;

export const Container = styled.main`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  padding-bottom: 100px;
`;
