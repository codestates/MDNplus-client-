import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  .search-container {
    border: 1px solid #005ce7;
    width: 37%;
    background: white;
    padding-left: 1rem;
    margin-left: 2rem;

    @media (max-width: 375px) {
      width: 50%;
      margin: 0;
      padding-left: 1rem;
      font-size: 1rem;
    }
  }

  .search-input {
    border: none;
    width: 90%;
    font-size: 1rem;
    outline: none;
    height: 2rem;
  }

  .search-icon {
    width: 10%;
    margin-bottom: -0.3rem;
    margin-left: -0.4rem;
    cursor: pointer;
  }

  #filter {
    margin-left: 1rem;
    border: none;
    background: #f4f4f4;
    padding-right: 0.3rem;
    outline: none;
    @media (max-width: 375px) {
      font-size: 0.7rem;
    }
  }
`;
