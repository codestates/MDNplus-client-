const MYPAGEDATA = "MyPageData/MYPAGEDATA" as const;
const QUESTIONDATA = "QuestionData/CURRENTMYPAGEDATA" as const;
const ANSWERDATA = "AnswerData/CURRENTMYPAGEDATA" as const;
const ALLDATA = "AllData/ALLDATA" as const;

// allData: [
//   {
//     id: 0,
//     userName: "Kim",
//     userId: 15,
//     title: "array.map 어떻게 사용하죠",
//     body: "지금 개발 처음인데 어떻게 하면 되죠?",
//     answers: [{ id: 0, userId: 5, userName: "kimcoding", qTitle: "array.map 어떻게 사용하죠", body: "이렇게 하면 됩니다", likes: 5, createdAt: "2021-05-04" }],
//     likes: 5,
//     tags: ["array", "javascript"],
//     createdAt: "2021-05-04",
//   },

type AllData = {
  user: {
    nickName: string;
    image: string;
    _id: string;
  };
  questions: {
    tags: string[];
    commentCount: number;
    like: number;
    pureBody: string;
    _id: string;
    title: string;
    body: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }[];

  comments: {
    like: number;
    _id: string;
    pureBody: string;
    questionId: {
      _id: string;
      title: string;
    };
    content: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }[];
};

// type AllData = {
//   id: number;
//   userName: string;
//   userId: number;
//   title: string;
//   body: string;
//   answers: {
//     id: number;
//     userId: number;
//     userName: string;
//     qTitle: string;
//     body: string;
//     likes: number;
//     createdAt: string;
//   }[];
//   likes: number;
//   tags: string[];

//   createdAt: string;
// };

// type DataType = {
//   myData: {
//     id: number;
//     userName: string;
//     profile: string;
//     allData: {
//       id: number;
//       userId: number;
//       userName: string;
//       title: string;
//       body: string;
//       answers: {
//         id: number;
//         userId: number;
//         userName: string;
//         qTitle: string;
//         body: string;
//         likes: number;
//         createdAt: string;
//       }[];
//       likes: number;
//       tags: string[];
//       createdAt: string;
//     }[];
//   };
//   answers: {
//     id: number;
//     userId: number;
//     userName: string;
//     qTitle: string;
//     body: string;
//     likes: number;
//     createdAt: string;
//   }[];
// };

// type QuestionType = {
//   id: number;
//   userName: string;
//   profile: string;
//   allData: {
//     id: number;
//     userId: number;
//     userName: string;
//     title: string;
//     body: string;
//     answers: {
//       id: number;
//       userId: number;
//       userName: string;
//       qTitle: string;
//       body: string;
//       likes: number;
//       createdAt: string;
//     }[];
//     likes: number;
//     tags: string[];
//     createdAt: string;
//   }[];
// };

// type AnswerType = {
//   id: number;
//   userId: number;
//   userName: string;
//   qTitle: string;
//   body: string;
//   likes: number;
//   createdAt: string;
// }[];

export const allDataAction = (mdnAllData: AllData | null) => ({
  type: ALLDATA,
  payload: mdnAllData,
});

// export const myPageAction = (myPageData: DataType) => ({
//   type: MYPAGEDATA,
//   payload: myPageData,
// });

// export const questionAction = (questionData: QuestionType | undefined) => ({
//   type: QUESTIONDATA,
//   payload: questionData,
// });
// export const answerAction = (answerData: AnswerType | undefined) => ({
//   type: ANSWERDATA,
//   payload: answerData,
// });

// type MyPageDataAction = ReturnType<typeof myPageAction> | ReturnType<typeof questionAction> | ReturnType<typeof answerAction> | ReturnType<typeof allDataAction>;

type MyPageDataAction = ReturnType<typeof allDataAction>;

type InitState = {
  mdnAllData: null | undefined | AllData;
  // myPageData: null | DataType;
  // questionData: QuestionType | undefined;
  // answerData: AnswerType | undefined;
};

const initialState = {
  mdnAllData: null,
  // myPageData: null,
  // questionData: undefined,
  // answerData: undefined,
};

function MyPageReducer(state: InitState = initialState, action: MyPageDataAction): InitState {
  switch (action.type) {
    case ALLDATA:
      return { ...state, mdnAllData: action.payload };
    // case MYPAGEDATA:
    //   return { ...state, myPageData: action.payload };
    // case QUESTIONDATA:
    //   return { ...state, questionData: action.payload };
    // case ANSWERDATA:
    //   return { ...state, answerData: action.payload };
    default:
      return state;
  }
}

export default MyPageReducer;
