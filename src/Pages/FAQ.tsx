import { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { RootState } from "../Redux";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type InfoType = {
  title: string;
  body: string;
};

type TagType = {
  tagName: string;
  info: {
    title: string;
    body: string;
  }[];
};

function FAQ() {
  const FAQstate = useSelector((state: RootState) => state.FAQdataReducer);
  const { data } = FAQstate;
  const [currentTitle, setCurrentTitle] = useState<TagType>(data.frequent);
  const [currentInfo, setCurrentInfo] = useState<InfoType>();
  const [clickedTitle, setClickedTitle] = useState(true);

  const handleQuestion = (data: TagType) => {
    setCurrentTitle(data);
  };

  const handleServer = (data: TagType) => {
    setCurrentTitle(data);
  };

  const handleHowtoUse = (data: TagType) => {
    setCurrentTitle(data);
  };

  const handleSupport = (data: TagType) => {
    setCurrentTitle(data);
  };

  const handleLogin = (data: TagType) => {
    setCurrentTitle(data);
  };

  const handleAnswer = (info: InfoType) => {
    setCurrentInfo(info);
    setClickedTitle(() => !clickedTitle);
  };

  return (
    <Container>
      <TitleContainer>
        <FAQmain>자주 하는 질문</FAQmain>
        <FAQsub>MDN + 에게 궁금한 점이 있으신가요?</FAQsub>
      </TitleContainer>
      <QuestionTags>
        <Tag onClick={() => handleQuestion(data.frequent)}>{data.frequent.tagName}</Tag>
        <Tag onClick={() => handleServer(data.service)}>{data.service.tagName}</Tag>
        <Tag onClick={() => handleHowtoUse(data.howToUse)}>{data.howToUse.tagName}</Tag>
        <Tag onClick={() => handleSupport(data.support)}>{data.support.tagName}</Tag>
        <Tag onClick={() => handleLogin(data.login)}>{data.login.tagName}</Tag>
      </QuestionTags>

      <TagInfo>
        <TagTitle>{currentTitle.tagName}</TagTitle>

        {currentTitle.info.map((el, index: number) => (
          <QuestionContainer key={index.toString()}>
            <Input type="checkbox" id={index.toString()} />
            <DataTitle htmlFor={index.toString()}>
              <Q>Q.</Q>
              {el.title}
              <Icon>
                <FontAwesomeIcon icon={"chevron-down"} color=" #a7a3a3" />
              </Icon>
            </DataTitle>

            <DataBody>{el.body}</DataBody>

            {/* {clickedTitle === true ? <div>{currentInfo?.body}</div> : null} */}
          </QuestionContainer>
        ))}
        {/* <AnswerContainer>
            <Answer>

            </Answer>
        </AnswerContainer> */}
      </TagInfo>
      {/* 
      <InfoContainer>
            <InfoTitle>
            {el.title}
            </InfoTitle>
        
       <InfoBody>
       {el.body}
           </InfoBody>
       
        </InfoContainer> */}
    </Container>
  );
}

export default FAQ;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, auto);
`;

const TitleContainer = styled.div`
  grid-area: 1/2/2/8;
  align-self: end;
  margin: 2rem 0 1rem 0;
  padding-bottom: 1.5rem;
  border-bottom: 0.2rem solid black;
`;

const FAQmain = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;
const FAQsub = styled.div`
  font-size: 1.5rem;
  padding: 2rem 0 2rem 0;
  word-spacing: 0.5rem;
`;

const QuestionTags = styled.div`
  grid-area: 2/2/3/8;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0.5rem 0 2rem 0;
`;

const Tag = styled.div`
  color: #616161;
  border: 0.15rem solid #a7a3a3;
  border-radius: 1.5rem;
  padding: 0.5rem 2rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.8s;
  &:hover {
    background-color: #2196f3;
    border: none;
    color: white;
    transform: scale(1.1);
  }
`;

const TagInfo = styled.div`
  grid-area: 3/2/9/8;
`;

const TagTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;

  padding-bottom: 2rem;
  border-bottom: 0.06rem solid #a7a3a3;
`;

const QuestionContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
  border-bottom: 0.02rem solid #e0e0e0;
`;

const Q = styled.span`
  margin: 1rem;
  font-size: 2rem;
  font-weight: light;
  color: #2196f3;
`;

const DataTitle = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #2196f3;
  }
`;

const DataBody = styled.div`
  max-height: 0px;
  width: 90%;
  overflow: hidden;
  font-size: 1rem;
  margin: 2rem 0 2rem 2.5rem;
  padding-left: 1.5rem;
  line-height: 2rem;
`;

const Input = styled.input`
  display: none;

  &:checked + ${DataTitle} + ${DataBody} {
    max-height: 1000px;
  }
`;

const Icon = styled.span`
  float: right;
`;
