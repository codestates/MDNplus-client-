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
import { SubmitBtn, BtnBox, HelpBtn } from "../../../styled-components/Post";
import {
  RightContainer,
  Container,
  LeftContainer,
} from "../../../styles/PostLayout.style";
import Button from "../../../components/Button";

type PropsOption = {
  helpModal: boolean;
  handleHelpModal: () => void;
};

function EditContainer({ helpModal, handleHelpModal }: PropsOption) {
  const { contentState, onChangeContent } = useContentData();
  const { onSetWriteMode } = useBooleanData();
  const { contentData } = contentState;
  const [checkModal, setCheckModal] = useState(false);
  const [btnName, setBtnName] = useState("");
  const previewRef = useRef<any>(null);
  const history = useHistory();

  const handleChange = (e: any) => {
    const previewValues = previewRef.current.innerText;
    onChangeContent({ body: e.target.value, pureBody: previewValues });
  };

  const handleModal = () => {
    setCheckModal(!checkModal);
  };

  const handleExit = () => {
    window.history.back();
    onSetWriteMode(false);
  };

  const handleExitModal = () => {
    setBtnName("exit");
    setCheckModal(() => !checkModal);
  };

  const handleSubmitModal = () => {
    setBtnName("submit");
    setCheckModal(() => !checkModal);
  };

  const handleSubmit = () => {
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
            <LeftContainer className="edit-page">
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
            <BtnBox>
              {/* <ExitBtn onClick={handleExitModal}>나가기</ExitBtn> */}
              {/* <SubmitBtn onClick={handleModal}>수정 완료</SubmitBtn> */}
              <Button size="large" handler={handleExitModal}>
                나가기
              </Button>
              <SubmitBtn
                size="large"
                handler={handleSubmitModal}
                className="submit-btn"
              >
                답변 등록
              </SubmitBtn>
              <HelpBtn onClick={handleHelpModal}>?</HelpBtn>
            </BtnBox>
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
