import About from "./About/About";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="mt-20">
      <Banner />
      <About />
      <Services />
    </div>
  );
};

export default Home;
