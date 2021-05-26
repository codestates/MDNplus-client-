import { BaseOptions } from 'node:vm';

const WRITEMODE = "ContentData/SETWRITEMODE" as const;
const CONTENTPAGE = "ContentData/SETCONTENTPAGE" as const;

export const setWriteMode = (boolean: Boolean) => ({ type: WRITEMODE, payload: boolean });
export const setContentPage = (boolean: Boolean) => ({ type: CONTENTPAGE, payload: boolean });

type BooleanData = ReturnType<typeof setWriteMode> | ReturnType<typeof setContentPage>;

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
      return {...state, writeMode: action.payload}
    case CONTENTPAGE:
      return { ...state, contentPage: action.payload };
    default:
      return state;
  }
}

export default BooleanDataReducer;
