import Hero from "@/components/hero/Hero";
import LogoTicker from "@/components/logo-ticker/LogoTicker";
import Product from "@/components/product/Product";
import EveryThingYouNeed from "@/components/everything-you-need/EveryThingYouNeed";
import Pricing from "@/components/pricing/Pricing";
import Testimonials from "@/components/testimonials/Testimonials";
import SignUp from "@/components/signup/SignUp";
import Footer from "@/components/footer/Footer";
const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <LogoTicker />
      <Product />
      <EveryThingYouNeed />
      <Pricing />
      <Testimonials />
      <SignUp />
      <Footer />
    </div>
  );
};
export default Home;
