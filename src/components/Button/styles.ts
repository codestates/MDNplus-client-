import { ButtonProps } from "./index";
import styled, { css } from "styled-components";

const primaryButtonStyle = css`
  border: none;
  background: ${({ theme }) => theme.primary[600]};
  color: ${({ theme }) => theme.gray[200]};
  transition: opacity 200ms ease-in-out;

  &:hover {
    opacity: 80%;
  }

  &:active {
    opacity: 100%;
    background: ${({ theme }) => theme.primary[700]};
  }
`;

const grayButtonStyle = css`
  border: none;
  background: ${({ theme }) => theme.gray[200]};
  color: ${({ theme }) => theme.gray[700]};
  transition: background 200ms ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.gray[300]};
  }

  &:active {
    background: ${({ theme }) => theme.gray[400]};
  }
`;

const whiteButtonStyle = css`
  border: 1px solid ${({ theme }) => theme.gray[400]};
  background: white;
  color: ${({ theme }) => theme.gray[800]};
  transition: background 300ms ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.gray[700]};
    color: ${({ theme }) => theme.gray[200]};
  }

  &:active {
    background: ${({ theme }) => theme.gray[800]};
  }
`;

const textButtonStyle = css`
  border: none;
  background: none;

  &:hover {
    opacity: 80%;
  }

  &:active {
    opacity: 100%;
  }
`;

const sizeSmall = css`
  width: 80px;
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
    case "gray":
      return grayButtonStyle;
    case "white":
      return whiteButtonStyle;
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

export const Wrapper = styled.button<ButtonProps>`
  padding: 8px;
  border-radius: 25px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;

  ${({ btnStyle }) => setButtonStyle(btnStyle)};
  ${({ size }) => setButtonSize(size)};
`;
