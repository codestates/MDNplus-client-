import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/";
import { useCallback } from "react";
import { searchData } from "../Redux/SearchData";

type SearchDataType = {
  mainContent: {
    count: number;
    _id: string;
    title: string;
    body: string;
    updatedAt: string;
  }[];
  helpdeskContent: {
    tags: string[];
    commentCount: number;
    like: number;
    _id: string;
    title: string;
    body: string;
    userId: {
      nickName: string;
      kakaoId: string | null;
      githubId: string | null;
      image: string;
      _id: string;
      __v: number;
    };
    createdAt: string;
    updatedAt: string;
    __v: number;
  }[];
};

function useMyPageData() {
  const SearchDataState = useSelector((state: RootState) => state.SearchDataReducer);
  const dispatch = useDispatch();
  const onSearching = useCallback((data: SearchDataType) => dispatch(searchData(data)), [dispatch]);

  return { onSearching, SearchDataState };
}

export default useMyPageData;
