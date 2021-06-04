import { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { RootState } from "../Redux";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import arrow from "../img/arrow2.png";

type TagType = {
  label: {
    tagName: string;
    info: { title: string; body: string }[];
  };
};

function FAQ() {
  const FAQstate = useSelector((state: RootState) => state.FAQdataReducer);
  const { data } = FAQstate;
  const [currentTitle, setCurrentTitle] = useState<TagType>(data.AllFAQdata[0]);
  const [pickName, setPickName] = useState("자주하는질문");
  const history = useHistory();

  const handleLabel = (el: TagType) => {
    setPickName(el.label.tagName);
    setCurrentTitle(el);
  };

  return (
    <Container>
      <Nav>
        <Logo
          onClick={() => {
            history.push("/");
          }}
          style={{ color: "#005CE7" }}
        >
          MDN+
        </Logo>
        <Nav_RightBox>
          <QuestionsBtn
            onClick={() => {
              history.push("/FAQ");
            }}
          >
            자주 하는 질문
          </QuestionsBtn>
          <HomeBtn
            onClick={() => {
              history.push("/wiki");
            }}
          >
            웹 서비스 이동
          </HomeBtn>
          <ArrowImg src={arrow}></ArrowImg>
        </Nav_RightBox>
      </Nav>
      <TitleContainer>
        <FAQmain>자주 하는 질문</FAQmain>
        <FAQsub>MDN + 에게 궁금한 점이 있으신가요?</FAQsub>
      </TitleContainer>
      <QuestionTags>
        {data.AllFAQdata.map((el) => (
          <Tag
            style={{ color: el.label.tagName === pickName ? "#005CE7" : " #a7a3a3", borderColor: el.label.tagName === pickName ? "#005CE7" : " #a7a3a3" }}
            key={el.label.tagName}
            onClick={() => handleLabel(el)}
          >
            {el.label.tagName}
          </Tag>
        ))}
      </QuestionTags>

      <TagInfo>
        <TagTitle>{currentTitle.label.tagName}</TagTitle>

        {currentTitle.label.info.map((el, index: number) => (
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
          </QuestionContainer>
        ))}
      </TagInfo>
    </Container>
  );
}

export default FAQ;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, auto);
`;

const Nav = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 2rem;
  position: fixed;
  top: 0;
  z-index: 99;
`;

const Logo = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
  margin-left: 1rem;
  cursor: pointer;

  color: ${(props) => props.color || "black"};
`;

const Nav_RightBox = styled.div``;

const QuestionsBtn = styled.span`
  font-size: 1.1rem;
  color: black;
  cursor: pointer;
  font-weight: bold;
  margin-right: 2rem;
  border: 1px solid black;
  padding: 0.5rem 1.2rem 0.5rem 1.2rem;
  border-radius: 2rem;
  background: white;
`;

const HomeBtn = styled.span`
  font-size: 1.1rem;
  color: black;
  cursor: pointer;
  font-weight: 500;
  border: 1px solid black;
  padding: 0.5rem 2.5rem 0.5rem 1.2rem;
  border-radius: 2rem;
  position: relative;
  background: #263238;
  color: white;
`;

const ArrowImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 1.2rem;
  right: 2.5rem;
`;

const TitleContainer = styled.div`
  grid-area: 1/2/2/8;
  align-self: end;
  margin: 5rem 0 1rem 0;
  padding-bottom: 1.5rem;
  border-bottom: 0.15rem solid #616161;
`;

const FAQmain = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #424242;
`;
const FAQsub = styled.div`
  font-size: 1.5rem;
  margin: 1rem 0 2rem 0;
  color: #424242;
`;

const QuestionTags = styled.div`
  grid-area: 2/2/3/8;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 3rem 0 4rem 0;
`;

const Tag = styled.div`
  color: #424242;
  border: 0.1rem solid #bdbdbd;
  border-radius: 5rem;
  padding: 0.5rem 3rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    border-color: #2196f3;
    color: #2196f3;
  }
`;

const TagInfo = styled.div`
  grid-area: 3/2/9/8;
`;

const TagTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #424242;
  padding-bottom: 2rem;
  border-bottom: 0.06rem solid #a7a3a3;
`;

const QuestionContainer = styled.div`
  margin: 1rem;

  border-bottom: 0.02rem solid #e0e0e0;
`;

const Q = styled.span`
  margin: 1rem;
  font-size: 2rem;
  font-weight: light;
  color: #005ce7;
`;

const DataTitle = styled.label`
  color: #424242;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  // &:hover {
  //   color: #2196f3;
  // }
`;

const DataBody = styled.div`
  max-height: 0px;
  width: 90%;
  overflow: hidden;
  font-size: 1rem;
  margin: 1rem;
  padding-left: 3rem;
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
