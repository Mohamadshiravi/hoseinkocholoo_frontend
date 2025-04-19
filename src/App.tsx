import { Route, Routes } from "react-router";
import MobileNavbar from "./components/module/mobileNavbar";
import Home from "./components/template/home/home"; // فقط Home مستقیم ایمپورت میشه
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";
import SpinnerLoader from "./components/module/loader";

// Lazy load components
const LoginForm = lazy(() => import("./components/template/login/loginForm"));

const CategoriesRoute = lazy(
  () => import("./components/template/categories/categoriesRoute")
);

const ProductRoutes = lazy(
  () => import("./components/template/products/productRoutes")
);

const ProfileRoutes = lazy(
  () => import("./components/template/profile/profileRoutes")
);

const CartRoutes = lazy(() => import("./components/template/cart/cartRoutes"));

function App() {
  return (
    <main className="text-zinc-800 antialiased sm:mb-0 mb-18">
      <Suspense fallback={<SpinnerLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* auth */}
          <Route path="/login" element={<LoginForm />} />

          {/* categories */}
          <Route path="/categories/*" element={<CategoriesRoute />} />

          {/* products */}
          <Route path="/products/*" element={<ProductRoutes />} />

          {/* profile */}
          <Route path="/profile/*" element={<ProfileRoutes />} />

          {/* cart */}
          <Route path="/cart/*" element={<CartRoutes />} />
        </Routes>
      </Suspense>

      <Toaster />
      <MobileNavbar />
    </main>
  );
}

export default App;
