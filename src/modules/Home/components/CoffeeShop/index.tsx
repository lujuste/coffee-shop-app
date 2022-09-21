import React from "react";

import {
  BgButton,
  BottomFlex,
  ButtonLess,
  ButtonMore,
  CartButton,
  CartContent,
  Container,
  DescriptionProduct,
  Grid,
  GridItem,
  Heading,
  PriceContent,
  Quantity,
  QuantityContent,
  Title,
  VerticalStack,
} from "./styles";
import Tag from "../Tag";

import { CoffeeList } from "../../../../utils/CoffeeList";

import cartButtonIcon from "../../assets/cart-button.svg";
import buttonMoreIcon from "../../assets/more-icon.svg";
import buttonLessIcon from "../../assets/lessbutton-icon.svg";

const CoffeeShop: React.FC = () => {
  return (
    <Container>
      <Heading>Nossos cafes</Heading>
      <Grid>
        {CoffeeList.map((coffee) => (
          <GridItem>
            <VerticalStack>
              <img src={coffee.image} />

              {coffee.tags.map((tag) => (
                <Tag category={tag} />
              ))}

              <Title> {coffee.name} </Title>
              <DescriptionProduct>{coffee.description}</DescriptionProduct>

              <BottomFlex>
                <PriceContent>
                  <span>R$</span> {coffee.price}
                </PriceContent>

                <QuantityContent>
                  <BgButton>
                    <ButtonLess>
                      <img src={buttonLessIcon} />
                    </ButtonLess>
                    <Quantity> {coffee.quantity} </Quantity>
                    <ButtonMore>
                      <img src={buttonMoreIcon} />
                    </ButtonMore>
                  </BgButton>
                </QuantityContent>

                <CartContent>
                  <CartButton>
                    <img src={cartButtonIcon} />
                  </CartButton>
                </CartContent>
              </BottomFlex>
            </VerticalStack>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default CoffeeShop;
