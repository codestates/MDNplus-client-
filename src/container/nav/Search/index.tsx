import SearchBar from "../../../components/SearchBar";
import useSearchData from "../../../hooks/useSearchData";
import axios from "axios";
import { useHistory } from "react-router";

function SearchContainer() {
  const {
    SearchDataState,
    onSearchingData,
    onSearchingResult,
    onSearchingWord,
    onSearchingTag,
  } = useSearchData();
  const history = useHistory();

  const handleWritingState = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchingWord(e.target.value);
  };

  const handleSearchClick = () => {
    let word: string | null = SearchDataState.word;
    let tag: string | null = SearchDataState.tag;
    if (SearchDataState.word === "") {
      alert("입력해주세요");
      return;
    }
    onSearchingResult(word, tag);
    axios
      .post("http://localhost:8080/search", { type: tag, content: word })
      .then((res) => {
        onSearchingData(res.data);
      });
    word = null;

    history.push("/SearchPage");
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLInputElement>
  ): void => {
    let word: string | null = e.target.value;
    let tag: string | null = SearchDataState.tag;
    if (e.key === "Enter") {
      if (SearchDataState.word === "") {
        alert("입력해주세요");
        return;
      }
      onSearchingResult(e.target.value, SearchDataState.tag);
      axios
        .post("http://localhost:8080/search", { type: tag, content: word })
        .then((res) => {
          onSearchingData(res.data);
        });
      word = null;
      history.push("/SearchPage");
    }
  };

  const option = (
    e: React.ChangeEvent<HTMLSelectElement> &
      React.MouseEvent<HTMLSelectElement>
  ) => {
    onSearchingTag(e.target.value);
  };

  return (
    <SearchBar
      handleSearchClick={handleSearchClick}
      handleKeyPress={handleKeyPress}
      handleWritingState={handleWritingState}
      option={option}
    ></SearchBar>
  );
}

export default SearchContainer;
