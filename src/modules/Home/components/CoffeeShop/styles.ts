import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Heading = styled.h2`
  font-size: 32px;
  font-family: "Baloo 2", sans-serif;
  width: 100%;
  margin: 2rem 0 4rem 10rem;
`;

export const Title = styled.h4`
  font-size: 20px;
  font-family: "Baloo 2", sans-serif;
  margin: 0.65rem auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  margin: 0 auto;
  margin-bottom: 3rem;
  grid-row-gap: 6rem;
`;

export const GridItem = styled.div`
  display: flex;
  width: 256px;
  height: 310px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 6px 36px 6px 36px;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: flex-start;

  img {
    width: 120px;
    transform: translateX(45%) translateY(-40%);
  }
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.colors.goldDark};
  font-family: "Roboto", sans-serif;
  font-weight: 700;
`;

export const DescriptionProduct = styled.span`
  color: ${({ theme }) => theme.colors.simpleText};
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 130%;
  font-size: 14px;
  text-align: center;
`;

export const VerticalStack = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const BottomFlex = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

export const PriceContent = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  font-family: "Baloo 2", sans-serif;
  font-size: 24px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.boldText};
  margin-left: 0.3rem;

  span {
    color: ${({ theme }) => theme.colors.boldText};
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 400;
    margin-right: 0.2rem;
    margin-top: 0.1rem;
  }
`;

export const QuantityContent = styled.div`
  width: 35%;
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
  max-width: 72px;
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
    margin-top: 10px;
    margin-right: 12px;
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
    margin-top: 10px;
    margin-right: 12px;
  }
`;

export const Quantity = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
`;
