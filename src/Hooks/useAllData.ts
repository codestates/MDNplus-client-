import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules/";
import { filter, changeFilter, userNickName } from "../modules/AllData";
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
