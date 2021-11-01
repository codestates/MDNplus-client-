import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;

  /* 공통 CSS */

  .title-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn-box {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 15px;
    width: 98%;
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

  .exit-btn {
    font-size: 20px;
  }

  .help-btn {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background: ${({ theme }) => theme.gray[700]};
    color: ${({ theme }) => theme.gray[200]};
    font-size: 25px;
    transition: background 200ms ease-in-out;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.gray[600]};
    }

    &:active {
      background: ${({ theme }) => theme.gray[800]};
    }
  }

  /* Left Container CSS */

  .left-container {
    width: 50%;
    height: 100%;
    padding: 20px;
  }

  .left-container .guide {
    padding-right: 10px;
    font-size: 13px;
    color: #757575;
  }

  .left-container .description {
    width: 100%;
    height: 82%;
    line-height: 1.4;
    outline: none;
    resize: none;
    font-size: 16px;
    border: none;
  }

  /* Left Container - 질문 작성 페이지 CSS */

  .left-container.question .title-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left-container.question .title {
    width: 100%;
    margin-top: 32px;
    border: none;
    outline: none;
    resize: none;
    font-size: 22px;
    overflow: hidden;
  }

  .left-container.question .tag {
    margin-right: 10px;
    padding: 6px 10px 6px 10px;
    border-radius: 16px;
    background: #eeeeee;
    color: #0055fa;
    cursor: pointer;
  }

  .left-container.question .underline {
    width: 100%;
    margin: 20px 0;
    border-bottom: 1px solid #e0e0e0;
  }

  /* Left Container - 답변 작성 페이지 CSS */

  .left-container.comment .writing-section {
    height: 65%;
    margin: 20px 0 30px 30px;
  }

  .left-container.comment .answer-title {
    display: inline-block;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.gray[700]};
    font-size: 27px;
    font-weight: 600;
  }

  /* Right Container CSS */

  .right-container {
    width: 50%;
    height: 100%;
    padding: 20px;
    background-color: #f5f5f5;
  }

  .right-container .preview-top {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 20px 0;
    padding-bottom: 16px;
    border-bottom: 0.05rem solid #e0e0e0;
    color: #686868;
    font-size: 24px;
    font-weight: 700;
  }

  .right-container .my-image {
    width: 50px;
    height: 50px;
    margin-right: 15px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
