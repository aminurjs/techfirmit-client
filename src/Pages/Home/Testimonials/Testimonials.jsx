import { useEffect, useState } from "react";
import Data from "./Data";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("./test.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTestimonials(data);
      });
  }, []);
  return (
    <div className="bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto px-5 py-20">
        <div className="text-center">
          <h2 className="text-lg md:text-xl bg-gradient-to-r from-blue-01 to-blue-02 text-transparent bg-clip-text font-medium mb-4">
            Our Clients Speak
          </h2>
          <h1 className="text-dark-01 text-4xl font-semibold max-w-3xl mx-auto mb-10">
            Discover What Our Valued Clients Say About Their Experience
          </h1>
        </div>
        <div className="hidden lg:block">
          <Data testimonials={testimonials} slide={3} />
        </div>
        <div className="hidden md:block lg:hidden">
          <Data testimonials={testimonials} slide={2} />
        </div>
        <div className="block md:hidden">
          <Data testimonials={testimonials} slide={1} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
