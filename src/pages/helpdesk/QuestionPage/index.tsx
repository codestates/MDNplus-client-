import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useBooleanData from "../../../hooks/useBooleanData";
import HelpModal from "../../../components/HelpModal";
import {
  SubmitBtn,
  ExitBtn,
  BtnBox,
  HelpBtn,
} from "../../../styled-components/Post";
import Modal from "../../../components/Modal";
import SelectBtn from "../../../components/SelectBtn";
import {
  Container,
  LeftContainer,
  RightContainer,
} from "../../../styles/PostLayout.style";
import TagBox from "../../../components/TagBox";

type NewQuestion = {
  title: string;
  body: string;
  pureBody: string;
  tags: string[];
};

type PropsOption = {
  helpModal: Boolean;
  handleHelpModal: () => void;
};

const QuestionPage = ({ helpModal, handleHelpModal }: PropsOption) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tagValue, setTagValue] = useState("");
  const [btnName, setBtnName] = useState("");
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

  const handleConfirmModal = () => {
    setBtnName("submit");
    setIsOpen(!isOpen);
  };

  const handleExitModal = () => {
    setBtnName("exit");
    setIsOpen(!isOpen);
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

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleExit = () => {
    window.history.back();
    onSetWriteMode(false);
  };

  useEffect(() => {
    onSetWriteMode(true);
  }, []);

  return (
    <>
      <Container>
        <LeftContainer className="question-page">
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
          <TagBox
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
        </LeftContainer>
        <RightContainer ref={previewRef}>
          <h1>{title}</h1>
          <ReactMarkdown
            components={Components}
            children={body}
            className="markdown"
          />
        </RightContainer>
        <BtnBox>
          <ExitBtn onClick={handleExitModal}>나가기</ExitBtn>
          <SubmitBtn onClick={handleConfirmModal}>질문 등록</SubmitBtn>
          <HelpBtn onClick={handleHelpModal}>?</HelpBtn>
        </BtnBox>
      </Container>

      {helpModal ? (
        <HelpModal isOpen={isOpen} handleHelpModal={handleHelpModal} />
      ) : null}
      {isOpen ? (
        <Modal
          isOpen={isOpen}
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
};

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

export default QuestionPage;
