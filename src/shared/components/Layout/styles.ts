import styled from "styled-components";

export const Container = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.header`
  height: 104px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 0 160px;
  z-index: 100;
  position: sticky;
  top: 0;
`;

export const NavLeft = styled.div`
  min-width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavRight = styled.div`
  min-width: 193px;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
`;

export const Test = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;
