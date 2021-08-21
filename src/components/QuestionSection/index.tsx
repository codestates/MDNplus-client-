import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { QuestionType } from "../../types/reducer";

type QuestionSectionProps = {
  data: QuestionType;
};

function QuestionSection({ data }: QuestionSectionProps) {
  return (
    <Container>
      <div>
        <span className="question-icon">질문</span>
        <span className="question-title"> {data.title}</span>
      </div>
      <div className="question-body">
        <ReactMarkdown children={data.body} />
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
      </div>
    </Container>
  );
}

export default QuestionSection;

const Container = styled.div`
  height: 40%;
  overflow-y: auto;
  padding: 3rem 3rem 1.5rem 3rem;
  border-bottom: 1px solid #e0e0e0;

  .question-icon {
    border: none;
    padding: 0.7rem;
    background: #90a4ae;
    color: white;
    font-weight: bold;
    margin-right: 0.5rem;
  }

  .question-title {
    font-size: 1.2rem;
  }

  .question-body {
    margin: 2em 0 2em 0;
  }

  .userInfo-box {
    display: flex;
    align-items: center;
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
`;
