import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";

export default function Home() {
  const [swiperSlides, setSwiperSlides] = useState(["sss", "bbb"]);
  return (
    <section className="w-full">
      <Swiper
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        grabCursor
      >
        {swiperSlides.map((e) => (
          <SwiperSlide>
            <div className="w-full h-[500px] bg-zinc-800 text-white">{e}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
