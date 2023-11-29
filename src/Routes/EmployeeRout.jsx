import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useEmployee from "../Hooks/useEmployee";
import useAuth from "../Hooks/useAuth";

const EmployeeRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const [isEmployee, isEmployeeLoading] = useEmployee();
  const location = useLocation();

  if (isLoading || isEmployeeLoading) {
    return (
      <div>
        <div className="text-center mt-40 mb-80">
          <span className="loading loading-spinner text-dark-03 loading-lg"></span>
        </div>
      </div>
    );
  }

  if (user && isEmployee) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};
EmployeeRoute.propTypes = {
  children: PropTypes.node,
};
export default EmployeeRoute;
