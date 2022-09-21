import React from "react";
import { Button } from "./styles";

// import { Container } from './styles';

import locationIcon from "../../../assets/location-icon.svg";

interface ButtonLocationProps {
  location: string;
}

const ButtonLocation: React.FC<ButtonLocationProps> = ({ location }) => {
  return (
    <Button>
      <img src={locationIcon} />
      <span>{location}</span>
    </Button>
  );
};

export default ButtonLocation;
