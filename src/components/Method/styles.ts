import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 30%;
  flex-wrap: nowrap;
  position: relative;
  min-width: 250px;
  padding: 30px;
  margin: 15.5px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: #757575;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  word-break: break-all;

  &:hover {
    transform: translateY(-5px);
  }

  .method-title {
    font-size: 20px;
  }

  .method-desc {
    line-height: 1.5;
  }

  .count {
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
  }

  .count dd {
    margin-left: 8px;
  }
`;
