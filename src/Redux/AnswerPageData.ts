const ANSWERPAGEDATA = "AnswerPageData/ANSWERPAGEDATA" as const;

type QuestionType = {
  tags: string[];
  commentCount: number;
  like: number;
  _id: string;
  title: string;
  body: string;
  userId: {
    nickName: string;
    kakaoId: string;
    githubId: string;
    image: string;
    _id: string;
    __v: 0;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
};

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
