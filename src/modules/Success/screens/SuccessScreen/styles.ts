import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 160px;

  span {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.boldText};
  }
`;

export const Heading = styled.h2`
  font-family: "Baloo 2", sans-serif;
  color: ${({ theme }) => theme.colors.goldDark};
  font-size: 32px;
  font-weight: 800;
  line-height: 41.6px;
  margin-top: 4rem;
`;

export const HorizontalStack = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  min-height: 400px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  min-height: 400px;
  justify-content: center;
  align-items: center;
`;

export const GradientBorderContainer = styled.div`
  width: 526px;
  height: 270px;
  border: 1px solid black;
  padding: 40px;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 6px 36px 6px 36px;
  background-color: white;
  gap: 1.5rem;

  ::before {
    content: "";
    position: absolute;
    inset: -2px;
    z-index: -1 !important;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(182.89deg, #dbac2c 2.61%, #8847f8 98.76%);
  }
`;

export const Flex = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;

  img {
    margin-right: 1rem;
  }

  span {
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 20.8px;
    color: ${({ theme }) => theme.colors.boldText};
  }
`;
