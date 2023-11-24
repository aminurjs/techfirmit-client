import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Helmet>
        <title>Error - HotelHub</title>
      </Helmet>
      <div className="max-w-7xl mx-auto text-center px-10">
        <div className="md:w-3/5 lg:w-1/2 mx-auto mb-5">
          <img src="https://i.ibb.co/r3FL66t/404.webp" alt="" />
        </div>
        <h1 className="text-3xl md:text-4xl text-dark-01  font-bold relative bottom-20 mb-5">
          The page you are requested Not found.
        </h1>
        <div className="w-20 h-1.5 bg-dark-03 mb-5 mx-auto relative bottom-20"></div>
        <Link to="/">
          <button className="py-3 relative bottom-20 px-10 text-white bg-dark-03 border border-dark-03 rounded uppercase font-medium active:scale-95">
            Go home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
