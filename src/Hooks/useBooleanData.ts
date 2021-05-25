
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/";
// import { filter, changeFilter } from "../Redux/AllData";
import { useCallback } from "react";
import { setWriteMode, setIsLogin } from "../Redux/BooleanData"

//모든 데이터를 가지고 있는 AllData.ts(리덕스 스토어 모듈)의 state와 액션생성함수를 사용하기 위해 만든 커스텀 훅
function useBooleanData() {
  const BooleanState = useSelector((state: RootState) => state.BooleanDataReducer);
  const dispatch = useDispatch();
  const onSetWriteMode = useCallback(() => dispatch(setWriteMode()), [dispatch])
  const onSetIsLogin = useCallback(() => dispatch(setIsLogin()), [dispatch])

  return { BooleanState, onSetWriteMode, onSetIsLogin };
}

export default useBooleanData

