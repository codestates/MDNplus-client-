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
  const myPageState: any = useSelector((state: RootState) => state.MyPageRedux);

  console.log(myPageState.myData.userNamee);

  return { myPageState };
}

export default useMypage;
