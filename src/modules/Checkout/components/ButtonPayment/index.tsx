import React, { ButtonHTMLAttributes } from "react";

import { Button } from "./styles";

interface ButtonPaymentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
  typeOfPayment?: "credit" | "debit" | "cash" | "empty";
  label: string;
  isActive?: boolean;
}

const ButtonPayment: React.FC<ButtonPaymentProps> = ({
  src,
  typeOfPayment,
  label,
  isActive = false,
  ...rest
}) => {
  return (
    <Button isActive={isActive} {...rest}>
      <img src={src} />
      <span> {label} </span>
    </Button>
  );
};

export default ButtonPayment;
