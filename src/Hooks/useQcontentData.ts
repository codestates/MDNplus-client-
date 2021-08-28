import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { useCallback } from "react";
import {
  currentQData,
  questionLike,
  commentLike,
} from "../modules/QcontentData";
import { CommentType, DataType } from "../types/reducer";

function useQcontentData() {
  const QcontentState = useSelector(
    (state: RootState) => state.QcontentDataReducer
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

  return { QcontentState, onCurrentQData, onQuestionLike, onCommentLike };
}

export default useQcontentData;
