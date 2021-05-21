const ANSWERPAGEDATA = "AnswerPageData/ANSWERPAGEDATA" as const;

type DataType = {
  id: number;
  userId?: number;
  userName?: string;
  title?: string;
  body?: string;
  answers?: {
    id: number;
    userId: number;
    userName: string;
    qTitle: string;
    body: string;
    likes: number;
    createdAt: string;
  }[];
  likes: number;
  tags?: string[];
  createdAt?: string;
};
export const answerPageData = (displayQuestion: DataType | undefined | null) => ({
  type: ANSWERPAGEDATA,
  payload: displayQuestion,
});

type AnswerPageActionType = ReturnType<typeof answerPageData>;

type InitState = {
  displayQuestion: null | DataType | undefined;
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
