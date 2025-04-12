import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";

export default function BannerSliderSection() {
  const [swiperSlides, setSwiperSlides] = useState(["Slide 1", "Slide 2"]);
  return (
    <Swiper
      className="max-h-[200px] mt-8"
      loop={true}
      modules={[Autoplay]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      grabCursor
    >
      {swiperSlides.map((e) => (
        <SwiperSlide>
          <div className="w-full bg-primary text-white flex items-center justify-center text-8xl rounded-lg h-[200px]">
            {e}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
