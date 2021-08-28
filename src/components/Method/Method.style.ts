import styled from "styled-components";

export const Wrapper = styled.div`
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
