import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  .intro-icon {
    width: 6rem;
    margin-top: 1rem;
  }

  .intro-icon.wiki {
    width: 3rem;
    margin: 1.5rem 1rem 1rem 1.5rem;
  }

  .intro-title {
    color: #757575;
    font-weight: 600;
  }

  .intro-description {
    margin-top: -1rem;
    color: #9e9e9e;
    font-weight: bold;
  }

  .question-btn {
    position: absolute;
    right: 0rem;
    font-size: 0.9rem;
    padding: 0.7rem 1.2rem 0.7rem 1.2rem;
    border-radius: 1.2rem;
    border: none;
    background: #1976d2;
    color: white;
    cursor: pointer;
    z-index: 0;
  }
`;
