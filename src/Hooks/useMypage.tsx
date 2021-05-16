import { useSelector } from "react-redux";
import { RootState } from "../Redux";

type ContentType = {
  title: string;
  body: string;
  updatedAt: string;
};

type DataType = {
  userNamee: string;
  content: Array<ContentType>;
};
function useMypage() {
  const myPageState = useSelector((state: RootState) => state.MyPageRedux);
  const { myData }: any = myPageState;

  const { userNamee, content }: DataType = myData;

  return { userNamee, content };
}

export default useMypage;
