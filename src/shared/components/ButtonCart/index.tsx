import React from "react";
import { Baloon, Button } from "./styles";
import cartIcon from "../../../assets/cart-icon.svg";
import { useMainHook } from "../../../modules/Home/hooks/mainHook";
// import { Container } from './styles';

interface ButtonProps {
  onClick: () => void;
}

const ButtonCart: React.FC<ButtonProps> = ({ onClick }) => {
  const { chartOrder } = useMainHook();

  return (
    <Button onClick={onClick}>
      <img src={cartIcon} />
      {chartOrder.length > 0 && <Baloon> {chartOrder.length} </Baloon>}
    </Button>
  );
};

export default ButtonCart;
