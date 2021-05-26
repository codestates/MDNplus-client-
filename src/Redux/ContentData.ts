const CLICKMETHOD = "ContentData/CLICKMETHOD" as const;
const CHANGECONTENT = "ContentData/CHANGCONTENT" as const;

export const clickMethod = (data: any) => ({ type: CLICKMETHOD, payload: data });
export const changeContent = (data: any) => ({ type: CHANGECONTENT, payload: data });

type ContentDataAction = ReturnType<typeof clickMethod> | ReturnType<typeof changeContent>;

type Method = {
  id: number;
  title: string;
  body: string;
  count: number;
};

type InitState = {
  contentData: any
};

const initialState = {
  contentData: null,
};

function ContentDataReducer(state: InitState = initialState, action: ContentDataAction) {
  switch (action.type) {
    case CLICKMETHOD:
        console.log(action.payload)
        return { ...state, contentData: action.payload };
    case CHANGECONTENT:
        console.log('변경해줘야됨')
        const newState = {...state}
        if(newState.contentData) {
            newState.contentData.body = action.payload
        }
        return newState
    default:
        return state;
  }
}

export default ContentDataReducer;
