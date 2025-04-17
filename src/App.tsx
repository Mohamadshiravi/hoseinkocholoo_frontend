import { Route, Routes } from "react-router";
import MobileNavbar from "./components/module/mobileNavbar";
import Home from "./components/template/home/home";
import LoginForm from "./components/template/login/loginForm";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";
import SpinnerLoader from "./components/module/loader";
import ProfileMenu from "./components/module/profileMenu";
import UserOrders from "./components/template/profile/orders/userOrders";
import UserFavorites from "./components/template/profile/favorites/userFavorites";

const AllCategories = lazy(
  () => import("./components/template/categories/allCategories")
);
const Categories = lazy(
  () => import("./components/template/categories/categories")
);
const SubCategories = lazy(
  () => import("./components/template/categories/subCategories")
);

const ProductsSortedByCategories = lazy(
  () => import("./components/template/products/productsSortedByCategories")
);
const ProductsSortedBySubCategories = lazy(
  () => import("./components/template/products/productSortedBySubcategory")
);
const ProductsSortedByLevel2SubCategories = lazy(
  () =>
    import("./components/template/products/productSortedByLevel2Subcategory")
);

function App() {
  return (
    <main className="text-zinc-800 antialiased sm:mb-0 mb-18">
      <Suspense fallback={<SpinnerLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* categories */}
          <Route path="/categories" element={<AllCategories />} />
          <Route path="/categories/:category" element={<Categories />} />
          <Route
            path="/categories/:category/:subcategory"
            element={<SubCategories />}
          />

          {/* products */}
          <Route
            path="/products/:category"
            element={<ProductsSortedByCategories />}
          />
          <Route
            path="/products/:category/:subcategory"
            element={<ProductsSortedBySubCategories />}
          />
          <Route
            path="/products/:category/:subcategory/:level2subcategory"
            element={<ProductsSortedByLevel2SubCategories />}
          />

          {/* auth */}
          <Route path="/login" element={<LoginForm />} />

          {/* userpanel - profile */}
          <Route path="/profile" element={<ProfileMenu />} />
          <Route path="/profile/orders" element={<UserOrders />} />
          <Route path="/profile/favorites" element={<UserFavorites />} />
        </Routes>
      </Suspense>

      <Toaster />
      <MobileNavbar />
    </main>
  );
}

export default App;
