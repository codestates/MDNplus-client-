import { useEffect, useState } from "react";
import useHelpData from "../../../hooks/useHelpData";
import { useHistory } from "react-router";
import axios from "axios";
import useBooleanData from "../../../hooks/useBooleanData";
import Loading from "../../../components/Loading";
import {
  TitleBox,
  AnswersNum,
  Body,
  BoxContainer,
  Container,
  CreatedAt,
  FilterBox,
  FilterFast,
  FilterFast_Selected,
  FilterPopular,
  FilterPopular_Selected,
  FixedLetter,
  Icon,
  Title,
  TagBox,
  Tag,
  IntroBox,
  IntroContents,
  IntroLetter,
  IntroTitle,
  LikesNum,
  NumberBox,
  QuestionBox,
  QuestionBtn,
  Questions,
  Stage,
} from "./MainPage.style";

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
  pureBody: string;
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

  const handleSearchTag = (tagName: string) => {
    history.push({
      pathname: "/SearchPage",
      state: { tagName },
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    if (history.location.pathname === "/HelpdeskPage") {
      onSetWriteMode(false);
      onContentPageMode(false);
    }

    axios.get("http://localhost:8080/helpdesk").then((res) => {
      onStoreData(res.data);
    });
  }, []);

  return selectedQuestions ? (
    <>
      <Container>
        <Stage>
          <IntroBox>
            <Icon src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112352/question_sirbpg.png"></Icon>
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
                selectedQuestions.map((el, idx: number) => (
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
                      {el.pureBody.slice(0, 150)} .......
                    </Body>
                    <TagBox>
                      {el.tags.map((el: string, idx: number) => (
                        <Tag key={idx + 1} onClick={() => handleSearchTag(el)}>
                          {el}
                        </Tag>
                      ))}
                    </TagBox>
                    <NumberBox>
                      <LikesNum>좋아요 {el.like}</LikesNum>
                      <AnswersNum>답변 {el.commentCount}</AnswersNum>
                      <CreatedAt>{`${el.createdAt.substring(
                        0,
                        4
                      )}년 ${el.createdAt.substring(
                        5,
                        7
                      )}월 ${el.createdAt.substring(8, 10)}일`}</CreatedAt>
                    </NumberBox>
                  </QuestionBox>
                ))
              )}
            </BoxContainer>
          </Questions>
        </Stage>
      </Container>
    </>
  ) : (
    <Loading />
  );
};

export default HelpdeskPage;
