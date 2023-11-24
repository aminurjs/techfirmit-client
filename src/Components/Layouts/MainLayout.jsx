import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className=" font-roboto">
      {/* Navbar */}
      <Navbar />
      {/* Page content here */}
      {children}
      <Footer />
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
