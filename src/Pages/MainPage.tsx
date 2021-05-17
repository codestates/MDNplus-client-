import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import useAllData from "../Hooks/useAllData";
import FakeData from "../FakeData";
import { useEffect } from "react";
import { useHistory } from 'react-router';
import useContentData from '../Hooks/useContentData';

// type DataOption = {
//   arrayData: Method[];
//   objectData: Method[];
// };

type Method = {
  id: number;
  title: string;
  body: string;
  count: number;
};

function MainPage() {
<<<<<<< HEAD
  const { allState, onFilter, onClickFilter } = useAllData();
  const { arrayData, objectData, currentData } = allState;
  const { onClickMethod } = useContentData()
  const history = useHistory()
=======
  const { state, onFilterArray, onFilterObject } = useAllData();
  if (state.arrayData) {
    const arrayData = state.arrayData;
  }
>>>>>>> 36cb644f88b4ce9bc4f5416b7a269e2abf2a265c

  // 왼쪽 사이드바에 메소드 타이틀을 클릭했을 때, 오른쪽에 데이터들을 변경하기 위한 함수
  const handleClickFilter = (MethodTitle: string) => {
    if (MethodTitle === "object") {
      if (objectData) {
        onClickFilter(objectData);
      }
    }
    if (MethodTitle === "array") {
      if (arrayData) {
        onClickFilter(arrayData);
      }
    }
  };

  // 오른쪽에 렌더링된 하나의 메소드 박스를 클릭했을 시, ContentPage로 이동하기 위한 함수
  const handleClickMethod = (method:Method )=> {
    onClickMethod(method) // ContentData 값을 변경하기 위한 dispatch 메소드
    history.push('/ContentPage')
  }

  // 처음 스토어에 저장되어 있는 값들은 null이므로 '로딩 중입니다'가 렌더링 된다. 
  // 컴포넌트가 마운트된 후, useEffect가 실행되어 서버와 통신하여 실제 데이터들을 가져온다.(여기서는 더미데이터 사용)
  useEffect(() => {
<<<<<<< HEAD
    onFilter(FakeData);
  }, []);

  return (
    <Container>
      <LeftContainer>
        {arrayData && objectData ? (
          <SideList>
            <SideMethod
              onClick={() => {
                handleClickFilter("array");
              }}
            >
              array {arrayData.length}
            </SideMethod>
            <SideMethod
              onClick={() => {
                handleClickFilter("object");
              }}
            >
              object {objectData.length}
            </SideMethod>
          </SideList>
        ) : null}
      </LeftContainer>
      <RightContainer>
        {currentData === null ? (
          <div>로딩중입니다</div>
        ) : (
          currentData.map((el) => (
            <div key={el.id}>
              <MethodBox onClick={(() => {handleClickMethod(el)})}>
                <MethodTitle>{el.title}</MethodTitle>
                {el.body ? <MethodBody>{el.body.slice(0, 40)}</MethodBody> : <MethodBody>빈칸</MethodBody>}
              </MethodBox>
              <MethodCount>{el.count}</MethodCount>
            </div>
          ))
        )}
      </RightContainer>
    </Container>
=======
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
>>>>>>> 36cb644f88b4ce9bc4f5416b7a269e2abf2a265c
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

const SideList = styled.div`
  padding: 30px;
`;
const SideMethod = styled.div`
  font-size: 20px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    font-size: 24px;
  }
`;

const RightContainer = styled.div`
  background: #dcdcdc;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px;
  row-gap: 30px;
  column-gap: 30px;
  padding: 50px;
`;

const MethodBox = styled.div`
  border: 1px solid black;
  border-bottom: none;
  padding: 0px 5px 15px 15px;
  height: 120px;
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
