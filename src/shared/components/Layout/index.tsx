import React, { ReactNode } from "react";

import { Container, Header } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header>Header</Header>
      {children}
    </Container>
  );
};

export default Layout;
