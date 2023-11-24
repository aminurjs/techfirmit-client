import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useAuth = () => {
  const authUtils = useContext(AuthContext);
  return authUtils;
};

export default useAuth;
