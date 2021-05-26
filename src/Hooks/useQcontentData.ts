import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux";
import { useCallback } from "react";
import { currentQData, questionLike, answerLike } from "../Redux/QcontentData";
import { BooleanLiteral } from "typescript";

type DataType = {
  question: {
    tags: string[];
    commentCount: number;
    like: number;
    _id: string;
    title: string;
    body: string;
    userId: {
      nickName: string;
      kakaoId: string;
      githubId: string;
      image: string;
      _id: string;
      __v: number;
    };
    createdAt: string;
    updatedAt: string;
    __v: number;
    isLike: boolean;
  };
  comments: {
    like: number;
    _id: string;
    questionId: string;
    content: string;
    userId: {
      nickName: string;
      kakaoId: string;
      githubId: string;
      image: string;
      _id: string;
      __v: number;
    };
    createdAt: string;
    updatedAt: string;
    __v: number;
    isLike: boolean;
  }[];
};

type AnswerType = {
  like: number;
  _id: string;
  questionId: string;
  content: string;
  userId: {
    nickName: string;
    kakaoId: string;
    githubId: string;
    image: string;
    _id: string;
    __v: number;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
  isLike: boolean;
};

function useQcontentData() {
  const QcontentState = useSelector((state: RootState) => state.QcontentDataReducer);
  const dispatch = useDispatch();
  const onCurrentQData = useCallback((data: DataType) => dispatch(currentQData(data)), [dispatch]);
  const onQuestionLike = useCallback((data: DataType) => dispatch(questionLike(data)), [dispatch]);
  const onAnswerLike = useCallback((data: AnswerType) => dispatch(answerLike(data)), [dispatch]);

  return { QcontentState, onCurrentQData, onQuestionLike, onAnswerLike };
}

export default useQcontentData;
