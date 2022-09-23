import styled from "styled-components";

export const CartContainer = styled.div`
  width: 448px;
  min-height: 498px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 6px 44px 6px 44px;
  padding: 40px;

  .empty-cart {
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.colors.boldText};
    font-weight: 700;
  }
`;

export const OrderWrapper = styled.div`
  width: 368px;
  height: 80px;
  display: flex;
`;

export const ImageContent = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;

  img {
    width: 64px;
    height: 64px;
  }
`;

export const ItemContent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;

  span {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.boldText};
  }
`;

export const PriceContent = styled.div`
  width: 30%;
  height: 100%;
  color: ${({ theme }) => theme.colors.boldText};
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin-right: 0.2rem;
  margin-top: 0.1rem;
  display: flex;
  justify-content: flex-end;
  padding-right: 0.5rem;

  span {
    margin-left: auto;
  }
`;

export const ContentMiddle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const QuantityContent = styled.div`
  min-width: 72px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const CartContent = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const BgButton = styled.div`
  width: 100%;
  max-width: 172px;
  height: 38px;
  background: ${({ theme }) => theme.colors.darkGray};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 6px;
  width: 38px;
  height: 38px;
  margin-left: 0.25rem;

  img {
    width: 22px;
    margin-top: 1.1rem;
    margin-right: 1.21rem;
  }
`;

export const ButtonLess = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 0.3rem;
  background-color: transparent;

  img {
  }
`;

export const ButtonMore = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: transparent;
  margin-left: 0.2rem;

  img {
  }
`;

export const Quantity = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

export const ButtonRemoveCart = styled.button`
  width: 120px;
  height: 38px;
  border-radius: 6px;
  display: flex;
  margin-left: 0.5rem;
  background-color: ${({ theme }) => theme.colors.darkGray};
  align-items: center;
  justify-content: center;

  span {
    font-size: 12px;
    font-family: "Roboto", sans-serif;
    margin-left: 0.2rem;
  }

  img {
    width: 22px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.darkGray};
  margin: 1rem 0;
`;

export const PriceDetails = styled.div`
  width: 100%;
  height: 92px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .normal-text {
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }

  .bold-text {
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
  }
`;

export const ButtonConfirm = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gold};
  height: 46px;
  color: white;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  border-radius: 6px;
  margin-top: 2rem;
`;

export const HStack = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const EmptyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
