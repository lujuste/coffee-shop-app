import React from "react";
import { Button } from "./styles";
import cartIcon from "../../../assets/cart-icon.svg";
// import { Container } from './styles';

const ButtonCart: React.FC = () => {
  return (
    <Button>
      <img src={cartIcon} />
    </Button>
  );
};

export default ButtonCart;
