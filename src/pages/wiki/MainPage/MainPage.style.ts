import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  padding-bottom: 10rem;
`;

export const IntroBox = styled.div`
  display: flex;
  align-items: center;

  .title {
    color: #757575;
    font-weight: 600;
  }

  .description {
    margin-top: -1rem;
    color: #9e9e9e;
    font-weight: bold;
  }
`;

export const Stage = styled.div`
  background: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 15rem;
  row-gap: 3.5rem;
  column-gap: 3.2rem;
  padding: 2rem 2rem 2rem 2rem;
  margin-top: 1rem;

  @media (max-width: 375px) {
    display: grid;
    grid-template-columns: auto;
    grid-auto-rows: auto;
  }
`;

export const FilterBox = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  // border: 1px solid black;
  justify-content: center;

  .filter {
    font-size: 1.2rem;
    width: 10rem;
    border: none;
    outline: none;
    color: #616161;
    background-color: white;
  }

  .filter.second {
    margin-left: 2rem;
  }
`;

export const MethodBox = styled.div`
  border-radius: 0.4rem;
  padding: 0 1rem 0rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  max-width: 25rem;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 375px) {
    height: 10rem;
  }

  .contents {
    height: 10rem;
    @media (max-width: 375px) {
      width: auto;
      height: auto;
    }
  }

  .title {
    color: #757575;
    @media (max-width: 375px) {
      font-size: 0.8rem;
    }
  }

  .body {
    color: #757575;
    @media (max-width: 375px) {
      font-size: 0.8rem;
    }
  }

  .count {
    display: flex;
    justify-content: flex-end;
    font-size: 0.8rem;
    color: #757575;
    margin-top: 1.7rem;
    @media (max-width: 375px) {
      font-size: 0.8rem;
    }
  }
`;