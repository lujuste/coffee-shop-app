import React from "react";

import { Container } from "./styles";

interface InfoProps {
  icon: string;
  text: string;
}

const InfoProduct: React.FC<InfoProps> = ({ icon, text }) => {
  return (
    <Container>
      <img className="icon-radius" src={icon} />
      <span> {text} </span>
    </Container>
  );
};

export default InfoProduct;
