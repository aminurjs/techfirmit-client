import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";

const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="bg-[url(https://i.ibb.co/HD2XTdx/lead-generation-for-IT-company.jpg)] bg-cover bg-bottom">
        <div className="bg-dark-01 bg-opacity-80 py-20 md:py-32">
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="max-w-7xl mx-auto my-10 px-5 lg:px-0"
          >
            <div className="bg-white py-2 px-5 rounded-full inline-block  mb-4">
              <h2 className="text-lg md:text-xl bg-gradient-to-r from-blue-01 to-blue-02 text-transparent bg-clip-text font-medium">
                IT Solution and Services
              </h2>
            </div>
            <h1 className="text-4xl md:text-5xl text-white  font-bold  max-w-3xl mb-5 leading-normal">
              Elevate Your Digital Presence with Cutting-Edge IT Solutions
            </h1>
            <h2 className=" text-white text-lg font-medium  mb-8">
              We go beyond expectations, delivering IT services that inspire and
              transform.
            </h2>
            <div>
              <Link to={"/"}>
                <Button text={"Learn More"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
