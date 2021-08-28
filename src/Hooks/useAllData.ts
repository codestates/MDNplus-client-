import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules/";
import { filter, changeFilter, userNickName } from "../modules/AllData";
import { useCallback } from "react";
import { MethodType } from "../types/reducer";

function useAllData() {
  const allState = useSelector((state: RootState) => state.AllDataReducer);
  const dispatch = useDispatch();

  const onFilter = useCallback(
    (data: MethodType[]) => dispatch(filter(data)),
    [dispatch]
  );
  const onChangeFilter = useCallback(
    (data: MethodType[]) => dispatch(changeFilter(data)),
    [dispatch]
  );
  const onUserNickName = useCallback(
    (data: string) => dispatch(userNickName(data)),
    [dispatch]
  );
  const PickUserName = allState.userNickName;

  return { allState, onFilter, onChangeFilter, onUserNickName, PickUserName };
}

export default useAllData;
