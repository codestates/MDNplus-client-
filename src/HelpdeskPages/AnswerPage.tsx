import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { RootState } from "../Redux";

function AnswerPage() {
  const allState = useSelector((state: RootState) => state.AnswerPageReducer);
  const history = useHistory();
  const { displayQuestion } = allState;
  const [writing, setWriting] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWriting(e.target.value);
  };

  const handleAnswerBtn = () => {
    window.history.back();
  };

  return (
    <Container>
      <LeftContainer>
        <Body placeholder="당신의 지식을 공유해주세요..." onChange={handleChange}></Body>

        <SubmitBtn onClick={handleAnswerBtn}> 답변달기</SubmitBtn>
      </LeftContainer>
      <RightContainer>
        <QuestionPart>
          <Title> {displayQuestion?.title}</Title>
          <Date>{displayQuestion?.createdAt}</Date>
          <UserName>{displayQuestion?.userName}</UserName>
          <QuestionBody>{displayQuestion?.body}</QuestionBody>
          <Likes>{displayQuestion?.likes}</Likes>
        </QuestionPart>
        <AnswerPart>{writing}</AnswerPart>
      </RightContainer>
    </Container>
  );
}

export default AnswerPage;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100vw;
  height: 100vw;
`;

const LeftContainer = styled.div`
  padding: 0px 30px 30px 30px;
`;

// const Title = styled.h1``;

const Body = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 16px;
`;

const SubmitBtn = styled.button`
  position: fixed;
  top: 45rem;
  left: 38rem;
  // top: 900px;
  // left: 800px;
`;

const RightContainer = styled.div`
  background: #f4f4f4;
  padding: 0px 30px 30px 30px;
`;

const QuestionPart = styled.div`
  width: 100%;
  height: 30%;
  border: 2px solid #a7a3a3;
`;

const AnswerPart = styled.div`
  width: 100%;
  height: 50%;
  border: 2px solid #a7a3a3;
`;

const AnswerBox = styled.div``;
const Title = styled.div``;
const Date = styled.div``;
const UserName = styled.div``;
const QuestionBody = styled.div``;
const Likes = styled.div``;
const Tags = styled.div``;
const AnswerBtn = styled.div``;
