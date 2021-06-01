import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { RootState } from "../Redux";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import AnswerModal from "../Components/AnswerModal";
import useBooleanData from "../Hooks/useBooleanData";
import { ExitBtn, SubmitBtn, HelpBtn } from "../styled-components/Post";
import userImg from "../img/userIcon_gray.png";
import axios from "axios";
import HelpModal from "../Components/HelpModal";

type PropsOption = {
  helpModal: Boolean;
  handleHelpModal: () => void;
};

function AnswerPage({ helpModal, handleHelpModal }: PropsOption) {
  const allState = useSelector((state: RootState) => state.AnswerPageReducer);
  const { onSetWriteMode } = useBooleanData();
  const { displayQuestion } = allState;
  const [writing, setWriting] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [btnName, setbtnName] = useState("");
  const [guideLine, setGuideLine] = useState(true);
  const previewRef = useRef<any>(null);
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWriting(e.target.value);
  };

  const handleBtns = (e: string) => {
    console.log(e);
    setbtnName(e);
    setIsOpen(() => !isOpen);
  };

  const handleAnswerBtn = () => {
    const previewValues = previewRef.current.innerText;
    console.log(previewValues);
    const pureContentArr = previewValues.split("님의 답변").slice(1);
    console.log(pureContentArr);
    let pureContent = "";
    for (let i = 0; i < pureContentArr.length; i++) {
      pureContent = pureContent + pureContentArr[i];
    }
    console.log(pureContent);
    console.log("답변 달림");
    axios.post("http://localhost:8080/comment", { questionId: displayQuestion?._id, content: writing, pureContent }, { withCredentials: true }).then((res) => {
      console.log(res);
      setIsOpen(() => !isOpen);
      window.history.back();
    });
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // if (e.key === "Enter") {
    //   setWriting(writing + "\n");
    // }
  };

  useEffect(() => {
    onSetWriteMode(true);
  }, []);

  return displayQuestion === undefined || displayQuestion === null ? (
    <div>비어있는 질문</div>
  ) : (
    <Container>
      {helpModal ? <HelpModal handleHelpModal={handleHelpModal} /> : null}

      <LeftContainer>
        <QuestionBox>
          <QuestionTitleBox>
            <TitleIcon>질문</TitleIcon>
            <QuestionTitle> {displayQuestion.title}</QuestionTitle>
          </QuestionTitleBox>
          <QuestionBody>
            <ReactMarkdown children={displayQuestion.body} />
          </QuestionBody>
          <InfoBox_Q>
            {displayQuestion.userId.image}
            {displayQuestion.userId.image ? <UserImg_Q src={displayQuestion.userId.image}></UserImg_Q> : <UserImg_Q src={userImg}></UserImg_Q>}
            <UserName_Q>{displayQuestion.userId.nickName}</UserName_Q>
            <Date_Q>{`${displayQuestion.createdAt.substring(0, 4)}.${displayQuestion.createdAt.substring(5, 7)}.${displayQuestion.createdAt.substring(8, 10)}`}</Date_Q>
          </InfoBox_Q>
        </QuestionBox>
        <WritingArea>
          <WritingTitle>나의 답변</WritingTitle>
          {guideLine ? (
            <GuideMessage
              onClick={() => {
                setGuideLine(false);
              }}
              value={`당신의 지식을 공유해주세요...\n\n\n* 마크다운 사용법은 오른쪽 하단 도움말을 확인해주세요.
              `}
            ></GuideMessage>
          ) : (
            <Body autoFocus id="text" value={writing} placeholder="" onChange={handleChange} onKeyPress={handleEnter}></Body>
          )}
        </WritingArea>

        <SubmitBtn onClick={() => handleBtns("답변")}> 답변달기</SubmitBtn>
        <ExitBtn onClick={() => handleBtns("나가기")}> 나가기 </ExitBtn>
        {isOpen ? <AnswerModal handleAnswerBtn={handleAnswerBtn} btnName={btnName} setIsOpen={setIsOpen} /> : null}
      </LeftContainer>

      <RightContainer ref={previewRef}>
        <PreviewTitle>나의 답변</PreviewTitle>
        <ReactMarkdown children={writing} components={Components} />
        <HelpBtn onClick={handleHelpModal}>?</HelpBtn>
      </RightContainer>
    </Container>
  );
}

export const Components = {
  code({ node, inline, className, children, ...props }: any) {
    return <SyntaxHighlighter style={docco} language="javascript" PreTag="div" children={String(children).replace(/\n$/, "")} {...props} />;
  },
};

export default AnswerPage;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
`;

const LeftContainer = styled.div`
  // padding: 3rem;
`;

const QuestionBox = styled.div`
  width: 100%;
  padding: 3rem 3rem 1.5rem 3rem;
  border-bottom: 1px solid #e0e0e0;
`;

const QuestionTitleBox = styled.div``;

const TitleIcon = styled.span`
  border: none;
  padding: 0.7rem;
  background: #90a4ae;
  color: white;
  font-weight: bold;
  margin-right: 0.5rem;
`;

const QuestionTitle = styled.span`
  font-size: 1.2rem;
`;

const QuestionBody = styled.div`
  margin: 2em 0 2em 0;
  line-height: 1.5rem;
`;

const InfoBox_Q = styled.div`
  display: flex;
  align-items: center;
`;

const UserImg_Q = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.4rem;
  border: none;
`;

const UserName_Q = styled.span`
  margin-right: 0.4rem;
  color: black;
  font-size: 0.9rem;
`;

const Date_Q = styled.span`
  color: #757575;
  font-size: 0.8rem;
  padding-bottom: 0.1rem;
`;

const WritingArea = styled.div`
  width: 100%;
  height: 100%;
  resize: none;
  outline: none;
  font-size: 1.3rem;
  margin: 1.5rem 0rem 3rem 3rem;
`;

const WritingTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #686868;
  margin-bottom: 1rem;
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

const Body = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 1rem;
`;

const RightContainer = styled.div`
  background-color: #f5f5f5;
  padding: 1.3rem 3rem 3rem 3rem;
  height: 100vw;
`;

const PreviewTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #686868;
  margin: 3rem 0rem 3rem 0rem;
  padding-bottom: 1rem;
  border-bottom: 0.05rem solid #e0e0e0;
  width: 100%;
`;

// const handleHeader = (mark: string) => {
//   if (mark === "H1") {
//     setWriting(writing + "\n" + "# ");
//   } else if (mark === "H2") {
//     setWriting(writing + "\n" + "## ");
//   } else if (mark === "H3") {
//     setWriting(writing + "\n" + "### ");
//   } else if (mark === "H4") {
//     setWriting(writing + "\n" + "#### ");
//   } else if (mark === "Code") {
//     setWriting(writing + " \n ```" + "\n 코드를 입력해주세요 \n" + "\n ```");
//   } else if (mark === "Bold") {
//     setWriting(writing + "**" + "**");
//   } else if (mark === "Italic") {
//     setWriting(writing + "*" + "*");
//   } else if (mark === "Link") {
//     setWriting(writing + "[Name](http://)");
//   } else if (mark === "List") {
//     setWriting(writing + "\n" + "* ");
//   } else if (mark === "Horizontal") {
//     setWriting(writing + "\n" + "---" + " \n");
//   }

//   const input = document.getElementById("text")?.focus();
// };

// const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
//   // if (e.key === "Enter") {
//   //   setWriting(writing + "\n");
//   // }
// };
