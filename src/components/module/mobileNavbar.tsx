import { CiHeart, CiSearch } from "react-icons/ci";
import { PiShoppingCartSimpleLight, PiUserLight } from "react-icons/pi";
import { Link } from "react-router";

export default function MobileNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-[5px_5px_10px] z-30 p-2 sm:hidden block">
      <ul className="w-full flex items-center justify-between bg-zinc-100 rounded-full px-4 py-1">
        <li className="flex flex-col items-center gap-1">
          <PiShoppingCartSimpleLight className="text-2xl" />
          <span className="text-[10px] vazir-light moraba-regular">
            سبد خرید
          </span>
        </li>
        <Link to={"/categories"} className="flex flex-col items-center gap-1">
          <CiSearch className="text-2xl" />
          <span className="text-[10px] vazir-light moraba-regular">
            دسته بندی و جستجو
          </span>
        </Link>
        <Link
          to={"/"}
          className="flex flex-col items-center gap-1 bg-white rounded-full scale-[140%]"
        >
          <img src="/img/logo/logo-2.png" alt="logo" className="w-[40px]" />
        </Link>
        <li className="flex flex-col items-center gap-1">
          <CiHeart className="text-2xl" />
          <span className="text-[10px] vazir-light moraba-regular">
            علاقه مندی ها
          </span>
        </li>
        <Link to={"/profile"} className="flex flex-col items-center gap-1">
          <PiUserLight className="text-2xl" />
          <span className="text-[10px] vazir-light moraba-regular">
            پروفایل
          </span>
        </Link>
      </ul>
    </nav>
  );
}
