import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Loading from "../../../components/Loading";
import Method from "../../../components/Method";
import ServiceIntro from "../../../components/ServiceIntro";
import WikiFilter from "../../../components/WikiFilter";
import useAllData from "../../../hooks/useAllData";
import useBooleanData from "../../../hooks/useBooleanData";
import useContentData from "../../../hooks/useContentData";
import { MethodType } from "../../../types/reducer";
import { Container } from "./styles";

function WikiPageContainer() {
  const [firstOption, setFirstOption] = useState("javascript");
  const { allState, onFilter, onChangeFilter } = useAllData();
  const {
    arrayData,
    objectData,
    mathData,
    stringData,
    promiseData,
    currentData,
  } = allState;
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

  const handleClickMethod = (method: MethodType) => {
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
    <Container className="container">
      <ServiceIntro
        img={
          "https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112352/thinking_amc5e2.png"
        }
        title={"MDN+ 위키"}
        description={"당신의 지식을 공유해주세요"}
        type="wiki"
      />
      <WikiFilter
        handleFilter={handleFilter}
        setFirstOption={setFirstOption}
        firstOption={firstOption}
      ></WikiFilter>

      <section className="method-list">
        {currentData === null ? (
          <Loading />
        ) : (
          currentData.map((el: MethodType) => (
            <Method
              key={el._id}
              data={el}
              handleClickMethod={handleClickMethod}
            ></Method>
          ))
        )}
      </section>
    </Container>
  ) : (
    <Loading />
  );
}

export default WikiPageContainer;