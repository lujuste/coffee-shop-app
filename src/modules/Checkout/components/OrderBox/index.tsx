import React, { useCallback } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";

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
import { useMainHook } from "../../../Home/hooks/mainHook";
import { useNavigate } from "react-router-dom";

interface UserDetailsProps {
  postalCode: string;
  andress: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
}

const OrderBox: React.FC = () => {
  const navigate = useNavigate();

  const {
    ButtonSubmitRef,
    detailsUser,
    setDetailsUser,
    methodOfPayment,
    setMethodOfPayment,
  } = useMainHook();

  const handleMethodPayment = useCallback(
    (type: "credit" | "debit" | "cash") => {
      setMethodOfPayment(() => type);
    },
    [methodOfPayment]
  );

  const schema = yup.object({
    postalCode: yup.string().required("CEP obrigatorio."),
    andress: yup.string().required("Endereco obrigatorio."),
    number: yup.string().required("Numero obrigatorio."),
    complement: yup.string(),
    district: yup.string().required("Bairro obrigatorio."),
    city: yup.string().required("Cidade obrigatorio."),
    state: yup.string().required("Estado obrigatorio."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDetailsProps>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<UserDetailsProps> = async (data) => {
    setDetailsUser((state) => {
      return {
        ...state,
        postalCode: data.postalCode,
        andress: data.andress,
        number: data.number,
        complement: data.complement,
        district: data.district,
        city: data.city,
        state: data.state,
      };
    });

    if (methodOfPayment !== "empty" && detailsUser) {
      navigate("/success");
    }
  };

  return (
    <Main>
      <FormAndress onSubmit={handleSubmit(onSubmit)}>
        <div className="content-heading">
          <img src={locationIcon} />
          <TextContent>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </TextContent>
        </div>

        <InputBase
          placeholder="CEP"
          width="200px"
          {...register("postalCode")}
        />
        <InputBase
          className="road-input"
          placeholder="Rua"
          {...register("andress")}
        />

        <div className="horizontal-stack">
          <InputBase
            placeholder="Numero"
            width="200px"
            className="number-input"
            {...register("number")}
          />
          <InputBase
            placeholder="Complemento"
            width="348px"
            {...register("complement")}
          />
        </div>

        <div className="horizontal-stack">
          <InputBase
            placeholder="Bairro"
            width="200px"
            className="number-input"
            {...register("district")}
          />
          <InputBase
            {...register("city")}
            placeholder="Cidade"
            width="276px"
            className="number-input"
          />

          <InputBase {...register("state")} placeholder="UF" width="60px" />
        </div>

        <button ref={ButtonSubmitRef} type="submit"></button>
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
            isActive={methodOfPayment === "credit" ? true : false}
            onClick={() => handleMethodPayment("credit")}
          />

          <ButtonPayment
            src={debitPaymentIcon}
            typeOfPayment="debit"
            label="Cartao de debito"
            isActive={methodOfPayment === "debit" ? true : false}
            onClick={() => handleMethodPayment("debit")}
          />

          <ButtonPayment
            src={moneyPaymentIcon}
            typeOfPayment="cash"
            label="Dinheiro"
            isActive={methodOfPayment === "cash" ? true : false}
            onClick={() => handleMethodPayment("cash")}
          />
        </PaymentBox>
      </FormPayment>
    </Main>
  );
};

export default OrderBox;
