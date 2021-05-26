import React, { useEffect, useState } from "react";
import useHelpData from "../Hooks/useHelpData";
import fakeData2 from "../FakeData2";
import styled from "styled-components";
import { useHistory } from "react-router";
import ideaIcon from "../img/idea.png";
import { useDispatch } from "react-redux";
import { currentQData } from "../Redux/QcontentData";
import axios from 'axios';

type Question = {
  id: number;
  userName: string;
  userId: number;
  title: string;
  body: string;
  answers: Answers[];
  likes: number;
  tags: string[];
  createdAt: string;
};

type Answers = {
  id: number;
  userId: number;
  userName: string;
  qTitle: string;
  body: string;
  likes: number;
  createdAt: string;
};

type HelpData = {
  allQuestions: Question[];
};

const HelpdeskPage = () => {
  const [isSelected, setIsSelected] = useState("최신순");
  const { helpData, onStoreData, onClickQuestion } = useHelpData();
  const { allQuestions }: any = helpData;
  const history = useHistory();
  const dispatch = useDispatch()

  // const {latestQuestion, popularityQuestion} = allQuestions

  const handleFilter = (type: string) => {
    // if (type === "최신순") {
    //   setIsSelected("최신순");
    //   onFilterFast();
    // } else if (type === "인기순") {
    //   setIsSelected("인기순");
    //   onFilterPopular();
    // }
  };

  const handleClickQuestion = (question:any) => {
    console.log(question._id)
    // history.push('/QcontentPage')
    history.push({
      pathname: "/QcontentPage",
      state: { pageName: "HelpdeskPage", questionId:question._id },
    });
  }

  useEffect(() => {
    // 헬프데스크 메인페이지 렌더링에 필요한 데이터 받아오는 요청
    axios.get('http://localhost:80/helpdesk')
    .then(res => {
      console.log(res)
      onStoreData(res.data)})
  }, []);


  return (
    <>
      <Container>
        <IntroBox>
          <Icon src={ideaIcon}></Icon>
          <IntroContents>
            <IntroTitle>HelpDesk</IntroTitle>
            <IntroLetter>궁금한 점들을 질문하세요</IntroLetter>
          </IntroContents>
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
          <button
            onClick={() => {
              history.push("/HquestionPage");
            }}
          >
            질문하기
          </button>

          <div>
            {allQuestions === null ? (
              <div>로딩 중입니다</div>
            ) : (
              allQuestions.latestQuestion.map((el:any, idx:any) => (
                <>
                  <QuestionBox
                    onClick={() => {
                      handleClickQuestion(el)
                    }}
                    key={el._id}
                  >
                    <FirstBox>
                      <LikeBox>
                        <LikesNum>{el.like}</LikesNum>
                        <Like>좋아요</Like>
                      </LikeBox>
                      <AnswerBox>
                        <AnswersNum>{el.commentCount}</AnswersNum>
                        <Answer>답변</Answer>
                      </AnswerBox>
                    </FirstBox>
                    <SecondBox>
                      <TitleBox>
                        <FixedLetter>Q</FixedLetter>
                        <Title>{el.title}</Title>
                      </TitleBox>
                      <Body>{el.body}</Body>
                      <TagBox>
                        {el.tags.map((el:any, idx:number) => (
                          <Tag key={idx + 1}>{el}</Tag>
                        ))}
                      </TagBox>
                    </SecondBox>
                    <ThirdBox>
                      <Date>{el.createdAt}</Date>
                      <Writer>{el.userId.nickName}</Writer>
                    </ThirdBox>
                  </QuestionBox>
                  <UnderLine></UnderLine>
                </>
              ))
            )}
          </div>
        </Questions>
      </Container>
    </>
  );
};

export default HelpdeskPage;

const Container = styled.div`
  width: 100vw;
`;

const IntroBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4rem;
`;

const IntroContents = styled.div`
  margin-left: 1rem;
`;

const IntroTitle = styled.h1`
  color: #757575;
  font-weight: 600;
`;

const IntroLetter = styled.div`
  margin-top: -1rem;
  margin-left: 0.1rem;
  color: #9e9e9e;
  font-weight: bold;
`;

const Icon = styled.img`
  width: 3rem;
  margin-top: 1rem;
`;

const Questions = styled.div`
  //   border: 1px solid blue;
  padding: 2rem;
`;
const FilterBox = styled.div`
  width: 8%;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0rem 2rem 4rem;
`;

const FilterFast = styled.span`
  color: #757575;
  cursor: pointer;
`;

const FilterFast_Selected = styled.span`
  font-weight: bold;
  cursor: pointer;
`;

const FilterPopular = styled.span`
  color: #757575;
  cursor: pointer;
`;

const FilterPopular_Selected = styled.span`
  font-weight: bold;
  cursor: pointer;
`;

const QuestionBox = styled.div`
  //   border: 1px solid gray;
  display: flex;
  width: 80%;
`;

const FirstBox = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 10rem;
`;

const LikeBox = styled.div``;

const LikesNum = styled.div`
  text-align: center;
  color: #686868;
  font-weight: 500;
`;

const Like = styled.div`
  text-align: center;
  color: #686868;
  font-weight: 500;
`;

const AnswerBox = styled.div`
  margin-top: 1rem;
  width: 4rem;
  padding: 0.3rem 0 0.3rem 0;
  background: #bdbdbd;
  border-radius: 1rem;
`;

const AnswersNum = styled.div`
  text-align: center;
  font-weight: 600;
  color: white;
`;

const Answer = styled.div`
  text-align: center;
  color: white;
  font-weight: 600;
`;

const SecondBox = styled.div`
  padding: 1rem;
  width: 30rem;
`;

const TitleBox = styled.div``;

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
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #757575;
`;
const TagBox = styled.div`
  margin-top: 1.8rem;
`;

const Tag = styled.span`
  margin-left: 0.3rem;
  background: #f6f6f6;
  color: #0055fa;
  border-radius: 2rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 0.7rem;
`;

const ThirdBox = styled.div`
  //   border: 1px solid black;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 1rem;
  width: 15rem;
`;

const Date = styled.span`
  margin-right: 1rem;
`;

const Writer = styled.span`
  color: #1658d8;
`;

const UnderLine = styled.div`
  width: 90%;
  border-bottom: 1px solid #cacaca;
  margin-top: 0.7rem;
`;
