import { useSelector } from "react-redux";
import { RootState } from "../Redux/";

function useMyPageData() {
  const myPageState = useSelector((state: RootState) => state.MyPageReducer);

  console.log(myPageState);

  return { myPageState };
}

export default useMyPageData;
