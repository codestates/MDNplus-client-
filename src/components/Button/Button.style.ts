import {ButtonProps} from "./index"
import styled, { css } from "styled-components";

type SizeType = Pick<ButtonProps, "size">;

const sizeStyles = css<SizeType>`
  ${({ size }) =>
    size === "small" &&
    css`
      width: 5rem;
      height: 1.5rem;
      font-size: 0.9rem;
    `}

  ${({ size }) =>
    size === "medium" &&
    css`
      width: 6rem;
      height: 2rem;
      font-size: 1rem;
    `}

  ${({ size }) =>
    size === "large" &&
    css`
      width: 7rem;
      height: 2.5rem;
      font-size: 1.3rem;
    `}
`;

export const ButtonStyle = styled.button<ButtonProps>`
  ${sizeStyles}

  background: ${props => props.bgColor || 'none'};
  color: ${props => props.color || 'black'};
  cursor: pointer;
  border-radius: 1.5rem;
  border: none;

`;
