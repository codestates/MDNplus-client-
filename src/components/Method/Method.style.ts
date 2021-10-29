import styled from "styled-components";

export const Wrapper = styled.div`
  flex-basis: 31%;
  padding: 30px;
  margin-bottom: 30px;
  border-radius: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  .method-title {
    font-size: 20px;
    color: #757575;
  }

  .method-desc {
    color: #757575;
  }

  .count {
    display: flex;
    justify-content: flex-end;
    font-size: 0.8rem;
    color: #757575;
    margin-top: 1.7rem;
  }
`;
