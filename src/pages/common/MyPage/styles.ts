import styled, { css } from "styled-components";

export const Container = styled.main<{ active: string }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 100px;

  /* User Info Section CSS */

  .user-info-section {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    width: 75%;
    padding: 64px 0;
    border-bottom: 1px solid #bdbdbd;
  }

  .user-info-section img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }

  .user-name {
    font-weight: bold;
    font-size: 2.2rem;
    margin-left: 3.5rem;
  }

  /* User Post Section CSS */

  .user-post-section {
    display: flex;
    justify-content: center;
    width: 80%;
  }

  .filter-box,
  .post-container {
    padding: 50px 30px;
  }

  .filter-box {
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
  }

  .filter-box button {
    display: flex;
    width: 150px;
    border: none;
    outline: none;
    background: none;
    color: ${({ theme }) => theme.gray[500]};
    font-size: 24px;
    font-weight: bold;
  }

  .filter-box button:first-child {
    margin-bottom: 30px;
  }

  ${({ active }) =>
    active === "question" &&
    css`
      .filter-box button:first-child {
        color: ${({ theme }) => theme.primary[700]};
      }
    `};

  ${({ active }) =>
    active === "comment" &&
    css`
      .filter-box button:last-child {
        color: ${({ theme }) => theme.primary[700]};
      }
    `};

  .post-container {
    width: 80%;
  }

  .post-box {
    padding: 0 16px 16px 16px;
    margin-bottom: 30px;
    border-bottom: 1px solid #e0e0e0;
    cursor: pointer;
  }

  .post-title {
    font-weight: 600;
    font-size: 22px;
    margin: 0;
  }

  .post-desc {
    line-height: 1.8;
  }

  .post-info {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.gray[600]};
    font-size: 13px;
  }

  .post-info .post-date {
    font-weight: normal;
    margin-right: 20px;
  }

  .post-info dt {
    margin-right: 5px;
  }

  .post-info dd {
    margin-left: 0;
    margin-right: 5px;
  }

  .post-info.question .post-info-countbox,
  .post-info.question .post-info-countbox div,
  .post-info.comment .like-count-box {
    display: flex;
  }

  .empty-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    font-size: 24px;
    flex-direction: column;
  }

  .empty-box img {
    width: 30rem;
    height: 30rem;
  }

  .empty-desc {
    color: #9e9e9e;
    font-size: 2rem;
  }
`;
