import React, { useEffect, useState } from "react";
import Layout from "../../../../shared/components/Layout";
//icons
import illustrationIcon from "../../assets/illustration.svg";
import cashIcon from "../../assets/cash.svg";
import locationIcon from "../../assets/location.svg";
import timerIcon from "../../assets/timer.svg";

import {
  Container,
  Flex,
  GradientBorderContainer,
  Heading,
  HorizontalStack,
  LeftContainer,
  RightContainer,
} from "./styles";
import { useMainHook } from "../../../Home/hooks/mainHook";

const SuccessScreen: React.FC = () => {
  const [payment, setPayment] = useState<string | null>("");
  const [andress, setAndress] = useState<any>(null);
  const { chartOrder, setChartOrder } = useMainHook();

  useEffect(() => {
    const andressLocalStorage = localStorage.getItem("perfil");

    if (andressLocalStorage) {
      setAndress(JSON.parse(andressLocalStorage));
    }
  }, []);

  useEffect(() => {
    const paymentLocalStorage = localStorage.getItem("pagamento");
    if (paymentLocalStorage) {
      setPayment(() => JSON.parse(paymentLocalStorage));
    }
  }, []);

  useEffect(() => {
    if (payment === "credit") {
      console.log("eh isso mesmo credito");
    }
  }, [payment]);

  useEffect(() => {
    setChartOrder([]);
  }, []);

  return (
    <Layout>
      <Container>
        <Heading>Uhu! Pedido confirmado!</Heading>
        <span>Agora é só aguardar que logo o café chegará até você</span>

        <HorizontalStack>
          <LeftContainer>
            <GradientBorderContainer>
              <Flex>
                <img src={locationIcon} />
                <span style={{ maxWidth: "354px" }}>
                  {`Entrega em ${andress?.andress}, numero ${andress?.number} ${andress?.complement}, ${andress?.district} - ${andress?.city}, ${andress?.state} `}
                </span>
              </Flex>

              <Flex>
                <img src={timerIcon} />
                <span style={{ maxWidth: "354px" }}>
                  Previsão de entrega 20 min - 30 min
                </span>
              </Flex>

              <Flex>
                <img src={cashIcon} />
                <span style={{ maxWidth: "206px" }}>
                  {`Pagamento na entrega ${
                    payment === "credit"
                      ? "Cartao de credito"
                      : payment === "debit"
                      ? "Cartao de debito"
                      : payment === "cash" && "dinheiro"
                  }`}
                </span>
              </Flex>
            </GradientBorderContainer>
          </LeftContainer>
          <RightContainer>
            <img src={illustrationIcon} />
          </RightContainer>
        </HorizontalStack>
      </Container>
    </Layout>
  );
};

export default SuccessScreen;
