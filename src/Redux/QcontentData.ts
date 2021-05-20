const CURRENTQDATA = "QcontentData/CURRENTQDATA" as const;
const LIKEDATA = "LikeData/LIKEDATA" as const;

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

export const currentQData = (currentData: DataType) => ({
  type: CURRENTQDATA,
  payload: currentData,
});

export const likeData = (updateLike: number, contentId: number) => ({
  type: LIKEDATA,
  payload: {
    updateLike,
    contentId,
  },
});

type CurrentQDataAction = ReturnType<typeof currentQData> | ReturnType<typeof likeData>;

type InitState = {
  currentData: null | DataType;
  currentLike: null | DataType;
};

const initialState = {
  currentData: null,
  currentLike: null,
};

function QcontentDataReducer(state: InitState = initialState, action: CurrentQDataAction): InitState {
  switch (action.type) {
    case CURRENTQDATA:
      return { ...state, currentData: action.payload };
    case LIKEDATA:
      console.log(action.payload);
      console.log(state);
      // return { ...state };
      // return { ...state, currentData: { ...state.currentData, likes: action.payload.updateLike } };
      return { ...state, currentData: { ...state.currentData, likes: action.payload.updateLike, id: action.payload.contentId } };
    default:
      return state;
  }
}

export default QcontentDataReducer;
