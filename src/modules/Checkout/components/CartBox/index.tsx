import React from "react";

import {
  BgButton,
  ButtonConfirm,
  ButtonLess,
  ButtonMore,
  ButtonRemoveCart,
  CartContainer,
  ContentMiddle,
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

const CartBox: React.FC = () => {
  return (
    <CartContainer>
      <OrderWrapper>
        <ImageContent>
          <img src={"./images/american.svg"} />
        </ImageContent>
        <ItemContent>
          <span>Expresso tradicional</span>
          <ContentMiddle>
            <QuantityContent>
              <BgButton>
                <ButtonLess>
                  <img src={buttonLessIcon} />
                </ButtonLess>
                <Quantity> 1 </Quantity>
                <ButtonMore>
                  <img src={buttonMoreIcon} />
                </ButtonMore>
              </BgButton>
            </QuantityContent>

            <ButtonRemoveCart>
              <img src={deleteIcon} />
              <span>REMOVER</span>
            </ButtonRemoveCart>
          </ContentMiddle>
        </ItemContent>

        <PriceContent>
          <span> R$ 9,90 </span>
        </PriceContent>
      </OrderWrapper>
      <Line />

      <OrderWrapper>
        <ImageContent>
          <img src={"./images/american.svg"} />
        </ImageContent>
        <ItemContent>
          <span>Expresso tradicional</span>
          <ContentMiddle>
            <QuantityContent>
              <BgButton>
                <ButtonLess>
                  <img src={buttonLessIcon} />
                </ButtonLess>
                <Quantity> 1 </Quantity>
                <ButtonMore>
                  <img src={buttonMoreIcon} />
                </ButtonMore>
              </BgButton>
            </QuantityContent>

            <ButtonRemoveCart>
              <img src={deleteIcon} />
              <span>REMOVER</span>
            </ButtonRemoveCart>
          </ContentMiddle>
        </ItemContent>

        <PriceContent>
          <span> R$ 9,90 </span>
        </PriceContent>
      </OrderWrapper>
      <Line />

      <PriceDetails>
        <HStack>
          <span className="normal-text">Total itens</span>
          <p className="normal-text">R$ 11.22</p>
        </HStack>
        <HStack>
          <span className="normal-text">Entrega</span>
          <p className="normal-text">R$ 11.22</p>
        </HStack>
        <HStack>
          <span className="bold-text">Total</span>
          <p className="bold-text">R$ 11.22</p>
        </HStack>
      </PriceDetails>

      <ButtonConfirm>CONFIRMAR PEDIDO</ButtonConfirm>
    </CartContainer>
  );
};

export default CartBox;
