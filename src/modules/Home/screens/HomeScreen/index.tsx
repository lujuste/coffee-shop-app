import React from "react";
import Layout from "../../../../shared/components/Layout";
import BackgroundHero from "../../components/BackgroundHero";
import CoffeeShop from "../../components/CoffeeShop";

import { Container } from "./styles";

const HomeScreen: React.FC = () => {
  return (
    <Layout>
      <BackgroundHero />
      <CoffeeShop />
    </Layout>
  );
};

export default HomeScreen;
