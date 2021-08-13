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
  // margin-left: 4rem;
`;

export const IntroContents = styled.div`
  // margin-left: 1rem;
`;

export const IntroTitle = styled.h1`
  color: #757575;
  font-weight: 600;
`;

export const IntroLetter = styled.div`
  margin-top: -1rem;
  // margin-left: 0.1rem;
  color: #9e9e9e;
  font-weight: bold;
`;

export const Icon = styled.img`
  width: 3rem;
  margin: 1rem 2rem 0 2rem;
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
`;

export const FirstFilter = styled.select`
  font-size: 1.2rem;
  width: 10rem;
  border: none;
  outline: none;
  color: #616161;
  background-color: white;
`;

export const SecondFilter = styled.select`
  font-size: 1.2rem;
  width: 10rem;
  border: none;
  outline: none;
  margin-left: 2rem;
  color: #616161;
  background-color: white;
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
`;

export const MethodContents = styled.div`
  height: 10rem;
  @media (max-width: 375px) {
    width: auto;
    height: auto;
  }
`;

export const MethodTitle = styled.h3`
  color: #757575;
  @media (max-width: 375px) {
    font-size: 0.8rem;
  }
`;

export const MethodBody = styled.div`
  color: #757575;
  @media (max-width: 375px) {
    font-size: 0.8rem;
  }
`;

export const MethodCount = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 0.8rem;
  color: #757575;
  margin-top: 1.7rem;
  @media (max-width: 375px) {
    font-size: 0.8rem;
  }
`;
