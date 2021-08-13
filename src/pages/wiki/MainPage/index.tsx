import useAllData from "../../../hooks/useAllData";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useContentData from "../../../hooks/useContentData";
import thinkingIcon from "../../../img/thinking.png";
import axios from "axios";
import useBooleanData from "../../../hooks/useBooleanData";
import Loading from "../../../components/Loading";
import {
  Container,
  FilterBox,
  FirstFilter,
  Icon,
  IntroBox,
  IntroContents,
  IntroLetter,
  IntroTitle,
  MethodBody,
  MethodBox,
  MethodContents,
  MethodCount,
  MethodTitle,
  SecondFilter,
  Stage,
} from "./MainPage.style";

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
