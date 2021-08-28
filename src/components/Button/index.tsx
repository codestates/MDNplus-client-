import { MouseEventHandler, ReactElement } from "react";
import {ButtonStyle} from "./Button.style"

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  bgColor?: string;
  color?: string;
  children?: string;
  className?: string;
  handler?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
};

function Button({ children, size='medium', bgColor, color, handler, className }: ButtonProps) {
  return (
    <ButtonStyle className={className} size={size} bgColor={bgColor} color={color} onClick={handler}>
      {children}
    </ButtonStyle>
  );
}

export default Button;
