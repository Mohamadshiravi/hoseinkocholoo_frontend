import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineFire } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

export default function Header() {
  const [categories, setCategories] = useState([
    "لوازم ارایش",
    "لوازم ارایش",
    "لوازم ارایش",
    "لوازم ارایش",
    "لوازم ارایش",
    "لوازم ارایش",
    "لوازم ارایش",
    "لوازم ارایش",
    "لوازم ارایش",
  ]);
  useEffect(() => {
    async function FetchCat() {
      const res = await axios.get(
        "http://127.0.0.1:8000/products/categories/hierarchy"
      );
      console.log(res);
    }
    FetchCat();
  }, []);
  return (
    <>
      <section></section>
      <header className="px-3 py-2 flex flex-col gap-3 border-b border-zinc-200">
        <div className="flex items-start relative">
          <div className="flex items-center gap-3 absolute top-0 left-0">
            <span>مجله زیبایی</span>
            <span className="text-lg">|</span>
            <span> فروشنده شو !</span>
          </div>
          <h4 className="w-full text-4xl text-center font-black">LOGO</h4>
        </div>
        <div className="relative">
          <div className="flex items-center gap-3 text-2xl absolute top-2 left-0">
            <FiUser />
            <span className="text-lg">|</span>
            <LuShoppingCart />
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2 w-[500px] border border-zinc-300 rounded-2xl px-4 py-1.5">
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
        <div className="flex items-center justify-center gap-8 mt-2 text-sm vazir-medium">
          {categories.map((e, i) => (
            <span
              key={i}
              className="cursor-pointer after:transition-all after:content-[''] relative after:h-[2px] after:w-[0%] hover:after:w-[140%] after:bg-zinc-800 after:absolute after:-bottom-[13px] after:-right-[20%]"
            >
              {e}
            </span>
          ))}
          <span className="text-lg">|</span>
          <span className="flex items-center gap-1 text-red-500 cursor-pointer">
            <AiOutlineFire className="text-base" />
            افروز
          </span>
        </div>
      </header>
    </>
  );
}
