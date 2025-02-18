import React from "react";
import { Routes, Route } from "react-router-dom";
import ExchangeRate from "../views/exchangeRateView/ExchangeRate";

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<ExchangeRate />} />
    </Routes>
  );
};

export default RoutesPage;
