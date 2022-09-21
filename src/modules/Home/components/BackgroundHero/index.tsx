import React from "react";

import {
  Container,
  Description,
  FlexBottom,
  FlexTop,
  GradientMask,
  Heading,
  HorizontalStack,
  InfoWrapper,
  VerticalStack,
} from "./styles";

//icons
import bgIcon from "../../assets/background.svg";
import coffeeHeroIcon from "../../assets/bgicon.svg";
import coffeeIcon from "../../assets/coffee-icon.svg";
import marketIcon from "../../assets/market-icon.svg";
import packageIcon from "../../assets/package-icon.svg";
import watchIcon from "../../assets/watch-icon.svg";
import InfoProduct from "../InfoProduct";

const infoArray = [
  { icon: marketIcon, text: "Compra simples e segura", type: "top" },
  { icon: packageIcon, text: "Embalagem mantém o café intacto", type: "top" },
  { icon: watchIcon, text: "Entrega rápida e rastreada", type: "bottom" },
  {
    icon: coffeeIcon,
    text: "O café chega fresquinho até você",
    type: "bottom",
  },
];

const BackgroundHero: React.FC = () => {
  return (
    <Container src={bgIcon}>
      {/* <GradientMask /> */}
      <HorizontalStack>
        <VerticalStack>
          <Heading>Encontre o cafe perfeito para qualquer hora do dia</Heading>
          <Description>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Description>
          <InfoWrapper>
            <FlexTop>
              {infoArray.map(
                (info) =>
                  info.type === "top" && (
                    <InfoProduct icon={info.icon} text={info.text} />
                  )
              )}
            </FlexTop>
            <FlexBottom>
              {infoArray.map(
                (info) =>
                  info.type === "bottom" && (
                    <InfoProduct icon={info.icon} text={info.text} />
                  )
              )}
            </FlexBottom>
          </InfoWrapper>
        </VerticalStack>
        <img className={"background-coffee"} src={coffeeHeroIcon} />
      </HorizontalStack>
    </Container>
  );
};

export default BackgroundHero;
