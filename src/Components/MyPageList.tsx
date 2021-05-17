import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { myPageArrayAction, myPageObjectAction, myPageCurrentAction } from "../Redux/MyPageData";

import styled from "styled-components";

import useMyPageData from "../Hooks/useMyPageData";

type ContentType = {
  id: number;
  title: string;
  body: string;
};

function MyPageList() {
  const dispatch = useDispatch();
  const { myPageState }: any = useMyPageData();
  const { myPageUserData, myPageArrayData, myPageObjectData, myPageCurrentData } = myPageState;
  const { myPageUserName, content } = myPageUserData;

  useEffect(() => {
    dataFilter();
  }, []);

  const dataFilter = () => {
    const arrayTitle = content.filter((el: ContentType) => el.title.split(".")[0] === "Array");
    const objectTitle = content.filter((el: ContentType) => el.title.split(".")[0] === "Object");
    dispatch(myPageArrayAction(arrayTitle));
    dispatch(myPageObjectAction(objectTitle));
    dispatch(myPageCurrentAction(arrayTitle));
  };

  const handleCurrentArray = () => {
    dispatch(myPageCurrentAction(myPageArrayData));
  };

  const handleCurrentObject = () => {
    dispatch(myPageCurrentAction(myPageObjectData));
  };

  return myPageCurrentData === null ? (
    <div>로딩중</div>
  ) : (
    <Container>
      <ListContainer>
        <ArrayTag onClick={handleCurrentArray}>array {myPageArrayData.length}</ArrayTag>
        <ObjectTag onClick={handleCurrentObject}>object {myPageObjectData.length}</ObjectTag>
      </ListContainer>
      <MainContainer>
        {myPageCurrentData.map((el: ContentType) => (
          <div>{el.title}</div>
        ))}
      </MainContainer>
    </Container>
  );
}

export default MyPageList;

const Container = styled.div`
  display: flex;
`;

const ListContainer = styled.div`
  margin: 30px;
`;

const ArrayTag = styled.div`
  cursor: pointer;
  font-size: 2em;

  &:hover {
    color: #005ce7;
  }
`;

const ObjectTag = styled.div`
  cursor: pointer;
  font-size:2em;
  &:hover {
    color:#005ce7;
`;

const MainContainer = styled.div`
  display: flex;
`;
