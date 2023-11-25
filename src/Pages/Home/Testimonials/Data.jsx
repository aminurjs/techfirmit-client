import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import { Rating } from "@mui/material";
import PropTypes from "prop-types";
import "@smastrom/react-rating/style.css";

const Data = ({ testimonials, slide }) => {
  return (
    <Swiper
      slidesPerView={slide}
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
  );
};
Data.propTypes = {
  testimonials: PropTypes.array,
  slide: PropTypes.number,
};
export default Data;
