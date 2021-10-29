import { ButtonProps } from "./index";
import styled, { css } from "styled-components";

const primaryButtonStyle = css`
  background: ${({ theme }) => theme.primary[700]};
  color: ${({ theme }) => theme.gray.light};
  border: none;

  &:hover {
    opacity: 80%;
  }
`;

const textButtonStyle = css`
  background: none;
  border: none;
  color: black;

  &:hover {
    background: #eeeeee;
  }
`;

const sizeSmall = css`
  width: 70px;
  height: 35px;
`;

const sizeMedium = css`
  width: 100px;
  height: 35px;
`;

function setButtonStyle(btnStyle: string) {
  switch (btnStyle) {
    case "primary":
      return primaryButtonStyle;
    case "text":
      return textButtonStyle;
  }
}

function setButtonSize(size: string) {
  switch (size) {
    case "small":
      return sizeSmall;
    case "medium":
      return sizeMedium;
  }
}

export const ButtonStyle = styled.button<ButtonProps>`
  padding: 0.5rem;
  border-radius: 15px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 100ms ease-in-out;

  ${({ btnStyle }) => setButtonStyle(btnStyle)};
  ${({ size }) => setButtonSize(size)};
`;
