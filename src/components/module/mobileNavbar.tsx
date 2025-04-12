import { CiHome, CiSearch } from "react-icons/ci";
import { IoMdHappy } from "react-icons/io";
import { PiShoppingCartSimpleLight, PiUserLight } from "react-icons/pi";

export default function MobileNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-[5px_5px_10px] z-30 p-2 sm:hidden block">
      <ul className="w-full flex items-center justify-between bg-zinc-100 rounded-full px-4 py-1">
        <li className="flex flex-col items-center gap-1">
          <PiUserLight className="text-2xl" />
          <span className="text-[10px] vazir-light moraba-regular">
            پروفایل
          </span>
        </li>
        <li className="flex flex-col items-center gap-1">
          <PiShoppingCartSimpleLight className="text-2xl" />
          <span className="text-[10px] vazir-light moraba-regular">
            سبد خرید
          </span>
        </li>
        <li className="flex flex-col items-center gap-1">
          <CiHome className="text-2xl" />
          <span className="text-[10px] vazir-light moraba-regular">خانه</span>
        </li>
        <li className="flex flex-col items-center gap-1">
          <CiSearch className="text-2xl" />
          <span className="text-[10px] vazir-light moraba-regular">جستجو</span>
        </li>
        <li className="flex flex-col items-center gap-1">
          <IoMdHappy className="text-lg" />
          <span className="text-[10px] vazir-light moraba-regular">اخری</span>
        </li>
      </ul>
    </nav>
  );
}
