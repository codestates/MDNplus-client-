import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
`;

export const LeftContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const WritingArea = styled.div`
  width: 100%;
  height: 60%;
  resize: none;
  outline: none;
  font-size: 1.3rem;
  margin: 1.5rem 0rem 3rem 3rem;

  .answer-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: #686868;
    margin-bottom: 1rem;
  }

  .my-answer {
    width: 90%;
    height: 60%;
    border: none;
    outline: none;
    resize: none;
    font-size: 1rem;
  }
`;

export const RightContainer = styled.div`
  background-color: #f5f5f5;
  padding: 1.3rem 3rem 3rem 3rem;
  height: 100%;
  width: 100%;

  .preview-top {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 700;
    color: #686868;
    margin: 3rem 0rem 3rem 0rem;
    padding-bottom: 1rem;
    border-bottom: 0.05rem solid #e0e0e0;
    width: 100%;
  }

  .my-image {
    width: 3em;
    height: 3em;
    border-radius: 50%;
    object-fit: cover;
  }

  .my-nickname {
    margin-left: 2rem;
  }
`;
