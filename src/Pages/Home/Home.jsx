import About from "./About/About";
import Banner from "./Banner/Banner";
import Pricing from "./Pricing/Pricing";
import Services from "./Services/Services";
import Subscribe from "./Subscribe/Subscribe";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="mt-20">
      <Banner />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <Subscribe />
    </div>
  );
};

export default Home;
