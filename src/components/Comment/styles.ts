import styled from "styled-components";

export const Wrapper = styled.article`
  width: 55%;
  padding: 40px 60px;
  margin-top: 40px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: white;

  .comment-info {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }

  .user-img {
    width: 60px;
    height: 60px;
    margin-right: 20px;
    border-radius: 50%;
    object-fit: cover;
    border: none;
  }

  .comment-desc {
    margin-bottom: 40px;
  }

  .date {
    display: flex;
    justify-content: flex-end;
    color: #757575;
  }

  .empty {
    width: 100%;
    padding: 30px 0;
    text-align: center;
    font-size: 1.2rem;
    color: ${({theme}) => theme.gray[600]}
  }
`;
