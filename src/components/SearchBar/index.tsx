import { Wrapper } from "./SearchBar.style";

type SearchBarProps = {
  handleKeyPress: (
    e: React.KeyboardEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleWritingState: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleIconClick: () => void;
  option: (
    e: React.ChangeEvent<HTMLSelectElement> &
      React.MouseEvent<HTMLSelectElement>
  ) => void;
};

function SearchBar({
  handleKeyPress,
  handleWritingState,
  handleIconClick,
  option,
}: SearchBarProps) {
  return (
    <Wrapper>
      <div className="search-container">
        <input
          className="search-input"
          onKeyPress={handleKeyPress}
          onChange={handleWritingState}
        />
        <img
          className="search-icon"
          onClick={handleIconClick}
          src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112352/search_u2ytnm.jpg"
        ></img>
      </div>
      <select name="filter" id="filter" onChange={option}>
        <option value="전체">전체</option>
        <option value="제목">제목</option>
        <option value="내용">내용</option>
        <option value="태그">태그</option>
      </select>
    </Wrapper>
  );
}

export default SearchBar;
