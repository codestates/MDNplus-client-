// redux 에서는 action 하고 reduce 가 한꺼번에 들어감. module 이라고 보면됨.

//액션 선언.

const DISPLAYMYDATA = "MyPageRedux/DISPLAYMYDATA" as const;

export const displayMyData = (el: object) => ({
  type: DISPLAYMYDATA,
  payload: el,
});

//액션에 대한 타입 설정.

type MyPageAction = ReturnType<typeof displayMyData>;

//초깃값 선언하기전 타입설정

type DataState = {
  myData: null | object;
};

const initialState: DataState = {
  myData: null,
};

//state 하고 action 타입설정/ state 는 initianState 로 설정해줌
// 리듀서 함수 리턴타입은 DataState 타입.
function myPageReducer(state: DataState = initialState, action: MyPageAction): DataState {
  switch (action.type) {
    case DISPLAYMYDATA:
      return { myData: action.payload };

    default:
      return state;
  }
}

export default myPageReducer;
