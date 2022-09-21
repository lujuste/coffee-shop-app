import styled from "styled-components";

export const Container = styled.div<{ src: string }>`
  width: 100%;
  max-width: 1440px;
  height: 544px;
  background: ${({ src }) => `url(${src})`};
  margin: 0 auto;
  position: relative;
`;

export const GradientMask = styled.div`
  background-image: linear-gradient(180deg, transparent, white);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 5;
`;

export const HorizontalStack = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 10;
  margin: 0 auto;
  justify-content: center;

  img {
    z-index: 33;
    width: 476px;
  }
`;

export const VerticalStack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 588px;
  align-items: center;
  justify-content: center;
  z-index: 60;
  margin-right: 3rem;
`;

export const Heading = styled.h2`
  font-size: 48px;
  line-height: 120%;
  font-weight: 800;
  font-family: "Baloo 2", sans-serif;
`;

export const Description = styled.p`
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  margin-top: 1.2rem;
`;

export const InfoWrapper = styled.div`
  width: 588px;
  height: 100px;
  display: flex;
  margin-top: 66px;
  flex-direction: column;
`;

export const FlexTop = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
`;

export const FlexBottom = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
`;
