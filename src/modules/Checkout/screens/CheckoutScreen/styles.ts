import styled from "styled-components";

export const CheckoutZone = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  display: flex;
`;

export const OrderContent = styled.div`
  width: 60%;
  display: flex;
  height: 700px;
  flex-direction: column;
`;

export const CartContent = styled.div`
  width: 40%;
  display: flex;
  min-height: 700px;
  flex-direction: column;

  margin-left: -2rem;
`;

export const Title = styled.h3<{ margin?: string }>`
  font-family: "Baloo 2", sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin-left: ${({ margin }) => (margin ? margin : 0)};
  margin-bottom: 1rem;
`;
