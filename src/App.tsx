import { Route, Routes } from "react-router";
import Header from "./components/module/header";
import MobileNavbar from "./components/module/mobileNavbar";
import Home from "./components/template/home/home";
import AllCategories from "./components/template/categories/allCategories";
import Categories from "./components/template/categories/categories";
import SubCategories from "./components/template/categories/subCategories";

function App() {
  return (
    <main className="text-zinc-800 antialiased sm:mb-0 mb-16">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/categories" element={<AllCategories />} />
        <Route path="/categories/:category" element={<Categories />} />
        <Route
          path="/categories/:category/:subcategory"
          element={<SubCategories />}
        />
      </Routes>
      <MobileNavbar />
    </main>
  );
}

export default App;
