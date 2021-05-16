import { useSelector } from "react-redux";
import { RootState } from "../Redux/";

type ContentType = {
  title: string;
  body: string;
  updatedAt: string;
};

type DataType = {
  userNamee: string;
  content: Array<ContentType>;
};

function useMyPageData() {
  const myPageState: any = useSelector((state: RootState) => state.MyPageReducer);

  return { myPageState };
}

export default useMyPageData;
