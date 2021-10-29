import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;

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

  .btn-box {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    width: 100%;
    border: 1px solid black;
  }

  .btn-box div:first-child {
    display: flex;
    justify-content: space-between;
  }

  .btn-box div:last-child {
    display: flex;
    justify-content: flex-end;
  }

  .btn-box div {
    width: 50%;
  }
`;

export const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 1.7rem;

  .title-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    display: inline-block;
  }

  .guide {
    font-size: 0.85rem;
    color: #757575;
  }

  .description {
    width: 100%;
    height: 100%;
    outline: none;
    resize: none;
    font-size: 16px;
    border: none;
  }
`;

export const RightContainer = styled.div`
  background-color: #f5f5f5;
  padding: 1.3rem 3rem 3rem 3rem;
  height: 100%;
  width: 50%;

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
