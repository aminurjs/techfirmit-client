import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div>
        <div className="text-center mt-40 mb-80">
          <span className="loading loading-spinner text-dark-03 loading-lg"></span>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
