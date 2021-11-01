import styled from "styled-components";

type WikiFilterProps = {
  handleFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  setFirstOption: React.Dispatch<React.SetStateAction<string>>;
  firstOption: string;
};

function WikiFilter({
  handleFilter,
  setFirstOption,
  firstOption,
}: WikiFilterProps) {
  return (
    <Wrapper>
      <select
        className="filter first"
        onChange={(e) => setFirstOption(e.target.value)}
        name="firstFilter"
        id="firstFilter"
      >
        <option value="javascript">Javascript</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
      </select>
      {firstOption === "javascript" ? (
        <select
          className="filter second"
          onChange={(e) => handleFilter(e)}
          name="secondFilter"
          id="secondFilter"
        >
          <option value="array">Array</option>
          <option value="object">Object</option>
          <option value="math">Math</option>
          <option value="string">String</option>
          <option value="promise">Promise</option>
        </select>
      ) : (
        <select
          className="filter second"
          onChange={(e) => handleFilter(e)}
          name="secondFilter"
          id="secondFilter"
        >
          <option value="구현중">구현중</option>
        </select>
      )}
    </Wrapper>
  );
}

export default WikiFilter;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;

  .filter {
    width: 10rem;
    font-size: 1.2rem;
    border: none;
    outline: none;
    color: #616161;
    background-color: white;
  }

  .filter.second {
    margin-left: 2rem;
  }
`;
