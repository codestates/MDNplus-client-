import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  padding-bottom: 10rem;
`;

export const MethodContainer = styled.div`
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