import { FaPaperPlane } from "react-icons/fa";

const Subscribe = () => {
  return (
    <div className="max-w-7xl mx-auto px-10 py-16  rounded-lg relative">
      <div className="bg-gradient-to-r from-blue-01 to-blue-02 absolute top-0 left-0 w-full h-full rounded-lg">
        <div className="bg-[url(https://i.ibb.co/Bgxcyxn/halftone1.png)] bg-cover absolute top-0 left-0 w-full h-full opacity-60"></div>
      </div>
      <div className="opacity-0">
        <h2 className="text-white font-medium text-2xl md:text-3xl">
          Subscribe now
        </h2>
        <p className="text-[#FFFFFFB2] text-lg mb-5">
          Exceeding Expectations Every Time
        </p>
        <form>
          <input
            className="py-3 px-5 bg-gray-200 w-4/5 md:w-3/5 mr-5 rounded outline-none"
            type="email"
            name="email"
            placeholder="Your Email"
            id=""
          />
          <button
            className="py-3 px-10 text-[#044BCC] bg-gray-200 mr-5 rounded inline-flex gap-3 items-center mb-4"
            type="submit"
          >
            Submit <FaPaperPlane></FaPaperPlane>
          </button>
        </form>
      </div>
      <div className="absolute top-16 left-10 w-full h-full">
        <h2 className="text-white font-medium text-2xl md:text-3xl">
          Subscribe now
        </h2>
        <p className="text-[#FFFFFFB2] text-lg mb-5">
          Exceeding Expectations Every Time
        </p>
        <form>
          <input
            className="py-3 px-5 bg-gray-200 w-4/5 md:w-3/5 mr-5 rounded outline-none mb-4"
            type="email"
            name="email"
            placeholder="Your Email"
            id=""
          />
          <button
            className="py-3 px-10 text-[#044BCC] bg-gray-200 mr-5 rounded inline-flex gap-3 items-center"
            type="submit"
          >
            Submit <FaPaperPlane></FaPaperPlane>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
