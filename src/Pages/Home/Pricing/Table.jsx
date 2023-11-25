import { FaCheck } from "react-icons/fa6";
import PropTypes from "prop-types";

const Table = ({ name, price, body }) => {
  return (
    <div className="bg-white rounded shadow flex flex-col border border-gray-100 ">
      <div className="p-5">
        <div className="pb-3 mb-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-dark-01 ">{name}</h2>
          <h2 className="text-2xl font-medium text-dark-01 ">
            <span className="text-3xl font-bold">{price}</span>/Monthly
          </h2>
        </div>

        <p className="text-dark-02 mb-4">{body}</p>

        <ul>
          <li className="flex text-dark-02 mb-1 gap-2 items-center  p-3 bg-stone-100">
            <FaCheck className="text-blue-02 text-lg" />
            24/7 system monitoring
          </li>
          <li className="flex text-dark-02 mb-1 gap-2 items-center  p-3 ">
            <FaCheck className="text-blue-02 text-lg" />
            Security management
          </li>
          <li className="flex text-dark-02 mb-1 gap-2 items-center  p-3 bg-stone-100">
            <FaCheck className="text-blue-02 text-lg" />
            Secure finance backup
          </li>
          <li className="flex text-dark-02 mb-1 gap-2 items-center  p-3 ">
            <FaCheck className="text-blue-02 text-lg" />
            Remote support
          </li>
        </ul>
        <button className="w-full text-center py-3 mb-5 text-white text-lg font-medium uppercase  bg-gradient-to-r from-blue-02 to-blue-01 hover:bg-transparent duration-500  rounded-full active:scale-95">
          Get a free trial
        </button>
      </div>
    </div>
  );
};
Table.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  body: PropTypes.string,
};
export default Table;
