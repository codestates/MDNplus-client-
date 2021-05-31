import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/";
import { filter, changeFilter, userNickName } from "../Redux/AllData";
import { useCallback } from "react";

type Method = {
  _id: string;
  title: string;
  body: string;
  pureBody: string;
  count: number;
  updatedAt: string;
  createdAt: string;
};

//모든 데이터를 가지고 있는 AllData.ts(리덕스 스토어 모듈)의 state와 액션생성함수를 사용하기 위해 만든 커스텀 훅
function useAllData() {
  const allState = useSelector((state: RootState) => state.AllDataReducer);
  const dispatch = useDispatch();
  const onFilter = useCallback((data: Method[]) => dispatch(filter(data)), [dispatch]);
  const onChangeFilter = useCallback((data: Method[]) => dispatch(changeFilter(data)), [dispatch]);
  const onUserNickName = useCallback((data: string) => dispatch(userNickName(data)), [dispatch]);
  const PickUserName = allState.userNickName;

  return { allState, onFilter, onChangeFilter, onUserNickName, PickUserName };
}

export default useAllData;
