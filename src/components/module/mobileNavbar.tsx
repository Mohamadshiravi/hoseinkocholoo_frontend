import { CiHeart, CiSearch } from "react-icons/ci";
import { PiShoppingCartSimpleLight, PiUserLight } from "react-icons/pi";
import { Link, useLocation } from "react-router";

export default function MobileNavbar() {
  const path = useLocation().pathname;
  const categoriesRegex = /^\/categories(\/.*)?$/;
  const profilesRegex = /^\/profile(\/(?!favorites).*)?$/;

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-[5px_5px_10px] z-30 p-2 sm:hidden block">
      <ul className="w-full flex items-center justify-between bg-zinc-100 rounded-full px-4 py-1">
        <li className={`flex flex-col items-center gap-1`}>
          <PiShoppingCartSimpleLight className="text-2xl" />
          <span className="text-[10px] vazir-light moraba-regular">
            سبد خرید
          </span>
        </li>
        <Link
          to={"/categories"}
          className={`${
            categoriesRegex.test(path) && "text-primary"
          } flex flex-col items-center gap-1`}
        >
          <CiSearch className="text-2xl" />
          <span className="text-[10px] vazir-light moraba-regular">
            دسته بندی و جستجو
          </span>
        </Link>
        <Link
          to={"/"}
          className={`${
            path === "/" && "border-2 border-primary"
          } flex flex-col items-center gap-1 bg-white rounded-full scale-[140%]`}
        >
          <img src="/img/logo/logo-2.png" alt="logo" className="w-[40px]" />
        </Link>
        <Link
          to={"/profile/favorites"}
          className={`${
            path === "/profile/favorites" && "text-primary"
          } flex flex-col items-center gap-1`}
        >
          <CiHeart className="text-2xl" />
          <span className="text-[10px] vazir-light moraba-regular">
            علاقه مندی ها
          </span>
        </Link>
        <Link
          to={"/profile"}
          className={`${
            profilesRegex.test(path) && "text-primary"
          } flex flex-col items-center gap-1`}
        >
          <PiUserLight className="text-2xl" />
          <span className="text-[10px] vazir-light moraba-regular">
            پروفایل
          </span>
        </Link>
      </ul>
    </nav>
  );
}
