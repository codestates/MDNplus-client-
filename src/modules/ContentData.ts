import { MethodType } from "../types/reducer";

const CLICKMETHOD = "ContentData/CLICKMETHOD" as const;
const CHANGECONTENT = "ContentData/CHANGCONTENT" as const;

export const clickMethod = (data: MethodType) => ({
  type: CLICKMETHOD,
  payload: data,
});
export const changeContent = (data: any) => ({
  type: CHANGECONTENT,
  payload: data,
});

type ContentDataAction =
  | ReturnType<typeof clickMethod>
  | ReturnType<typeof changeContent>;

type InitState = {
  contentData: any;
};

const initialState = {
  contentData: null,
};

function ContentDataReducer(
  state: InitState = initialState,
  action: ContentDataAction
) {
  switch (action.type) {
    case CLICKMETHOD:
      return { ...state, contentData: action.payload };
    case CHANGECONTENT:
      const newState = { ...state };
      if (newState.contentData) {
        newState.contentData.body = action.payload.body;
        newState.contentData.pureBody = action.payload.pureBody;
      }
      return newState;
    default:
      return state;
  }
}

export default ContentDataReducer;
