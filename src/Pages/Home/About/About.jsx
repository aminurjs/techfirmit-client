import { FaChartLine } from "react-icons/fa6";
import { RiHotelFill } from "react-icons/ri";
import Button from "../../../Components/Button/Button";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto flex gap-12 py-20 items-center px-5 flex-col md:flex-row">
      <div className="border border-dark-03 p-3 w-full md:w-2/5 lg:w-1/2 mr-12">
        <img
          src="https://i.ibb.co/fphGkyd/people-taking-part-business-event.jpg"
          alt=""
        />
      </div>
      <div className="w-full md:w-3/5 lg:w-1/2 mt-6">
        <h2 className="text-lg md:text-xl bg-gradient-to-r from-blue-01 to-blue-02 text-transparent bg-clip-text font-semibold mb-4">
          About Our Conpany ~
        </h2>
        <h2 className="text-3xl text-dark-01 md:text-3xl lg:text-4xl font-semibold mb-2">
          Choose The Best IT Service Company
        </h2>
        <div className="w-20 h-1.5 bg-dark-03 mb-5 ml-2"></div>
        <p className="text-dark-02 mb-8 text-lg">
          An TechFirm IT who keeps your IT running smoothly at all times is like
          a plumber who fixes your pipes; {"that's"} what they are supposed to
          do. Many IT firms struggle.
        </p>
        <div className="flex flex-wrap gap-6 md:gap-2 justify-between mb-5 flex-col md:flex-row">
          <div className="flex gap-4 items-center">
            <div className="text-blue-01 text-4xl">
              <FaChartLine />
            </div>
            <div>
              <h4 className=" text-dark-01 text-lg font-medium mb-1">
                20+ Years of Experience
              </h4>
              <p className="text-dark-02 text-sm">
                Elevating Standards Innovation.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="text-blue-01 text-5xl">
              <RiHotelFill></RiHotelFill>
            </div>
            <div>
              <h4 className=" text-dark-01 text-lg font-medium mb-1">
                18k+ Project Complete
              </h4>
              <p className="text-dark-02 text-sm">
                Elevating Standards Innovation.
              </p>
            </div>
          </div>
        </div>
        <Button text={"Explore More"} />
      </div>
    </div>
  );
};

export default About;
