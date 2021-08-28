import { QuestionType, AllQuestionsType } from "../types/reducer";

const STOREDATA = "HelpData/STORE" as const;
const FILTER = "HelpData/FILTER" as const;

export const storeData = (data: AllQuestionsType) => ({
  type: STOREDATA,
  payload: data,
});
export const filter = (data: string) => ({ type: FILTER, payload: data });

type HelpDataAction = ReturnType<typeof storeData> | ReturnType<typeof filter>;

type HelpDataState = {
  allQuestions: null | AllQuestionsType;
  selectedQuestions: null | QuestionType[];
  currentData: null | QuestionType;
};

const initialState = {
  allQuestions: null,
  selectedQuestions: null,
  currentData: null,
};

function HelpDataReducer(
  state: HelpDataState = initialState,
  action: HelpDataAction
) {
  switch (action.type) {
    case STOREDATA:
      return {
        ...state,
        allQuestions: action.payload,
        selectedQuestions: action.payload.latestQuestion,
      };
    case FILTER:
      if (action.payload === "최신순") {
        return {
          ...state,
          selectedQuestions: state.allQuestions?.latestQuestion,
        };
      } else if (action.payload === "인기순") {
        return {
          ...state,
          selectedQuestions: state.allQuestions?.popularityQuestion,
        };
      } else {
        return;
      }
    default:
      return state;
  }
}

export default HelpDataReducer;
