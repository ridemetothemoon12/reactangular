import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

interface CommonProps {
  className?: string;
}
interface InputProps extends CommonProps {
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const cn = twMerge("", props.className);
  return <input className={cn} {...props} />;
};

export default Input;
