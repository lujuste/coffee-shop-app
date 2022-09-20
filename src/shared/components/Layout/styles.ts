import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
`;

export const Header = styled.div`
  height: 104px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;
