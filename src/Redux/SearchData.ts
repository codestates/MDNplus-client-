const SEARCHDATA = "SearchData/SEARCHDATA" as const;
const SEARCHWORD = "SearchWord/SEARCHWORD" as const;
type SearchDataType = {
  id: number;
  title: string;
  body: string;
  count: number;
};

export const searchData = (data: SearchDataType[]) => ({ type: SEARCHDATA, payload: data });
export const searchWord = (word: string) => ({ type: SEARCHWORD, payload: word });

type SearchDataAction = ReturnType<typeof searchData> | ReturnType<typeof searchWord>;

type InitStateType = {
  contentData: null | SearchDataType[];
  word: null | string;
};

const initialState = {
  contentData: null,
  word: null,
};

function SearchDataReducer(state: InitStateType = initialState, action: SearchDataAction): InitStateType {
  switch (action.type) {
    case SEARCHDATA:
      return { ...state, contentData: action.payload };
    case SEARCHWORD:
      return { ...state, word: action.payload };

    default:
      return state;
  }
}

export default SearchDataReducer;
