import { UserQuestionProps } from "./index";
import styled from "styled-components";

type sizeType = Pick<UserQuestionProps, "type">;

export const Container = styled.div<sizeType>`
  position: relative;
  width: ${({ type }) => (type === "content" ? "50%" : "100%")};
  padding: 40px;
  border-bottom: 1px solid #e0e0e0;
  overflow-y: auto;

  .question-title-box {
    display: flex;
    align-items: center;
  }

  .question-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.5rem;
    height: 3.5rem;
    margin-right: 16px;
    background: #90a4ae;
    color: white;
    font-weight: bold;
  }

  .question-title {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: normal;
  }

  .question-desc {
    line-height: 1.5;
    margin-bottom: 10px;
  }

  .userInfo-box {
    display: flex;
    align-items: center;
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

  .question-date {
    color: ${({ theme }) => theme.gray[600]};
    font-size: 0.8rem;
    letter-spacing: 0.05em;
  }

  .tag-box {
    margin-bottom: 16px;
  }

  .tag {
    margin-right: 10px;
    color: #78909c;
    cursor: pointer;

    &:hover {
      font-weight: bold;
    }
  }

  .answer-btn {
    position: absolute;
    right: 40px;
  }
`;
