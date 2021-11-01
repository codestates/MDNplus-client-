import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { useCallback } from "react";
import {
  currentQData,
  questionLike,
  commentLike,
} from "../modules/QuestionData";
import { CommentType, DataType } from "../types/reducer";

function useQuestionData() {
  const QuestionState = useSelector(
    (state: RootState) => state.QuestionDataReducer
  );
  const dispatch = useDispatch();
  const onCurrentQData = useCallback(
    (data: DataType) => dispatch(currentQData(data)),
    [dispatch]
  );
  const onQuestionLike = useCallback(
    (data: DataType) => dispatch(questionLike(data)),
    [dispatch]
  );
  const onCommentLike = useCallback(
    (data: CommentType) => dispatch(commentLike(data)),
    [dispatch]
  );

  return { QuestionState, onCurrentQData, onQuestionLike, onCommentLike };
}

export default useQuestionData;
