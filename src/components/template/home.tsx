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

      <section className="lg:w-[1024px] w-full m-auto h-[2000px] grid lg:mt-16 mt-6 overflow-hidden lg:px-0 px-2">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2.5,
            },
            450: {
              slidesPerView: 3.5,
            },
            640: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 8,
            },
          }}
          className="w-full"
        >
          {loading
            ? Array.from({ length: 8 }).map((_) => (
                <SwiperSlide className="lg:mx-2">
                  <div className="flex flex-col items-center gap-3">
                    <div className="rounded-full sm:w-[120px] w-[90px] sm:h-[120px] h-[90px] bg-zinc-200"></div>
                    <div className="sm:w-[80px] w-[70px] sm:h-[25px] h-[20px] bg-zinc-200"></div>
                  </div>
                </SwiperSlide>
              ))
            : data?.map((e) => (
                <SwiperSlide className="lg:mx-2">
                  <div className="flex flex-col items-center gap-3">
                    <img
                      className="rounded-full sm:w-[120px] w-[90] sm:h-[120px] h-[90px] object-cover"
                      src={e.banner}
                      alt={e.title}
                    />
                    <span className="vazir-bold text-center sm:text-base text-sm">
                      {e.title}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
        </Swiper>
      </section>
    </section>
  );
}
