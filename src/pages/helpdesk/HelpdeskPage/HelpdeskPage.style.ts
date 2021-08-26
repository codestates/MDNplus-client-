import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;

  .stage {
    width: 93%;
  }
`;

export const QuestionContainer = styled.div`
  // border: 1px solid blue;
  padding: 2rem;
`;

export const FilterBox = styled.div`
  width: 100%;
  display: flex;
  margin: 2rem 0rem 1rem 3rem;
`;

export const FilterFast = styled.span`
  color: #757575;
  cursor: pointer;
  // margin-right: 0.5rem;
`;

export const FilterFast_Selected = styled.span`
  font-weight: bold;
  cursor: pointer;
  // margin-right: 0.5rem;
  color: #3f51b5;
`;

export const FilterPopular = styled.span`
  color: #757575;
  cursor: pointer;
  margin-left: 1.5rem;
`;

export const FilterPopular_Selected = styled.span`
  font-weight: bold;
  cursor: pointer;
  margin-left: 1.5rem;

  color: #3f51b5;
`;

export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 375px) {
    display: grid;
    grid-template-columns: repeat(1, auto);
  }
`;
