import React from "react";
import styled from "styled-components";
import { Message, ModalContainer } from "../styled-components/ConfirmModal";
import { fadeIn, slideUp } from "../styled-components/Animation";

type PropsOptions = {
  handleHelpModal: () => void;
};

const HelpModal = ({ handleHelpModal }: PropsOptions) => {
  return (
    <ModalContainer onClick={handleHelpModal}>
      <ModalBox
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Title>마크다운 사용법</Title>
        <Container>
          <LeftContainer>
            <Test>h1 : #</Test>
            <Test>h2 : ##</Test>
            <Test>h3 : ###</Test>
            <Test>기울기 *테스트*</Test>
            <Test>강조 **테스트**, __테스트__</Test>
            <Test>강조, 기울기</Test>
            <Test>{"밑줄 <u>테스트</u>"}</Test>
            <Test>{"취소선 <s>테스트</s> , ~~테스트~~"}</Test>
            <Test>{"링크 [네이버](https://www.naver.com)"}</Test>
            <Test>{"줄바꿈은<br>"}</Test>
            <Test>이렇게 하면 됩니다</Test>
            <Test>{`이미지 <img width="100" src="이미지 링크"/>`}</Test>
          </LeftContainer>
          <RightContainer>
            <Test1>h1</Test1>
            <Test2>h2</Test2>
            <Test3>h3</Test3>
            <Test4>테스트</Test4>
            <Test5>테스트, 테스트</Test5>
            <Test6>테스트</Test6>
            <Test7>테스트</Test7>
            <Test8>테스트</Test8>
            <Test9 href="https://www.naver.com">네이버</Test9>
            <Test10>줄바꿈은</Test10>
            <Test11>이렇게 하면 됩니다</Test11>
            <Test12 width={100} src={'https://res.cloudinary.com/dr4ka7tze/image/upload/v1622032268/oke1b4jtmpxebeofuqbu.jpg'}></Test12>
          </RightContainer>
        </Container>
      </ModalBox>
    </ModalContainer>
  );
};

export default HelpModal;

const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40rem;
  height: 35rem;
  border: 1px solid #9e9e9e;
  border-radius: 0.5rem;
  background: white;
  transition: 0.2s ease-in;

  animation-duration: 0.1s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  width: 100%;
  padding-left: 3rem;
  margin-top: -5rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.7fr;
`;

const LeftContainer = styled.div`
  border-right: 1px solid #9e9e9e;
  padding: 1rem;
`;

const Test = styled.div`
  margin-bottom: 0.8rem;
`;

const RightContainer = styled.div``;

const Test1 = styled.h1``;
const Test2 = styled.h2``;
const Test3 = styled.h3``;
const Test4 = styled.div`
  font-style: italic;
`;
const Test5 = styled.div`
  font-weight: bold;
`;
const Test6 = styled.div`
  font-weight: bold;
  font-style: italic;
`;
const Test7 = styled.div`
  text-decoration: underline;
`;
const Test8 = styled.div`
  text-decoration: line-through;
`;
const Test9 = styled.a`
  color: #008000;
  text-decoration: none;
`;
const Test10 = styled.div``;
const Test11 = styled.div``;
const Test12 = styled.img``;
