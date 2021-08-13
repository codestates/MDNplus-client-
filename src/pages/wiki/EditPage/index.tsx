import { useRef, useState, useEffect } from "react";
import EditConfirmModal from "../../../components/EditConfirmModal";
import useContentData from "../../../hooks/useContentData";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useHistory } from "react-router-dom";
import useBooleanData from "../../../hooks/useBooleanData";
import { SubmitBtn, ExitBtn, BtnBox, HelpBtn, GuideLine } from "../../../styled-components/Post";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import HelpModal from "../../../components/HelpModal";
import Loading from "../../../components/Loading";
import { TitleBox, Body, Container, LeftContainer, PostContainer, RightContainer, Title } from "./EditPage.style";

type PropsOption = {
  helpModal: Boolean;
  handleHelpModal: () => void;
};

function EditPage({ helpModal, handleHelpModal }: PropsOption) {
  const { contentState, onChangeContent } = useContentData();
  const { onSetWriteMode } = useBooleanData();
  const { contentData } = contentState;
  const [checkModal, setCheckModal] = useState(false);
  const [askInfo, setAskInfo] = useState("");
  const previewRef = useRef<any>(null);
  const history = useHistory();

  const handleChange = (e: any) => {
    const previewValues = previewRef.current.innerText;
    onChangeContent({ body: e.target.value, pureBody: previewValues });
  };

  const handleConfirmModal = () => {
    setAskInfo("수정");
    if (checkModal) {
      setCheckModal(false);
    } else {
      setCheckModal(true);
    }
  };

  const handleExitModal = () => {
    setAskInfo("나가기");
    if (checkModal) {
      setCheckModal(false);
    } else {
      setCheckModal(true);
    }
  };

  const handleExit = () => {
    history.push("/ContentPage");
    onSetWriteMode(false);
  };

  useEffect(() => {
    onSetWriteMode(true);
  }, []);

  return (
    <Container>
      {helpModal ? <HelpModal handleHelpModal={handleHelpModal} /> : null}
      {checkModal ? <EditConfirmModal handleConfirmModal={handleConfirmModal} handleExitModal={handleExitModal} askInfo={askInfo} /> : null}
      {!contentData ? (
        <Loading />
      ) : (
        <>
          <PostContainer>
            <LeftContainer>
              <TitleBox>
                <Title>{contentData.title}</Title>
                <GuideLine>* 마크다운 사용법은 오른쪽 하단 도움말을 확인해주세요.</GuideLine>
              </TitleBox>
              {contentData.body ? <Body defaultValue={contentData.body} onChange={handleChange} autoFocus></Body> : <Body placeholder="당신의 지식을 공유해주세요..." onChange={handleChange}></Body>}
            </LeftContainer>
            <RightContainer ref={previewRef}>
              <Title>{contentData.title}</Title>
              <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[[gfm, { singleTilde: false }]]} components={Components} children={contentData.body} className="markdown" />
            </RightContainer>
          </PostContainer>
          <BtnBox>
            <ExitBtn onClick={handleExitModal}>나가기</ExitBtn>
            <SubmitBtn onClick={handleConfirmModal}>수정 완료</SubmitBtn>
            <HelpBtn onClick={handleHelpModal}>?</HelpBtn>
          </BtnBox>
        </>
      )}
    </Container>
  );
}

export const Components = {
  code({ node, inline, className, children, ...props }: any) {
    return <SyntaxHighlighter style={docco} language="javascript" PreTag="div" children={String(children).replace(/\n$/, "")} {...props} />;
  },
};

export default EditPage;
