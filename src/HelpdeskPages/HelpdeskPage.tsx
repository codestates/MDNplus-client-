import React, { useEffect, useState } from "react";
import useHelpData from "../Hooks/useHelpData";
import styled from "styled-components";
import { useHistory } from "react-router";
import axios from "axios";
import useBooleanData from "../Hooks/useBooleanData";
import ideaIcon from "../img/idea.png";
import helpIcon from "../img/question.png";
import spinGIF from "../img/spinGIF.gif";

type UserData = {
  githubId: null;
  image: null;
  kakaoId: string;
  nickName: string;
  _id: string;
};

type Question = {
  _id: string;
  tags: string[];
  like: number;
  title: string;
  body: string;
  userId: UserData;
  createdAt: string;
  updatedAt: string;
  commentCount: number;
};

type AllQuestionstype = {
  latestQuestion: Question[];
  popularityQuestion: Question[];
};

type HelpData = {
  allQuestions: AllQuestionstype;
  selectedQuestions: Question[];
};

const HelpdeskPage = () => {
  const [isSelected, setIsSelected] = useState("최신순");
  const { helpData, onStoreData, onFilter } = useHelpData();
  const { onSetWriteMode, onContentPageMode } = useBooleanData();
  const { allQuestions, selectedQuestions }: HelpData = helpData;
  const history = useHistory();

  const handleFilter = (type: string) => {
    if (type === "최신순") {
      setIsSelected("최신순");
      onFilter("최신순");
    } else if (type === "인기순") {
      setIsSelected("인기순");
      onFilter("인기순");
    }
  };

  const handleClickQuestion = (question: Question) => {
    history.push({
      pathname: "/QcontentPage",
      state: { pageName: "/HelpdeskPage", questionId: question._id },
    });
  };

  useEffect(() => {
    // 헬프데스크 메인페이지 렌더링에 필요한 데이터 받아오는 요청
    window.scrollTo(0, 0); // 스크롤 맨위로 이동시키는 코드

    if (history.location.pathname === "/HelpdeskPage") {
      onSetWriteMode(false);
      onContentPageMode(false);
    }

    axios.get("http://localhost:8080/helpdesk").then((res) => {
      console.log(res);
      onStoreData(res.data);
    });
  }, []);

  // console.log(allQuestions);

  return (
    <>
      <Container>
        <Stage>
          <IntroBox>
            <Icon src={helpIcon}></Icon>
            <IntroContents>
              <IntroTitle>헬프데스크</IntroTitle>
              <IntroLetter>궁금한 점들을 질문하세요</IntroLetter>
            </IntroContents>
            <QuestionBtn
              onClick={() => {
                history.push("/HquestionPage");
              }}
            >
              질문하기
            </QuestionBtn>
          </IntroBox>
          <Questions>
            <FilterBox>
              {isSelected === "최신순" ? (
                <FilterFast_Selected
                  onClick={() => {
                    handleFilter("최신순");
                  }}
                >
                  최신순
                </FilterFast_Selected>
              ) : (
                <FilterFast
                  onClick={() => {
                    handleFilter("최신순");
                  }}
                >
                  최신순
                </FilterFast>
              )}
              {isSelected === "인기순" ? (
                <FilterPopular_Selected
                  onClick={() => {
                    handleFilter("인기순");
                  }}
                >
                  인기순
                </FilterPopular_Selected>
              ) : (
                <FilterPopular
                  onClick={() => {
                    handleFilter("인기순");
                  }}
                >
                  인기순
                </FilterPopular>
              )}
            </FilterBox>

            <BoxContainer>
              {selectedQuestions === null ? (
                <div>로딩 중입니다</div>
              ) : (
                selectedQuestions.map((el: any, idx: number) => (
                  <QuestionBox key={el._id}>
                    <TitleBox
                      onClick={() => {
                        handleClickQuestion(el);
                      }}
                    >
                      <FixedLetter>Q</FixedLetter>
                      <Title>{el.title}</Title>
                    </TitleBox>
                    <Body
                      onClick={() => {
                        handleClickQuestion(el);
                      }}
                    >
                      {`${el.pureBody}`}
                    </Body>
                    <TagBox>
                      {el.tags.map((el: string, idx: number) => (
                        <Tag key={idx + 1}>{el}</Tag>
                      ))}
                    </TagBox>
                    <NumberBox>
                      <LikesNum>좋아요 {el.like}</LikesNum>
                      <AnswersNum>답변 {el.commentCount}</AnswersNum>
                      <CreatedAt>날짜 {el.createdAt.slice(0, 10)}</CreatedAt>
                    </NumberBox>
                  </QuestionBox>
                ))
              )}
            </BoxContainer>
          </Questions>
        </Stage>
      </Container>
    </>
  );
};

export default HelpdeskPage;

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Stage = styled.div`
  width: 93%;
`;

const IntroBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const IntroContents = styled.div``;

const IntroTitle = styled.h1`
  color: #757575;
  font-weight: 600;
`;

const IntroLetter = styled.div`
  margin-top: -1rem;
  color: #9e9e9e;
  font-weight: bold;
`;

const Icon = styled.img`
  width: 6rem;
  margin-top: 1rem;
`;

const QuestionBtn = styled.button`
  position: absolute;
  right: 0rem;
  // margin-right: 2rem;
  font-size: 0.9rem;
  padding: 0.7rem 1.2rem 0.7rem 1.2rem;
  border-radius: 1.2rem;
  border: none;
  background: #1976d2;
  color: white;
  cursor: pointer;
  z-index: 0;
`;

const Questions = styled.div`
  // border: 1px solid blue;
  padding: 2rem;
`;

const FilterBox = styled.div`
  width: 100%;
  display: flex;
  // margin: 2rem 0rem 1rem 3rem;
`;

const FilterFast = styled.span`
  color: #757575;
  cursor: pointer;
  // margin-right: 0.5rem;
`;

const FilterFast_Selected = styled.span`
  font-weight: bold;
  cursor: pointer;
  // margin-right: 0.5rem;
  color: #3f51b5;
`;

const FilterPopular = styled.span`
  color: #757575;
  cursor: pointer;
  margin-left: 1.5rem;
`;

const FilterPopular_Selected = styled.span`
  font-weight: bold;
  cursor: pointer;
  margin-left: 1.5rem;

  color: #3f51b5;
`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 375px) {
    display: grid;
    grid-template-columns: repeat(1, auto);
  }
`;

const QuestionBox = styled.div`
  border-top: 0.01px solid #e0e0e0;
  padding: 2rem;
  // padding-top: 1rem;
`;

const TitleBox = styled.div`
  cursor: pointer;
  width: 100%;
`;

const FixedLetter = styled.span`
  color: #1658d8;
  margin-right: 0.5rem;
  font-weight: 600;
  font-size: 1.2rem;
`;

const Title = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

const Body = styled.div`
  cursor: pointer;
  margin-top: 0.5rem;
  margin-left: 1.3rem;
  font-size: 0.8rem;
  color: #757575;
`;
const TagBox = styled.div`
  margin-top: 1.8rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  // margin-left: 0.3rem;
  background: #f6f6f6;
  color: #686868;
  border-radius: 2rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 0.7rem;
`;

const NumberBox = styled.div`
  padding-top: 1rem;
  margin-bottom: -1rem;
`;

const LikesNum = styled.span`
  color: #686868;
  font-size: 0.8rem;
  // margin-left: 1rem;
  // margin-right: 1rem;
  margin-top: 1rem;
`;

const AnswersNum = styled.span`
  font-size: 0.8rem;
  margin-left: 1rem;
  color: #686868;
`;

const CreatedAt = styled.span`
  font-size: 0.8rem;
  color: #686868;
  margin-left: 1rem;
`;
