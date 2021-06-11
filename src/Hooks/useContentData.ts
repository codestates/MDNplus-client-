import {useDispatch, useSelector} from 'react-redux'
import { RootState } from "../Redux";
import { useCallback } from "react";
import { clickMethod, changeContent  } from "../Redux/ContentData"

type Method = {
    id: number;
    title: string;
    body: string;
    count: number;
  };

// 메인페이지에서 메소드 클릭시 이동하게 되는 ContentPage에서 사용하기 위해 만든 커스텀 훅
// ContentPage에서 EditPage로 이동할 때, 동일한 state를 사용함
function useContentData() {
    const contentState = useSelector((state: RootState) => state.ContentDataReducer);
    const dispatch = useDispatch()
    const onClickMethod = useCallback((data:any) => dispatch(clickMethod(data)), [dispatch]);
    const onChangeContent = useCallback((data:any) => dispatch(changeContent(data)), [dispatch])
    return {contentState, onClickMethod, onChangeContent}
}

export default useContentData