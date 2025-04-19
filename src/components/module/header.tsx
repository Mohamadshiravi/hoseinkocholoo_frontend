import { useEffect, useState } from "react";
import { AiOutlineFire } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import CategoriesType from "../../types/categories";
import { IoIosArrowBack } from "react-icons/io";
import MobileMenuSection from "./mobileMenu/mobileMenuSection";
import { useTypedDispatch, useTypedSelector } from "../../redux/typedhooks";
import { fetchCategoriesFromServer } from "../../redux/slices/categories";
import { HiOutlineMenu } from "react-icons/hi";
import { LuWallet } from "react-icons/lu";
import { Link } from "react-router";
import { PiUserLight } from "react-icons/pi";
import { fetchUserData, fetchUserFavorites } from "../../redux/slices/user";

export default function Header() {
  const [hoverMenu, setHoverMenu] = useState<CategoriesType | false>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuMount, setIsMenuMount] = useState(false);

  const { data: categories, loading } = useTypedSelector(
    (state) => state.categories
  );

  const {
    favorites,
    error,
    data,
    loading: userLoading,
  } = useTypedSelector((state) => state.user);

  useEffect(() => {
    if (!categories) {
      dispatch(fetchCategoriesFromServer());
    }

    if (!favorites && error !== "unauth") {
      dispatch(fetchUserFavorites());
    }

    if (!data && error !== "unauth") {
      dispatch(fetchUserData());
    }
  }, [data, favorites, categories]);

  const dispatch = useTypedDispatch();
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
        <MobileMenuSection
          isMenuOpen={isMenuOpen}
          categories={categories || []}
        />
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
                    <span className="vazir-bold moraba-bold">{e.title}</span>
                    <IoIosArrowBack />
                  </h4>
                  <div className="flex flex-col gap-1 mt-2 text-zinc-500">
                    {e.subcategories.map((e) => (
                      <span key={e.id} className="moraba-regular">
                        {e.title}
                      </span>
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
      <header className="relative lg:px-32 sm:px-4 lg:py-0 py-2 px-3 flex flex-col border-b bg-white border-zinc-200 z-30">
        <div className="flex items-center relative">
          <button
            onClick={() => {
              setIsMenuMount(true);
              setTimeout(() => setIsMenuOpen(true), 1);
            }}
            className="text-3xl cursor-pointer lg:hidden block"
          >
            <HiOutlineMenu />
          </button>
          <Link to={"/"} className=" w-full flex items-center justify-center">
            <img
              src="/img/logo/logo-2.png"
              className="lg:h-[75px] sm:h-[60px] h-[50px]"
            />
          </Link>
          {data && !userLoading && (
            <div className="items-center gap-3 text-2xl lg:hidden flex h-[35px]">
              <span className="text-sm h-full rounded-md flex items-center gap-2 vazir-medium text-zinc-800">
                {(100000).toLocaleString()} <span className="text-xs">ت</span>
                <span className="text-zinc-600">|</span>
                <LuWallet className="text-xl text-zinc-600" />
              </span>
            </div>
          )}
        </div>
        <div
          onMouseEnter={() => setHoverMenu(false)}
          className="relative flex items-center justify-center gap-2"
        >
          <div className="flex items-center justify-center w-full">
            <div className="flex items-center gap-2 sm:h-[45px] h-[40px] w-full bg-zinc-100 rounded-md px-4">
              <IoSearchOutline className="text-3xl text-zinc-600" />
              <input
                placeholder="جستجو"
                type="text"
                className="outline-none w-full h-full text-sm"
              />
              <span>/</span>
            </div>
          </div>
          {data ? (
            userLoading ? (
              <div className="lg:w-[200px] rounded-md w-[50px] lg:h-[45px] h-[40px] lg:bg-zinc-200 bg-zinc-800"></div>
            ) : (
              <>
                <div className="items-center gap-3 text-2xl lg:flex hidden h-[45px]">
                  <span className="text-base  bg-zinc-100 px-3 h-full rounded-md flex items-center gap-2 vazir-medium text-zinc-800">
                    {(100000).toLocaleString()}{" "}
                    <span className="text-xs ">ت</span>
                    <span className="">|</span>
                    <LuWallet className="text-2xl" />
                  </span>
                </div>
                <Link
                  to={"/profile/orders"}
                  className="bg-zinc-800 text-white text-sm cursor-pointer hover:bg-zinc-800/90 transition moraba-regular flex items-center justify-center rounded-md sm:h-[45px] h-[40px] aspect-square"
                >
                  <PiUserLight className="text-3xl" />
                </Link>
              </>
            )
          ) : (
            <Link
              to={"/login"}
              className="bg-zinc-800 text-white text-sm cursor-pointer hover:bg-zinc-800/90 transition moraba-regular flex items-center justify-center rounded-md sm:h-[45px] h-[40px] w-[100px]"
            >
              <span>وارد شوید</span>
            </Link>
          )}
        </div>
        <div className="items-center justify-center text-sm moraba-regular lg:flex hidden py-2">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={i}
                  className="w-[60px] h-[25px] bg-zinc-200 mx-4"
                ></span>
              ))
            : categories?.map((e) => (
                <Link
                  onClick={() => setHoverMenu(false)}
                  to={`/products/${e.slug}`}
                  onMouseEnter={() => setHoverMenu(e)}
                  key={e.id}
                  className="cursor-pointer after:transition-all px-4 after:content-[''] relative after:h-[2px] after:w-[0%] hover:after:w-[100%] after:bg-zinc-800 after:absolute after:-bottom-[13px] after:-right-0"
                >
                  {e.title}
                </Link>
              ))}
          <span className="text-xl">|</span>
          <span className="flex items-center gap-1 text-primary cursor-pointer px-4">
            <AiOutlineFire className="text-base" />
            افروز
          </span>
        </div>
      </header>
    </section>
  );
}
