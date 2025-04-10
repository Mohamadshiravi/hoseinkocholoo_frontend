import { useEffect, useState } from "react";
import { AiOutlineFire } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { LuMenu, LuShoppingCart } from "react-icons/lu";
import axiosInstance from "../../utils/axios/axios";
import CategoriesType from "../../types/categories";
import { IoIosArrowBack } from "react-icons/io";
import MobileMenuSection from "./mobileMenu/mobileMenuSection";

export default function Header() {
  const [hoverMenu, setHoverMenu] = useState<CategoriesType | false>();
  const [categories, setCategories] = useState<CategoriesType[]>([]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuMount, setIsMenuMount] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    const res = await axiosInstance.get("products/categories/");
    console.log(res.data);
    setCategories(res.data);
  }

  return (
    <section className="relative">
      {/* mobile menu */}
      {isMenuOpen && (
        <section
          onClick={() => {
            setIsMenuOpen(false);
            setTimeout(() => setIsMenuMount(false), 300);
          }}
          className="w-full h-screen bg-black/20 backdrop-blur-[2px] fixed top-0 left-0 z-40"
        ></section>
      )}
      {isMenuMount && (
        <MobileMenuSection isMenuOpen={isMenuOpen} categories={categories} />
      )}

      {/* desktop menu */}
      {hoverMenu && (
        <section
          onMouseEnter={() => setHoverMenu(false)}
          className="w-full h-screen bg-black/20 backdrop-blur-[2px] fixed top-0 left-0 z-20"
        ></section>
      )}
      {hoverMenu && (
        <section
          onMouseLeave={() => setHoverMenu(false)}
          className="p-10 rounded-b-lg shadow-lg w-[96%] left-[2%] absolute top-[160px] bg-white z-30"
        >
          <h3 className="text-gray-400 vazir-light text-sm underline underline-offset-[3px] cursor-pointer">
            همه محصولات {hoverMenu.title}
          </h3>
          <div className="flex justify-between">
            <div className="mt-10 flex gap-8">
              {hoverMenu.subcategories.map((e) => (
                <div key={e.id}>
                  <h4 className="flex items-center gap-2">
                    <span className="bg-red-600 w-[5px] aspect-square block"></span>
                    <span className="vazir-bold">{e.title}</span>
                    <IoIosArrowBack />
                  </h4>
                  <div className="flex flex-col gap-1 mt-2 text-zinc-500">
                    {e.subcategories.map((e) => (
                      <span key={e.id}>{e.title}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <img
              src={hoverMenu.banner}
              alt={hoverMenu.title}
              className="max-w-[300px] aspect-square rounded-lg"
            />
          </div>
        </section>
      )}
      <header className="relative px-3 py-2 flex flex-col lg:gap-3 gap-2 border-b bg-white border-zinc-200 z-30">
        <div className="flex items-center relative lg:mt-3 mt-2">
          <button
            onClick={() => {
              setIsMenuMount(true);
              setTimeout(() => setIsMenuOpen(true), 1);
            }}
            className="text-3xl cursor-pointer lg:hidden block"
          >
            <LuMenu />
          </button>
          <h4 className="w-full text-3xl text-center font-black">LOGO</h4>
          <div className="items-center gap-3 text-2xl lg:hidden flex">
            <FiUser />
            <LuShoppingCart />
          </div>
        </div>
        <div onMouseEnter={() => setHoverMenu(false)} className="relative">
          <div className="items-center gap-3 text-2xl absolute top-2 left-0 lg:flex hidden">
            <FiUser />
            <span className="text-lg">|</span>
            <LuShoppingCart />
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2 lg:w-[500px] w-full border border-zinc-300 rounded-2xl px-4 py-1.5">
              <IoSearchOutline className="text-3xl" />
              <input
                placeholder="جستجو"
                type="text"
                className="outline-none w-full"
              />
              <span>/</span>
            </div>
          </div>
        </div>
        <div className=" items-center justify-center mt-2 text-sm vazir-medium lg:flex hidden">
          {categories.map((e) => (
            <span
              onMouseEnter={() => setHoverMenu(e)}
              key={e.id}
              className="cursor-pointer after:transition-all px-4 after:content-[''] relative after:h-[2px] after:w-[0%] hover:after:w-[100%] after:bg-zinc-800 after:absolute after:-bottom-[13px] after:-right-0"
            >
              {e.title}
            </span>
          ))}
          <span className="text-xl">|</span>
          <span className="flex items-center gap-1 text-red-500 cursor-pointer px-4">
            <AiOutlineFire className="text-base" />
            افروز
          </span>
        </div>
      </header>
    </section>
  );
}
