import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef } from "react";
import { fetchOfferedProductsFromServer } from "../../../redux/slices/products";
import { useTypedDispatch, useTypedSelector } from "../../../redux/typedhooks";
import { IoIosArrowBack } from "react-icons/io";
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

  const offeredProducts = useTypedSelector((state) => state.products)
    .offeredProducts.data;
  const loading = useTypedSelector((state) => state.products).offeredProducts
    .loading;

  useEffect(() => {
    dispatch(fetchOfferedProductsFromServer());
  }, []);

  const discountTypes = ["تخفیف تابستانه", "تخفیف عیدانه"];

  const dispatch = useTypedDispatch();
  return (
    <section dir="rtl" className="w-full relative lg:mt-16 mt-6 lg:rounded-lg">
      <div className="relative">
        <div
          ref={(ref) => {
            sliderRef.current = ref;
            sliderInstanceRef(ref);
          }}
          className="keen-slider"
        >
          <div className="keen-slider__slide justify-between bg-zinc-100 p-4 text-zinc-800 lg:rounded-lg rounded-l-lg flex flex-col items-center !min-w-[150px] !max-w-[150px] flex-shrink-0">
            <h2 className="flex items-center gap-1 vazir-black text-2xl text-center">
              {discountTypes[0]}
            </h2>
            <span className="vazir-black text-5xl text-zinc-300">%</span>
          </div>
          {!loading
            ? offeredProducts
                ?.filter((e) => e.discount.name === discountTypes[0])
                .map((product) => (
                  <ProductCard product={product} key={product.id} offered />
                ))
            : Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="keen-slider__slide bg-zinc-200 h-[250px] !min-w-[200px] !max-w-[200px] p-2 rounded-lg flex-shrink-0 flex flex-col"
                ></div>
              ))}
        </div>
        <div
          ref={(ref) => {
            sliderRef.current = ref;
            sliderInstanceRef(ref);
          }}
          className="keen-slider mt-3"
        >
          <div className="keen-slider__slide justify-between bg-zinc-100 p-4 text-zinc-800 lg:rounded-lg rounded-l-lg flex flex-col items-center !min-w-[150px] !max-w-[150px] flex-shrink-0">
            <h2 className="flex items-center gap-1 vazir-black text-2xl text-center">
              {discountTypes[1]}
            </h2>
            <span className="vazir-black text-5xl text-zinc-300">%</span>
          </div>
          {!loading
            ? offeredProducts
                ?.filter((e) => e.discount.name === discountTypes[1])
                .map((product) => (
                  <ProductCard product={product} key={product.id} offered />
                ))
            : Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="keen-slider__slide bg-zinc-200 h-[250px] !min-w-[200px] !max-w-[200px] p-2 rounded-lg flex-shrink-0 flex flex-col"
                ></div>
              ))}
        </div>
      </div>
    </section>
  );
}
