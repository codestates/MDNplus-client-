import ReactMarkdown from "react-markdown";
import { CommentType } from "../../types/reducer";
import { Wrapper } from "./styles";

type CommentProps = {
  data?: CommentType;
};

function Comment({ data }: CommentProps) {
  return (
    <Wrapper>
      {data !== undefined ? (
        <>
          <div className="comment-info">
            {data.userId.image !== "" ? (
              <img className="user-img" src={data.userId.image}></img>
            ) : (
              <img
                className="user-img"
                src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112353/userIcon_gray_k0aghd.jpg"
              ></img>
            )}
            {data.userId.nickName !== null ? (
              <strong className="comment-title">
                {data.userId.nickName} 님 답변
              </strong>
            ) : null}
          </div>
          <div className="comment-desc">
            <ReactMarkdown children={data.content}></ReactMarkdown>
          </div>
          <strong className="date">{`${data.createdAt.substring(
            0,
            4
          )}년 ${data.createdAt.substring(5, 7)}월 ${data.createdAt.substring(
            8,
            10
          )}일`}</strong>
        </>
      ) : (
        <div className="empty">답변을 기다리는 중입니다.</div>
      )}
    </Wrapper>
  );
}

export default Comment;
