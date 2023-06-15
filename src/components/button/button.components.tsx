import { ReactNode } from "react";

// CREATED REUSEABLE COMPONENT FOR THIS BUTTON - I AM PROUD!
enum ButtonType {
  base,
  inverted,
}

const BUTTON_STYLES: Record<ButtonType, string> = {
  [ButtonType.base]: "bg-[#f25f3a] text-[#fafafa]",
  [ButtonType.inverted]: "bg-[#fafafa] text-[#f25f3a]",
};

export type ButtonProps = {
  children?: ReactNode;
  buttonEle: ButtonType;
};

const Button = (props: ButtonProps) => {
  const { children, buttonEle } = props;
  const basicButton = `py-3 px-8 border-solid rounded-full`;
  const finalButtonClasses = `${basicButton} ${BUTTON_STYLES[buttonEle]}`;
  return <button className={finalButtonClasses}>{children}</button>;
};

export default Button;

Button.defaultProps = {
  buttonEle: ButtonType.base,
};

Button.buttonEle = ButtonType;
