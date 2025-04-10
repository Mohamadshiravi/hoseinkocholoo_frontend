import SliderSection from "./sliderSection";
import CategorySlider from "./categorySlider";
import OfferedProductsSection from "./offeredProductsSection";
import BannersSection from "./bannersSection";
import AllOfferedProductsSection from "./allOfferedProductsSection";

export default function Home() {
  return (
    <main className="w-full h-[2000px]">
      <SliderSection />
      <section className="lg:px-32 w-full">
        <CategorySlider />
        <OfferedProductsSection />
        <BannersSection />
        <AllOfferedProductsSection />
      </section>
    </main>
  );
}
