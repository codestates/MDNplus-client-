import styled from "styled-components";
import { ModalContainer } from "../EditConfirmModal/ConfirmModal";
import { slideUp } from "../../styled-components/Animation";

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
        <Container>
          <LeftContainer>
            <Title>마크다운 사용법</Title>
            <TestBox>
              <TestTitle>h1 : </TestTitle>
              <Test>#</Test>
            </TestBox>
            <TestBox>
              <TestTitle>h2 : </TestTitle>
              <Test>##</Test>
            </TestBox>
            <TestBox>
              <TestTitle>h3 : </TestTitle>
              <Test>###</Test>
            </TestBox>
            <TestBox>
              <TestTitle>기울기 : </TestTitle>
              <Test>*테스트*</Test>
            </TestBox>
            <TestBox>
              <TestTitle>강조 : </TestTitle>
              <Test>**테스트**, __테스트__</Test>
            </TestBox>
            <TestBox>
              <TestTitle>강조, 기울기 : </TestTitle>
              <Test>***테스트***</Test>
            </TestBox>
            <TestBox>
              <TestTitle>밑줄 : </TestTitle>
              <Test>{"<u>테스트</u>"}</Test>
            </TestBox>
            <TestBox>
              <TestTitle>취소선 : </TestTitle>
              <Test>{"<s>테스트</s> , ~~테스트~~"}</Test>
            </TestBox>
            <TestBr>
              <div>{"줄바꿈은<br>"}</div>
              <div>이렇게 하면 됩니다</div>
            </TestBr>
            <TestBox>
              <TestTitle>이미지 : </TestTitle>
              <Test>{`<img width="100" src="이미지 링크"/>`}</Test>
            </TestBox>
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
            <Test10>줄바꿈은</Test10>
            <Test11>이렇게 하면 됩니다</Test11>
            <Test12
              width={100}
              src={
                "https://res.cloudinary.com/dr4ka7tze/image/upload/v1622032268/oke1b4jtmpxebeofuqbu.jpg"
              }
            ></Test12>
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
  width: 50rem;
  height: 40rem;
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
  font-size: 1.8rem;
  font-weight: 600;
  width: 100%;
  margin-bottom: 2rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  width: 100%;
  height: 100%;
`;

const LeftContainer = styled.div`
  padding: 1rem 0rem 0rem 3rem;
`;

const TestBox = styled.div`
  margin-bottom: 1.5rem;
`;

const TestTitle = styled.span`
  font-weight: bold;
`;

const Test = styled.span``;

const TestBr = styled.div`
  margin-bottom: 1rem;
`;

const RightContainer = styled.div`
  padding: 3.5rem;
  background: #eceff1;
`;

const Test1 = styled.h1``;
const Test2 = styled.h2`
  margin-top: -0.5rem;
`;
const Test3 = styled.h3`
  margin-top: -0.5rem;
`;
const Test4 = styled.div`
  margin-top: -0.2rem;
  font-style: italic;
`;
const Test5 = styled.div`
  font-weight: bold;
  margin-top: 1.5rem;
`;
const Test6 = styled.div`
  font-weight: bold;
  font-style: italic;
  margin-top: 1.5rem;
`;
const Test7 = styled.div`
  text-decoration: underline;
  margin-top: 1.5rem;
`;
const Test8 = styled.div`
  text-decoration: line-through;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Test10 = styled.div`
  margin-top: 2rem;
`;
const Test11 = styled.div``;
const Test12 = styled.img`
  margin-top: 1rem;
`;
