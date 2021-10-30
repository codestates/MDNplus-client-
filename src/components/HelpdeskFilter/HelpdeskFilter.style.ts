import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ active: string }>`
  width: 90%;
  display: flex;
  margin: 30px 10px 10px 10px;

  .helpdesk-filter {
    margin-right: 16px;
    background: none;
    border: none;
    color: #757575;
    cursor: pointer;
  }

  ${({ active }) =>
    active === "최신순" &&
    css`
      .helpdesk-filter:first-child {
        color: #3f51b5;
        font-weight: bold;
      }
    `}

  ${({ active }) =>
    active === "인기순" &&
    css`
      .helpdesk-filter:last-child {
        color: #3f51b5;
        font-weight: bold;
      }
    `}
`;
