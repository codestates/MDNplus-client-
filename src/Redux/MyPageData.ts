const MYPAGEDATA = "MyPageData/MYPAGEDATA" as const;

type DataType = {
  id: number;
  userName: string;
  profile: string;
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

export const myPageAction = (el: DataType) => ({
  type: MYPAGEDATA,
  payload: el,
});

type MyPageDataAction = ReturnType<typeof myPageAction>;

type InitState = {
  myPageData: null | DataType;
};

const initialState = {
  myPageData: null,
};

function MyPageReducer(state: InitState = initialState, action: MyPageDataAction): InitState {
  switch (action.type) {
    case MYPAGEDATA:
      return { ...state, myPageData: action.payload };
    default:
      return state;
  }
}

export default MyPageReducer;
