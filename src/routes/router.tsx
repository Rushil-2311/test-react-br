import { Route, Navigate, Routes } from "react-router-dom";
import Cart from "../component/dashboard/cart/Cart";
import Dashboard from "../container/dashboard/Dashboard";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/dashboard" />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Routers;
