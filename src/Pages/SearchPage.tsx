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

  console.log(SearchDataState);

  return SearchDataState.contentData === null ? (
    <div>비어있음!</div>
  ) : (
    <Container>
      <SearchResult>검색결과: "{SearchDataState.word}" (을)를 검색하셨습니다.</SearchResult>
      {SearchDataState.contentData.map((el: Data) => (
        <>
          <div>{el.title}</div>
          <div>{el.body}</div>
        </>
      ))}
    </Container>
  );
}

export default SearchPage;

const Container = styled.div``;

const SearchResult = styled.div``;
