import styled from "styled-components";
import useAllData from "../Hooks/useAllData";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useContentData from "../Hooks/useContentData";
import thinkingIcon from "../img/thinking.png";
import axios from "axios";
import useBooleanData from "../Hooks/useBooleanData";
import Loading from "../styled-components/Loading";

type Method = {
  _id: string;
  title: string;
  body: string;
  pureBody: string;
  count: number;
  updatedAt: string;
  createdAt: string;
};

function MainPage() {
  const [firstOption, setFirstOption] = useState("javascript");
  const { allState, onFilter, onChangeFilter } = useAllData();
  const { arrayData, objectData, mathData, stringData, promiseData, currentData } = allState;
  const { onClickMethod } = useContentData();
  const { onSetWriteMode } = useBooleanData();
  const history = useHistory();

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "object") {
      if (objectData) {
        onChangeFilter(objectData);
        return;
      }
    }
    if (e.target.value === "array") {
      if (arrayData) {
        onChangeFilter(arrayData);
        return;
      }
    }
    if (e.target.value === "math") {
      if (mathData) {
        onChangeFilter(mathData);
        return;
      }
    }
    if (e.target.value === "string") {
      if (stringData) {
        onChangeFilter(stringData);
        return;
      }
    }
    if (e.target.value === "promise") {
      if (promiseData) {
        onChangeFilter(promiseData);
        return;
      }
    }
  };

  const handleClickMethod = (method: Method) => {
    onClickMethod(method);
    history.push("/ContentPage");
  };

  useEffect(() => {
    axios.get("http://localhost:8080/maincontent").then((res) => {
      onFilter(res.data);
    });

    if (history.location.pathname === "/Wiki") {
      onSetWriteMode(false);
    }
  }, []);

  return currentData ? (
    <Container>
      <IntroBox>
        <Icon src={thinkingIcon}></Icon>
        <IntroContents>
          <IntroTitle>MDN+ 위키</IntroTitle>
          <IntroLetter>당신의 지식을 공유해주세요</IntroLetter>
        </IntroContents>
      </IntroBox>
      <FilterBox>
        <FirstFilter onChange={(e) => setFirstOption(e.target.value)} name="firstFilter" id="firstFilter">
          <option value="javascript">Javascript</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
        </FirstFilter>
        {firstOption === "javascript" ? (
          <SecondFilter onChange={(e) => handleFilter(e)} name="secondFilter" id="secondFilter">
            <option value="array">Array</option>
            <option value="object">Object</option>
            <option value="math">Math</option>
            <option value="string">String</option>
            <option value="promise">Promise</option>
          </SecondFilter>
        ) : (
          <SecondFilter onChange={(e) => handleFilter(e)} name="secondFilter" id="secondFilter">
            <option value="구현중">구현중</option>
          </SecondFilter>
        )}
      </FilterBox>
      <Stage>
        {currentData === null ? (
          <Loading />
        ) : (
          currentData.map((el: any) => (
            <MethodBox key={el._id}>
              <div>
                <MethodContents
                  onClick={() => {
                    handleClickMethod(el);
                  }}
                >
                  <MethodTitle>{el.title}</MethodTitle>
                  {el.pureBody ? <MethodBody>{el.pureBody.slice(0, 70)} ...</MethodBody> : <MethodBody>빈칸</MethodBody>}
                </MethodContents>
              </div>
              <MethodCount>수정된 횟수 {el.count}</MethodCount>
            </MethodBox>
          ))
        )}
      </Stage>
    </Container>
  ) : (
    <Loading />
  );
}
export default MainPage;

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  padding-bottom: 10rem;
`;

const IntroBox = styled.div`
  display: flex;
  align-items: center;
  // margin-left: 4rem;
`;

const IntroContents = styled.div`
  // margin-left: 1rem;
`;

const IntroTitle = styled.h1`
  color: #757575;
  font-weight: 600;
`;

const IntroLetter = styled.div`
  margin-top: -1rem;
  // margin-left: 0.1rem;
  color: #9e9e9e;
  font-weight: bold;
`;

const Icon = styled.img`
  width: 3rem;
  margin: 1rem 2rem 0 2rem;
`;

const Stage = styled.div`
  background: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 15rem;
  row-gap: 3.5rem;
  column-gap: 3.2rem;
  padding: 2rem 2rem 2rem 2rem;
  margin-top: 1rem;

  @media (max-width: 375px) {
    display: grid;
    grid-template-columns: auto;
    grid-auto-rows: auto;
  }
`;

const FilterBox = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  // border: 1px solid black;
  justify-content: center;
`;

const FirstFilter = styled.select`
  font-size: 1.2rem;
  width: 10rem;
  border: none;
  outline: none;
  color: #616161;
  background-color: white;
`;

const SecondFilter = styled.select`
  font-size: 1.2rem;
  width: 10rem;
  border: none;
  outline: none;
  margin-left: 2rem;
  color: #616161;
  background-color: white;
`;

const MethodBox = styled.div`
  border-radius: 0.4rem;
  padding: 0 1rem 0rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  max-width: 25rem;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 375px) {
    height: 10rem;
  }
`;

const MethodContents = styled.div`
  height: 10rem;
  @media (max-width: 375px) {
    width: auto;
    height: auto;
  }
`;

const MethodTitle = styled.h3`
  color: #757575;
  @media (max-width: 375px) {
    font-size: 0.8rem;
  }
`;

const MethodBody = styled.div`
  color: #757575;
  @media (max-width: 375px) {
    font-size: 0.8rem;
  }
`;

const MethodCount = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 0.8rem;
  color: #757575;
  margin-top: 1.7rem;
  @media (max-width: 375px) {
    font-size: 0.8rem;
  }
`;
