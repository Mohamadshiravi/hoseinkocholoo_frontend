import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef } from "react";
import { fetchSortedProductByDiscountFromServer } from "../../../redux/slices/products";
import { useTypedDispatch, useTypedSelector } from "../../../redux/typedhooks";
import "keen-slider/keen-slider.min.css";
import ProductCard from "../../module/productCard";
import { IoIosArrowBack } from "react-icons/io";

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
        ? Array.from({ length: 3 }).map((e, i) => (
            <div
              key={i}
              className="bg-zinc-200 w-full h-[250px] lg:rounded-lg"
            ></div>
          ))
        : sortedProducts?.map((discount) => (
            <div
              key={discount.id}
              className="relative bg-zinc-50 p-3 rounded-lg"
            >
              <div
                ref={(ref) => {
                  sliderRef.current = ref;
                  sliderInstanceRef(ref);
                }}
                className="keen-slider mt-2"
              >
                <div className="keen-slider__slide bg-zinc-50 p-4 lg:rounded-lg rounded-l-lg flex flex-col items-center justify-between !min-w-[150px] !max-w-[150px]  flex-shrink-0">
                  <h3 className="text-center moraba-bold text-2xl gap-1 px-6">
                    {discount.name}
                  </h3>

                  <button className="text-sm vazir-medium flex items-center gap-1 moraba-regular">
                    مشاهده همه <IoIosArrowBack />
                  </button>
                </div>
                {discount.products.map((product) => (
                  <ProductCard product={product} key={product.id} offered />
                ))}
              </div>
            </div>
          ))}
    </section>
  );
}
