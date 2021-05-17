import { useSelector } from "react-redux";
import { RootState } from "../Redux/";

type ContentType = {
  title: string;
  body: string;
  updatedAt: string;
};

type DataType = {
  myPageUserName: string;
  content: Array<ContentType>;
};

function useMyPageData() {
  const myPageState = useSelector((state: RootState) => state.MyPageReducer);

  return { myPageState };
}

export default useMyPageData;
