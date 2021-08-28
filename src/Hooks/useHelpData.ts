import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { useCallback } from "react";
import { filter, storeData } from "../modules/HelpData";
import { AllQuestionsType } from "../types/reducer";


function useHelpData() {
  const helpData = useSelector((state: RootState) => state.HelpDataReducer);
  const dispatch = useDispatch();
  const onStoreData = useCallback(
    (data: AllQuestionsType) => dispatch(storeData(data)),
    [dispatch]
  );
  const onFilter = useCallback(
    (data: string) => dispatch(filter(data)),
    [dispatch]
  );
  return { helpData, onStoreData, onFilter };
}

export default useHelpData;
