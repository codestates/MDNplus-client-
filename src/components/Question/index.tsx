import { QuestionType } from "../../types/reducer";
import { Tag, TagBox, QuestionStyle } from "./Question.style";

type QustionProps = {
  data: QuestionType;
  handleClickQuestion: (question: QuestionType) => void;
  handleSearchTag: (tagName: string) => void;
};

function Question({
  data,
  handleClickQuestion,
  handleSearchTag,
}: QustionProps) {
  return (
    <>
      <QuestionStyle key={data._id}>
        <div
          className="question-title-box"
          onClick={() => {
            handleClickQuestion(data);
          }}
        >
          <span className="question-logo">Q</span>
          <span className="question-title">{data.title}</span>
        </div>
        <div
          className="question-body"
          onClick={() => {
            handleClickQuestion(data);
          }}
        >
          {data.pureBody.slice(0, 150)} .......
        </div>
        <TagBox>
          {data.tags.map((data: string, idx: number) => (
            <Tag key={idx + 1} onClick={() => handleSearchTag(data)}>
              {data}
            </Tag>
          ))}
        </TagBox>
        <div className="count-box">
          <span className="like-count">좋아요 {data.like}</span>
          <span className="answer-count">답변 {data.commentCount}</span>
          <span className="question-date">{`${data.createdAt.substring(
            0,
            4
          )}년 ${data.createdAt.substring(5, 7)}월 ${data.createdAt.substring(
            8,
            10
          )}일`}</span>
        </div>
      </QuestionStyle>
    </>
  );
}

export default Question;
