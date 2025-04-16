import { AiOutlineFire } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import CategoriesType from "../../../types/categories";
import { useState } from "react";
import { Link } from "react-router";

export default function MobileMenuSection({
  isMenuOpen,
  categories,
}: {
  isMenuOpen: boolean;
  categories: CategoriesType[];
}) {
  const [menu, setMenu] = useState<CategoriesType | false>(false);
  return (
    <nav
      className={`${
        isMenuOpen ? "translate-x-[0px]" : "translate-x-[300px]"
      } p-4 transition-all duration-300 fixed top-0 overflow-y-scroll right-0 bg-white w-[300px] min-h-[100dvh] z-50 flex flex-col`}
    >
      <button className="border flex items-center shadow-[0px_5px] shadow-red-500/20 justify-center gap-3 border-red-500 text-red-500 rounded-2xl py-2.5 my-8 vazir-medium">
        <AiOutlineFire className="text-base" />
        افروز
        <IoIosArrowBack />
      </button>
      <div>
        <h4 className="moraba-bold text-lg text-zinc-700 border-b pb-3 border-zinc-200">
          دسته بندی محصولات
        </h4>
        <ul className="flex flex-col gap-6 py-3">
          {categories.map((item) => (
            <li key={item.id} className="w-full select-none">
              <div
                onClick={() => setMenu(!menu ? item : false)}
                className="flex items-center justify-between w-full relative"
              >
                <div className="flex items-center gap-2">
                  <span className="bg-red-600 w-[4px] aspect-square block"></span>
                  <span className="moraba-bold">{item.title}</span>
                </div>
                <IoIosArrowBack
                  className={`${
                    menu && item.id === menu.id ? "-rotate-90" : "rotate-0"
                  } transition-all`}
                />
              </div>
              <div
                className={`${
                  menu && item.id === menu.id ? "h-auto" : "h-0"
                } flex flex-col bg-zinc-100 w-full rounded-md mt-1 transition-all duration-300 overflow-hidden`}
              >
                {item.subcategories.map((e) => (
                  <div key={e.id} className="px-3 mt-2">
                    <Link
                      to={`/products/${item.slug}/${e.slug}`}
                      className="flex items-center gap-2"
                    >
                      <span className="bg-red-600 w-[3px] h-[3px] block"></span>
                      <span className="moraba-regular">{e.title}</span>
                    </Link>
                    <div className="flex flex-col gap-1 mt-2 text-zinc-500">
                      {e.subcategories.map((v) => (
                        <Link
                          to={`/products/${item.slug}/${e.slug}/${v.slug}`}
                          key={e.id}
                          className="text-sm pb-2"
                        >
                          {v.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
