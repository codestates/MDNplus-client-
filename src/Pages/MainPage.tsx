import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import useAllData from "../Hooks/useAllData";
import FakeData from "../FakeData";
import { useEffect } from "react";

// 목표: 메인페이지에 더미데이터들 랜더링
// 1. 더미데이터 생성 alldata, arrayData, objectData를 가지고 있는 state를 만들어야됨. - 리덕스, 커스텀 훅 사용
// 2. 처음 state allData가 null일 경우, 로딩중입니다 표시
// 2-1. useEffect 실행하여 dispatch 메소드로 allData, arrayData, objectData에 데이터들을 넣어줌

type Method = {
  id: number;
  title: string;
  body: string;
  count: number;
};

type AA = {
  arrayData: Array<Method>;
};

function MainPage() {
  const { state, onFilterArray, onFilterObject } = useAllData();

  const handleFilterArr = () => {
    return FakeData.filter((el) => {
      const methodTitle = el.title.split(".")[0];
      return methodTitle === "Array";
    });
  };

  const handleFilterObj = () => {
    return FakeData.filter((el) => {
      const methodTitle = el.title.split(".")[0];
      return methodTitle === "Object";
    });
  };

  useEffect(() => {
    const arrayMethods = handleFilterArr();
    const objectMethods = handleFilterObj();
    if (arrayMethods) {
      onFilterArray(arrayMethods);
    }
    if (objectMethods) {
      onFilterObject(objectMethods);
    }
    console.log("state 바꿔짐");
  }, []);

  console.log(state.arrayData);

  return (
    <div>
      {state.arrayData === null ? (
        <div>로딩 중입니다.</div>
      ) : (
        state.arrayData.map((el: any) => {
          return <div key={el.id}>{el.title}</div>;
        })
      )}
    </div>
  );
}

export default MainPage;
