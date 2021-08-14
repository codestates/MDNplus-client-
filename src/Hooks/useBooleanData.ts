import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules/";
import { useCallback } from "react";
import { setWriteMode, setContentPageMode } from "../modules/BooleanData";

function useBooleanData() {
  const BooleanState = useSelector((state: RootState) => state.BooleanDataReducer);
  const dispatch = useDispatch();
  const onSetWriteMode = useCallback((boolean: Boolean) => dispatch(setWriteMode(boolean)), [dispatch]);
  const onContentPageMode = useCallback((boolean: Boolean) => dispatch(setContentPageMode(boolean)), [dispatch]);

  return { BooleanState, onSetWriteMode, onContentPageMode };
}

export default useBooleanData;
