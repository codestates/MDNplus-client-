import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/";
import { useCallback } from "react";
import { searchData } from "../Redux/SearchData";

type SearchDataType = {
  id: number;
  title: string;
  body: string;
  count: number;
};

function useMyPageData() {
  const SearchDataState = useSelector((state: RootState) => state.SearchDataReducer);
  const dispatch = useDispatch();
  const onSearching = useCallback((data: SearchDataType[]) => dispatch(searchData(data)), [dispatch]);

  return { onSearching, SearchDataState };
}

export default useMyPageData;
