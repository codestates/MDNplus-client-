import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import EditConfirmModal from "../Components/EditConfirmModal";
import useContentData from "../Hooks/useContentData";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import autosize from "autosize";
import QconfirmModal from "../Components/QconfirmModal";
import useAllData from "../Hooks/useAllData";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useBooleanData from "../Hooks/useBooleanData";
import { SubmitBtn, ExitBtn, BtnBox, GuideLine, HelpBtn } from "../styled-components/Post";

// axios.defaults.withCredentials = true;

const date = new Date();
type NewQuestion = {
  title: string;
  body: string;
  tags: string[];
};

const QuestionPage = () => {
  const [checkModal, setCheckModal] = useState(false);
  const [tagValue, setTagValue] = useState("");
  const [guideLine, setGuideLine] = useState(true);
  const [newQuestion, setNewQuestion] = useState<NewQuestion>({
    title: "",
    body: "",
    tags: [],
  });
  const { onSetWriteMode } = useBooleanData();
  const { title, body, tags } = newQuestion;
  const history = useHistory();

  //유저가 왼쪽에 내용을 입력 시, title과 body 상태를 실시간으로 변경해주는 코드
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>, type: string) => {
    if (type === "title") {
      setNewQuestion({ ...newQuestion, title: e.target.value });
    } else if (type === "body") {
      setNewQuestion({ ...newQuestion, body: e.target.value });
    }
  };

  //태그 입력 완료를 위한 엔터키가 클릭 됐을 시, 유효성 검사에 따라 태그를 배열에 추가하는 코드
  const handleEnter = async (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === "Enter") {
      const checkValid = tags.findIndex((el) => el === tagValue); // findIndex 메소드를 사용하여 유효성 검사 실시
      if (checkValid === -1) {
        // -1이라면 존재하지 않는 태그이므로, 배열에 추가하고 input을 초기화한다.
        const newTagArr = [...tags, tagValue];
        setNewQuestion({ ...newQuestion, tags: newTagArr });
        setTagValue("");
      } else {
        // -1이 아니라면 이미 있는 태그이므로, 배열에 추가하지 않고, input만 초기화한다.
        console.log("이미 있는 태그");
        setTagValue("");
      }
    }
  };

  // 유저가 태그를 입력할 시, tagValue 상태를 업데이트하는 코드
  const handleChangeTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagValue(e.target.value);
  };

  // 유저가 생성된 태그를 지우기 위한 코드
  const handleDeleteTag = (tag: string) => {
    const newTagArr = tags.filter((el) => el !== tag); //클릭된 태그가 존재하지 않는 새로운 배열을 만들어서 업데이트한다.
    setNewQuestion({ ...newQuestion, tags: newTagArr });
  };

  // 유저가 수정버튼 누를 시, 정말로 수정할 것인지 물어보는 모달의 상태(true, false)를 관리하는 함수
  const handleConfirmModal = () => {
    if (checkModal) {
      setCheckModal(false);
    } else {
      setCheckModal(true);
    }
  };

  // 모달에서 등록하기 버튼 누를 시, 서버에 새 질문 저장하는 요청 보내는 코드(모달에 props로 전달함)
  const handleSubmitQ = () => {
    console.log("새 질문 등록 요청 보내짐");
    console.log(title, body, tags);
    axios.post("http://localhost:80/question", { title, body, tags }, { withCredentials: true }).then((res) => console.log(res));
    history.push("/HelpdeskPage");
    onSetWriteMode(false);
  };

  //나가기 버튼을 눌렀을 때, HelpdeskPage로 이동하는 코드
  const handleExit = () => {
    history.push("/HelpdeskPage");
    onSetWriteMode(false);
  };

  //처음 질문 작성 페이지로 이동했을 때, Nav,SideBar 없애는 코드
  useEffect(() => {
    onSetWriteMode(true);
  }, []);

  return (
    <>
      {checkModal ? <QconfirmModal handleSubmitQ={handleSubmitQ} handleConfirmModal={handleConfirmModal} /> : null}
      <Container>
        <LeftContainer>
          <TitleBox>
            <Title
              onChange={(e) => {
                handleChange(e, "title");
              }}
              rows={2}
              placeholder="질문 제목을 입력하세요"
              autoFocus
            />
          </TitleBox>
          <TagBox onKeyPress={handleEnter}>
            {tags.length === 0
              ? null
              : tags.map((el, idx) => (
                  <Tag
                    onClick={() => {
                      handleDeleteTag(el);
                    }}
                    key={idx + 1}
                  >
                    {el}
                  </Tag>
                ))}
            <TagInput value={tagValue} onChange={handleChangeTag} placeholder="태그를 입력해주세요" />
          </TagBox>
          <UnderLine></UnderLine>
          {guideLine ? (
            <GuideMessage
              onClick={() => {
                setGuideLine(false);
              }}
              value={`궁금한 내용을 적어주세요\n\n답변이 등록되면 질문 수정/삭제가 불가합니다\n\n\n* 마크다운 사용법은 오른쪽 하단 도움말을 확인해주세요.
              `}
            ></GuideMessage>
          ) : (
            <Body
              onChange={(e) => {
                handleChange(e, "body");
              }}
              autoFocus
            ></Body>
          )}
          <BtnBox>
            <ExitBtn onClick={handleExit}>나가기</ExitBtn>
            <SubmitBtn onClick={handleConfirmModal}>질문 등록</SubmitBtn>
          </BtnBox>
        </LeftContainer>
        <RightContainer>
          <h1>{title}</h1>
          <ReactMarkdown components={Components} children={body} className="markdown" />
        </RightContainer>
      </Container>
    </>
  );
};

export const Components = {
  code({ node, inline, className, children, ...props }: any) {
    return <SyntaxHighlighter style={docco} language="javascript" PreTag="div" children={String(children).replace(/\n$/, "")} {...props} />;
  },
};

export default QuestionPage;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100vw;
  height: 100vw;
`;

const LeftContainer = styled.div`
  padding: 0px 2.8rem 2.8rem 2.8rem;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.textarea`
  border: none;
  font-size: 1.6rem;
  margin-top: 2rem;
  resize: none;
  outline: none;
  width: 100%;
  overflow: hidden;
`;

const UnderLine = styled.div`
  width: 100%;
  border-bottom: 0.5px solid #e0e0e0;
  margin-top: 1.3rem;
  margin-bottom: 1.3rem;
`;

const TagBox = styled.div``;

const TagInput = styled.input`
  border: none;
  margin-top: 1.2rem;
  font-size: 1rem;
  outline: none;
`;

const Tag = styled.span`
  border-radius: 1rem;
  padding: 0.3rem 0.7rem 0.3rem 0.7rem;
  margin-right: 0.7rem;
  cursor: pointer;
  background: #eeeeee;
  color: #0055fa;
`;

const Body = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 1rem;
  margin-top: 0.8rem;
  color: black;
`;

const GuideMessage = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 1rem;
  margin-top: 0.7rem;
  color: gray;
`;

const RightContainer = styled.div`
  background: #f4f4f4;
  padding: 0.7rem 3rem 3rem 3rem;
`;

// 마크다운 버튼 클릭 시, 추가하는 기능을 위해 만들었던 코드(시간 남으면 진행할 예정)
// const handleGetIndex = () => {
//   const text = textareaRef.current;
//   const currentIndex = text?.selectionStart;
//   console.log(text)
//   console.log(currentIndex);
//   setCurrentIndex(currentIndex);
// };
