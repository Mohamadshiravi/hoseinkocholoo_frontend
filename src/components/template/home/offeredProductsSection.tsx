import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef } from "react";
import { fetchOfferedProductsFromServer } from "../../../redux/slices/products";
import { useTypedDispatch, useTypedSelector } from "../../../redux/typedhooks";
import { IoIosArrowBack } from "react-icons/io";
import "keen-slider/keen-slider.min.css";

export default function OfferedProductsSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: "auto",
      spacing: 6,
    },
    drag: true,
    rtl: true,
    mode: "free-snap",
  });

  const offeredProducts = useTypedSelector((state) => state.products).data
    .offeredProducts;

  useEffect(() => {
    dispatch(fetchOfferedProductsFromServer());
  }, []);

  const dispatch = useTypedDispatch();
  return (
    <section
      dir="rtl"
      className="w-full relative py-6 px-4 bg-primary lg:mt-16 mt-6 lg:rounded-lg"
    >
      <div className="relative">
        <div
          ref={(ref) => {
            sliderRef.current = ref;
            sliderInstanceRef(ref);
          }}
          className="keen-slider"
        >
          <div className="keen-slider__slide flex flex-col items-center justify-between !min-w-[150px] !max-w-[150px] text-white flex-shrink-0">
            <img src="/img/layers/Amazings.svg" className="w-[90px]" />
            <div className="flex items-center gap-1">
              <span className="bg-zinc-100 w-[30px] h-[30px] rounded-md"></span>
              <span className="bg-zinc-100 w-[30px] h-[30px] rounded-md"></span>
              <span className="bg-zinc-100 w-[30px] h-[30px] rounded-md"></span>
            </div>
            <img src="/img/layers/Amazing.svg" className="w-[60px]" />
            <button className="text-sm vazir-medium flex items-center gap-1">
              مشاهده همه <IoIosArrowBack />
            </button>
          </div>
          {offeredProducts?.slice(0).map((product) => (
            <div
              key={product.id}
              className="keen-slider__slide !min-w-[200px] !max-w-[200px] bg-white p-2 rounded-r-lg flex-shrink-0"
            >
              <div className="w-[150px] h-[150px] object-cover flex items-center justify-center m-auto">
                <img
                  src={"/img/product/OIP.jpg"}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xs font-semibold mt-2 text-zinc-800 h-[30px] line-clamp-2 vazir-light">
                {product.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="bg-primary w-[40px] h-[22px] flex items-center justify-center vazir-bold text-white rounded-full text-xs">
                  {product.discount.label}
                </span>
                <div className="flex flex-col items-center gap-1">
                  <p className="text-zinc-800 text-base mt-1 vazir-bold flex items-center gap-1">
                    {Number(product.price).toLocaleString()}{" "}
                    <span className="text-[9px] rotate-270 block">تومان</span>
                  </p>
                  <span className="text-sm text-zinc-400 line-through">
                    {Number(product.price).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {offeredProducts?.slice(1).map((product) => (
            <div
              key={product.id}
              className="keen-slider__slide !min-w-[200px] !max-w-[200px] bg-white p-4 flex-shrink-0"
            >
              <div className="w-[40px] h-[40px] object-cover">
                <img
                  src={"/img/product/OIP.jpg"}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-semibold mt-2">{product.title}</h3>
              <p className="text-red-500 text-sm mt-1">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
