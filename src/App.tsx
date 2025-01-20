import Banner from "./components/Banner";
import BannerDown from "./components/BannerDown";
import BeforandAfter from "./components/BeforandAfter";
import BigBanner from "./components/BigBanner";
import FAQ from "./components/FAQ";
import FeaturedProduct from "./components/FeaturedProduct";
import Footer from "./components/Footer";
import Formulas from "./components/Formulas";
import Hero from "./components/Hero";
import MovingBanner from "./components/MovingBanner";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import Products from "./components/Products";
import SkinCare from "./components/SkinCare";
import Testimonials from "./components/Testimonials";
import TopBanner from "./components/TopBanner";

const App = () => {
  return (
    <>
      <TopBanner />
      <NavBar />
      <Hero />
      <Products />
      <Banner />
      <MovingBanner />
      <Product />
      <Formulas />
      <BeforandAfter />
      <SkinCare />
      <FeaturedProduct />
      <BigBanner />
      <Testimonials />
      <FAQ />
      <BannerDown />
      <Footer />
    </>
  );
};

export default App;
