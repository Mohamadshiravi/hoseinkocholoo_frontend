import { Route, Routes } from "react-router";
import Header from "./components/module/header";
import MobileNavbar from "./components/module/mobileNavbar";
import Home from "./components/template/home/home";
import AllCategories from "./components/template/categories/allCategories";
import Categories from "./components/template/categories/categories";
import SubCategories from "./components/template/categories/subCategories";
import ProductsSortedByCategories from "./components/template/products/productsSortedByCategories";

function App() {
  return (
    <main className="text-zinc-800 antialiased sm:mb-0 mb-18">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/categories" element={<AllCategories />} />
        <Route path="/categories/:category" element={<Categories />} />
        <Route
          path="/categories/:category/:subcategory"
          element={<SubCategories />}
        />

        <Route
          path="/products/:category"
          element={<ProductsSortedByCategories />}
        />
      </Routes>
      <MobileNavbar />
    </main>
  );
}

export default App;
