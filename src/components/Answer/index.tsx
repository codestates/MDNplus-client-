import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { AnswerType } from "../../types/reducer";

type AnswerProps = {
  data?: AnswerType;
};

function Answer({ data }: AnswerProps) {
  return (
    <Container>
      {data !== undefined ? (
        <>
          <div className="title-box">
            {data.userId.image !== "" ? (
              <img className="user-img" src={data.userId.image}></img>
            ) : (
              <img
                className="user-img"
                src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112353/userIcon_gray_k0aghd.jpg"
              ></img>
            )}
            <div className="date">{`${data.createdAt.substring(
              0,
              4
            )}년 ${data.createdAt.substring(5, 7)}월 ${data.createdAt.substring(
              8,
              10
            )}일`}</div>
            {data.userId.nickName !== null ? (
              <span className="answer-title">
                {" "}
                {data.userId.nickName} 님 답변
              </span>
            ) : null}
          </div>
          <div className="answer-body">
            <ReactMarkdown children={data.content}></ReactMarkdown>
          </div>
        </>
      ) : (
        <div className="empty">답변을 기다리는 중입니다.</div>
      )}
    </Container>
  );
}

export default Answer;

const Container = styled.div`
  margin-top: -3rem;
  position: relative;
  width: 75%;

  .title-box {
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
  }

  .user-img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 0.4rem;
    border: none;
  }

  .date {
    color: #757575;
    position: absolute;
    bottom: -3rem;
    right: 0rem;
  }

  .answer-title {
    font-weight: bold;
  }

  .answer-body {
    line-height: 2rem;
  }

  .empty {
    text-align: center;
    width: 100%;
    font-size: 1.2rem;
    color: #424242;
  }
`;
