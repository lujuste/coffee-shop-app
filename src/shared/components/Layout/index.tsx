import React, { ReactNode } from "react";

import { Container, Header, NavLeft, NavRight, Test } from "./styles";

//icons
import logoCoffee from "../../../assets/logo-coffee.svg";
import ButtonLocation from "../ButtonLocation";
import ButtonCart from "../ButtonCart";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <NavLeft>
          <img
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
            src={logoCoffee}
          />
        </NavLeft>
        <NavRight>
          <ButtonLocation location="Sao Paulo, SP" />
          <ButtonCart onClick={() => navigate("/checkout")} />
        </NavRight>
      </Header>

      {children}
    </Container>
  );
};

export default Layout;
