import styled, { css } from "styled-components";
import ReactMarkdown from "react-markdown";
import { QuestionType } from "../../types/reducer";

type QuestionSectionProps = {
  data: QuestionType;
  isMainPage?: boolean;
  type: string;
  handleAnswerBtn?: () => void;
  handleSearchTag: (tagName: string) => void;
};

type sizeType = Pick<QuestionSectionProps, "type">;

function QuestionSection({
  data,
  isMainPage,
  type,
  handleAnswerBtn,
  handleSearchTag,
}: QuestionSectionProps) {
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

export default QuestionSection;

const Container = styled.div<sizeType>`
  height: 40%;
  overflow-y: auto;
  padding: 3rem 3rem 1.5rem 3rem;
  border-bottom: 1px solid #e0e0e0;

  ${({ type }) =>
    type === "content" &&
    css`
      width: 50%;
    `}

  ${({ type }) =>
    type === "writing" &&
    css`
      width: 100%;
    `}

    .question-title-box {
    display: flex;
  }

  .question-icon {
    background: #90a4ae;
    color: white;
    font-weight: bold;
    margin-right: 1rem;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .question-title {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }

  .question-body {
    padding-top: 1rem;
  }

  .userInfo-box {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }

  .userInfo-img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 0.4rem;
    border: none;
  }

  .userInfo-name {
    margin-right: 0.4rem;
    color: black;
    font-size: 0.9rem;
  }

  .date {
    color: #757575;
    font-size: 0.8rem;
    padding-bottom: 0.1rem;
  }

  .tag {
    color: #78909c;
    cursor: pointer;
    margin-right: 0.5rem;

    &:hover {
      color: #2196f3;
    }
  }

  .answer-btn {
    margin-left: auto;
    padding: 0.7rem 1rem 0.7rem 1rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    @media (max-width: 375px) {
      font-size: 0.6rem;
    }
  }
`;
