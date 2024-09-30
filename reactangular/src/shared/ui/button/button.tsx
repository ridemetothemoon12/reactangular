import { MouseEvent, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface CommonProps {
  className?: string;
}
interface ButtonProps extends CommonProps {
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const cn = twMerge("", props.className);
  return (
    <button className={cn} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
