import SliderSection from "./sliderSection";
import CategorySlider from "./categorySlider";
import OfferedProductsSection from "./offeredProductsSection";
import BannersSection from "./bannersSection";
import AllOfferedProductsSection from "./allOfferedProductsSection";
import BannerSliderSection from "./bannerSlider";
import BannersSectionSecondary from "./bannerSectionSecndary";
import TopBrandsSection from "./topBrandsSection";
import AboutSection from "./aboutSection";

export default function Home() {
  return (
    <main className="w-full">
      <SliderSection />
      <section className="lg:px-32 w-full">
        <CategorySlider />
        <OfferedProductsSection />
        <BannersSection />
        <AllOfferedProductsSection />
        <div className="lg:px-0 px-2">
          <BannerSliderSection />
          <TopBrandsSection />
          <BannersSectionSecondary />
          <AboutSection />
        </div>
      </section>
    </main>
  );
}
