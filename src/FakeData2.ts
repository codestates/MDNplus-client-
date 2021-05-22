const fakeData2 = {
  allData: [
    {
      id: 0,
      userName: "Kim",
      userId: 15,
      title: "array.map 어떻게 사용하죠",
      body: "지금 개발 처음인데 어떻게 하면 되죠?",
      answers: [{ id: 0, userId: 5, userName: "kimcoding", qTitle: "array.map 어떻게 사용하죠", body: "이렇게 하면 됩니다", likes: 5, createdAt: "2021-05-04" }],
      likes: 5,
      tags: ["array", "javascript"],
      createdAt: "2021-05-04",
    },
    {
      id: 1,
      userName: "Park",
      userId: 17,
      title: "array.reduce 어떻게 사용하죠",
      body: "지금 개발 처음인데 어떻게 하면 되죠?",
      answers: [{ id: 0, userId: 3, userName: "mooncoding", qTitle: "array.reduce 어떻게 사용하죠", body: "이렇게 하면 됩니다", likes: 3, createdAt: "2021-05-25" }],
      likes: 10,
      tags: ["array", "javascript"],
      createdAt: "2021-05-21",
    },
    {
      id: 2,
      userName: "Lee",
      userId: 3,
      title: "질문자가 작성한 답변 제목",
      body: "지금 개발 처음인데 어떻게 하면 되죠?",
      answers: [{ id: 0, userId: 13, userName: "leecoding", qTitle: "array.filter 어떻게 사용하죠", body: "이렇게 하면 됩니다", likes: 1, createdAt: "2021-05-25" }],
      likes: 3,
      tags: ["array", "javascript"],
      createdAt: "2021-05-22",
    },
  ],
  myData: {
    id: 5,
    userName: "질문자",
    profile: "",
    //질문
    allData: [
      {
        id: 0,
        userId: 5,
        userName: "질문자",
        title: "질문자가 질문한 제목",
        body: "질문자가 질문한 내용",
        //질문자가 질문한 내용의 답변
        answers: [
          { id: 0, userId: 6, userName: "질문자가 질문한 내용의 답변자", qTitle: "답변자가 작성한 답변 제목", body: "답변자가 작성한 답변 내용", likes: 1, createdAt: "2021-05-04" },
          { id: 0, userId: 5, userName: "질문자가 질문한 내용의 답변자", qTitle: "질문자가 작성한 답변 제목", body: "답변자가 작성한 답변 내용", likes: 1, createdAt: "2021-05-04" },
        ],
        likes: 5,
        tags: ["태그1", "태그2"],
        createdAt: "2021-05-04",
      },
      {
        id: 1,
        userId: 5,
        userName: "kimcoding",
        title: "object.assign 어떻게 사용하나요2",
        body: "개발 처음이라 모르겠습니다",
        answers: [{ id: 1, userId: 15, userName: "sun", qTitle: "object.assign 어떻게 사용하나요2", body: "그건 이렇게 하면 됩니다", likes: 2, createdAt: "2021-05-04" }],
        likes: 6,
        tags: ["coding", "javascript"],
        createdAt: "2021-05-17",
      },
      {
        id: 2,
        userId: 5,
        userName: "질문자 테스트요",
        title: "object.assign 어떻게 사용하나요??",
        body: "개발 처음이라 모르겠습니다",
        answers: [{ id: 0, userId: 5, userName: "답변자 테스트", qTitle: "object.assign 어떻게 사용하나요??", body: "답변입니다...이렇게 하면 됩니다", likes: 5, createdAt: "2021-05-04" }],
        likes: 14,
        tags: ["java", "C++"],
        createdAt: "2021-05-13",
      },
    ],
  },
  //질문자가 작성한 답변들
  answers: [{ id: 0, userId: 5, userName: "질문자가 작성한 답변", qTitle: "질문자가 작성한 답변 제목", body: "질문자가 작성한 답변 내용", likes: 5, createdAt: "2021-05-04" }],
};

export default fakeData2;
