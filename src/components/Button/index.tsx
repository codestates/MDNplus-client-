import { Wrapper } from "./Button.style";

export type ButtonProps = {
  size: "small" | "medium" | "large";
  btnStyle: string;
  children?: string;
  className?: string;
  handler?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function Button({ children, size, btnStyle, handler, className }: ButtonProps) {
  return (
    <Wrapper
      className={className}
      size={size}
      btnStyle={btnStyle}
      onClick={handler}
    >
      {children}
    </Wrapper>
  );
}

export default Button;
