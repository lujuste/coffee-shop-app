import React, { InputHTMLAttributes, Ref } from "react";
import { forwardRef } from "react";

import { Input } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
}

const InputBase: React.FC<InputProps> = forwardRef(
  ({ width, ...rest }, ref: Ref<HTMLInputElement>) => {
    return <Input ref={ref} width={width} {...rest} />;
  }
);

export default InputBase;
