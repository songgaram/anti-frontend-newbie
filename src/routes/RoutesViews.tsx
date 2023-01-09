import React from "react";
import { Routes, Route } from "react-router-dom";
import ExchangeRate from "../views";

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<ExchangeRate />} />
    </Routes>
  );
};

export default RoutesPage;
