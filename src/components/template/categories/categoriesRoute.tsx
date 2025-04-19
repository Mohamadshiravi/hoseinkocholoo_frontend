import { Route, Routes } from "react-router";
import AllCategories from "./allCategories";
import Categories from "./categories";
import SubCategories from "./subCategories";
import Header from "../../module/header";

export default function CategoriesRoute() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<AllCategories />} />
        <Route path="/:category" element={<Categories />} />
        <Route path="/:category/:subcategory" element={<SubCategories />} />
      </Routes>
    </>
  );
}
