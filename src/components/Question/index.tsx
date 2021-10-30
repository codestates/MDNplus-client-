import { QuestionType } from "../../types/reducer";
import { Wrapper } from "./styles";

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
      <Wrapper
        key={data._id}
        onClick={() => {
          handleClickQuestion(data);
        }}
      >
        <div className="question-title-box">
          <span className="question-logo">Q</span>
          <h1 className="question-title">{data.title}</h1>
        </div>
        <p className="question-desc">{data.pureBody.slice(0, 150)} .......</p>

        <div className="tag-box">
          {data.tags.map((data: string, idx: number) => (
            <span
              className="tag"
              key={idx + 1}
              onClick={(e) => {
                e.stopPropagation();
                handleSearchTag(data);
              }}
            >
              {data}
            </span>
          ))}
        </div>

        <div className="question-info" onClick={(e) => e.stopPropagation()}>
          <dl>
            <div>
              <dt>좋아요</dt>
              <dd>{data.like}</dd>
            </div>
            <div>
              <dt>답변</dt>
              <dd>{data.commentCount}</dd>
            </div>
          </dl>
          <strong className="question-date">{`${data.createdAt.substring(
            0,
            4
          )}년 ${data.createdAt.substring(5, 7)}월 ${data.createdAt.substring(
            8,
            10
          )}일`}</strong>
        </div>
      </Wrapper>
    </>
  );
}

export default Question;
