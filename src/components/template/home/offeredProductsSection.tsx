import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef } from "react";
import { fetchOfferedProductsFromServer } from "../../../redux/slices/products";
import { useTypedDispatch, useTypedSelector } from "../../../redux/typedhooks";
import { IoIosArrowBack } from "react-icons/io";
import "keen-slider/keen-slider.min.css";
import ProductCard from "../../module/productCard";

export default function OfferedProductsSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [sliderInstanceRef, _] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: "auto",
      spacing: 12,
    },
    drag: true,
    rtl: true,
  });

  const offeredProducts = useTypedSelector((state) => state.products)
    .offeredProducts.data;
  const loading = useTypedSelector((state) => state.products).offeredProducts
    .loading;

  useEffect(() => {
    if (!offeredProducts) {
      dispatch(fetchOfferedProductsFromServer());
    }
  }, [offeredProducts]);

  const dispatch = useTypedDispatch();
  return (
    <section dir="rtl" className="w-full relative lg:mt-16 mt-6 lg:rounded-lg">
      <div className="relative p-3 bg-primary rounded-lg">
        <div
          ref={(ref) => {
            sliderRef.current = ref;
            sliderInstanceRef(ref);
          }}
          className="keen-slider"
        >
          <div className="keen-slider__slide bg-primary p-4 flex rounded-lg flex-col items-center justify-between !min-w-[150px] !max-w-[150px]  flex-shrink-0">
            <h3 className="flex flex-col items-center moraba-bold text-2xl gap-1 text-white">
              <span>پیشنهاد</span>
              <span>شگفت</span>
              <span>انگیز</span>
            </h3>

            <div className="flex flex-row-reverse items-center gap-1 text-white">
              <span className="bg-white text-zinc-800 w-[30px] h-[30px] rounded-md flex items-center justify-center">
                01
              </span>
              :
              <span className="bg-white text-zinc-800 w-[30px] h-[30px] rounded-md flex items-center justify-center">
                08
              </span>
              :
              <span className="bg-white text-zinc-800 w-[30px] h-[30px] rounded-md flex items-center justify-center">
                30
              </span>
            </div>

            <button className="text-sm vazir-medium flex items-center gap-1 moraba-regular text-white">
              مشاهده همه <IoIosArrowBack />
            </button>
          </div>
          {!loading
            ? offeredProducts?.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))
            : Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="keen-slider__slide bg-zinc-200 h-[320px] !min-w-[200px] !max-w-[200px] p-2 rounded-lg flex-shrink-0 flex flex-col"
                ></div>
              ))}
        </div>
      </div>
    </section>
  );
}
