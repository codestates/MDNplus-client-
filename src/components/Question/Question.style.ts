import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 50%;
  padding: 20px;
  border-top: 1px solid rgb(224, 224, 224);

  .question-title-box {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .question-logo {
    margin-right: 5px;
    color: #1658d8;
    font-weight: 600;
    font-size: 20px;
  }

  .question-title {
    font-size: 16px;
    font-weight: 500;
  }

  .question-desc {
    color: #757575;
    font-size: 0.8rem;
    line-height: 1.5;
    cursor: pointer;
  }

  .tag-box {
    margin: 6px 0;
  }

  .tag {
    margin-right: 5px;
    padding: 5px 10px;
    border-radius: 2rem;
    background: #f6f6f6;
    color: #686868;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.primary[500]};
      color: white;
    }
  }

  .question-info {
    display: flex;
    align-items: center;
    color: #686868;
    font-size: 0.8rem;
  }

  .question-info dl {
    display: flex;
  }

  .question-info div {
    display: flex;
  }

  .question-info dt {
    margin-right: 3px;
  }

  .question-info dd {
    margin: 0;
    margin-right: 15px;
  }

  .question-date {
    font-weight: normal;
  }
`;
