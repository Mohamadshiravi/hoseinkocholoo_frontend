import { Route, Routes } from "react-router";
import ProductsSortedByCategories from "./productsSortedByCategories";
import ProductsSortedBySubCategories from "./productSortedBySubcategory";
import ProductsSortedByLevel2SubCategories from "./productSortedByLevel2Subcategory";
import Header from "../../module/header";
import Footer from "../../module/footer";

export default function ProductRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/:category" element={<ProductsSortedByCategories />} />
        <Route
          path="/:category/:subcategory"
          element={<ProductsSortedBySubCategories />}
        />
        <Route
          path="/:category/:subcategory/:level2subcategory"
          element={<ProductsSortedByLevel2SubCategories />}
        />
      </Routes>
      <Footer />
    </>
  );
}
