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
  const myPageState: any = useSelector((state: RootState) => state.MyPageReducer);

  const { myPageUserData, myPageArrayData, myPageCurrentData, myPageObjectData } = myPageState;

  return { myPageUserData, myPageArrayData, myPageCurrentData, myPageObjectData };
}

export default useMyPageData;
