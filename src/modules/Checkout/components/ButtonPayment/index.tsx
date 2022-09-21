import React, { ButtonHTMLAttributes } from "react";

import { Button } from "./styles";

interface ButtonPaymentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
  typeOfPayment?: "credit" | "debit" | "cash";
  label: string;
}

const ButtonPayment: React.FC<ButtonPaymentProps> = ({
  src,
  typeOfPayment,
  label,
  ...rest
}) => {
  return (
    <Button {...rest}>
      <img src={src} />
      <span> {label} </span>
    </Button>
  );
};

export default ButtonPayment;
