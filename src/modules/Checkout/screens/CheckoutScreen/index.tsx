import React, { useEffect } from "react";

import Layout from "../../../../shared/components/Layout";
import { useMainHook } from "../../../Home/hooks/mainHook";
import CartBox from "../../components/CartBox";
import OrderBox from "../../components/OrderBox";
import { CartContent, CheckoutZone, OrderContent, Title } from "./styles";

const CheckoutScreen: React.FC = () => {
  return (
    <Layout>
      <CheckoutZone>
        <OrderContent>
          <Title margin="10rem">Complete seu pedido</Title>
          <OrderBox />
        </OrderContent>
        <CartContent>
          <Title>Cafes selecionados</Title>
          <CartBox />
        </CartContent>
      </CheckoutZone>
    </Layout>
  );
};

export default CheckoutScreen;
