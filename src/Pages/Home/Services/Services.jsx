import Service from "./Service";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const Services = () => {
  const axios = useAxios();

  const getFeatured = async () => {
    const res = await axios.get("/services");
    return res.data;
  };

  const { data: services = [], isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getFeatured,
  });
  if (isLoading) {
    return (
      <div>
        <div className="text-center mt-40 mb-80">
          <span className="loading loading-spinner text-dark-03 loading-lg"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f2f2f2] py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center">
          <h2 className="text-lg md:text-xl bg-gradient-to-r from-blue-01 to-blue-02 text-transparent bg-clip-text font-medium mb-4">
            Our Comprehensive IT Services
          </h2>
          <h1 className="text-dark-01 text-4xl font-semibold max-w-3xl mx-auto mb-12">
            We Are Dedicated To Serve You All Time.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service) => (
            <Service key={service?._id} card={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
