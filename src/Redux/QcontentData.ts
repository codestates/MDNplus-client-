const CURRENTQDATA = "QcontentData/CURRENTQDATA" as const;
const QUESTIONLIKE = "QuestionLike/QUESTIONLIKE" as const;
const ANSWERLIKE = "AnswerLike/ANSWERLIKE" as const;

type DataType = {
  question: {
    tags: string[];
    commentCount: number;
    like: number;
    _id: string;
    title: string;
    body: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  comments: {
    like: number;
    _id: string;
    questionId: string;
    content: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }[];
};

type QuestionType = {
  tags: string[];
  commentCount: number;
  like: number;
  _id: string;
  title: string;
  body: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type AnswerType = {
  like: number;
  _id: string;
  questionId: string;
  content: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export const currentQData = (currentData: undefined | DataType) => ({
  type: CURRENTQDATA,
  payload: currentData,
});

export const questionLike = (questionUpdate: DataType) => ({
  type: QUESTIONLIKE,
  payload: {
    questionUpdate,
  },
});

export const answerLike = (answerUpdate: AnswerType) => ({
  type: ANSWERLIKE,
  payload: {
    answerUpdate,
  },
});

type CurrentQDataAction = ReturnType<typeof currentQData> | ReturnType<typeof questionLike> | ReturnType<typeof answerLike>;

type InitState = {
  currentData: null | undefined | DataType;
  questionUpdate: null | DataType;
  answerUpdate: null | AnswerType;
};

const initialState = {
  currentData: null,
  questionUpdate: null,
  answerUpdate: null,
};

function QcontentDataReducer(state: InitState = initialState, action: CurrentQDataAction): InitState {
  switch (action.type) {
    case CURRENTQDATA:
      return { ...state, currentData: action.payload };
    case QUESTIONLIKE:
      return {
        ...state,
        currentData: action.payload.questionUpdate,
      };

    case ANSWERLIKE:
      return {
        ...state,
        answerUpdate: action.payload.answerUpdate,
      };
    default:
      return state;
  }
}

export default QcontentDataReducer;
