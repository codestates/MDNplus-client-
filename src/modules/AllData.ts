import { MethodType } from "../types/reducer";

const FILTER = "AllData/FILTER" as const;
const CHANGEFILTER = "AllData/CHANGEFILTER" as const;
const USERNICKNAME = "AllData/USERNICKNAME" as const;

export const filter = (data: MethodType[]) => ({ type: FILTER, payload: data });
export const changeFilter = (data: MethodType[]) => ({
  type: CHANGEFILTER,
  payload: data,
});
export const userNickName = (userNickName: string) => ({
  type: USERNICKNAME,
  payload: userNickName,
});

type AllDataAction =
  | ReturnType<typeof filter>
  | ReturnType<typeof changeFilter>
  | ReturnType<typeof userNickName>;

type InitState = {
  allData: null | MethodType[];
  arrayData: null | MethodType[];
  objectData: null | MethodType[];
  mathData: null | MethodType[];
  stringData: null | MethodType[];
  promiseData: null | MethodType[];
  currentData: null | MethodType[];
  userNickName: null | string;
};

const initialState = {
  allData: null,
  currentData: null,
  arrayData: null,
  objectData: null,
  mathData: null,
  stringData: null,
  promiseData: null,
  userNickName: null,
};

function AllDataReducer(
  state: InitState = initialState,
  action: AllDataAction
) {
  switch (action.type) {
    case FILTER:
      const arrayData = action.payload.filter((el) => {
        const methodTitle = el.title.split(".")[0];
        return methodTitle === "Array";
      });
      const objectData = action.payload.filter((el) => {
        const methodTitle = el.title.split(".")[0];
        return methodTitle === "Object";
      });
      const mathData = action.payload.filter((el) => {
        const methodTitle = el.title.split(".")[0];
        return methodTitle === "Math";
      });
      const stringData = action.payload.filter((el) => {
        const methodTitle = el.title.split(".")[0];
        return methodTitle === "String";
      });
      const promiseData = action.payload.filter((el) => {
        const methodTitle = el.title.split(".")[0];
        return methodTitle === "Promise";
      });
      const currentData = arrayData;
      return {
        ...state,
        allData: action.payload,
        currentData,
        arrayData,
        objectData,
        mathData,
        stringData,
        promiseData,
      };
    case CHANGEFILTER:
      return { ...state, currentData: action.payload };
    case USERNICKNAME:
      return { ...state, userNickName: action.payload };
    default:
      return state;
  }
}

export default AllDataReducer;
