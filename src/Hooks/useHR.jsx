import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useHR = () => {
  const { user, isLoading } = useAuth();
  const axios = useAxios();
  const { data: isHR, isPending: isHRLoading } = useQuery({
    queryKey: [user?.email, "ishr"],
    enabled: !isLoading,
    queryFn: async () => {
      console.log("asking or checking is hr", user);
      const res = await axios.get(`/employee/hr/${user.email}`);
      // console.log(res.data);
      return res.data?.HR;
    },
  });
  return [isHR, isHRLoading];
};

export default useHR;
