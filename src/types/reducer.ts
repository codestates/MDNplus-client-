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

export type CommentType = {
  like: number;
  _id: string;
  questionId: string;
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
  comments: CommentType;
};
