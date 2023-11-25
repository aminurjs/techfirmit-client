import About from "./About/About";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="mt-20">
      <Banner />
      <About />
      <Services />
      <Testimonials />
    </div>
  );
};

export default Home;
