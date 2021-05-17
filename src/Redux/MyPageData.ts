const MYPAGEUSERDATA = "MyPageData/MYPAGEUSERDATA" as const;
const MYPAGEARRAYDATA = "MyPageData/MYPAGARRAYDATA" as const;
const MYPAGEOBJECTDATA = "MyPageData/MYPAGOBJECTDATA" as const;
const MYPAGECURRENTDATA = "MyPageData/MYPAGCURRENTDATA" as const;

export const myPageUserAction = (el: DataType) => ({
  type: MYPAGEUSERDATA,
  payload: el,
});
export const myPageArrayAction = (el: ContentType[]) => ({
  type: MYPAGEARRAYDATA,
  payload: el,
});

export const myPageObjectAction = (el: ContentType[]) => ({
  type: MYPAGEOBJECTDATA,
  payload: el,
});

export const myPageCurrentAction = (el: ContentType[]) => ({
  type: MYPAGECURRENTDATA,
  payload: el,
});

type DataAction = ReturnType<typeof myPageUserAction> | ReturnType<typeof myPageArrayAction> | ReturnType<typeof myPageObjectAction> | ReturnType<typeof myPageCurrentAction>;

type ContentType = {
  id: number;
  title: string;
  body: string;
};

type DataType = {
  myPageUserName: string;
  content: Array<ContentType>;
};
type typeDataType = {
  myPageUserData: null | DataType;
  myPageArrayData: null | ContentType[];
  myPageObjectData: null | ContentType[];
  myPageCurrentData: null | ContentType[];
};

const initialState = {
  myPageUserData: null,
  myPageArrayData: null,
  myPageObjectData: null,
  myPageCurrentData: null,
};

function MyPageReducer(state: typeDataType = initialState, action: DataAction): typeDataType {
  switch (action.type) {
    case MYPAGEUSERDATA:
      return { ...state, myPageUserData: action.payload };
    case MYPAGEARRAYDATA:
      return { ...state, myPageArrayData: action.payload };
    case MYPAGEOBJECTDATA:
      return { ...state, myPageObjectData: action.payload };
    case MYPAGECURRENTDATA:
      return { ...state, myPageCurrentData: action.payload };
    default:
      return state;
  }
}

export default MyPageReducer;
