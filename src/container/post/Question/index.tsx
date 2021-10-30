import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useBooleanData from "../../../hooks/useBooleanData";
import HelpModal from "../../../components/HelpModal";
import Modal from "../../../components/Modal";
import SelectBtn from "../../../components/SelectBtn";
import { Container } from "../../../styles/postLayout.style";
import Button from "../../../components/Button";
import { PostPagesType } from "../../../types/components";
import TagInput from "../../../components/TagInput";

type NewQuestion = {
  title: string;
  body: string;
  pureBody: string;
  tags: string[];
};

function QuestionContainer({
  helpModal,
  btnName,
  checkModal,
  handleHelpModal,
  handleExit,
  handleExitModal,
  handleModal,
  handleSubmitModal,
}: PostPagesType) {
  const [tagValue, setTagValue] = useState("");
  const [newQuestion, setNewQuestion] = useState<NewQuestion>({
    title: "",
    body: "",
    pureBody: "",
    tags: [],
  });
  const { onSetWriteMode } = useBooleanData();
  const { title, body, pureBody, tags } = newQuestion;
  const previewRef = useRef<any>(null);
  const history = useHistory();

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    type: string
  ) => {
    const previewValues = previewRef.current.innerText;
    if (type === "title") {
      setNewQuestion({ ...newQuestion, title: e.target.value });
    } else if (type === "body") {
      setNewQuestion({
        ...newQuestion,
        body: e.target.value,
        pureBody: previewValues,
      });
    }
  };

  const handleEnter = async (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === "Enter") {
      const checkValid = tags.findIndex((el) => el === tagValue);
      if (checkValid === -1) {
        const newTagArr = [...tags, tagValue];
        setNewQuestion({ ...newQuestion, tags: newTagArr });
        setTagValue("");
      } else {
        setTagValue("");
      }
    }
  };

  const handleChangeTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagValue(e.target.value);
  };

  const handleDeleteTag = (tag: string) => {
    const newTagArr = tags.filter((el) => el !== tag);
    setNewQuestion({ ...newQuestion, tags: newTagArr });
  };

  const handleSubmit = () => {
    axios
      .post(
        "http://localhost:8080/question",
        { title, body, pureBody, tags },
        { withCredentials: true }
      )
      .then((res) => {
        history.push("/HelpdeskPage");
        onSetWriteMode(false);
      });
  };

  useEffect(() => {
    onSetWriteMode(true);
  }, []);

  return (
    <>
      <Container>
        <section className="left-container question">
          <div className="title-box">
            <textarea
              className="title"
              onChange={(e) => {
                handleChange(e, "title");
              }}
              rows={2}
              placeholder="질문 제목을 입력하세요"
              autoFocus
            />
          </div>
          <TagInput
            handleEnter={handleEnter}
            handleChangeTag={handleChangeTag}
            handleDeleteTag={handleDeleteTag}
            tags={tags}
            tagValue={tagValue}
          />
          <div className="underline"></div>
          <textarea
            className="description"
            onChange={(e) => {
              handleChange(e, "body");
            }}
            placeholder={`궁금한 내용을 적어주세요\n\n답변이 등록되면 질문 수정/삭제가 불가합니다\n\n\n* 마크다운 사용법은 오른쪽 하단 도움말을 확인해주세요.
              `}
          ></textarea>
        </section>
        <section className="right-container question" ref={previewRef}>
          <h1>{title}</h1>
          <ReactMarkdown
            components={Components}
            children={body}
            className="markdown"
          />
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
            <Button
              size="medium"
              btnStyle="primary"
              handler={handleSubmitModal}
            >
              질문 등록
            </Button>
          </div>
          <div>
            <button
              type="button"
              onClick={handleHelpModal}
              className="help-btn"
            >
              ?
            </button>
          </div>
        </div>
      </Container>

      {helpModal ? (
        <HelpModal isOpen={helpModal} handleHelpModal={handleHelpModal} />
      ) : null}
      {checkModal ? (
        <Modal
          isOpen={checkModal}
          handleModal={handleModal}
          modalSize={"small"}
          component={
            <SelectBtn
              type={btnName}
              writing={newQuestion.body}
              handleModal={handleModal}
              handleSubmit={handleSubmit}
              askInfo={"질문을 등록하시겠습니까?"}
              submitType={"등록"}
              handleExit={handleExit}
            />
          }
        />
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

export default QuestionContainer;
