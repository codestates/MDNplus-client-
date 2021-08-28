import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { useCallback } from "react";
import {
  searchData,
  searchResult,
  searchSelect,
  searchWord,
} from "../modules/SearchData";
import { SearchDataType } from "../types/reducer";

function useMyPageData() {
  const SearchDataState = useSelector(
    (state: RootState) => state.SearchDataReducer
  );
  const dispatch = useDispatch();
  const onSearchingData = useCallback(
    (data: SearchDataType) => dispatch(searchData(data)),
    [dispatch]
  );
  const onSearchingResult = useCallback(
    (result: string | null, tagResult: string | null) =>
      dispatch(searchResult(result, tagResult)),
    [dispatch]
  );
  const onSearchingTag = useCallback(
    (tag: string) => dispatch(searchSelect(tag)),
    [dispatch]
  );
  const onSearchingWord = useCallback(
    (word: string) => dispatch(searchWord(word)),
    [dispatch]
  );

  return {
    SearchDataState,
    onSearchingData,
    onSearchingResult,
    onSearchingTag,
    onSearchingWord,
  };
}

export default useMyPageData;
