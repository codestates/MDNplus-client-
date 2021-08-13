const FILTER = "AllData/FILTER" as const
const CHANGEFILTER = "AllData/CHANGEFILTER" as const;
const USERNICKNAME = "AllData/USERNICKNAME" as const;

export const filter = (data: Method[]) => ({ type: FILTER, payload: data });
export const changeFilter = (data: Method[]) => ({ type: CHANGEFILTER, payload: data });
export const userNickName = (userNickName: string) => ({ type: USERNICKNAME, payload: userNickName });

type AllDataAction = ReturnType<typeof filter> | ReturnType<typeof changeFilter> | ReturnType<typeof userNickName>;

type Method = {
  _id: string;
  title: string;
  body: string;
  pureBody: string;
  count: number;
  updatedAt: string;
  createdAt: string;
};

type InitState = {
  allData: null | Method[];
  arrayData: null | Method[];
  objectData: null | Method[];
  mathData: null | Method[];
  stringData: null | Method[];
  promiseData: null | Method[];
  currentData: null | Method[];
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

function AllDataReducer(state: InitState = initialState, action: AllDataAction) {
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
      return { ...state, allData: action.payload, currentData, arrayData, objectData, mathData, stringData, promiseData };
    case CHANGEFILTER:
      return { ...state, currentData: action.payload };
    case USERNICKNAME:
      return { ...state, userNickName: action.payload };
    default:
      return state;
  }
}

export default AllDataReducer;
