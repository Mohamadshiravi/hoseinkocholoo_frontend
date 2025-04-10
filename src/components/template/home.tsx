import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";
import { useTypedSelector } from "../../redux/typedhooks";

export default function Home() {
  const [swiperSlides, setSwiperSlides] = useState(["Slide 1", "Slide 2"]);

  const { data, loading } = useTypedSelector((state) => state.categories);
  return (
    <section className="w-full">
      <Swiper
        className="h-[450px]"
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        grabCursor
      >
        {swiperSlides.map((e) => (
          <SwiperSlide className="h-full">
            <div className="w-full bg-emerald-600 text-white flex items-center justify-center text-8xl h-full">
              {e}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="lg:w-[1024px] w-full m-auto h-[2000px] mt-16">
        <div className="flex items-center justify-center gap-10 w-full flex-wrap">
          {loading
            ? Array.from({ length: 6 }).map((_) => (
                <div className="flex flex-col items-center gap-3">
                  <div className="rounded-full w-[120px] h-[120px] bg-zinc-200"></div>
                  <div className="w-[80px] h-[25px] bg-zinc-200"></div>
                </div>
              ))
            : data?.map((e) => (
                <div className="flex flex-col items-center gap-3">
                  <img
                    className="rounded-full w-[120px] h-[120px] object-cover"
                    src={e.banner}
                    alt={e.title}
                  />
                  <span className="vazir-bold">{e.title}</span>
                </div>
              ))}
        </div>
      </section>
    </section>
  );
}
