import { CiHeart } from "react-icons/ci";
import ProductType from "../../types/products";
import { useTypedDispatch, useTypedSelector } from "../../redux/typedhooks";
import {
  addProductToFavorites,
  deleteProductFromFavorites,
  fetchUserFavorites,
} from "../../redux/slices/user";
import { IoHeart } from "react-icons/io5";
import { useEffect, useState } from "react";

export default function ProductCard({
  product,
  inProducts,
}: {
  product: ProductType;
  inProducts?: boolean;
}) {
  const [isFavorites, setIsfavorites] = useState(false);
  const { favorites } = useTypedSelector((state) => state.user);

  const dispatch = useTypedDispatch();

  async function ToggleFavorites() {
    if (favorites?.some((e) => e.id === product.id)) {
      setIsfavorites(false);
      dispatch(deleteProductFromFavorites(product.id));
    } else {
      setIsfavorites(true);
      const res = await dispatch(addProductToFavorites(product.id));

      if (!res.payload) {
        setIsfavorites(false);
      }
    }
  }

  useEffect(() => {
    if (favorites?.some((e) => e.id === product.id)) {
      setIsfavorites(true);
    }
  }, []);

  return (
    <div
      className={`${
        inProducts
          ? "shadow-[2px_2px_6px] shadow-black/20 border border-zinc-300"
          : " keen-slider__slide !min-w-[200px] !max-w-[200px] flex-shrink-0"
      } h-[270px]relative flex flex-col justify-between relative bg-white p-2 rounded-sm`}
    >
      {isFavorites ? (
        <button
          onClick={ToggleFavorites}
          className="group absolute top-2 left-2 bg-white cursor-pointer rounded-full p-1 shadow-[1px_1px_10px] shadow-black/40"
        >
          <IoHeart className="text-2xl text-primary" />
          <span className="group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 opacity-0 transition-all absolute w-[130px] flex items-center justify-center top-1 left-10 bg-primary text-white text-xs p-1 rounded-sm shadow-[1px_1px_10px] shadow-black/40">
            حذف از علاقه مندی ها
          </span>
        </button>
      ) : (
        <button
          onClick={ToggleFavorites}
          className="group absolute top-2 left-2 bg-white cursor-pointer rounded-full p-1 shadow-[1px_1px_10px] shadow-black/40"
        >
          <CiHeart className="text-2xl" />
          <span className="group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 opacity-0 transition-all absolute w-[130px] flex items-center justify-center top-1 left-10 bg-primary text-white text-xs p-1 rounded-sm shadow-[1px_1px_10px] shadow-black/40">
            افزودن به علاقه مندی ها
          </span>
        </button>
      )}

      <div className="w-full h-[150px] object-cover flex items-center justify-center m-auto">
        <img
          src={
            product.images?.map((img) =>
              img.is_main ? img.image : "/img/layers/no-image.jpg"
            )[0]
          }
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-xs font-semibold mt-2 text-zinc-800 h-[35px] line-clamp-2 vazir-light">
        {product.title}
      </h3>

      <div
        className={`${
          product.discount ? "justify-between" : "justify-center"
        } flex items-center mt-2`}
      >
        {product.discount && (
          <span className="bg-primary w-[30px] h-[20px] rounded-sm flex items-center justify-center vazir-medium text-white text-xs">
            {product.discount.label}
          </span>
        )}
        <div className="flex flex-col items-center gap-1">
          <p className="text-zinc-800 text-base mt-1 vazir-bold flex items-center gap-1">
            {Number(product.final_price).toLocaleString()}{" "}
            <span className="text-[9px] rotate-270 block">تومان</span>
          </p>
          <span className="text-sm text-zinc-400 line-through">
            {Number(product.price).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
