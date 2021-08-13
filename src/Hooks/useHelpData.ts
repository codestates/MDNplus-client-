import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { useCallback } from "react";
import {filter, storeData} from "../modules/HelpData"

type UserData = {
  githubId: null;
  image: null;
  kakaoId: string;
  nickName: string;
  _id: string;
}

type Question = {
  _id: string;
  tags: string[];
  like: number;
  title: string;
  body: string;
  userId: UserData;
  createdAt: string;
  updatedAt: string;
  commentCount: number;
}

type AllQuestionstype = {
  latestQuestion: Question[];
  popularityQuestion: Question[];
}


function useHelpData() {
  const helpData = useSelector((state: RootState) => state.HelpDataReducer);
  const dispatch = useDispatch();
  const onStoreData = useCallback((data:AllQuestionstype) => dispatch(storeData(data)), [dispatch])
  const onFilter = useCallback((data:string) => dispatch(filter(data)), [dispatch])
  return {helpData, onStoreData, onFilter}
}

export default useHelpData;