//액션 타입
const STOREDATA = "HelpData/STORE" as const
const FILTERFAST = "HelpData/FILTERFAST" as const
const FILTERPOPULAR = "HelpData/FILTERPOPULAR" as const
const CLICKQUESTION = "HelpData/CLICKQUESTION" as const

//액션 생성 함수
export const storeData = (data:Question[]) => ({ type: STOREDATA, payload: data})
export const filterFast = () => ({ type: FILTERFAST})
export const filterPopular = () => ({ type: FILTERPOPULAR})
export const clickQuestion = (data:Question) => ({type: CLICKQUESTION, payload: data})

//액션 객체 타입
type HelpDataAction = 
| ReturnType<typeof storeData>
| ReturnType<typeof filterFast>
| ReturnType<typeof filterPopular>
| ReturnType<typeof clickQuestion>

//answer 타입 설정
// type Answers = {
//     id: number;
//     userId: number;
//     userName: string;
//     qTitle: string;
//     body: string;
//     likes: number;
//     createdAt: string;
// }

// question 타입 설정
type Question = {
    id: string;
    tags: string[];
    like: number;
    title: string;
    body: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    commentCount: number;
}

//initialState 타입 설정
type HelpDataState = {
    allQuestions: null | Question[];
    currentData: null | Question;
    latestQuestions: null | Question[];
    popularityQuestion: null | Question[];
}

//initialState 초기값 설정
const initialState = {
    allQuestions: null,
    currentData: null,
    latestQuestions: null,
    popularityQuestion: null
}

function HelpDataReducer(state:HelpDataState = initialState, action: HelpDataAction) {
    switch(action.type) {
        case STOREDATA:
            console.log('여기서 저장해줘야됨')
            return {...state, allQuestions: action.payload}
        case FILTERFAST:
            console.log('최신순으로 필터')
            return state
        case FILTERPOPULAR:
            console.log('인기순으로 필터')
            return state
        case CLICKQUESTION:
            console.log('QcontentPage로 들어가게 될 객체를 업데이트 해야 됨')
            return state
        default:
            return state
    }
}

// console.log(fakeData2.allData.sort(date_ascending))

// 배열 안의 요소들을 시간 날짜별로 오름차순하는 코드
function date_ascending(a:any, b:any) {
    const dateA = new Date(a['createdAt']).getTime()
    const dateB = new Date(b['createdAt']).getTime()

    return dateA > dateB ? 1 : -1
}

// 배열 안의 요소들을 시간 날짜별로 내림차순하는 코드
function date_descending(a:any, b:any) {
    const dateA = new Date(a['createdAt']).getTime()
    const dateB = new Date(b['createdAt']).getTime()

    return dateA < dateB ? 1 : -1
}

export default HelpDataReducer

