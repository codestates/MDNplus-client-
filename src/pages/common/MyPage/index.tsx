import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allDataAction } from "../../../modules/MyPageData";
import { RootState } from "../../../modules";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useBooleanData from "../../../hooks/useBooleanData";
import Loading from "../../../components/Loading";
import { Container } from "./styles";
import { CommentType, QuestionType } from "../../../types/reducer";

function MyPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const allState = useSelector((state: RootState) => state.MyPageReducer);
  const { myPageData } = allState;
  const [isQuestion, setIsQuestion] = useState(true);
  const [active, setActive] = useState("question");
  const { onContentPageMode } = useBooleanData();

  const handleMyQuestions = (el: QuestionType) => {
    history.push({
      pathname: "/QuestionPage",
      state: { pageName: "/MyPage", questionId: el._id },
    });
  };

  const handleMyAnswers = (el: CommentType) => {
    console.log(el);
    history.push({
      pathname: "/QuestionPage",
      state: { pageName: "/MyPage", questionId: el.questionId._id },
    });
  };

  const handleFilter = (type: "question" | "comment") => {
    if (type === "question") {
      setIsQuestion(true);
      setActive("question");
    } else {
      setIsQuestion(false);
      setActive("comment");
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/helpdesk/me", { withCredentials: true })
      .then((res) => {
        dispatch(allDataAction(res.data));
      });

    if (history.location.pathname === "/MyPage") {
      onContentPageMode(false);
    }
  }, []);

  return !myPageData || myPageData === undefined ? (
    <Loading />
  ) : (
    <>
      <Container active={active}>
        <section className="user-info-section">
          {!myPageData.user.image ? (
            <img
              src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112353/userIcon_gray_k0aghd.jpg"
              alt="user image"
            />
          ) : (
            <img src={myPageData.user.image} alt="user image" />
          )}
          <strong className="user-name">{myPageData.user.nickName}</strong>
        </section>

        <section className="user-post-section">
          <div className="filter-box">
            <button type="button" onClick={() => handleFilter("question")}>
              나의 질문
            </button>
            <button type="button" onClick={() => handleFilter("comment")}>
              나의 답변
            </button>
          </div>

          {isQuestion ? (
            myPageData.questions.length === 0 ? (
              <div className="empty-box">
                <img
                  src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112352/person_omh4xf.png"
                  alt="a developer"
                ></img>
                <strong className="empty-desc">포스트가 없습니다</strong>
              </div>
            ) : (
              <div className="post-container">
                {myPageData.questions.map((el) => (
                  <article
                    className="post-box"
                    key={el._id}
                    onClick={() => handleMyQuestions(el)}
                  >
                    <h1 className="post-title">{el.title}</h1>
                    <p className="post-desc">{el.pureBody}</p>
                    <div className="post-info question">
                      <strong className="post-date">{`${el.createdAt.substring(
                        0,
                        4
                      )}년 ${el.createdAt.substring(
                        5,
                        7
                      )}월 ${el.createdAt.substring(8, 10)}일`}</strong>
                      <dl className="post-info-countbox">
                        <div>
                          <dt>답변</dt>
                          <dd>{el.commentCount}</dd>
                        </div>
                        <div>
                          <dt>좋아요</dt>
                          <dd>{el.like}</dd>
                        </div>
                      </dl>
                    </div>
                  </article>
                ))}
              </div>
            )
          ) : myPageData.comments.length === 0 ? (
            <div className="empty-box">
              <img
                className="empty-img"
                src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112352/person_omh4xf.png"
                alt="a developer"
              ></img>
              <strong className="empty-desc">포스트가 없습니다</strong>
            </div>
          ) : (
            <div className="post-container">
              {myPageData?.comments.map((el) => (
                <article
                  className="post-box"
                  key={el._id}
                  onClick={() => handleMyAnswers(el)}
                >
                  <h1 className="post-title">{el.questionId.title}</h1>
                  <p className="post-desc">{el.content}</p>
                  <div className="post-info comment">
                    <strong className="post-date">{`${el.createdAt.substring(
                      0,
                      4
                    )}년 ${el.createdAt.substring(
                      5,
                      7
                    )}월 ${el.createdAt.substring(8, 10)}일`}</strong>
                    <dl className="like-count-box">
                      <dt>좋아요</dt>
                      <dd>{el.like}</dd>
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </Container>
    </>
  );
}

export default MyPage;
