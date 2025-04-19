import { Route, Routes } from "react-router";
import ProfileMenu from "../../module/profileMenu";
import UserOrders from "./orders/userOrders";
import UserFavorites from "./favorites/userFavorites";
import ProtectProfile from "./protectProfile";

export default function ProfileRoutes() {
  return (
    <ProtectProfile>
      <Routes>
        <Route index element={<ProfileMenu />} />
        <Route path="orders" element={<UserOrders />} />
        <Route path="favorites" element={<UserFavorites />} />
      </Routes>
    </ProtectProfile>
  );
}
