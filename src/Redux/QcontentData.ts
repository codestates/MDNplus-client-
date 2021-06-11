const CURRENTQDATA = "QcontentData/CURRENTQDATA" as const;
const QUESTIONLIKE = "QuestionLike/QUESTIONLIKE" as const;
const ANSWERLIKE = "AnswerLike/ANSWERLIKE" as const;

type DataType = {
  question: {
    tags: string[];
    commentCount: number;
    like: number;
    pureBody: string;
    _id: string;
    title: string;
    body: string;
    userId: {
      nickName: string;
      kakaoId: string;
      githubId: string;
      image: string;
      _id: string;
      __v: number;
    };
    createdAt: string;
    updatedAt: string;
    __v: number;
    isLike: boolean;
  };
  comments: {
    like: number;
    pureBody: string;
    _id: string;
    questionId: string;
    content: string;
    userId: {
      nickName: string;
      kakaoId: string;
      githubId: string;
      image: string;
      _id: string;
      __v: number;
    };
    createdAt: string;
    updatedAt: string;
    __v: number;
    isLike: boolean;
  }[];
};

type AnswerType = {
  like: number;
  _id: string;
  questionId: string;
  content: string;
  pureBody: string;
  userId: {
    nickName: string;
    kakaoId: string;
    githubId: string;
    image: string;
    _id: string;
    __v: number;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
  isLike: boolean;
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

type CurrentQDataAction =
  | ReturnType<typeof currentQData>
  | ReturnType<typeof questionLike>
  | ReturnType<typeof answerLike>;

type InitState = {
  currentData: null | undefined | DataType;
  questionUpdate: null | DataType;
  answerUpdate: null | AnswerType;
  isLike: null | boolean;
};

const initialState = {
  currentData: null,
  questionUpdate: null,
  answerUpdate: null,
  isLike: null,
};

function QcontentDataReducer(
  state: InitState = initialState,
  action: CurrentQDataAction
): InitState {
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
