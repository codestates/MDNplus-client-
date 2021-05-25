const SETISLOGIN = "ContentData/SETISLOGIN" as const;
const SETWRITEMODE = "ContentData/SETWRITEMODE" as const;

export const setIsLogin = () => ({ type: SETISLOGIN });
export const setWriteMode = () => ({ type: SETWRITEMODE });

type BooleanData = ReturnType<typeof setIsLogin> | ReturnType<typeof setWriteMode>

type InitState = {
    isLogin: Boolean;
    writeMode: Boolean;
};

const initialState = {
    isLogin: false,
    writeMode: false
};

function BooleanDataReducer(state: InitState = initialState, action: BooleanData) {
  switch (action.type) {
    case SETISLOGIN:
        if(state.isLogin) {
            return {...state, isLogin: false}
        } else {
            return {...state, isLogin: true}
        }
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

export default BooleanDataReducer;
