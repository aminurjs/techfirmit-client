import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useHR from "../Hooks/useHR";
import useAuth from "../Hooks/useAuth";

const HRRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const [isHR, isHRLoading] = useHR();
  const location = useLocation();

  if (isLoading || isHRLoading) {
    return (
      <div>
        <div className="text-center mt-40 mb-80">
          <span className="loading loading-spinner text-dark-03 loading-lg"></span>
        </div>
      </div>
    );
  }

  if (user && isHR) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};
HRRoute.propTypes = {
  children: PropTypes.node,
};
export default HRRoute;
