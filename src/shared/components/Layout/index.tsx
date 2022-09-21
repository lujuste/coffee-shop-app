import React, { ReactNode } from "react";

import { Container, Header, NavLeft, NavRight, Test } from "./styles";

//icons
import logoCoffee from "../../../assets/logo-coffee.svg";
import ButtonLocation from "../ButtonLocation";
import ButtonCart from "../ButtonCart";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header>
        <NavLeft>
          <img src={logoCoffee} />
        </NavLeft>
        <NavRight>
          <ButtonLocation location="Sao Paulo, SP" />
          <ButtonCart />
        </NavRight>
      </Header>

      {children}
    </Container>
  );
};

export default Layout;
