import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { myPageArrayAction, myPageObjectAction, myPageCurrentAction } from "../Redux/MyPageData";
import ReviewModal from "./ReviewModal";
import styled from "styled-components";
import useMyPageData from "../Hooks/useMyPageData";

type ContentType = {
  id: number;
  title: string;
  body: string;
};

function MyPageList() {
  const dispatch = useDispatch();
  const { myPageUserData, myPageArrayData, myPageObjectData, myPageCurrentData } = useMyPageData();
  const { myPageUserName, content } = myPageUserData;
  const [isOpen, setIsOpen] = useState(false);
  const [getModalData, setgetModalData] = useState<ContentType>({ id: 0, title: "", body: "" });

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

  const handleModalData = (content: ContentType) => {
    console.log(content);
    setgetModalData(content);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(() => !isOpen);
  };

  return myPageCurrentData === null ? (
    <div>로딩중</div>
  ) : (
    <Container>
      <ListContainer>
        <ArrayTag onClick={handleCurrentArray}>array {myPageArrayData.length}</ArrayTag>
        <ObjectTag onClick={handleCurrentObject}>object {myPageObjectData.length}</ObjectTag>
      </ListContainer>

      <ContentsContainer>
        <UserInfo>
          <div>이미지</div>
          <div>김코딩</div>
        </UserInfo>

        {myPageCurrentData.map((el: ContentType) => (
          <Content
            onClick={() => {
              handleModalData(el);
            }}
          >
            <Title> {el.title}</Title>
            <Body> {el.body.slice(0, 50)}....</Body>
          </Content>
        ))}
      </ContentsContainer>

      {isOpen ? <ReviewModal handleCloseModal={handleCloseModal} setIsOpen={setIsOpen} getModalData={getModalData} /> : null}
    </Container>
  );
}

export default MyPageList;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 20% 80%;
`;

const ListContainer = styled.div`
  display: grid;
  grid-auto-rows: 100px;
  place-items: center;
  min-height: 100vh;
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

const Content = styled.div`
  padding: 20px;
  margin: 30px;
  border: 1px solid black;
  cursor: pointer;
`;
const ContentsContainer = styled.div`
  display: grid;
  grid-template-rows: (2, 200px);
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
  padding: 30px;
  width: 100%;
  height: 100%;
  background: #dcdcdc;
  grid-template-areas: "header header header";
`;

const UserInfo = styled.header`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div``;
const Body = styled.div`
  border-top: 2px solid red;
`;
