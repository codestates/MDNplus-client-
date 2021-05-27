import { useState } from "react";
import useSearchData from "../Hooks/useSearchData";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import useContentData from "../Hooks/useContentData";

type SearchDataType = {
  mainContent: {
    count: number;
    _id: string;
    title: string;
    body: string;
    updatedAt: string;
  }[];
  helpdeskContent: {
    tags: string[];
    commentCount: number;
    like: number;
    _id: string;
    title: string;
    body: string;
    userId: {
      nickName: string;
      kakaoId: string | null;
      githubId: string | null;
      image: string;
      _id: string;
      __v: number;
    };
    createdAt: string;
    updatedAt: string;
    __v: number;
  }[];
};

type helpDeskContentType = {
  tags: string[];
  commentCount: number;
  like: number;
  _id: string;
  title: string;
  body: string;
  userId: {
    nickName: string;
    kakaoId: string | null;
    githubId: string | null;
    image: string;
    _id: string;
    __v: number;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type mainContentType = {
  count: number;
  _id: string;
  title: string;
  body: string;
  updatedAt: string;
};

function SearchPage() {
  const { SearchDataState } = useSearchData();
  const { onClickMethod } = useContentData();
  const [CurrentPage, setCurrentPage] = useState("MDN");
  const [MDNColor, setMDNColor] = useState(" #005ce7");
  const [HelpDeskColor, setHelpDeskColor] = useState("#a7a3a3");
  const history = useHistory();

  const HandleMDNClicked = (el: mainContentType) => {
    setCurrentPage("MDN");
    onClickMethod(el);
    history.push("/ContentPage");
  };

  const HandleHelpDeckClicked = (el: helpDeskContentType) => {
    setCurrentPage("HelpDesk");

    history.push({
      pathname: "/Qcontentpage",
      state: { pageName: "/Searchpage", questionId: el._id },
    });
  };

  const HandleMDNColor = () => {
    setCurrentPage("MDN");

    setMDNColor("#005ce7");
    setHelpDeskColor("#a7a3a3");
  };

  const HandleHelpDeckColor = () => {
    setCurrentPage("HelpDesk");
    setHelpDeskColor("#005ce7");
    setMDNColor("#a7a3a3");
  };

  return SearchDataState.contentData === null ? (
    <div>비어있음!</div>
  ) : (
    <Container>
      <SearchResult>
        <ResultText>
          {SearchDataState.result},{SearchDataState.tagResult === null && SearchDataState.tagResult === undefined ? "전체" : SearchDataState.tagResult} <ResultTextColor>" (을)를 검색하셨습니다.</ResultTextColor>
        </ResultText>

        <ResultNum>
          {/* 총 &nbsp; {SearchDataState.contentData !== undefined ? SearchDataState.contentData?.mainContent.length + SearchDataState.contentData?.helpdeskContent.length : 0} 개의 검색결과 &nbsp; / */}
          {/* &nbsp; MDN+ &nbsp; {SearchDataState.contentData?.mainContent.length} 개 &nbsp; / &nbsp; Help Desk&nbsp; {SearchDataState.contentData?.helpdeskContent.length} 개 */}
        </ResultNum>
      </SearchResult>
      <FilterSearchResult>
        <MDNPlus onClick={() => HandleMDNColor()} style={{ color: MDNColor }}>
          MDN+
        </MDNPlus>
        <HelpDesk onClick={() => HandleHelpDeckColor()} style={{ color: HelpDeskColor }}>
          HelpDesk
        </HelpDesk>
      </FilterSearchResult>

      <ContentContainer>
        {CurrentPage === "MDN"
          ? SearchDataState.contentData?.mainContent.map((el: mainContentType) => (
              <Content key={el._id} onClick={() => HandleMDNClicked(el)}>
                <Title>{el.title}</Title>
                <Body>{el.body}</Body>
              </Content>
            ))
          : SearchDataState.contentData?.helpdeskContent.map((el: helpDeskContentType) => (
              <Content key={el._id} onClick={() => HandleHelpDeckClicked(el)}>
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
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SearchResult = styled.div`
  font-weight: bold;
  height: 2%;
  width: 100%;
  font-size: 2rem;
  margin: 3em 0 2em 8em;
`;

const ResultText = styled.div`
  color: #005ce7;
  font-weight: bold;
  width: 100%;
  font-size: 2rem;
`;

const ResultTextColor = styled.span`
  color: #424242;
  font-weight: bold;
  width: 100%;
  font-size: 2rem;
`;

const ResultNum = styled.span`
  color: #9e9e9e;
  font-weight: bold;
  width: 70%;
  font-size: 1rem;
  margin-top: 1em;
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
  margin: 20px;
  cursor: pointer;
`;
const HelpDesk = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin: 20px;
  cursor: pointer;
`;

const Title = styled.div`
  font-weight: bold;
`;
const Body = styled.div`
  padding: 18px;
  border-bottom: 0.15rem solid #e0e0e0;
`;
