import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/";
// import { filter, changeFilter } from "../Redux/AllData";
import { useCallback } from "react";
import { setWriteMode, setContentPageMode } from "../Redux/BooleanData";

// 모든 Boolean 관련 state들을 모아둔 곳. (로그인 상태, 메뉴,로그인 모달 상태, 사이드바 상태 등등..)
// 원래 리액트 훅(useState)으로 페이지에서 관리하려 했으나, props로 넘겨줘야되는 상황이 많이 생겨서 리덕스에 따로 Boolean 관련 store를 만듬
function useBooleanData() {
  const BooleanState = useSelector((state: RootState) => state.BooleanDataReducer);
  const dispatch = useDispatch();
  const onSetWriteMode = useCallback((boolean: Boolean) => dispatch(setWriteMode(boolean)), [dispatch]);
  const onContentPageMode = useCallback((boolean: Boolean) => dispatch(setContentPageMode(boolean)), [dispatch]);

  return { BooleanState, onSetWriteMode, onContentPageMode };
}

export default useBooleanData;
