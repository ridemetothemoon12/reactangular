import { ChangeEvent, ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface CommonProps {
  registerName?: string;
  className?: string;
}

interface InputProps extends CommonProps, ComponentPropsWithoutRef<"input"> {
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const cn = twMerge("", props.className);
  return <input className={cn} {...props} />;
};

export default Input;
