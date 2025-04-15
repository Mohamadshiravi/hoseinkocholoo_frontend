import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useRef } from "react";
import { Link } from "react-router";
import CategoriesType from "../../../types/categories";

export default function SubCategorySection({
  data,
  loading,
  category,
  subCategory,
}: {
  data: CategoriesType[] | undefined;
  loading: boolean;
  category: string;
  subCategory?: string;
}) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [sliderInstanceRef, _] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: "auto",
      spacing: 30,
    },
    drag: true,
    rtl: true,
  });
  return (
    <section className="w-full sm:mt-4 mt-2">
      <div
        ref={(ref) => {
          sliderRef.current = ref;
          sliderInstanceRef(ref);
        }}
        className="keen-slider"
      >
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="keen-slider__slide flex flex-col items-center gap-3 !min-w-[80px] !max-w-[80px]"
              >
                <div className="rounded-full w-full aspect-square bg-zinc-200"></div>
                <div className=" w-[60px] h-[20px] bg-zinc-200"></div>
              </div>
            ))
          : data?.map((e) => (
              <Link
                to={
                  subCategory
                    ? `/products/${category}/${subCategory}/${e.slug}`
                    : `/products/${category}/${e.slug}`
                }
                key={e.id}
                className="keen-slider__slide flex flex-col items-center gap-3 !min-w-[80px] !max-w-[80px]"
              >
                <img
                  className="rounded-full w-full aspect-square object-cover"
                  src={e.banner}
                  alt={e.title}
                />
                <span className="moraba-bold text-center text-xs">
                  {e.title}
                </span>
              </Link>
            ))}
      </div>
    </section>
  );
}
