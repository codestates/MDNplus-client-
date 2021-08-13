import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useHistory } from "react-router";
import useBooleanData from "../../../hooks/useBooleanData";
import useContentData from "../../../hooks/useContentData";
// import { Components } from "./EditPage";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Loading from "../../../components/Loading";
import { Container, ContentBox, EditBtn, Title, TitleBox } from "./ContentPage.style";

type PropsOption = {
  isLogin: Boolean;
  handleLoginModal: () => void;
};

function ContentPage({ isLogin, handleLoginModal }: PropsOption) {
  const { contentState, onClickMethod } = useContentData();
  const { contentData } = contentState;
  const { BooleanState, onSetWriteMode } = useBooleanData();
  const history = useHistory();

  const handleClickEdit = () => {
    if (isLogin) {
      history.push("/EditPage");
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
    <>
      <Container>
        {contentData === null ? (
          <Loading />
        ) : (
          <ContentBox>
            <TitleBox>
              <Title>{contentData.title}</Title>
              <EditBtn onClick={handleClickEdit}>수정</EditBtn>
            </TitleBox>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[[gfm, { singleTilde: false }]]}
              // components={Components}
              children={contentData.body}
              className="markdown"
            />
          </ContentBox>
        )}
      </Container>
    </>
  );
}

export default ContentPage;
