import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { useCallback } from "react";
import { clickMethod, changeContent } from "../modules/ContentData";

type mainContentType = {
  count: number;
  _id: string;
  pureBody: string;
  title: string;
  body: string;
  updatedAt: string;
};

function useContentData() {
  const contentState = useSelector(
    (state: RootState) => state.ContentDataReducer
  );
  const dispatch = useDispatch();
  const onClickMethod = useCallback(
    (data: any) => dispatch(clickMethod(data)),
    [dispatch]
  );
  const onChangeContent = useCallback(
    (data: any) => dispatch(changeContent(data)),
    [dispatch]
  );
  return { contentState, onClickMethod, onChangeContent };
}

export default useContentData;
