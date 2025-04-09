import { useEffect, useState } from "react";
import { AiOutlineFire } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import axiosInstance from "../../utils/axios/axios";
import CategoriesType from "../../types/categories";

export default function Header() {
  const [isHover, setIsHover] = useState(false);
  const [categories, setCategories] = useState<CategoriesType[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    const res = await axiosInstance.get("products/categories/hierarchy/");
    console.log(res.data);
    setCategories(res.data);
  }

  return (
    <>
      {isHover && (
        <section className="w-full h-screen bg-black/20 backdrop-blur-[2px] fixed top-0 left-0 z-40"></section>
      )}
      {isHover && (
        <section className="w-[96%] left-[2%] h-[600px] fixed top-0 bg-white z-50"></section>
      )}
      <header className="relative px-3 py-2 flex flex-col gap-3 border-b bg-white border-zinc-200 z-50">
        <div className="flex items-start relative">
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
        <div className="flex items-center justify-center mt-2 text-sm vazir-medium">
          {categories.map((e) => (
            <span
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              key={e.id}
              className="cursor-pointer after:transition-all px-4 after:content-[''] relative after:h-[2px] after:w-[0%] hover:after:w-[100%] after:bg-zinc-800 after:absolute after:-bottom-[13px] after:-right-0"
            >
              {e.title}
            </span>
          ))}
          <span className="text-lg">|</span>
          <span className="flex items-center gap-1 text-red-500 cursor-pointer px-4">
            <AiOutlineFire className="text-base" />
            افروز
          </span>
        </div>
      </header>
    </>
  );
}
