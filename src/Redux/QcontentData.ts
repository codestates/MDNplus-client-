const CURRENTQDATA = "QcontentData/CURRENTQDATA" as const;

type DataType = {
  allData: {
    id: number;
    userId: number;
    userName: string;
    title: string;
    body: string;
    answers: {
      id: number;
      userId: number;
      userName: string;
      qTitle: string;
      body: string;
      likes: number;
      createdAt: string;
    }[];
    likes: number;
    tags: string[];
    createdAt: string;
  }[];
};

export const currentQData = (currentData: DataType) => ({
  type: CURRENTQDATA,
  payload: currentData,
});

type CurrentQDataAction = ReturnType<typeof currentQData>;

type InitState = {
  currentData: null | DataType;
};

const initialState = {
  currentData: null,
};

function QcontentDataReducer(state: InitState = initialState, action: CurrentQDataAction): InitState {
  switch (action.type) {
    case CURRENTQDATA:
      return { ...state, currentData: action.payload };

    default:
      return state;
  }
}

export default QcontentDataReducer;
