import ReactMarkdown from "react-markdown";
import { QuestionType } from "../../types/reducer";
import { Container } from "./styles";
import Button from "../Button";

export type UserQuestionProps = {
  data: QuestionType;
  isContentPage?: boolean;
  type: string;
  handleAnswerBtn?: () => void;
  handleSearchTag: (tagName: string) => void;
};

function UserQuestion({
  data,
  isContentPage,
  type,
  handleAnswerBtn,
  handleSearchTag,
}: UserQuestionProps) {
  return (
    <Container type={type}>
      <div className="question-box">
        <div className="question-title-box">
          <span className="question-icon">질문</span>
          <h1 className="question-title"> {data.title}</h1>
        </div>
        <div className="question-desc">
          <ReactMarkdown children={data.body} />
        </div>
        <div className="tag-box">
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
      </div>
      <div className="userInfo-box">
        {data.userId ? (
          <img
            className="userInfo-img"
            src={data.userId.image}
            alt="user profile"
          ></img>
        ) : (
          <img
            className="userInfo-img"
            src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112353/userIcon_gray_k0aghd.jpg"
            alt="user profile"
          ></img>
        )}
        <span className="userInfo-name">{data.userId.nickName}</span>
        <strong className="question-date">{`${data.createdAt.substring(
          0,
          4
        )}년 ${data.createdAt.substring(5, 7)}월 ${data.createdAt.substring(
          8,
          10
        )}일`}</strong>

        {isContentPage ? (
          <Button
            size="medium"
            btnStyle="gray"
            className="answer-btn"
            handler={handleAnswerBtn}
          >
            답변 하기
          </Button>
        ) : null}
      </div>
    </Container>
  );
}

export default UserQuestion;
