// 액션 타입
const FILTER = "AllData/FILTER" as const;
const CHANGEFILTER = "AllData/CHANGEFILTER" as const;
const SETWRITEMODE = "AllData/SETWRITEMODE" as const;

// 액션 생성 함수
export const filter = (data: Method[]) => ({ type: FILTER, payload: data });
export const changeFilter = (data: Method[]) => ({ type: CHANGEFILTER, payload: data });
export const setWriteMode = () => ({type: SETWRITEMODE})


// 액션 객체 타입 설정(타입스크립트)
type AllDataAction = ReturnType<typeof filter> | ReturnType<typeof changeFilter> | ReturnType<typeof setWriteMode>;

type Method = {
  id: number;
  title: string;
  body: string;
  count: number;
};

// 초기 state 타입 설정
type InitState = {
  allData: null | Method[];
  arrayData: null | Method[];
  objectData: null | Method[];
  currentData: null | Method[];
  writeMode: boolean;
};

// 초기 state 설정
const initialState = {
  allData: null,
  currentData: null,
  arrayData: null,
  objectData: null,
  writeMode: false
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
      const currentData = arrayData;
      return { ...state, allData: action.payload, currentData, arrayData, objectData };
    case CHANGEFILTER:
      return { ...state, currentData: action.payload}
    case SETWRITEMODE:
      console.log('writeMode 바껴짐')
      if(state.writeMode) {
        return { ...state, writeMode: false}
      } else {
        return { ...state, writeMode: true}
      }
    default:
      return state;
  }
}

export default AllDataReducer;
