import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function SliderSection() {
  const swiperSlides = ["Slide 1", "Slide 2"];
  return (
    <Swiper
      className="md:h-[450px] h-[400px]"
      loop={true}
      modules={[Autoplay]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      grabCursor
    >
      {swiperSlides.map((e) => (
        <SwiperSlide className="h-full">
          <div className="w-full bg-primary text-white flex items-center justify-center text-8xl h-full">
            {e}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
