import { CommentType, DataType, QuestionType } from "../types/reducer";

const CURRENTQDATA = "QcontentData/CURRENTQDATA" as const;
const QUESTIONLIKE = "QuestionLike/QUESTIONLIKE" as const;
const COMMENTLIKE = "CommentLike/COMMENTLIKE" as const;

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

export const commentLike = (commentUpdate: CommentType) => ({
  type: COMMENTLIKE,
  payload: {
    commentUpdate,
  },
});

type CurrentQDataAction =
  | ReturnType<typeof currentQData>
  | ReturnType<typeof questionLike>
  | ReturnType<typeof commentLike>;

type InitState = {
  currentData: null | undefined | DataType;
  questionUpdate: null | QuestionType;
  commentUpdate: null | CommentType;
  isLike: null | boolean;
};

const initialState = {
  currentData: null,
  questionUpdate: null,
  commentUpdate: null,
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

    case COMMENTLIKE:
      return {
        ...state,
        commentUpdate: action.payload.commentUpdate,
      };
    default:
      return state;
  }
}

export default QcontentDataReducer;
