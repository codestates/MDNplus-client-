const MYPAGEDATA = "MyPageData/MYPAGEDATA" as const;
const QUESTIONDATA = "QuestionData/CURRENTMYPAGEDATA" as const;
const ANSWERDATA = "AnswerData/CURRENTMYPAGEDATA" as const;

type DataType = {
  myData: {
    id: number;
    userName: string;
    profile: string;
    allData: {
      id: number;
      userId: number;
      userName: string;
      title: string;
      body: string;
      answers: {
        id: number;
        userId: number;
        userName: string;
        qTitle: string;
        body: string;
        likes: number;
        createdAt: string;
      }[];
      likes: number;
      tags: string[];
      createdAt: string;
    }[];
  };
  answers: {
    id: number;
    userId: number;
    userName: string;
    qTitle: string;
    body: string;
    likes: number;
    createdAt: string;
  }[];
};

type QuestionType = {
  id: number;
  userName: string;
  profile: string;
  allData: {
    id: number;
    userId: number;
    userName: string;
    title: string;
    body: string;
    answers: {
      id: number;
      userId: number;
      userName: string;
      qTitle: string;
      body: string;
      likes: number;
      createdAt: string;
    }[];
    likes: number;
    tags: string[];
    createdAt: string;
  }[];
};

type AnswerType = {
  id: number;
  userId: number;
  userName: string;
  qTitle: string;
  body: string;
  likes: number;
  createdAt: string;
}[];

export const myPageAction = (myPageData: DataType) => ({
  type: MYPAGEDATA,
  payload: myPageData,
});

export const questionAction = (questionData: QuestionType | undefined) => ({
  type: QUESTIONDATA,
  payload: questionData,
});
export const answerAction = (answerData: AnswerType | undefined) => ({
  type: ANSWERDATA,
  payload: answerData,
});

type MyPageDataAction = ReturnType<typeof myPageAction> | ReturnType<typeof questionAction> | ReturnType<typeof answerAction>;

type InitState = {
  myPageData: null | DataType;
  questionData: QuestionType | undefined;
  answerData: AnswerType | undefined;
};

const initialState = {
  myPageData: null,
  questionData: undefined,
  answerData: undefined,
};

function MyPageReducer(state: InitState = initialState, action: MyPageDataAction): InitState {
  switch (action.type) {
    case MYPAGEDATA:
      return { ...state, myPageData: action.payload };
    case QUESTIONDATA:
      return { ...state, questionData: action.payload };
    case ANSWERDATA:
      return { ...state, answerData: action.payload };
    default:
      return state;
  }
}

export default MyPageReducer;
