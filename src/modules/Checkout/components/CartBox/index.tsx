import React, { useCallback, useEffect, useMemo, useState } from "react";

import {
  BgButton,
  ButtonConfirm,
  ButtonLess,
  ButtonMore,
  ButtonRemoveCart,
  CartContainer,
  ContentMiddle,
  EmptyWrapper,
  HStack,
  ImageContent,
  ItemContent,
  Line,
  OrderWrapper,
  PriceContent,
  PriceDetails,
  Quantity,
  QuantityContent,
} from "./styles";

import buttonLessIcon from "../../../Home/assets/lessbutton-icon.svg";
import buttonMoreIcon from "../../../Home/assets/more-icon.svg";
import deleteIcon from "../../assets/delete-icon.svg";
import { useMainHook } from "../../../Home/hooks/mainHook";

const CartBox: React.FC = () => {
  const { chartOrder, setChartOrder, ButtonSubmitRef } = useMainHook();
  const [sumOfItems, setSumOfItems] = useState(0);
  const [totalForPaid, setTotalForPaid] = useState(0);

  const deliverTax = 11.22;

  const handleDeleteItem = useCallback(
    (itemId: string) => {
      setChartOrder((state) => {
        let cloneState = [...state];
        let newArray = cloneState.filter((item) => item.id !== itemId);
        return newArray;
      });
    },
    [chartOrder]
  );

  useEffect(() => {
    const totalPrice = chartOrder.reduce((a, b) => a + b.price * b.quantity, 0);
    setSumOfItems(totalPrice);
  }, [chartOrder]);

  useEffect(() => {
    setTotalForPaid(() => sumOfItems + deliverTax);
  }, [sumOfItems]);

  const handleModifyQuantity = useCallback(
    (index: number, type: "add" | "remove") => {
      if (type === "add") {
        setChartOrder((state) => {
          let cloneState = [...state];
          cloneState[index].quantity += 1;
          return cloneState;
        });
      }

      if (type === "remove") {
        setChartOrder((state) => {
          let cloneState = [...state];
          if (cloneState[index].quantity <= 1) return state;
          cloneState[index].quantity -= 1;
          return cloneState;
        });
      }
    },
    [chartOrder]
  );

  const handleSubmitOrder = useCallback(() => {
    ButtonSubmitRef.current?.click();
  }, []);

  return (
    <CartContainer>
      {chartOrder.length > 0 &&
        chartOrder.map((order, index) => (
          <>
            <OrderWrapper key={order.id}>
              <ImageContent>
                <img src={order.image} />
              </ImageContent>
              <ItemContent>
                <span> {order.name} </span>
                <ContentMiddle>
                  <QuantityContent>
                    <BgButton>
                      <ButtonLess
                        onClick={() => handleModifyQuantity(index, "remove")}
                      >
                        <img src={buttonLessIcon} />
                      </ButtonLess>
                      <Quantity> {order.quantity} </Quantity>
                      <ButtonMore
                        onClick={() => handleModifyQuantity(index, "add")}
                      >
                        <img src={buttonMoreIcon} />
                      </ButtonMore>
                    </BgButton>
                  </QuantityContent>

                  <ButtonRemoveCart>
                    <img src={deleteIcon} />
                    <span onClick={() => handleDeleteItem(order.id)}>
                      REMOVER
                    </span>
                  </ButtonRemoveCart>
                </ContentMiddle>
              </ItemContent>

              <PriceContent>
                <span> {order.price} </span>
              </PriceContent>
            </OrderWrapper>
            <Line />
          </>
        ))}

      {chartOrder.length === 0 && (
        <EmptyWrapper>
          <p className="empty-cart">Voce nao possui itens no carrinho!</p>
        </EmptyWrapper>
      )}

      {chartOrder.length > 0 && (
        <>
          <PriceDetails>
            <HStack>
              <span className="normal-text">Total itens</span>
              <p className="normal-text">R$ {sumOfItems.toFixed(2)} </p>
            </HStack>
            <HStack>
              <span className="normal-text">Entrega</span>
              <p className="normal-text">R$ {deliverTax}</p>
            </HStack>
            <HStack>
              <span className="bold-text">Total</span>
              <p className="bold-text">R$ {totalForPaid.toFixed(2)} </p>
            </HStack>
          </PriceDetails>
          <ButtonConfirm onClick={handleSubmitOrder}>
            CONFIRMAR PEDIDO
          </ButtonConfirm>
        </>
      )}
    </CartContainer>
  );
};

export default CartBox;
