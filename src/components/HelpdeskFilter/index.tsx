import styled, { css } from "styled-components";

type HelpdeskFilterProps = {
  isSelected: string;
  handleFilter: (type: string) => void;
};

type FilterBtnProps = {
  type?: string;
};

function HelpdeskFilter({ isSelected, handleFilter }: HelpdeskFilterProps) {
  return (
    <Wrapper>
      {isSelected === "최신순" ? (
        <FilterBtn
          type="selected"
          onClick={() => {
            handleFilter("최신순");
          }}
        >
          최신순
        </FilterBtn>
      ) : (
        <FilterBtn
          onClick={() => {
            handleFilter("최신순");
          }}
        >
          최신순
        </FilterBtn>
      )}
      {isSelected === "인기순" ? (
        <FilterBtn
          type="selected"
          onClick={() => {
            handleFilter("인기순");
          }}
        >
          인기순
        </FilterBtn>
      ) : (
        <FilterBtn
          onClick={() => {
            handleFilter("인기순");
          }}
        >
          인기순
        </FilterBtn>
      )}
    </Wrapper>
  );
}

export default HelpdeskFilter;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 2rem 0rem 1rem 3rem;
`;

export const FilterBtn = styled.span<FilterBtnProps>`
  color: #757575;
  cursor: pointer;
  margin-right: 1rem;

  ${({ type }) =>
    type === "selected" &&
    css`
      color: #3f51b5;
      font-weight: bold;
    `}
`;
