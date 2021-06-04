import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import QconfirmModal from "../Components/QconfirmModal";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useBooleanData from "../Hooks/useBooleanData";
import HelpModal from "../Components/HelpModal";
import { SubmitBtn, ExitBtn, BtnBox, GuideLine, HelpBtn } from "../styled-components/Post";

// axios.defaults.withCredentials = true;
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

const HquestionPage = ({ helpModal, handleHelpModal }: PropsOption) => {
  const [checkModal, setCheckModal] = useState(false);
  const [tagValue, setTagValue] = useState("");
  const [askInfo, setAskInfo] = useState("");
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

  //유저가 왼쪽에 내용을 입력 시, title과 body 상태를 실시간으로 변경해주는 코드
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>, type: string) => {
    const previewValues = previewRef.current.innerText;
    if (type === "title") {
      setNewQuestion({ ...newQuestion, title: e.target.value });
    } else if (type === "body") {
      setNewQuestion({ ...newQuestion, body: e.target.value, pureBody: previewValues });
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
    setAskInfo("질문");
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

  // 모달에서 등록하기 버튼 누를 시, 서버에 새 질문 저장하는 요청 보내는 코드(모달에 props로 전달함)
  const handleSubmitQ = () => {
    axios.post("http://localhost:8080/question", { title, body, pureBody, tags }, { withCredentials: true }).then((res) => {
      history.push("/HelpdeskPage");
      onSetWriteMode(false);
    });
  };

  //처음 질문 작성 페이지로 이동했을 때, Nav,SideBar 없애는 코드
  useEffect(() => {
    onSetWriteMode(true);
  }, []);

  console.log(pureBody);
  return (
    <Container>
      {helpModal ? <HelpModal handleHelpModal={handleHelpModal} /> : null}

      {checkModal ? <QconfirmModal handleSubmitQ={handleSubmitQ} handleConfirmModal={handleConfirmModal} askInfo={askInfo} /> : null}
      <PostContainer>
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

          <Body
            onChange={(e) => {
              handleChange(e, "body");
            }}
            placeholder={`궁금한 내용을 적어주세요\n\n답변이 등록되면 질문 수정/삭제가 불가합니다\n\n\n* 마크다운 사용법은 오른쪽 하단 도움말을 확인해주세요.
              `}
          ></Body>
        </LeftContainer>
        <RightContainer ref={previewRef}>
          <h1>{title}</h1>
          <ReactMarkdown components={Components} children={body} className="markdown" />
        </RightContainer>
      </PostContainer>
      <BtnBox>
        <ExitBtn onClick={handleExitModal}>나가기</ExitBtn>
        <SubmitBtn onClick={handleConfirmModal}>질문 등록</SubmitBtn>
        <HelpBtn onClick={handleHelpModal}>?</HelpBtn>
      </BtnBox>
    </Container>
  );
};

export const Components = {
  code({ node, inline, className, children, ...props }: any) {
    return <SyntaxHighlighter style={docco} language="javascript" PreTag="div" children={String(children).replace(/\n$/, "")} {...props} />;
  },
};

export default HquestionPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 375px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    height: 100vh;
    width: 100vw;
  }
`;

const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100%;
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

const RightContainer = styled.div`
  background: #f4f4f4;
  padding: 0.7rem 3rem 3rem 3rem;
  position: relative;
  @media (max-width: 375px) {
    display: none;
  }
`;
