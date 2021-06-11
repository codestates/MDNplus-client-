import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import EditConfirmModal from "../Components/EditConfirmModal";
import useContentData from "../Hooks/useContentData";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useHistory } from "react-router-dom";
import useBooleanData from "../Hooks/useBooleanData";
import {
  SubmitBtn,
  ExitBtn,
  BtnBox,
  HelpBtn,
  GuideLine,
} from "../styled-components/Post";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import HelpModal from "../Components/HelpModal";
import Loading from "../styled-components/Loading";

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
      {checkModal ? (
        <EditConfirmModal
          handleConfirmModal={handleConfirmModal}
          handleExitModal={handleExitModal}
          askInfo={askInfo}
        />
      ) : null}
      {!contentData ? (
        <Loading />
      ) : (
        <>
          <PostContainer>
            <LeftContainer>
              <TitleBox>
                <Title>{contentData.title}</Title>
                <GuideLine>
                  * 마크다운 사용법은 오른쪽 하단 도움말을 확인해주세요.
                </GuideLine>
              </TitleBox>
              {contentData.body ? (
                <Body
                  defaultValue={contentData.body}
                  onChange={handleChange}
                  autoFocus
                ></Body>
              ) : (
                <Body
                  placeholder="당신의 지식을 공유해주세요..."
                  onChange={handleChange}
                ></Body>
              )}
            </LeftContainer>
            <RightContainer ref={previewRef}>
              <Title>{contentData.title}</Title>
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[[gfm, { singleTilde: false }]]}
                components={Components}
                children={contentData.body}
                className="markdown"
              />
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
    return (
      <SyntaxHighlighter
        style={docco}
        language="javascript"
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    );
  },
};

export default EditPage;

const Container = styled.div`
  width: 100%;
  height: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100%;
`;

const LeftContainer = styled.div`
  // padding: 0px 30px 30px 30px;
  padding: 1.5rem;
  height: 100vw;
s`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  display: inline-block;
`;

const Body = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 16px;
`;

const RightContainer = styled.div`
  background: #f4f4f4;
  padding: 0px 30px 30px 30px;
  line-height: 2rem;
  word-spacing: 0.2rem;
  padding: 1.5rem;
`;

// const handleMarkdownH1 = () => {
//   if (contentData) {
//     const splitedArr = contentData.body.split("\n");
//     const newContentBody = contentData.body.slice(0, currentIndex);
//     const splitedNewArr = newContentBody.split("\n");
//     const targetString = splitedNewArr[splitedNewArr.length - 1];
//     const targetStringIdx = splitedNewArr.length - 1

//     // splitedArr[targetStringIdx] = `# ${splitedArr[targetStringIdx]}`

//     // let result = ''

//     // for(let i = 0; i < splitedArr.length; i++) {
//     //   if(splitedArr[i] === "") {
//     //     result = result + '\n'
//     //   } else {
//     //     result = result + splitedArr[i]
//     //   }
//     // }

//     // onChangeContent(result)
//   }
// };
