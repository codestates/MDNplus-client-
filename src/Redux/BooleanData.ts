const SETISLOGIN = "ContentData/SETISLOGIN" as const;
const SETWRITEMODE = "ContentData/SETWRITEMODE" as const;
const SETISLOGINOPEN = "ContentData/SETISLOGINOPEN" as const;

export const setIsLogin = () => ({ type: SETISLOGIN });
export const setWriteMode = () => ({ type: SETWRITEMODE });
export const setIsLogInOpen = (boolean:Boolean) => ({ type: SETISLOGINOPEN, payload: boolean });

type BooleanData = ReturnType<typeof setIsLogin> | ReturnType<typeof setWriteMode> | ReturnType<typeof setIsLogInOpen>;

type InitState = {
  isLogin: Boolean;
  writeMode: Boolean;
  isLogInOpen: Boolean;
};

const initialState = {
  isLogin: false,
  writeMode: false,
  isLogInOpen: false,
};

function BooleanDataReducer(state: InitState = initialState, action: BooleanData) {
  switch (action.type) {
    case SETISLOGIN:
      if (state.isLogin) {
        return { ...state, isLogin: false };
      } else {
        return { ...state, isLogin: true };
      }
    case SETWRITEMODE:
      console.log("writeMode 바껴짐");
      if (state.writeMode) {
        return { ...state, writeMode: false };
      } else {
        return { ...state, writeMode: true };
      }

    case SETISLOGINOPEN:
        console.log('로그인 모달 상태 바꿔줘야됨')
        if(action.payload === true) {
            return { ...state, isLogInOpen: false };
        } else {
            return { ...state, isLogInOpen: true };

        }
    default:
      return state;
  }
}

export default BooleanDataReducer;
