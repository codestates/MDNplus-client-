import { clickQuestion } from './../Redux/HelpData';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux";
import { useCallback } from "react";
import {filterFast, filterPopular, storeData} from "../Redux/HelpData"

type Question = {
    id: number;
    userName: string;
    userId: number;
    title: string;
    body: string;
    answers: Answers[];
    likes: number;
    tags: string[];
    createdAt: string;
}

type Answers = {
    id: number;
    userId: number;
    userName: string;
    qTitle: string;
    body: string;
    likes: number;
    createdAt: string;
}


function useHelpData() {
  const helpData = useSelector((state: RootState) => state.HelpDataReducer);
  const dispatch = useDispatch();
  const onStoreData = useCallback((data:Question[]) => dispatch(storeData(data)), [dispatch])
  const onFilterFast = useCallback(() => dispatch(filterFast()), [dispatch])
  const onFilterPopular = useCallback(() => dispatch(filterPopular()), [dispatch])
  const onClickQuestion = useCallback((data:Question) => dispatch(clickQuestion(data)), [dispatch])
  return {helpData, onStoreData, onFilterFast, onFilterPopular, onClickQuestion}
}

export default useHelpData;