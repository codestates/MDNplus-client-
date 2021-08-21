import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);

  .edit-page {
    padding: 1.7rem;
  }

  .edit-page > .title-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .edit-page .title {
    display: inline-block;
  }

  .edit-page > .description {
    width: 100%;
    height: 100%;
    outline: none;
    resize: none;
    font-size: 16px;
    border: none;
  }

  .guide {
    font-size: 0.85rem;
    color: #757575;
  }

  .question-page {
    padding: 0 1.3rem 0 1.3rem;
  }

  .question-page > .title-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .question-page .title {
    border: none;
    font-size: 1.6rem;
    margin-top: 2rem;
    resize: none;
    outline: none;
    width: 100%;
    overflow: hidden;
  }

  .question-page .input-box {
    border: none;
    margin-top: 1.2rem;
    font-size: 1rem;
    outline: none;
  }

  .question-page .tag {
    border-radius: 1rem;
    padding: 0.3rem 0.7rem 0.3rem 0.7rem;
    margin-right: 0.7rem;
    cursor: pointer;
    background: #eeeeee;
    color: #0055fa;
  }

  .question-page .description {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    resize: none;
    font-size: 1rem;
    margin-top: 0.8rem;
    color: black;
  }

  .question-page .underline {
    width: 100%;
    border-bottom: 0.5px solid #e0e0e0;
    margin-top: 1.3rem;
    margin-bottom: 1.3rem;
  }
`;

export const LeftContainer = styled.div`
  height: 100%;
  width: 100%;
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
