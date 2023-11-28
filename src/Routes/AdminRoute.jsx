import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (isLoading || isAdminLoading) {
    return (
      <div>
        <div className="text-center mt-40 mb-80">
          <span className="loading loading-spinner text-dark-03 loading-lg"></span>
        </div>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};
AdminRoute.propTypes = {
  children: PropTypes.node,
};
export default AdminRoute;
