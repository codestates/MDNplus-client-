import { BaseOptions } from "node:vm";

const WRITEMODE = "ContentData/SETWRITEMODE" as const;
const CONTENTPAGEMODE = "ContentData/CONTENTPAGEMODE" as const;
const FOOTERMODE = "ContentData/FOOTERMODE" as const;

export const setWriteMode = (boolean: Boolean) => ({ type: WRITEMODE, payload: boolean });
export const setContentPageMode = (boolean: Boolean) => ({ type: CONTENTPAGEMODE, payload: boolean });

type BooleanData = ReturnType<typeof setWriteMode> | ReturnType<typeof setContentPageMode>;

type InitState = {
  writeMode: Boolean;
  contentPageMode: Boolean;
};

const initialState = {
  writeMode: false,
  contentPageMode: false,
};

function BooleanDataReducer(state: InitState = initialState, action: BooleanData) {
  switch (action.type) {
    case WRITEMODE:
      return { ...state, writeMode: action.payload };
    case CONTENTPAGEMODE:
      return { ...state, contentPageMode: action.payload };

    default:
      return state;
  }
}

export default BooleanDataReducer;
