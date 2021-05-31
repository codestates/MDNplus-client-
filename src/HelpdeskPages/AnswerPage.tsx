import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { RootState } from "../Redux";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import useAllData from "../Hooks/useAllData";
import AnswerModal from "../Components/AnswerModal";
import useBooleanData from "../Hooks/useBooleanData";
import { ExitBtn, SubmitBtn } from "../styled-components/Post";
import useQcontentData from "../Hooks/useQcontentData";

import axios from "axios";

function AnswerPage() {
  const allState = useSelector((state: RootState) => state.AnswerPageReducer);
  const { QcontentState } = useQcontentData();
  const UserState = useSelector((state: RootState) => state.MyPageReducer);
  const { PickUserName } = useAllData();

  const { mdnAllData } = UserState;

  const { onSetWriteMode } = useBooleanData();
  const { displayQuestion } = allState;
  const [writing, setWriting] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [btnName, setbtnName] = useState("");
  const previewRef = useRef<any>(null)

  useEffect(() => {
    onSetWriteMode(true);
  }, []);
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
    const previewValues = previewRef.current.innerText
    console.log(previewValues)
    const pureContentArr = previewValues.split('님의 답변').slice(1)
    console.log(pureContentArr)
    let pureContent = ''
    for(let i = 0; i < pureContentArr.length; i++) {
      pureContent = pureContent + pureContentArr[i]
    }
    console.log(pureContent)
    console.log("답변 달림");
    axios.post("http://localhost:80/comment", { questionId: displayQuestion?._id, content: writing, pureContent }, { withCredentials: true }).then((res) => {
      console.log(res)
          setIsOpen(() => !isOpen);
          window.history.back();
      });
  };

  const handleHeader = (mark: string) => {
    if (mark === "H1") {
      setWriting(writing + "\n" + "# ");
    } else if (mark === "H2") {
      setWriting(writing + "\n" + "## ");
    } else if (mark === "H3") {
      setWriting(writing + "\n" + "### ");
    } else if (mark === "H4") {
      setWriting(writing + "\n" + "#### ");
    } else if (mark === "Code") {
      setWriting(writing + " \n ```" + "\n 코드를 입력해주세요 \n" + "\n ```");
    } else if (mark === "Bold") {
      setWriting(writing + "**" + "**");
    } else if (mark === "Italic") {
      setWriting(writing + "*" + "*");
    } else if (mark === "Link") {
      setWriting(writing + "[Name](http://)");
    } else if (mark === "List") {
      setWriting(writing + "\n" + "* ");
    } else if (mark === "Horizontal") {
      setWriting(writing + "\n" + "---" + " \n");
    }

    const input = document.getElementById("text")?.focus();
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
      <LeftContainer>
        <QuestionPart>
          <Q>Q</Q>
          <Title> {displayQuestion?.title}</Title>
          <NameDate>
            <UserName>{QcontentState.currentData?.question.userId.nickName}</UserName>
            <Date>{displayQuestion?.createdAt.substring(0, 10)}</Date>
          </NameDate>
          <QuestionBody>
            <ReactMarkdown children={displayQuestion?.body} components={Components} />
          </QuestionBody>
        </QuestionPart>
        <WritingArea>
          <WritingTitle> {PickUserName}님의 답변</WritingTitle>
          <Body autoFocus id="text" value={writing} placeholder="당신의 지식을 공유해주세요..." onChange={handleChange} onKeyPress={handleEnter}></Body>
        </WritingArea>

        <SubmitBtn onClick={() => handleBtns("답변")}> 답변달기</SubmitBtn>
        <ExitBtn onClick={() => handleBtns("나가기")}> 나가기 </ExitBtn>
        {isOpen ? <AnswerModal handleAnswerBtn={handleAnswerBtn} btnName={btnName} setIsOpen={setIsOpen} /> : null}
      </LeftContainer>

      <RightContainer ref={previewRef}>
        <PrieviewTitle>{PickUserName} 님의 답변</PrieviewTitle>
        <AnswerPart>
          <ReactMarkdown children={writing} components={Components} />
        </AnswerPart>
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
  width: 100%;
  height: 100%;
  display: flex;
`;

const LeftContainer = styled.div`
  margin: 3rem;
  width:50%;
  height:70%;
  padding 13px;
`;

const WritingTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin: 1em 0;
  color: #686868;
`;

const MarDownBtns = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f5f5f5;
  width: auto;
`;

const WritingArea = styled.div`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
`;
const Body = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 16px;
  margin: 2em 0 0 0;
`;

const MarkDownBtn = styled.span`
  font-size: 1.3rem;

  color: #9e9e9e;
  border: none;
  background-color: #f5f5f5;
  cursor: pointer;
  margin: 1rem 0 1rem 0;
  &:hover {
    color: #616161;
  }
`;
const RightContainer = styled.div`
background-color: #F5F5F5;
width: 50%;
height:100%;
padding 13px;

`;

const PrieviewTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: #686868;
  margin: 3rem;
  border-bottom: 0.05rem solid #e0e0e0;
`;

const QuestionPart = styled.div`
  width: auto;
  height: auto;
  border-bottom: 0.05rem solid #e0e0e0;
`;

const AnswerPart = styled.div`
  font-size: 1rem;
  width: 50%;
  height: 100%;
  border: none;
  line-height: 2rem;
  word-spacing: 0.5rem;
  margin: 3rem;
`;

const AnswerBox = styled.div`
  width: 100%;
  height: 100%;
`;
const Q = styled.span`
  font-size: 3rem;
  margin: 0.5rem;
  color: #005ce7;
`;

const Title = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: #616161;
  margin-bottom: 1rem;
`;
const Date = styled.span`
  margin-left: 1rem;
`;

const UserName = styled.span`
  margin-right: 1rem;
`;
const QuestionBody = styled.div`
  margin: 2em 0 4em 0;
  line-height: 1.8rem;
`;
const Likes = styled.span`
  margin: 1rem;
`;
const Tags = styled.div``;
const AnswerBtn = styled.div``;

const NameDate = styled.div`
  color: #686868;
  margin: 1em 0 1em 0;
  text-align: right;
`;

const SubmitButtons = styled.div`
  text-align: right;
`;

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   width: 100vw;
//   height: 100vh;
// `;

// const LeftContainer = styled.div`
//   padding: 0px 30px 30px 30px;
// `;

// const MarDownBtns = styled.div``;

// const WritingArea = styled.div`
//   border: 2px solid #a7a3a3;
//   height: 50%;
// `;
// const Body = styled.textarea`
//   width: 100%;
//   height: 100%;
//   border: none;
//   outline: none;
//   resize: none;
//   font-size: 16px;
// `;

// const SubmitBtn = styled.button`
//   position: fixed;
//   top: 45rem;
//   left: 38rem;
//   // top: 900px;
//   // left: 800px;
// `;

// const RightContainer = styled.div`
//   background: #f4f4f4;
//   padding: 0px 30px 30px 30px;
// `;

// const QuestionPart = styled.div`
//   width: 100%;
//   height: auto;
//   border: 2px solid #a7a3a3;
// `;

// const AnswerPart = styled.div`
//   width: 100%;
//   height: 50%;
//   border: 2px solid #a7a3a3;
// `;

// const AnswerBox = styled.div`
//   width: 100%;
//   height: 100%;
// `;
// const Title = styled.div`
//   font-size: 25px;
//   font-weight: bold;
//   margin: 10px;
// `;
// const Date = styled.div``;
// const UserName = styled.div``;
// const QuestionBody = styled.div``;
// const Likes = styled.div``;
// const Tags = styled.div``;
// const AnswerBtn = styled.div``;
