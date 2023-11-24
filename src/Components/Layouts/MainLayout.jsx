import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className=" font-roboto">
      {/* Navbar */}
      <Navbar />
      {/* Page content here */}
      {children}
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
