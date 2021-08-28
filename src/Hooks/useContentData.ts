import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { useCallback } from "react";
import { clickMethod, changeContent } from "../modules/ContentData";
import { MethodType, EditingDataType } from "../types/reducer";

function useContentData() {
  const contentState = useSelector(
    (state: RootState) => state.ContentDataReducer
  );
  const dispatch = useDispatch();

  const onClickMethod = useCallback(
    (data: MethodType) => dispatch(clickMethod(data)),
    [dispatch]
  );
  const onChangeContent = useCallback(
    (data: EditingDataType) => dispatch(changeContent(data)),
    [dispatch]
  );
  return { contentState, onClickMethod, onChangeContent };
}

export default useContentData;
