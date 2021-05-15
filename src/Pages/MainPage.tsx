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

type DataOption = {
  arrayData: Method[];
  objectData: Method[];
};

function MainPage() {
  const { state, onFilterArray, onFilterObject } = useAllData();
  const { arrayData }: DataOption = state;
  const { objectData }: DataOption = state;

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

  console.log(arrayData);
  return (
    <Container>
      <LeftContainer>
        {arrayData && objectData ? (
          <>
            <div>array {arrayData.length}</div>
            <div>object {objectData.length}</div>
          </>
        ) : null}
      </LeftContainer>
      <RightContainer>
        {arrayData === null ? (
          <div>로딩중입니다</div>
        ) : (
          arrayData.map((el) => (
            <div key={el.id}>
              <MethodBox>
                <MethodTitle>{el.title}</MethodTitle>
                {el.body ? <MethodBody>{el.body.slice(0, 40)}</MethodBody> : <MethodBody>빈칸</MethodBody>}
              </MethodBox>
              <MethodCount>{el.count}</MethodCount>
            </div>
          ))
        )}
      </RightContainer>
    </Container>
  );
}
export default MainPage;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  width: 100vw;
  height: 100vh;
`;

const LeftContainer = styled.div``;

const RightContainer = styled.div`
  background: #dcdcdc;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px;
  row-gap: 30px;
  column-gap: 30px;
  padding: 50px;
`;

const MethodsContainer = styled.div``;

const MethodBox = styled.div`
  border: 1px solid black;
  border-bottom: none;
  padding: 0px 5px 15px 15px;
  height: 100px;
  background: white;
`;

const MethodTitle = styled.h3``;

const MethodBody = styled.div``;

const MethodCount = styled.div`
  border: 1px solid black;
  border-top: 1px solid #dcdcdc;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  background: white;
`;
