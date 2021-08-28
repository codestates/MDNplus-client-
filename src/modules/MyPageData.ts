import { MyDataType } from "../types/reducer";

const ALLDATA = "AllData/ALLDATA" as const;

export const allDataAction = (myPageData: MyDataType | null) => ({
  type: ALLDATA,
  payload: myPageData,
});

type MyPageDataAction = ReturnType<typeof allDataAction>;

type InitState = {
  myPageData: null | undefined | MyDataType;
};

const initialState = {
  myPageData: null,
};

function MyPageReducer(
  state: InitState = initialState,
  action: MyPageDataAction
): InitState {
  switch (action.type) {
    case ALLDATA:
      return { ...state, myPageData: action.payload };
    default:
      return state;
  }
}

export default MyPageReducer;
