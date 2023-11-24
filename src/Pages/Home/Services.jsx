import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./service.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);

  return (
    <div className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center">
          <h2 className="text-lg md:text-xl bg-gradient-to-r from-blue-01 to-blue-02 text-transparent bg-clip-text font-medium mb-4">
            Our Comprehensive IT Services
          </h2>
          <h1 className="text-dark-01 text-4xl font-semibold max-w-3xl mx-auto mb-10">
            Elevate Your Digital Presence with Our Expert Solutions
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, i) => (
            <Service key={i} card={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
