import React from "react";
import { Routes, Route } from "react-router-dom";
import CheckoutScreen from "../modules/Checkout/screens/CheckoutScreen";
import CheckoutFilledScreen from "../modules/CheckoutFilled/screens/CheckoutFilledScreen";
import HomeScreen from "../modules/Home/screens/HomeScreen";
import SuccessScreen from "../modules/Success/screens/SuccessScreen";

// import { Container } from './styles';

const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/checkout" element={<CheckoutScreen />} />
      <Route path="/checkout-filled" element={<CheckoutFilledScreen />} />
      <Route path="/success" element={<SuccessScreen />} />
    </Routes>
  );
};

export default RoutesApp;
