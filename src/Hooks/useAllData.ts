import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/";
import { filterArray, filterObject } from "../Redux/AllData";
import { useCallback } from "react";

function useAllData() {
  const state = useSelector((state: RootState) => state.AllDataReducer);
  const dispatch = useDispatch();
  const onFilterArray = useCallback((data:object[]) => dispatch(filterArray(data)), [dispatch]);
  const onFilterObject = useCallback((data:object[]) => dispatch(filterObject(data)), [dispatch]);
//   const onFilterObject = useCallback((data:object[]) => dispatch(filterObject(data)), [dispatch]);
  return { state, onFilterArray, onFilterObject };
}

export default useAllData;
