import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

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
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {" "}
            {testimonials.map((testimonial, i) => (
              <SwiperSlide key={i}>
                {" "}
                <div className="p-8 flex flex-col mb-16 bg-white">
                  <div className="flex justify-between items-end">
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={testimonial.rating}
                      readOnly
                    />
                  </div>
                  <p className="text-dark-02 my-3 text-justify flex-grow">
                    {testimonial.review}
                  </p>
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-12 h-11 rounded-full"
                      src={testimonial.photo}
                      alt=""
                    />
                    <div>
                      <h3 className="text-dark-01 text-lg font-semibold">
                        {testimonial.name}
                      </h3>
                      <h4 className="text-dark-02 text-sm">
                        {testimonial.designation}
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden md:block lg:hidden">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {" "}
            {testimonials.map((testimonial, i) => (
              <SwiperSlide key={i}>
                {" "}
                <div className="p-8 flex flex-col mb-16 bg-white">
                  <div className="flex justify-between items-end">
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={testimonial.rating}
                      readOnly
                    />
                  </div>
                  <p className="text-dark-02 my-3 text-justify flex-grow">
                    {testimonial.review}
                  </p>
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-12 h-11 rounded-full"
                      src={testimonial.photo}
                      alt=""
                    />
                    <div>
                      <h3 className="text-dark-01 text-lg font-semibold">
                        {testimonial.name}
                      </h3>
                      <h4 className="text-dark-02 text-sm">
                        {testimonial.designation}
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="block md:hidden">
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            autoplay={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {" "}
            {testimonials.map((testimonial, i) => (
              <SwiperSlide key={i}>
                {" "}
                <div className="p-8 flex flex-col mb-16 bg-white">
                  <div className="flex justify-between items-end">
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={testimonial.rating}
                      readOnly
                    />
                  </div>
                  <p className="text-dark-02 my-3 text-justify flex-grow">
                    {testimonial.review}
                  </p>
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-12 h-11 rounded-full"
                      src={testimonial.photo}
                      alt=""
                    />
                    <div>
                      <h3 className="text-dark-01 text-lg font-semibold">
                        {testimonial.name}
                      </h3>
                      <h4 className="text-dark-02 text-sm">
                        {testimonial.designation}
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
