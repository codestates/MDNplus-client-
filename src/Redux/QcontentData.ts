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

// type DataType = {
//   id: number;
//   userId?: number;
//   userName?: string;
//   title?: string;
//   body?: string;
//   answers?: {
//     id: number;
//     userId: number;
//     userName: string;
//     qTitle: string;
//     body: string;
//     likes: number;
//     createdAt: string;
//   }[];
//   likes: number;
//   tags?: string[];
//   createdAt?: string;
// };

export const currentQData = (currentData: undefined | DataType) => ({
  type: CURRENTQDATA,
  payload: currentData,
});

export const questionLike = (updateLike: number, contentId: string) => ({
  type: QUESTIONLIKE,
  payload: {
    updateLike,
    contentId,
  },
});

export const answerLike = (updateLike: number, contentId: string) => ({
  type: ANSWERLIKE,
  payload: {
    updateLike,
    contentId,
  },
});

type CurrentQDataAction = ReturnType<typeof currentQData> | ReturnType<typeof questionLike> | ReturnType<typeof answerLike>;

type InitState = {
  currentData: null | undefined | DataType;
};

const initialState = {
  currentData: null,
};

function QcontentDataReducer(state: InitState = initialState, action: CurrentQDataAction): InitState {
  switch (action.type) {
    case CURRENTQDATA:
      return { ...state, currentData: action.payload };
    // case QUESTIONLIKE:
    //   console.log(action.payload);
    //   console.log(state);

    //   return {

    //     ...state.currentData, currentData:{...state.currentData, question:{...state.currentData?.question, like:action.payload.updateLike, _id:action.payload.contentId}} };

    //   // return { ...state, currentData: { ...state.currentData, ...state, question:{ like:action.payload.updateLike}  } };

    // case ANSWERLIKE:
    //   console.log(action.payload);
    //   console.log(state);
    //   // return { ...state };
    //   // return { ...state, currentData: { ...state.currentData, likes: action.payload.updateLike } };
    //   return state;
    //   // return {

    //   ...state.currentData, currentData:{...state.currentData, comments:{...state.currentData?.comments, like:action.payload.updateLike, _id:action.payload.contentId}} };

    default:
      return state;
  }
}

export default QcontentDataReducer;
