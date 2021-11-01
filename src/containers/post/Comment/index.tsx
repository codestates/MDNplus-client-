import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import { RootState } from "../../../modules";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import useBooleanData from "../../../hooks/useBooleanData";
import axios from "axios";
import HelpModal from "../../../components/HelpModal";
import Modal from "../../../components/Modal";
import SelectBtn from "../../../components/SelectBtn";
import UserQuestion from "../../../components/UserQuestion";
import { Container } from "../../../styles/postLayout.style";
import { useHistory } from "react-router";
import Button from "../../../components/Button";
import { PostPagesType } from "../../../types/components";

function CommentContainer({
  helpModal,
  handleHelpModal,
  handleSubmitModal,
  handleModal,
  handleExitModal,
  handleExit,
  checkModal,
  btnName,
}: PostPagesType) {
  const allState = useSelector((state: RootState) => state.AnswerPageReducer);
  const { onSetWriteMode } = useBooleanData();
  const [writing, setWriting] = useState<string>("");
  const previewRef = useRef<any>(null);
  const [userInfo, setUserInfo] = useState({
    img: "",
    nickName: "",
  });
  const history = useHistory();

  const { displayQuestion } = allState;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWriting(e.target.value);
  };

  const handleSubmit = () => {
    const previewValues = previewRef.current.innerText;
    const pureContentArr = previewValues.split("님의 답변").slice(1);
    let pureContent = "";
    for (let i = 0; i < pureContentArr.length; i++) {
      pureContent = pureContent + pureContentArr[i];
    }
    axios
      .post(
        "http://localhost:8080/comment",
        { questionId: displayQuestion?._id, content: writing, pureContent },
        { withCredentials: true }
      )
      .then((res) => {
        handleModal();
        window.history.back();
      });
  };

  const handleSearchTag = (tagName: string) => {
    history.push({
      pathname: "/SearchPage",
      state: { tagName },
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/userinfo", { withCredentials: true })
      .then((res) => {
        setUserInfo({ img: res.data.image, nickName: res.data.nickName });
      });
    onSetWriteMode(true);
  }, [onSetWriteMode]);

  return displayQuestion === undefined || displayQuestion === null ? (
    <div>비어있는 질문</div>
  ) : (
    <Container>
      <section className="left-container comment">
        <UserQuestion
          data={displayQuestion}
          type="writing"
          handleSearchTag={handleSearchTag}
        />
        <section className="writing-section">
          <span className="answer-title">나의 답변</span>
          <textarea
            className="description"
            value={writing}
            placeholder={`당신의 지식을 공유해주세요...\n\n\n* 마크다운 사용법은 오른쪽 하단 도움말을 확인해주세요.`}
            onChange={handleChange}
          />
        </section>
      </section>
      <section className="right-container" ref={previewRef}>
        <div className="preview-top">
          {userInfo.img === "" ? (
            <img
              className="my-image"
              src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112353/userIcon_gray_k0aghd.jpg"
              alt="my profile"
            />
          ) : (
            <img className="my-image" src={userInfo.img} alt="my profile" />
          )}
          <span className="my-nickname">{userInfo.nickName} 님의 답변</span>
        </div>
        <ReactMarkdown children={writing} components={Components} />
      </section>
      <div className="btn-box">
        <div>
          <Button
            size="medium"
            btnStyle="text"
            handler={handleExitModal}
            className="exit-btn"
          >
            나가기
          </Button>
          <Button size="medium" btnStyle="primary" handler={handleSubmitModal}>
            답변 등록
          </Button>
        </div>
        <div>
          <button type="button" onClick={handleHelpModal} className="help-btn">
            ?
          </button>
        </div>
      </div>

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
              writing={writing}
              askInfo={"답변을 등록하시겠습니까?"}
              submitType={"등록"}
              handleSubmit={handleSubmit}
              handleModal={handleModal}
              handleExit={handleExit}
            />
          }
        ></Modal>
      ) : null}
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

export default CommentContainer;
