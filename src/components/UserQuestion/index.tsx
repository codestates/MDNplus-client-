import styled, { css } from "styled-components";
import ReactMarkdown from "react-markdown";
import { QuestionType } from "../../types/reducer";
import { Container } from "./QuestionSection.style";

export type UserQuestionProps = {
  data: QuestionType;
  isMainPage?: boolean;
  type: string;
  handleAnswerBtn?: () => void;
  handleSearchTag: (tagName: string) => void;
};

function UserQuestion({
  data,
  isMainPage,
  type,
  handleAnswerBtn,
  handleSearchTag,
}: UserQuestionProps) {
  return (
    <Container type={type}>
      <div className="question-box">
        <div className="question-title-box">
          <span className="question-icon">질문</span>
          <span className="question-title"> {data.title}</span>
        </div>
        <div className="question-body">
          <ReactMarkdown children={data.body} />
        </div>
        {data.tags.length !== 0
          ? data.tags.map((el, idx) => (
              <span
                className="tag"
                key={idx}
                onClick={() => handleSearchTag(el)}
              >
                {el}
              </span>
            ))
          : null}
      </div>
      <div className="userInfo-box">
        {data.userId.image ? (
          <img className="userInfo-img" src={data.userId.image}></img>
        ) : (
          <img
            className="userInfo-img"
            src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112353/userIcon_gray_k0aghd.jpg"
          ></img>
        )}
        <span className="userInfo-name">{data.userId.nickName}</span>
        <span className="date">{`${data.createdAt.substring(
          0,
          4
        )}.${data.createdAt.substring(5, 7)}.${data.createdAt.substring(
          8,
          10
        )}`}</span>
        {isMainPage ? (
          <button className="answer-btn" onClick={handleAnswerBtn}>
            답변하기
          </button>
        ) : null}
      </div>
    </Container>
  );
}

export default UserQuestion;
