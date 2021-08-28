// wiki
export type MethodType = {
  _id: string;
  title: string;
  body: string;
  pureBody: string;
  count: number;
  updatedAt: string;
};

// helpdesk
export type AllQuestionsType = {
  latestQuestion: QuestionType[];
  popularityQuestion: QuestionType[];
};

export type QuestionType = {
  tags: string[];
  commentCount: number;
  pureBody: string;
  like: number;
  _id: string;
  title: string;
  body: string;
  userId: {
    nickName: string;
    kakaoId: string;
    githubId: string;
    image: string;
    _id: string;
    __v: number;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
  isLike?: boolean;
};

type QuestionIdType = {
  title: string;
  _id: string;
};

export type CommentType = {
  like: number;
  _id: string;
  questionId: QuestionIdType;
  content: string;
  pureBody: string;
  userId: {
    nickName: string;
    kakaoId: string;
    githubId: string;
    image: string;
    _id: string;
    __v: number;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
  isLike: boolean;
};

export type DataType = {
  question: QuestionType;
  comments: CommentType[];
};

export type MyDataType = {
  user: {
    nickName: string;
    image: string;
    _id: string;
  };
  questions: QuestionType[];

  comments: CommentType[];
};

// SearchPage
export type SearchDataType = {
  mainContent?: {
    count: number;
    _id: string;
    title: string;
    pureBody: string;
    body: string;
    updatedAt: string;
  }[];
  helpdeskContent: {
    tags: string[];
    commentCount: number;
    like: number;
    pureBody: string;
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
