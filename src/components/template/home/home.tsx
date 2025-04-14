import SliderSection from "./sliderSection";
import CategorySlider from "./categorySlider";
import OfferedProductsSection from "./offeredProductsSection";
import BannersSection from "./bannersSection";
import AllOfferedProductsSection from "./allOfferedProductsSection";
import BannerSliderSection from "./bannerSlider";
import BannersSectionSecondary from "./bannerSectionSecndary";
import TopBrandsSection from "./topBrandsSection";
import AboutSection from "./aboutSection";
import Footer from "../../module/footer";
import Header from "../../module/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full lg:px-32 sm:px-4 px-3">
        <SliderSection />
        <CategorySlider />
        <OfferedProductsSection />
        <BannersSection />
        <AllOfferedProductsSection />
        <BannerSliderSection />
        <TopBrandsSection />
        <BannersSectionSecondary />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
