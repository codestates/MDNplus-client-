import { useState } from "react";
import useSearchData from "../Hooks/useSearchData";
import styled from "styled-components";

type Data = {
  id: number;
  title: string;
  body: string;
  count: number;
};

function SearchPage() {
  const { SearchDataState } = useSearchData();
  const [MDNColor, setMDNColor] = useState("blue");
  const [HelpDeskColor, setHelpDeskColor] = useState("black");

  console.log(SearchDataState.result);

  const handleSearchData = (el: Data) => {
    console.log(el);
  };

  const HandleMDNClicked = () => {
    setMDNColor("blue");
    setHelpDeskColor("black");
  };

  const HandleHelpDeckClicked = () => {
    setHelpDeskColor("blue");
    setMDNColor("black");
  };

  return SearchDataState.contentData === null ? (
    <div>비어있음!</div>
  ) : (
    <Container>
      <SearchResult>
        검색결과: "
        <ResultText>
          {SearchDataState.result}, {SearchDataState.tagResult}
        </ResultText>
        " (을)를 검색하셨습니다.
      </SearchResult>
      <FilterSearchResult>
        <MDNPlus style={{ color: MDNColor }} onClick={HandleMDNClicked}>
          MDN+
        </MDNPlus>
        <HelpDesk style={{ color: HelpDeskColor }} onClick={HandleHelpDeckClicked}>
          Help Desk
        </HelpDesk>
      </FilterSearchResult>
      <ContentContainer>
        {SearchDataState.contentData.map((el: Data) => (
          <Content key={el.id} onClick={() => handleSearchData(el)}>
            <Title>{el.title}</Title>
            <Body>{el.body}</Body>
          </Content>
        ))}
      </ContentContainer>
    </Container>
  );
}

export default SearchPage;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SearchResult = styled.div`
  margin: 30px;
  font-weight: bold;
  width: 70%;
  font-size: 25px;
`;

const ResultText = styled.span`
  margin: 10px;
  color: #005ce7;
  font-weight: bold;
  width: 70%;
  font-size: 25px;
`;

const ContentContainer = styled.div`
  width: 80%;
  height: 90%;
`;

const Content = styled.div`
  padding: 30px;
  cursor: pointer;
  &:hover {
    color: #005ce7;
  }
`;

const FilterSearchResult = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MDNPlus = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin: 0.8rem;
`;
const HelpDesk = styled.div`
  font-size: 2rem;

  font-weight: bold;

  margin: 0.8rem;
`;

const Title = styled.div`
  font-weight: bold;
`;
const Body = styled.div`
  padding: 18px;
  border-bottom: 1.8px solid #a7a3a3;
`;
