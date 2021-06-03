import { useState, useEffect } from "react";
import useSearchData from "../Hooks/useSearchData";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import useContentData from "../Hooks/useContentData";
import useBooleanData from "../Hooks/useBooleanData";

type helpDeskContentType = {
  tags: string[];
  commentCount: number;
  like: number;
  _id: string;
  pureBody: string;
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
  pureBody: string;
  title: string;
  body: string;
  updatedAt: string;
};

function SearchPage() {
  const { SearchDataState } = useSearchData();
  const { onContentPageMode } = useBooleanData();
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

  useEffect(() => {
    onContentPageMode(false);
  }, []);

  return !SearchDataState.contentData ? (
    <div>비어있음!</div>
  ) : (
    <Container>
      <SearchResult>
        <ResultTextColor>
          " &nbsp;
          <ResultText>
            {SearchDataState.result} &nbsp; , &nbsp; {SearchDataState.tagResult === null && SearchDataState.tagResult === undefined ? "전체" : SearchDataState.tagResult}&nbsp;
          </ResultText>
          " &nbsp; (을)를 검색하셨습니다.
        </ResultTextColor>

        <ResultNum>
          총 &nbsp; {SearchDataState.contentData?.mainContent !== undefined ? SearchDataState.contentData?.mainContent.length + SearchDataState.contentData?.helpdeskContent.length : 0} 개의 검색결과
          &nbsp; / &nbsp; MDN+ &nbsp; {SearchDataState.contentData?.mainContent !== undefined ? SearchDataState.contentData?.mainContent.length : 0} 개 &nbsp; / &nbsp; Help Desk &nbsp;
          {SearchDataState.contentData?.helpdeskContent.length} 개
        </ResultNum>
      </SearchResult>
      <FilterSearchResult>
        {SearchDataState.contentData?.mainContent === undefined || SearchDataState.contentData.mainContent === null ? (
          <> </>
        ) : (
          <>
            <MDNPlus onClick={() => HandleMDNColor()} style={{ color: MDNColor }}>
              MDN+ 위키
            </MDNPlus>
            <HelpDesk onClick={() => HandleHelpDeckColor()} style={{ color: HelpDeskColor }}>
              HelpDesk
            </HelpDesk>
          </>
        )}
      </FilterSearchResult>

      <ContentContainer>
        {SearchDataState.contentData?.mainContent?.length === 0 && SearchDataState.contentData?.helpdeskContent.length === 0 ? (
          <AlertResult>검색결과 없음</AlertResult>
        ) : CurrentPage === "MDN" && SearchDataState.contentData?.mainContent ? (
          SearchDataState.contentData.mainContent?.map((el) => (
            <Content key={el._id} onClick={() => HandleMDNClicked(el)}>
              <Title>{el.title}</Title>
              <Body>{el.pureBody.slice(0, 200)} ...</Body>
            </Content>
          ))
        ) : SearchDataState.contentData.helpdeskContent.length === 0 ? (
          <AlertResult>검색결과 없음</AlertResult>
        ) : (
          SearchDataState.contentData?.helpdeskContent.map((el) => (
            <Content key={el._id} onClick={() => HandleHelpDeckClicked(el)}>
              <HelpTitle>{el.title}</HelpTitle>
              <Body>{el.pureBody}</Body>
            </Content>
          ))
        )}
      </ContentContainer>
    </Container>
  );
}

export default SearchPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 13rem;
`;

const SearchResult = styled.div`
  align-self: start;
  font-weight: bold;
  font-size: 2rem;
  margin: 1rem 0 2rem 5.5rem;
`;

const ResultText = styled.span`
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

const ResultNum = styled.div`
  color: #9e9e9e;
  font-weight: bold;
  width: 80%;
  font-size: 1rem;
  margin-top: 1em;
`;

const ContentContainer = styled.div`
  width: 90%;
  height: 100%;
`;

const FilterSearchResult = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MDNPlus = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem;
  cursor: pointer;
`;
const HelpDesk = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin: 1.4rem;

  cursor: pointer;
`;

const Content = styled.div`
  padding: 30px;
  cursor: pointer;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  font-style: italic;
`;

const Body = styled.div`
  margin-top: 1rem;
`;

const HelpTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

const HelpBody = styled.div`
  margin-top: 1rem;
`;

const AlertResult = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;
