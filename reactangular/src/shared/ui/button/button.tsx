import { PropsWithChildren } from "react";

const Button = (props: PropsWithChildren) => {
  return <button>{props.children}</button>;
};

export default Button;
