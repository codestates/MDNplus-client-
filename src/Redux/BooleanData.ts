const WRITEMODE = "ContentData/SETWRITEMODE" as const;
const CONTENTPAGE = "ContentData/SETCONTENTPAGE" as const;

export const setWriteMode = () => ({ type: WRITEMODE });
export const setContentPage = (boolean:Boolean) => ({ type: CONTENTPAGE, payload: boolean });

type BooleanData = ReturnType<typeof setWriteMode> | ReturnType<typeof setContentPage>

type InitState = {
  writeMode: Boolean;
  contentPage: Boolean;
};

const initialState = {
  writeMode: false,
  contentPage: false, // 로그인 누르기 전 페이지가 contentPage인지 아닌지의 여부
};

function BooleanDataReducer(state: InitState = initialState, action: BooleanData) {
  switch (action.type) {
    case WRITEMODE:
      console.log("writeMode 바껴짐");
      if (state.writeMode) {
        return { ...state, writeMode: false };
      } else {
        return { ...state, writeMode: true };
      }
      case CONTENTPAGE:
          return {...state, contentPage: action.payload}
    default:
      return state;
  }
}

export default BooleanDataReducer;
