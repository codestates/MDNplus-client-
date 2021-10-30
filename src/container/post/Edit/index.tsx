import { useRef, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useBooleanData from "../../../hooks/useBooleanData";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import useContentData from "../../../hooks/useContentData";
import HelpModal from "../../../components/HelpModal";
import Loading from "../../../components/Loading";
import Modal from "../../../components/Modal";
import SelectBtn from "../../../components/SelectBtn";
import {
  RightContainer,
  Container,
  LeftContainer,
} from "../../../styles/postLayout.style";
import Button from "../../../components/Button";
import { PostPagesType } from "../../../types/components";

function EditContainer({
  helpModal,
  checkModal,
  btnName,
  handleHelpModal,
  handleExit,
  handleExitModal,
  handleModal,
  handleSubmitModal,
}: PostPagesType) {
  const { contentState, onChangeContent } = useContentData();
  const { onSetWriteMode } = useBooleanData();
  const { contentData } = contentState;
  const previewRef = useRef<any>(null);
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const previewValues = previewRef.current.innerText;
    onChangeContent({ body: e.target.value, pureBody: previewValues });
  };

  const handleSubmit = () => {
    if (contentData) {
      const pureBodyArr = contentData.pureBody.split("()").slice(1);
      let pureBody = "";
      for (let i = 0; i < pureBodyArr.length; i++) {
        pureBody = pureBody + pureBodyArr[i];
      }
      axios
        .patch(
          "http://localhost:8080/maincontent",
          {
            mainContentId: contentData._id,
            body: contentData.body,
            pureBody: pureBody,
          },
          { withCredentials: true }
        )
        .then((res) => {});
      handleModal();
      history.push("/ContentPage");
      onSetWriteMode(false);
    }
  };

  useEffect(() => {
    onSetWriteMode(true);
  }, []);

  return (
    <>
      <Container>
        {!contentData ? (
          <Loading />
        ) : (
          <>
            <LeftContainer>
              <div className="title-box">
                <h1 className="title">{contentData.title}</h1>
                <span className="guide">
                  * 마크다운 사용법은 오른쪽 하단 도움말을 확인해주세요.
                </span>
              </div>
              {contentData.body ? (
                <textarea
                  className="description"
                  defaultValue={contentData.body}
                  onChange={handleChange}
                  autoFocus
                ></textarea>
              ) : (
                <textarea
                  className="description"
                  placeholder="당신의 지식을 공유해주세요..."
                  onChange={handleChange}
                ></textarea>
              )}
            </LeftContainer>
            <RightContainer ref={previewRef}>
              <h1 className="title">{contentData.title}</h1>
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[[gfm, { singleTilde: false }]]}
                components={Components}
                children={contentData.body}
                className="markdown"
              />
            </RightContainer>
            <div className="btn-box">
              <div>
                <Button size="small" btnStyle="text" handler={handleExitModal}>
                  나가기
                </Button>
                <Button
                  size="medium"
                  btnStyle="primary"
                  handler={handleSubmitModal}
                >
                  수정하기
                </Button>
              </div>
              <div>
                <button onClick={handleHelpModal}>?</button>
              </div>
            </div>
          </>
        )}
      </Container>

      {helpModal ? (
        <HelpModal isOpen={helpModal} handleHelpModal={handleHelpModal} />
      ) : null}
      {checkModal ? (
        <Modal
          isOpen={true}
          handleModal={handleModal}
          modalSize={"small"}
          component={
            <SelectBtn
              type={btnName}
              writing={"1"}
              askInfo={"게시물을 수정하시겠습니까?"}
              submitType={"수정"}
              handleSubmit={handleSubmit}
              handleModal={handleModal}
              handleExit={handleExit}
            />
          }
        ></Modal>
      ) : null}
    </>
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

export default EditContainer;
