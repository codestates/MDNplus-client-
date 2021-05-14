// 액션 타입
const FILTERARRAY = "AllData/FILTERARRAY" as const;
const FILTEROBJECT = "AllData/FILTEOBJECT" as const;
// 액션 생성 함수
export const filterArray = (data: object[]) => ({ type: FILTERARRAY, payload: data });
export const filterObject = (data: object[]) => ({ type: FILTEROBJECT, payload: data });

// 액션 객체 타입 설정(타입스크립트)
type AllDataAction = ReturnType<typeof filterArray> | ReturnType<typeof filterObject>;

type Method = {
  id: number;
  title: string;
  body: string;
  count: number;
};

type ArrayData = {
  arrayData: Array<Method>;
};

// 초기 state 타입 설정
type InitState = {
  allData: null | object[];
  arrayData: null | object[];
  objectData: null | object[];
};

// 초기 state 설정
const initialState = {
  allData: null,
  arrayData: null,
  objectData: null,
};

function AllDataReducer(state: InitState = initialState, action: AllDataAction) {
  switch (action.type) {
    case FILTERARRAY:
      return { ...state, arrayData: action.payload };
    case FILTEROBJECT:
      return { ...state, objectData: action.payload };
    default:
      return state;
  }
}

export default AllDataReducer;
