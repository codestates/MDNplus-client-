import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  .back-btn {
    position: absolute;
    top: 2rem;
    left: 2rem;
    color: #78909c;
    font-size: 20px;
  }

  .question-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .comment-section {
    background: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 5rem;
  }

  .comment-box {
    background: white;
    padding: 5rem 1rem 5rem 1rem;
    width: 60%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
  }
`;
