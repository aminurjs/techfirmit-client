import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <button className="py-2.5 px-8 md:py-3.5 md:px-10 text-white text-lg font-medium uppercase mr-3  bg-gradient-to-r from-blue-02 to-blue-01 hover:bg-transparent duration-500  rounded active:scale-95">
      {text}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
