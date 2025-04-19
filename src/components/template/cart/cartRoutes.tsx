import { Route, Routes } from "react-router";
import Cart from "./cart";

export default function CartRoutes() {
  return (
    <Routes>
      <Route index element={<Cart />} />
    </Routes>
  );
}
