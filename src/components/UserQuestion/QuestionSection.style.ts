import { UserQuestionProps } from "./index";
import styled, { css } from "styled-components";
import Button from '../Button';

type sizeType = Pick<UserQuestionProps, "type">;

export const Container = styled.div<sizeType>`
  height: 40%;
  overflow-y: auto;
  padding: 3rem 3rem 1.5rem 3rem;
  border-bottom: 1px solid #e0e0e0;

  ${({ type }) =>
    type === "content" &&
    css`
      width: 50%;
    `}

  ${({ type }) =>
    type === "writing" &&
    css`
      width: 100%;
    `}

  .question-title-box {
    display: flex;
  }

  .question-icon {
    background: #90a4ae;
    color: white;
    font-weight: bold;
    margin-right: 1rem;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .question-title {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }

  .question-body {
    padding-top: 1rem;
  }

  .userInfo-box {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }

  .userInfo-img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 0.4rem;
    border: none;
  }

  .userInfo-name {
    margin-right: 0.4rem;
    color: black;
    font-size: 0.9rem;
  }

  .date {
    color: #757575;
    font-size: 0.8rem;
    padding-bottom: 0.1rem;
  }

  .tag {
    color: #78909c;
    cursor: pointer;
    margin-right: 0.5rem;

    &:hover {
      color: #2196f3;
    }
  }

  .answer-btn {
    margin-left: auto;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    width: 6rem;
    height: 2rem;
    @media (max-width: 375px) {
      font-size: 0.6rem;
    }
  }
`;

export const AnswerBtn = styled(Button)`
  font-size: 0.9rem

`
