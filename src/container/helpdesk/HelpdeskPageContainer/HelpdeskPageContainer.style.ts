import styled from "styled-components";
import Button from "../../../components/Button";

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
  padding: 2rem;
`

export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 375px) {
    display: grid;
    grid-template-columns: repeat(1, auto);
  }
`;

export const QuestionBtn = styled(Button)`
  position: absolute;
  top: 7rem;
  right: 8rem;
  background: #1976d2;
  color: white;
`;
