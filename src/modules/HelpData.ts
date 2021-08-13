const STOREDATA = "HelpData/STORE" as const
const FILTER = "HelpData/FILTER" as const

export const storeData = (data:AllQuestionstype) => ({ type: STOREDATA, payload: data})
export const filter = (data:string) => ({ type: FILTER, payload: data})

type HelpDataAction = 
| ReturnType<typeof storeData>
| ReturnType<typeof filter>

type UserData = {
    githubId: null;
    image: null;
    kakaoId: string;
    nickName: string;
    _id: string;
}

type Question = {
    tags: string[];
    like: number;
    title: string;
    body: string;
    userId: UserData;
    createdAt: string;
    updatedAt: string;
    commentCount: number;
    _id: string;
}

type AllQuestionstype = {
    latestQuestion: Question[];
    popularityQuestion: Question[];
}

type HelpDataState = {
    allQuestions: null | AllQuestionstype;
    selectedQuestions: null | Question[],
    currentData: null | Question;
}

const initialState = {
    allQuestions: null,
    selectedQuestions: null,
    currentData: null,
}

function HelpDataReducer(state:HelpDataState = initialState, action: HelpDataAction) {
    switch(action.type) {
        case STOREDATA:
            return {...state, allQuestions: action.payload, selectedQuestions: action.payload.latestQuestion}
        case FILTER:
            if(action.payload === '최신순') {
                return {...state, selectedQuestions: state.allQuestions?.latestQuestion}
            } else if(action.payload === '인기순') {
                return {...state, selectedQuestions: state.allQuestions?.popularityQuestion}
            } else {
                return
            }
        default:
            return state
    }
}

export default HelpDataReducer

