import { useEffect, useState } from "react";
import useHelpData from "../../../hooks/useHelpData";
import { useHistory } from "react-router";
import axios from "axios";
import useBooleanData from "../../../hooks/useBooleanData";
import Loading from "../../../components/Loading";
import {
  BoxContainer,
  Container,
  FilterBox,
  FilterFast,
  FilterFast_Selected,
  FilterPopular,
  FilterPopular_Selected,
  QuestionBtn,
  QuestionContainer,
} from "./HelpdeskPage.style";
import Question from "../../../components/Question";
import { QuestionType } from "../../../types/reducer";
import ServiceIntro from "../../../components/ServiceIntro";

type AllQuestionstype = {
  latestQuestion: QuestionType[];
  popularityQuestion: QuestionType[];
};

type HelpData = {
  allQuestions: AllQuestionstype;
  selectedQuestions: QuestionType[];
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

  const handleMakeQuestion = () => {
    history.push({
      pathname: "/PostPage",
      hash: "Question",
    });
  };

  const handleClickQuestion = (question: QuestionType) => {
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
        <div className="stage">
          <ServiceIntro
            img={
              "https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112352/question_sirbpg.png"
            }
            title={"헬프데스크"}
            description={"궁금한 점들을 질문하세요"}
            handleMakeQuestion={handleMakeQuestion}
          ></ServiceIntro>
          <QuestionContainer>
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

            <QuestionBtn size="medium" handler={handleMakeQuestion}>
              질문하기
            </QuestionBtn>

            <BoxContainer>
              {selectedQuestions === null ? (
                <Loading />
              ) : (
                selectedQuestions.map((el, idx) => (
                  <Question
                    key={idx + 1}
                    data={el}
                    handleClickQuestion={handleClickQuestion}
                    handleSearchTag={handleSearchTag}
                  />
                ))
              )}
            </BoxContainer>
          </QuestionContainer>
        </div>
      </Container>
    </>
  ) : (
    <Loading />
  );
};

export default HelpdeskPage;
