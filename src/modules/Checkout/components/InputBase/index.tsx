import React, { InputHTMLAttributes } from "react";

import { Input } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
}

const InputBase: React.FC<InputProps> = ({ width, ...rest }) => {
  return <Input width={width} {...rest} />;
};

export default InputBase;
