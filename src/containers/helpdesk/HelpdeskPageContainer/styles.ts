import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  width: 100%;

  .question-btn {
    position: absolute;
    top: 30px;
    right: 60px;
  }

  .question-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .question-list {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
  }
`;
