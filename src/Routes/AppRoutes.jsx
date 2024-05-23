import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../Auth/Login/Login";
import RegisterPage from "../Auth/Register/Register";
import Buyer from "../Home/Buyer/Buyer";
import Property from "../Property/Property";
import Seller from "../Home/seller/Seller";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Buyer />} />
        <Route path="/properties" element={<Seller />} />
        <Route path="/property/:id" element={<Property />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
