const SEARCHDATA = "SearchData/SEARCHDATA" as const;
const SEARCHWORD = "SearchWord/SEARCHWORD" as const;
const SEARCSELECT = "SearchSelect/SEARCSELECT" as const;
const SEARCSHRESULT = "SearchResult/SEARCSHRESULT" as const;

type SearchDataType = {
  mainContent?: {
    count: number;
    _id: string;
    title: string;
    body: string;
    updatedAt: string;
  }[];
  helpdeskContent: {
    tags: string[];
    commentCount: number;
    like: number;
    _id: string;
    title: string;
    body: string;
    userId: {
      nickName: string;
      kakaoId: string | null;
      githubId: string | null;
      image: string;
      _id: string;
      __v: number;
    };
    createdAt: string;
    updatedAt: string;
    __v: number;
  }[];
};

// type SearchDataType = {
//   id: number;
//   title: string;
//   body: string;
//   count: number;
// };

export const searchData = (data: SearchDataType) => ({ type: SEARCHDATA, payload: data });
export const searchWord = (word: string) => ({ type: SEARCHWORD, payload: word });
export const searchSelect = (tag: string) => ({ type: SEARCSELECT, payload: tag });
export const searchResult = (result: string | null, tagResult: string | null) => ({ type: SEARCSHRESULT, payload: { result, tagResult } });

type SearchDataAction = ReturnType<typeof searchData> | ReturnType<typeof searchWord> | ReturnType<typeof searchSelect> | ReturnType<typeof searchResult>;

type InitStateType = {
  contentData: null | undefined | SearchDataType;
  word: null | string;
  tag: null | string;
  result: null | string;
  tagResult: null | string;
};

const initialState = {
  contentData: null,
  word: null,
  tag: null,
  result: null,
  tagResult: null,
};

function SearchDataReducer(state: InitStateType = initialState, action: SearchDataAction): InitStateType {
  switch (action.type) {
    case SEARCHDATA:
      return { ...state, contentData: action.payload };
    case SEARCHWORD:
      return { ...state, word: action.payload };
    case SEARCSELECT:
      return { ...state, tag: action.payload };
    case SEARCSHRESULT:
      return { ...state, result: action.payload.result, tagResult: action.payload.tagResult };

    default:
      return state;
  }
}

export default SearchDataReducer;
