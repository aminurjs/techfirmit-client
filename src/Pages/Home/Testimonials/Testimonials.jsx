import { useQuery } from "@tanstack/react-query";
import Data from "./Data";
import useAxios from "../../../Hooks/useAxios";

const Testimonials = () => {
  const axios = useAxios();

  const getFeatured = async () => {
    const res = await axios.get("/testimonials");
    return res.data;
  };

  const { data: testimonials = [], isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: getFeatured,
  });
  if (isLoading) {
    return (
      <div>
        <div className="text-center mt-20 mb-24">
          <span className="loading loading-spinner text-dark-03 loading-lg"></span>
        </div>
      </div>
    );
  }
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
