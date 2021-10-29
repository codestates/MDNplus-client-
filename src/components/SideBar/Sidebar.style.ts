import styled, { css } from "styled-components";

export const Wrapper = styled.nav<{ active: string }>`
  width: 280px;
  background: #f4f4f4;
  box-shadow: 4px 0px 5px #eeeeee;

  .service-name {
    display: block;
    padding: 16px;
    cursor: pointer;
    text-align: center;
    font-weight: 500;
    color: ${({ theme }) => theme.gray.default};
    text-decoration: none;
  }

  ${({ active }) =>
    active === "wiki"
      ? css`
          .service-name:first-child {
            background: rgb(220, 234, 255);
            font-weight: bold;
          }
        `
      : null}

  ${({ active }) =>
    active === "helpdesk"
      ? css`
          .service-name:last-child {
            background: rgb(220, 234, 255);
            font-weight: bold;
          }
        `
      : null}
`;
