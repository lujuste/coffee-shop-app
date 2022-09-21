import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormAndress = styled.div`
  width: 640px;
  height: 372px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray};
  margin-left: 10rem;
  border-radius: 6px;
  padding: 40px;
  flex-direction: column;

  .content-heading {
    width: 100%;
    height: 44px;
    display: flex;
    margin-bottom: 1rem;
  }

  img {
    width: 22px;
    height: 22px;
    margin-right: 1rem;
  }

  .road-input {
    margin-top: 1rem;
  }

  .horizontal-stack {
    display: flex;
    margin-top: 1rem;
  }

  .number-input {
    margin-right: 0.5rem;
  }
`;

export const FormPayment = styled.div`
  width: 640px;
  height: 207px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray};
  margin-left: 10rem;
  border-radius: 6px;
  margin-top: 1rem;
  padding: 40px;
  flex-direction: column;

  .content-heading {
    width: 100%;
    height: 44px;
    display: flex;
    margin-bottom: 1rem;
  }

  img {
    width: 26px;
    height: 26px;
    margin-right: 1rem;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.boldText};
    font-weight: 400;
  }

  span {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.boldText};
    font-weight: 400;
  }
`;

export const PaymentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
