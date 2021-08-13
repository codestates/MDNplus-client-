const ALLDATA = "AllData/ALLDATA" as const;

type AllData = {
  user: {
    nickName: string;
    image: string;
    _id: string;
  };
  questions: {
    tags: string[];
    commentCount: number;
    like: number;
    pureBody: string;
    _id: string;
    title: string;
    body: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }[];

  comments: {
    like: number;
    _id: string;
    pureBody: string;
    questionId: {
      _id: string;
      title: string;
    };
    content: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }[];
};

export const allDataAction = (mdnAllData: AllData | null) => ({
  type: ALLDATA,
  payload: mdnAllData,
});

type MyPageDataAction = ReturnType<typeof allDataAction>;

type InitState = {
  mdnAllData: null | undefined | AllData;
};

const initialState = {
  mdnAllData: null,
};

function MyPageReducer(
  state: InitState = initialState,
  action: MyPageDataAction
): InitState {
  switch (action.type) {
    case ALLDATA:
      return { ...state, mdnAllData: action.payload };
    default:
      return state;
  }
}

export default MyPageReducer;
