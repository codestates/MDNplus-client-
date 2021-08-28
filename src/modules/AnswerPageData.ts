import { QuestionType } from '../types/reducer';

const ANSWERPAGEDATA = "AnswerPageData/ANSWERPAGEDATA" as const;

export const answerPageData = (displayQuestion: QuestionType | undefined | null) => ({
  type: ANSWERPAGEDATA,
  payload: displayQuestion,
});

type AnswerPageActionType = ReturnType<typeof answerPageData>;

type InitState = {
  displayQuestion: null | QuestionType | undefined;
};

const initialState = {
  displayQuestion: null,
};

function AnswerPageReducer(state: InitState = initialState, action: AnswerPageActionType): InitState {
  switch (action.type) {
    case ANSWERPAGEDATA:
      return { ...state, displayQuestion: action.payload };
    default:
      return state;
  }
}
export default AnswerPageReducer;
