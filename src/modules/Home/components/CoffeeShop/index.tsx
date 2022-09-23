import React, { useCallback, useEffect, useState } from "react";

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
import { useMainHook } from "../../hooks/mainHook";
import { ProductsProps } from "../../@types/productsType";
import { useNavigate } from "react-router-dom";

const CoffeeShop: React.FC = () => {
  const { products, chartOrder, setChartOrder } = useMainHook();
  const [CoffeeData, setCoffeeData] = useState<ProductsProps[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = localStorage.getItem("products");
    if (items) {
      setCoffeeData(JSON.parse(items));
    }
  }, [products]);

  const handleAddQuantity = useCallback(
    (index: number) => {
      setCoffeeData((state) => {
        let cloneState = [...state];
        cloneState[index].quantity += 1;
        return cloneState;
      });
    },
    [products]
  );

  const handleRemoveQuantity = useCallback(
    (index: number) => {
      setCoffeeData((state) => {
        let cloneState = [...state];
        if (cloneState[index].quantity <= 1) return state;
        cloneState[index].quantity -= 1;

        return cloneState;
      });
    },
    [products]
  );

  const handleToChart = useCallback(
    (id: string) => {
      CoffeeData.forEach((object) => {
        if (object.id === id) {
          setChartOrder((state) => {
            return [...state, object];
          });
        }
      });
    },
    [CoffeeData, chartOrder]
  );

  return (
    <Container>
      <Heading>Nossos cafes</Heading>
      <Grid>
        {CoffeeData.map((coffee: ProductsProps, index: number) => (
          <GridItem key={coffee.id}>
            <VerticalStack>
              <img src={coffee.image} />

              {coffee.tags.map((tag) => (
                <Tag key={String(Math.random())} category={tag} />
              ))}

              <Title> {coffee.name} </Title>
              <DescriptionProduct>{coffee.description}</DescriptionProduct>

              <BottomFlex>
                <PriceContent>
                  <span>R$</span> {coffee.price}
                </PriceContent>

                <QuantityContent>
                  <BgButton>
                    <ButtonLess onClick={() => handleRemoveQuantity(index)}>
                      <img src={buttonLessIcon} />
                    </ButtonLess>
                    <Quantity> {coffee.quantity} </Quantity>
                    <ButtonMore onClick={() => handleAddQuantity(index)}>
                      <img src={buttonMoreIcon} />
                    </ButtonMore>
                  </BgButton>
                </QuantityContent>

                <CartContent>
                  <CartButton onClick={() => handleToChart(coffee.id)}>
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
