import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef } from "react";
import { fetchOfferedProductsFromServer } from "../../../redux/slices/products";
import { useTypedDispatch, useTypedSelector } from "../../../redux/typedhooks";
import { IoIosArrowBack } from "react-icons/io";
import "keen-slider/keen-slider.min.css";
import ProductCard from "../../module/productCard";

export default function OfferedProductsSection() {
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
          <div className="keen-slider__slide bg-primary p-4 lg:rounded-lg rounded-l-lg flex flex-col items-center justify-between !min-w-[150px] !max-w-[150px] text-white flex-shrink-0">
            <img src="/img/layers/Amazings.svg" className="w-[90px]" />
            <div className="flex items-center gap-1">
              <span className="bg-zinc-100 w-[30px] h-[30px] rounded-md"></span>
              <span className="bg-zinc-100 w-[30px] h-[30px] rounded-md"></span>
              <span className="bg-zinc-100 w-[30px] h-[30px] rounded-md"></span>
            </div>

            <button className="text-sm vazir-medium flex items-center gap-1">
              مشاهده همه <IoIosArrowBack />
            </button>
          </div>
          {!loading
            ? offeredProducts?.map((product) => (
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
