const USERDATA = "MyPageData/USERDATA" as const;

export const userData = (el: object) => ({
  type: USERDATA,
  payload: el,
});

type UserDataAction = ReturnType<typeof userData>;

type DataType = {
  userData: null | object;
};

const initialState = {
  userData: null,
};

function MyPageReducer(state: DataType = initialState, action: UserDataAction): DataType {
  switch (action.type) {
    case USERDATA:
      return { ...state, userData: action.payload };
  }
}

export default MyPageReducer;
