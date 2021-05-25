import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/";
import { filter, changeFilter } from "../Redux/AllData";
import { useCallback } from "react";

type Method = {
  id: number;
  title: string;
  body: string;
  count: number;
};

//모든 데이터를 가지고 있는 AllData.ts(리덕스 스토어 모듈)의 state와 액션생성함수를 사용하기 위해 만든 커스텀 훅
function useAllData() {
  const allState = useSelector((state: RootState) => state.AllDataReducer);
  const dispatch = useDispatch();
  const onFilter = useCallback((data: any) => dispatch(filter(data)), [dispatch]);
  const onChangeFilter = useCallback((data: any) => dispatch(changeFilter(data)), [dispatch]);
  return { allState, onFilter, onChangeFilter };
}

export default useAllData;
