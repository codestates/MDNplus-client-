//액션 타입
const STOREDATA = "HelpData/STORE" as const
const FILTER = "HelpData/FILTER" as const

//액션 생성 함수
export const storeData = (data:AllQuestionstype) => ({ type: STOREDATA, payload: data})
export const filter = (data:string) => ({ type: FILTER, payload: data})

//액션 객체 타입
type HelpDataAction = 
| ReturnType<typeof storeData>
| ReturnType<typeof filter>

// Question에 들어있는 userId를 위한 타입 설정
type UserData = {
    githubId: null;
    image: null;
    kakaoId: string;
    nickName: string;
    _id: string;
}

// question 타입 설정
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

//initialState 타입 설정
type HelpDataState = {
    allQuestions: null | AllQuestionstype;
    selectedQuestions: null | Question[],
    currentData: null | Question;
}

//initialState 초기값 설정
const initialState = {
    allQuestions: null,
    selectedQuestions: null,
    currentData: null,
}

function HelpDataReducer(state:HelpDataState = initialState, action: HelpDataAction) {
    switch(action.type) {
        case STOREDATA:
            // 전체 데이터 저장하고, 기본으로 selectedQuestions에 최신순 질문 데이터들을 넣어줌
            return {...state, allQuestions: action.payload, selectedQuestions: action.payload.latestQuestion}
        case FILTER:
            console.log('최신순이면 최신순으로, 인기순이면 인기순으로 필터')
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

// // 배열 안의 요소들을 시간 날짜별로 오름차순하는 코드
// function date_ascending(a:any, b:any) {
//     const dateA = new Date(a['createdAt']).getTime()
//     const dateB = new Date(b['createdAt']).getTime()

//     return dateA > dateB ? 1 : -1
// }

// // 배열 안의 요소들을 시간 날짜별로 내림차순하는 코드
// function date_descending(a:any, b:any) {
//     const dateA = new Date(a['createdAt']).getTime()
//     const dateB = new Date(b['createdAt']).getTime()

//     return dateA < dateB ? 1 : -1
// }

export default HelpDataReducer

