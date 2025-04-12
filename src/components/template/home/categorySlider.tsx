import { useTypedSelector } from "../../../redux/typedhooks";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useRef } from "react";

export default function () {
  const { data, loading } = useTypedSelector((state) => state.categories);

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [sliderInstanceRef, _] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: "auto",
      spacing: 30,
    },
    drag: true,
    rtl: true,
    mode: "free-snap",
  });
  return (
    <section className="w-full lg:mt-16 mt-6 lg:px-0 px-2">
      <div
        ref={(ref) => {
          sliderRef.current = ref;
          sliderInstanceRef(ref);
        }}
        className="keen-slider"
      >
        {loading
          ? Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="keen-slider__slide flex flex-col items-center gap-3 !min-w-[100px] !max-w-[100px]"
              >
                <div className="rounded-full w-full aspect-square bg-zinc-200"></div>
                <div className="sm:w-[80px] w-[70px] sm:h-[25px] h-[20px] bg-zinc-200"></div>
              </div>
            ))
          : data?.map((e) => (
              <div
                key={e.id}
                className="keen-slider__slide flex flex-col items-center gap-3 !min-w-[100px] !max-w-[100px]"
              >
                <img
                  className="rounded-full w-full aspect-square object-cover"
                  src={e.banner}
                  alt={e.title}
                />
                <span className="moraba-bold text-center text-sm">
                  {e.title}
                </span>
              </div>
            ))}
      </div>
    </section>
  );
}
