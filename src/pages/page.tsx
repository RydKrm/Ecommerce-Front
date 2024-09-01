import FeaturedCategory from "./home/component/featuredCategory";
import Banner from "./home/component/Banner";
import Product from "./home/component/Product";
import TopProduct from "./home/component/TopProduct";
import SubscribeSection from "./home/component/SubscribeSection";
import CompanyPolicy from "./home/component/CompanyPolicy";
import Slider from "../components/slider/slider";

export default function Home() {
  return (
    <>
      <Slider />
      <FeaturedCategory />
      <Banner />
      <Product />
      <TopProduct />
      <SubscribeSection />
      <CompanyPolicy />
    </>
  );
}
