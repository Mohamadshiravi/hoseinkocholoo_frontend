import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef } from "react";
import { fetchSortedProductByDiscountFromServer } from "../../../redux/slices/products";
import { useTypedDispatch, useTypedSelector } from "../../../redux/typedhooks";
import "keen-slider/keen-slider.min.css";
import ProductCard from "../../module/productCard";

export default function AllOfferedProductsSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: "auto",
      spacing: 12,
    },
    drag: true,
    rtl: true,
    mode: "free-snap",
  });

  const sortedProducts = useTypedSelector((state) => state.products)
    .sortedByDiscount.data;
  const loading = useTypedSelector((state) => state.products).offeredProducts
    .loading;

  useEffect(() => {
    dispatch(fetchSortedProductByDiscountFromServer());
  }, []);

  const dispatch = useTypedDispatch();
  return (
    <section
      dir="rtl"
      className="w-full relative lg:mt-16 mt-6 flex flex-col gap-3"
    >
      {loading
        ? Array.from({ length: 2 }).map((e, i) => (
            <div className="bg-zinc-200 w-full h-[250px] rounded-lg"></div>
          ))
        : sortedProducts?.map((discount) => (
            <div
              key={discount.id}
              className="relative bg-zinc-50 p-3 rounded-lg"
            >
              <div className="flex justify-between items-center gap-3">
                <h3 className="text-2xl px-2 moraba-bold">{discount.name}</h3>
                <button className="bg-primary cursor-pointer rounded-md px-4 py-1 text-white text-sm">
                  مشاهده همه
                </button>
              </div>
              <div
                ref={(ref) => {
                  sliderRef.current = ref;
                  sliderInstanceRef(ref);
                }}
                className="keen-slider mt-2"
              >
                {discount.products.map((product) => (
                  <ProductCard product={product} key={product.id} offered />
                ))}
              </div>
            </div>
          ))}
    </section>
  );
}
