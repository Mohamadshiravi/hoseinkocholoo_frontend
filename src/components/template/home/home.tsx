import SliderSection from "./sliderSection";
import CategorySlider from "./categorySlider";
import OfferedProductsSection from "./offeredProductsSection";

export default function Home() {
  return (
    <main className="w-full h-[2000px]">
      <SliderSection />
      <section className="lg:px-20 w-full">
        <CategorySlider />
        <OfferedProductsSection />
      </section>
    </main>
  );
}
