import React from "react";
import useSearchData from "../Hooks/useSearchData";
import styled from "styled-components";

type Data = {
  id: number;
  title: string;
  body: string;
  count: number;
};

function SearchPage() {
  const { SearchDataState }: any = useSearchData();
  // const { contentData }:Data[] = SearchDataState;

  console.log(SearchDataState.result);

  const handleSearchData = (el: any) => {
    console.log(el);
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
      <ContentContainer>
        {SearchDataState.contentData.map((el: Data) => (
          <Content onClick={() => handleSearchData(el)}>
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

const Title = styled.div`
  font-weight: bold;
`;
const Body = styled.div`
  padding: 18px;
  border-bottom: 1.8px solid #a7a3a3;
`;
