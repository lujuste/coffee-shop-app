import React from "react";

import {
  FormAndress,
  FormPayment,
  Main,
  PaymentBox,
  TextContent,
} from "./styles";

import locationIcon from "../../assets/localization-icon.svg";
import moneyIcon from "../../assets/payment-icon.svg";
import moneyPaymentIcon from "../../assets/money.svg";
import creditPaymentIcon from "../../assets/credit.svg";
import debitPaymentIcon from "../../assets/debit.svg";

import InputBase from "../InputBase";
import ButtonPayment from "../ButtonPayment";

const OrderBox: React.FC = () => {
  return (
    <Main>
      <FormAndress>
        <div className="content-heading">
          <img src={locationIcon} />
          <TextContent>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </TextContent>
        </div>

        <InputBase name="cep" placeholder="CEP" width="200px" />
        <InputBase className="road-input" name="road" placeholder="Rua" />

        <div className="horizontal-stack">
          <InputBase
            name="number"
            placeholder="Numero"
            width="200px"
            className="number-input"
          />
          <InputBase
            name="complement"
            placeholder="Complemento"
            width="348px"
          />
        </div>

        <div className="horizontal-stack">
          <InputBase
            name="postalcode"
            placeholder="Bairro"
            width="200px"
            className="number-input"
          />
          <InputBase
            name="city"
            placeholder="Cidade"
            width="276px"
            className="number-input"
          />

          <InputBase name="district" placeholder="UF" width="60px" />
        </div>
      </FormAndress>
      <FormPayment>
        <div className="content-heading">
          <img src={moneyIcon} />
          <TextContent>
            <p>Pagamento</p>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </TextContent>
        </div>

        <PaymentBox>
          <ButtonPayment
            src={creditPaymentIcon}
            typeOfPayment="credit"
            label="Cartao de credito"
          />

          <ButtonPayment
            src={debitPaymentIcon}
            typeOfPayment="debit"
            label="Cartao de debito"
          />

          <ButtonPayment
            src={moneyPaymentIcon}
            typeOfPayment="cash"
            label="Dinheiro"
          />
        </PaymentBox>
      </FormPayment>
    </Main>
  );
};

export default OrderBox;
