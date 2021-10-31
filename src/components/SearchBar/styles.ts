import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  .search-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    padding: 0 5px;
    margin-left: 2rem;
    border: 1px solid #005ce7;
    background: white;
  }

  .search-input {
    height: 30px;
    border: none;
    font-size: 1rem;
    outline: none;
  }

  .search-icon {
    width: 30px;
    cursor: pointer;
  }

  .search-filter {
    margin-left: 16px;
    padding-right: 5px;
    border: none;
    background: #f4f4f4;
    outline: none;
  }
`;
