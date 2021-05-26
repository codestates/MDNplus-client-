import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { RootState } from "../Redux";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import useAllData from "../Hooks/useAllData";
import useBooleanData from '../Hooks/useBooleanData';
import {ExitBtn, SubmitBtn} from "../styled-components/Post"

function AnswerPage() {
  const allState = useSelector((state: RootState) => state.AnswerPageReducer);
  const {onSetWriteMode} = useBooleanData()
  const { displayQuestion } = allState;
  const [writing, setWriting] = useState<string>("");
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWriting(e.target.value);
  };

  const handleAnswerBtn = () => {
    onSetWriteMode(false);
    window.history.back();
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

  return (
    <Container>
      <LeftContainer>
        <QuestionPart>
          <Title> {displayQuestion?.title}</Title>
          <Date>{displayQuestion?.createdAt}</Date>
          <UserName>유저네임</UserName>
          <QuestionBody>{displayQuestion?.body}</QuestionBody>
          <Likes> 좋아요: {displayQuestion?.like}</Likes>
        </QuestionPart>
        <WritingArea>
          <WritingTitle> 나의 답변</WritingTitle>
          <MarDownBtns>
            <MarkDownBtn id="btn" onClick={() => handleHeader("H1")}>
              H1
            </MarkDownBtn>

            <MarkDownBtn id="btn" onClick={() => handleHeader("H2")}>
              H2
            </MarkDownBtn>
            <MarkDownBtn id="btn" onClick={() => handleHeader("H3")}>
              H3
            </MarkDownBtn>
            <MarkDownBtn id="btn" onClick={() => handleHeader("H4")}>
              H4
            </MarkDownBtn>

            <MarkDownBtn id="btn" onClick={() => handleHeader("Code")}>
              Code
            </MarkDownBtn>

            <MarkDownBtn id="btn" onClick={() => handleHeader("Bold")}>
              Bold
            </MarkDownBtn>

            <MarkDownBtn id="btn" onClick={() => handleHeader("Italic")}>
              Italic
            </MarkDownBtn>

            <MarkDownBtn id="btn" onClick={() => handleHeader("Link")}>
              Link
            </MarkDownBtn>

            <MarkDownBtn id="btn" onClick={() => handleHeader("List")}>
              List
            </MarkDownBtn>
            <MarkDownBtn id="btn" onClick={() => handleHeader("Horizontal")}>
              Horizontal
            </MarkDownBtn>
          </MarDownBtns>
          <Body autoFocus id="text" value={writing} placeholder="당신의 지식을 공유해주세요..." onChange={handleChange} onKeyPress={handleEnter}></Body>
        </WritingArea>
        <SubmitBtn onClick={handleAnswerBtn}> 답변달기</SubmitBtn>
        <ExitBtn onClick={handleAnswerBtn}> 나가기 </ExitBtn>
      </LeftContainer>

      <RightContainer>
        <PrieviewTitle>Preview</PrieviewTitle>
        <AnswerPart>
          <Title> {displayQuestion?.title}</Title>
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
  width: 100vw;
  height: 100vw;
  display: flex;
`;

const LeftContainer = styled.div`
  width:50%;
  height:100%;
  padding 13px;
  border-right: 1.5px solid black;
`;

const WritingTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin: 1em 0;
  border-bottom: 1.5px solid black;
`;

const MarDownBtns = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;
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
`;

const MarkDownBtn = styled.button`
  text-size: 1.5rem;
  margin: 0.2rem;
`;

const RightContainer = styled.div`
position:fixed;
right:0;
width:50%;
height:100%;
padding 13px;

`;

const PrieviewTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 1em;
  margin-top: 1em;
  border-bottom: 1.5px solid black;
`;

const QuestionPart = styled.div`
  margin: 3rem 0;
  width: 100%;
  height: auto;
`;

const AnswerPart = styled.div`
  width: 100%;
  height: 100%;
  border: none;
`;

const AnswerBox = styled.div`
  width: 100%;
  height: 100%;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 1rem;
`;
const Date = styled.div`
  text-align: right;
`;
const UserName = styled.div``;
const QuestionBody = styled.div`
  margin-bottom: 1rem;
`;
const Likes = styled.div``;
const Tags = styled.div``;
const AnswerBtn = styled.div``;

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
